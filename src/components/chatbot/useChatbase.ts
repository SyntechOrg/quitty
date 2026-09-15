import { useEffect } from "react";

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

const useChatbase = () => {
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
    // Once loaded it stays loaded across client-side navigation.
    let launcher: HTMLButtonElement | undefined;

    if (!isChatbaseLoaded()) {
      const button = createLauncher();

      button.onclick = () => {
        button.disabled = true;
        button.style.opacity = "0.6";
        button.style.cursor = "wait";

        installChatbaseQueue();
        window.chatbase.open();

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

      document.body.appendChild(button);
      launcher = button;
    }

    return () => {
      launcher?.remove();
      closeBtn.remove();
      clearInterval(checkIfOpened);
    };
  }, []);
};

export default useChatbase;
