import { useEffect, useMemo } from "react";
import { useLocale, useTranslations } from "next-intl";
import { legalHref, toLegalLocale } from "@/content/legal";
import { hasConsent, markServiceLoaded } from "@/lib/consent";

const CHATBOT_ID = "FjO4H7VgTyYHCXBH2wgHj";
const SCRIPT_SRC = "https://www.chatbase.co/embed.min.js";

// lucide "message-circle"
const CHAT_ICON =
  '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>';

type ChatbaseQueue = ((...args: unknown[]) => void) & { q: unknown[][] };

// Same command queue as Chatbase's official embed snippet: calls made before
// the script has initialised (e.g. `open`) are stored and replayed on load.
const installChatbaseQueue = () => {
  if (window.chatbase) return;

  const queue: ChatbaseQueue = Object.assign(
    (...args: unknown[]) => {
      queue.q.push(args);
    },
    { q: [] as unknown[][] },
  );

  window.chatbase = new Proxy(queue, {
    get: (target, prop) =>
      prop === "q" ? target.q : (...args: unknown[]) => target(prop, ...args),
  });
};

const isChatbaseLoaded = () => Boolean(document.getElementById(CHATBOT_ID));

const createLauncher = () => {
  const label =
    document.documentElement.lang === "de" ? "Chat öffnen" : "Open chat";

  const launcher = document.createElement("button");
  launcher.type = "button";
  launcher.title = label;
  launcher.setAttribute("aria-label", label);
  launcher.innerHTML = CHAT_ICON;

  Object.assign(launcher.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "60px",
    height: "60px",
    zIndex: "999999",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    border: "none",
    background: "#00C9A5",
    color: "#ffffff",
    boxShadow: "0 4px 14px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
  });

  return launcher;
};

type NoticeStrings = {
  text: string;
  load: string;
  cancel: string;
  policy: string;
  policyHref: string;
};

const createConsentNotice = (
  strings: NoticeStrings,
  onLoad: () => void,
  onCancel: () => void,
) => {
  const notice = document.createElement("div");
  notice.setAttribute("role", "dialog");
  notice.setAttribute("aria-label", strings.load);
  notice.dataset.testid = "chat-consent";
  Object.assign(notice.style, {
    position: "fixed",
    bottom: "92px",
    right: "20px",
    width: "min(320px, calc(100vw - 40px))",
    zIndex: "999999",
    padding: "20px",
    borderRadius: "20px",
    background: "#ffffff",
    color: "#161519",
    boxShadow: "0 8px 40px rgba(0, 0, 0, 0.18)",
    fontSize: "14px",
    lineHeight: "1.6",
  });

  const text = document.createElement("p");
  text.textContent = strings.text;

  const link = document.createElement("a");
  link.href = strings.policyHref;
  link.textContent = strings.policy;
  Object.assign(link.style, {
    display: "inline-block",
    marginTop: "8px",
    textDecoration: "underline",
  });

  const actions = document.createElement("div");
  Object.assign(actions.style, {
    display: "flex",
    gap: "8px",
    marginTop: "16px",
  });

  const button = (label: string, primary: boolean, onClick: () => void) => {
    const el = document.createElement("button");
    el.type = "button";
    el.textContent = label;
    el.onclick = onClick;
    Object.assign(el.style, {
      flex: "1",
      height: "40px",
      borderRadius: "999px",
      border: primary ? "none" : "1px solid #b7babf",
      background: primary ? "#00C9A5" : "transparent",
      color: primary ? "#ffffff" : "#161519",
      fontWeight: "500",
      cursor: "pointer",
    });
    return el;
  };

  actions.append(
    button(strings.load, true, onLoad),
    button(strings.cancel, false, onCancel),
  );
  notice.append(text, link, actions);
  return notice;
};

const useChatbase = () => {
  const t = useTranslations("Consent");
  const locale = toLegalLocale(useLocale());
  const strings = useMemo<NoticeStrings>(
    () => ({
      text: t("chatText"),
      load: t("chatButton"),
      cancel: t("cancel"),
      policy: t("policyLink"),
      policyHref: legalHref("cookies", locale),
    }),
    [t, locale],
  );

  useEffect(() => {
    const closeBtn = document.createElement("button");
    closeBtn.style.position = "fixed";
    closeBtn.style.bottom = "20px";
    closeBtn.style.right = "20px";
    closeBtn.style.width = "60px";
    closeBtn.style.height = "60px";
    closeBtn.style.zIndex = "9999999999";
    closeBtn.style.background = "transparent";
    closeBtn.style.border = "none";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.display = "none";

    closeBtn.onclick = () => {
      window.chatbase?.close?.();
      closeBtn.style.display = "none";
    };

    document.body.appendChild(closeBtn);

    const checkIfOpened = setInterval(() => {
      const iframe = document.querySelector(
        "iframe[src*='chatbase']",
      ) as HTMLIFrameElement;
      const isVisible = iframe && iframe.offsetParent !== null;

      if (isVisible) {
        closeBtn.style.display = "block";
      } else {
        closeBtn.style.display = "none";
      }
    }, 500);

    // Chatbase is only loaded once the visitor clicks the launcher, so nothing
    // is requested from Chatbase (and no Chatbase cookie is set) on page load.
    // Without consent to "Funktional" the click first shows a notice and the
    // chat loads only after "Chat laden". Once loaded it stays loaded across
    // client-side navigation.
    let launcher: HTMLButtonElement | undefined;
    let notice: HTMLDivElement | undefined;

    if (!isChatbaseLoaded()) {
      const button = createLauncher();

      const loadChatbase = () => {
        notice?.remove();
        button.disabled = true;
        button.style.opacity = "0.6";
        button.style.cursor = "wait";

        installChatbaseQueue();
        window.chatbase.open();
        markServiceLoaded("chatbase");

        const script = document.createElement("script");
        script.src = SCRIPT_SRC;
        script.id = CHATBOT_ID;
        script.async = true;
        script.onload = () => button.remove();
        script.onerror = () => {
          script.remove();
          button.disabled = false;
          button.style.opacity = "1";
          button.style.cursor = "pointer";
        };

        document.body.appendChild(script);
      };

      button.onclick = () => {
        if (hasConsent("chatbase")) {
          loadChatbase();
        } else if (notice) {
          notice.remove();
          notice = undefined;
        } else {
          notice = createConsentNotice(strings, loadChatbase, () => {
            notice?.remove();
            notice = undefined;
          });
          document.body.appendChild(notice);
          notice.querySelector("button")?.focus();
        }
      };

      document.body.appendChild(button);
      launcher = button;
    }

    return () => {
      launcher?.remove();
      notice?.remove();
      closeBtn.remove();
      clearInterval(checkIfOpened);
    };
  }, [strings]);
};

export default useChatbase;
