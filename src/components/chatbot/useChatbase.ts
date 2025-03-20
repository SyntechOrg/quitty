import { useEffect } from "react";

const useChatbase = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "FjO4H7VgTyYHCXBH2wgHj";
    script.async = true;

    document.body.appendChild(script);

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
      // @ts-ignore
      window.chatbase?.close?.();
      closeBtn.style.display = "none";
    };

    document.body.appendChild(closeBtn);

    const checkIfOpened = setInterval(() => {
      const iframe = document.querySelector(
        "iframe[src*='chatbase']"
      ) as HTMLIFrameElement;
      const isVisible = iframe && iframe.offsetParent !== null;

      if (isVisible) {
        closeBtn.style.display = "block";
      } else {
        closeBtn.style.display = "none";
      }
    }, 500);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(closeBtn);
      clearInterval(checkIfOpened);
    };
  }, []);
};

export default useChatbase;
