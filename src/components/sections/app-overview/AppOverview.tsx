"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { Button } from "@/components/shared";
import useChatbase from "@/components/chatbot/useChatbase";
import referenceImage from "public/assets/images/quittyPhone.png";
import heroScreenLayer from "public/assets/images/app-overview/hero-screen-layer.png";
import scanImage from "public/assets/images/app-overview/scan-framed.png";
import scanScene from "public/assets/images/app-overview/receipts-scene.png";
import assistantImage from "public/assets/images/app-overview/assistant-framed.png";
import appleLogo from "public/assets/images/apple-logo.png";
import playLogo from "public/assets/images/google-play-logo.png";
import AppJourney from "./AppJourney";
import AssistantSlider from "./AssistantSlider";
import startScreen from "public/assets/images/app-overview/start-thomas-demo.png";
import overviewScreen from "public/assets/images/app-overview/overview-expenses-demo.png";
import scanScreen from "public/assets/images/app-overview/scan-camera-crop.png";
import warrantyScreen from "public/assets/images/app-overview/warranty-original.png";
import expensesScreen from "public/assets/images/app-overview/expenses-entry-original.png";
import styles from "./AppOverview.module.css";

const supportContact = {
  email: "support@quitty.ch",
  phone: "+41 55 589 67 67",
  phoneHref: "tel:+41555896767",
};

const copy = {
  de: {
    eyebrow: "DIE QUITTY-APP",
    title: ["Deine Belege.", "Dein Überblick."],
    intro:
      "Erfasse Quittungen, Garantien und Ausgaben mit KI. Fotografiere mehrere Belege gleichzeitig, stelle Fragen zu deinen eigenen Belegen und behalte Garantien im Blick.",
    download: "App entdecken",
    multiLabel: "MULTI-SCAN",
    multiTitle: "Mehrere Belege.\nEin Scan.",
    multiText:
      "Fotografiere mehrere Quittungen und Garantiebelege gleichzeitig. Quitty sortiert sie und füllt erkannte Angaben voraus. So erfasst du mehrere Belege in einem Durchgang. Prüfe und ergänze die Ergebnisse vor dem Speichern.",
    multiSteps: [
      "Mehrere Quittungen oder Garantiebelege fotografieren",
      "Sortierung und vorausgefüllte Angaben prüfen",
      "Ergänzen und speichern",
    ],
    recognitionTitle: "Weniger von Hand eintragen.",
    recognitionText:
      "Quitty erkennt Angaben auf Rechnungen, Quittungen und Garantiebelegen automatisch und füllt Felder voraus. Erkannte Händlerlogos helfen dir beim Zuordnen. Du kannst die Angaben auch vollständig manuell erfassen.",
    assistantLabel: "DEIN KI-ASSISTENT",
    assistantTitle: "Deine Belege.\nDeine Fragen.",
    assistantText:
      "Der KI-Assistent beantwortet Fragen anhand deiner eigenen Quittungen und Ausgaben. So kannst du deine erfassten Belege besser verstehen und Ausgaben nachvollziehen.",
    assistantTopics: [
      "Wie hoch sind meine Ausgaben diese Woche?",
      "In welchen Kategorien habe ich am meisten ausgegeben?",
      "Wie viel habe ich diesen Monat für Lebensmittel ausgegeben?",
    ],
    assistantAlt:
      "Quitty-KI-Assistent mit Chatoberfläche für Fragen zu eigenen Quittungen und Ausgaben",
    faqLabel: "GUT ZU WISSEN",
    faqTitle: "Fragen zur Quitty-App",
    faq: [
      {
        q: "Welche Belege kann ich erfassen?",
        a: "Du kannst Rechnungen, Quittungen, Garantiebelege und Spesen erfassen. Fotografiere einen Beleg und prüfe die automatisch erkannten Angaben vor dem Speichern. Du kannst die Angaben auch vollständig manuell eintragen und ergänzen.",
      },
      {
        q: "Wie funktioniert Multi-Scan?",
        a: "Fotografiere mehrere Quittungen oder Garantiebelege gleichzeitig. Quitty sortiert die Belege und füllt erkannte Angaben voraus. Prüfe und ergänze die Ergebnisse, bevor du sie speicherst.",
      },
      {
        q: "Wie behalte ich meine Garantien im Blick?",
        a: "Scanne den Garantiebeleg oder erfasse eine Garantie manuell. Prüfe Kaufdatum und Garantiedauer und behalte das Ablaufdatum im Blick. Frage rechtzeitig beim Händler nach möglichen Verlängerungen.",
      },
      {
        q: "Wo sehe ich meine Ausgaben und Kategorien?",
        a: "Wähle in der Spesenansicht einen Monat. Die Gesamtsumme und die Verteilung nach Kategorien zeigen dir, wofür du Geld ausgegeben hast. Die Übersicht basiert auf deinen erfassten Ausgaben.",
      },
      {
        q: "Kann ich meine Belege als PDF teilen?",
        a: "Ja. Wähle alle oder nur die gewünschten Einträge aus und drucke oder teile sie als PDF. Unter „Meine PDFs“ kannst du die gespeicherte Ausgabe später erneut öffnen.",
      },
      {
        q: "Was kann ich den KI-Assistenten fragen?",
        a: "Der KI-Assistent beantwortet Fragen anhand deiner eigenen Quittungen und Ausgaben. Frage zum Beispiel nach deinen Ausgaben diese Woche, den Kategorien mit den höchsten Ausgaben oder deinen Lebensmittelausgaben in diesem Monat.",
      },
      {
        q: "Was bestätige ich bei der ersten Anmeldung?",
        a: "Bei der ersten Anmeldung wird dir die Nutzung der KI-Funktionen erklärt und von dir bestätigt. Nutzungsanalyse und Werbemessung sind freiwillig und werden nur mit deiner Einwilligung aktiviert.",
      },
      {
        q: "Wo bekomme ich Quitty?",
        a: "Die Quitty-App findest du im App Store und bei Google Play. Nutze die Downloadlinks auf dieser Seite. Der Funktionsumfang kann je nach Plattform und Version abweichen.",
      },
      {
        q: "Wie erreiche ich den Support?",
        a: "Schreibe für Support an ",
        support: true,
      },
    ],
    supportPhoneLabel: ". Telefon: ",
    supportFormLead: ". Du kannst uns auch über das ",
    supportFormLabel: "Kontaktformular",
    supportChatText:
      " schreiben. Für allgemeine Fragen zu Quitty öffne den Chatbutton unten rechts auf dieser Website und gib deine Frage als Nachricht ein.",
    contact: "Zum Kontakt",
    finalTitle: "Bereit für weniger Papier?",
    finalText: "Entdecke Quitty für dein Smartphone.",
    platformNote:
      "Der Funktionsumfang kann je nach Plattform und Version abweichen.",
    assistantTopicsLabel: "Zum Beispiel:",
    journeySteps: [
      {
        title: "Dein Start",
        description:
          "Öffne Quitty und wähle Quittungen, Garantien, Spesen oder den Scanner.",
        alt: "Quitty-Startansicht mit Thomas-Demodaten",
      },
      {
        title: "Übersicht",
        description:
          "Sieh auf einen Blick, wie sich deine erfassten Ausgaben nach Zeitraum und Kategorie verteilen.",
        alt: "Quitty-Ausgabenanalyse mit Gesamtsumme und Kategorien anhand von Demodaten",
      },
      {
        title: "Multi-Scan",
        description:
          "Fotografiere mehrere Quittungen oder Garantiebelege gleichzeitig. Prüfe, ergänze und speichere die erkannten Angaben.",
        alt: "Quitty-Kameraansicht mit vier Musterbelegen",
      },
      {
        title: "Garantie im Blick",
        description:
          "Verwalte deine Garantien und behalte Dauer und Ablauf im Blick. Frage rechtzeitig beim Händler nach Verlängerungsmöglichkeiten.",
        alt: "Originaler Quitty-Bildschirm zum Erfassen einer Garantie",
      },
      {
        title: "Spesen",
        description:
          "Erfasse deine Spesen, ordne sie Kategorien zu und behalte deine Ausgaben im Überblick.",
        alt: "Originaler Quitty-Bildschirm zum Erfassen und Kategorisieren von Spesen",
      },
      {
        title: "Dein KI-Assistent",
        description: "Stelle Fragen zu deinen eigenen Quittungen und Ausgaben.",
        alt: "Originaler Einstieg in den Quitty-KI-Assistenten",
      },
    ],
  },
  en: {
    eyebrow: "THE QUITTY APP",
    title: ["Your receipts.", "Your overview."],
    intro:
      "Capture receipts, warranties and expenses with AI. Photograph several documents at once, ask questions about your own receipts and expenses, and keep warranties in view.",
    download: "Discover the app",
    multiLabel: "MULTI-SCAN",
    multiTitle: "Several receipts.\nOne scan.",
    multiText:
      "Photograph several receipts and warranty documents at the same time. Quitty sorts them and fills in recognised details. Capture several documents in one go, then check and complete the results before saving.",
    multiSteps: [
      "Photograph several receipts or warranty documents",
      "Check the sorting and pre-filled details",
      "Complete and save",
    ],
    recognitionTitle: "Less manual entry.",
    recognitionText:
      "Quitty automatically recognises details on invoices, receipts and warranty documents and pre-fills fields. Recognised merchant logos help you identify entries. You can also enter the details entirely by hand.",
    assistantLabel: "YOUR AI ASSISTANT",
    assistantTitle: "Your receipts.\nYour questions.",
    assistantText:
      "The AI assistant answers questions based on your own receipts and expenses. Understand your saved receipts and make sense of your spending.",
    assistantTopics: [
      "How much have I spent this week?",
      "Which categories account for my highest spending?",
      "How much have I spent on groceries this month?",
    ],
    assistantAlt:
      "Quitty AI assistant chat for questions about your own receipts and expenses",
    faqLabel: "GOOD TO KNOW",
    faqTitle: "Questions about Quitty",
    faq: [
      {
        q: "Which documents can I record?",
        a: "You can record invoices, receipts, warranty documents and expenses. Photograph a document and check the automatically recognised details before saving. You can also enter and complete the details entirely by hand.",
      },
      {
        q: "How does Multi-Scan work?",
        a: "Photograph several receipts or warranty documents at once. Quitty sorts them and pre-fills recognised details. Check and complete the results before saving them.",
      },
      {
        q: "How can I keep track of my warranties?",
        a: "Scan the warranty document or record a warranty manually. Check the purchase date and warranty duration and keep the expiry date in view. Ask the merchant about possible extensions before it expires.",
      },
      {
        q: "Where can I see my spending and categories?",
        a: "Choose a month in the expense view. The total and category breakdown show what you have spent money on. The overview is based on your recorded expenses.",
      },
      {
        q: "Can I share my receipts as a PDF?",
        a: "Yes. Choose all entries or just the ones you need, then print or share them as a PDF. Reopen the saved output later in “My PDFs”.",
      },
      {
        q: "What can I ask the AI assistant?",
        a: "The AI assistant answers questions based on your own receipts and expenses. Ask about your spending this week, the categories with the highest spending or your grocery spending this month.",
      },
      {
        q: "What do I confirm at first login?",
        a: "At first login, the use of AI features is explained and you confirm it. Usage analytics and advertising measurement are optional and are activated only with your consent.",
      },
      {
        q: "Where can I get Quitty?",
        a: "The Quitty app is available in the App Store and on Google Play. Use the download links on this page. Features may differ by platform and version.",
      },
      {
        q: "How can I contact support?",
        a: "For support, email ",
        support: true,
      },
    ],
    supportPhoneLabel: ". Phone: ",
    supportFormLead: ". You can also write to us using the ",
    supportFormLabel: "contact form",
    supportChatText:
      ". For general questions about Quitty, open the chat button at the bottom right of this website and enter your question as a message.",
    contact: "Contact us",
    finalTitle: "Ready for less paper?",
    finalText: "Discover Quitty for your smartphone.",
    platformNote: "Features may differ by platform and version.",
    assistantTopicsLabel: "For example:",
    journeySteps: [
      {
        title: "Your start",
        description:
          "Open Quitty and choose receipts, warranties, expenses or the scanner.",
        alt: "Quitty home screen with Thomas demo data",
      },
      {
        title: "Overview",
        description:
          "See at a glance how your recorded spending breaks down by period and category.",
        alt: "Quitty spending analysis showing totals and categories with demo data",
      },
      {
        title: "Multi-Scan",
        description:
          "Photograph several receipts or warranty documents at once. Check, complete and save the recognised details.",
        alt: "Quitty camera view with four sample receipts",
      },
      {
        title: "Track warranties",
        description:
          "Manage your warranties and track their duration and expiry. Ask the merchant about extension options before they expire.",
        alt: "Original Quitty warranty entry screen",
      },
      {
        title: "Expenses",
        description:
          "Record your expenses, assign categories and keep an overview of your spending.",
        alt: "Original Quitty screen for recording and categorising expenses",
      },
      {
        title: "Your AI assistant",
        description: "Ask questions about your own receipts and expenses.",
        alt: "Original entry screen for the Quitty AI assistant",
      },
    ],
  },
} as const;

const journeyImages = [
  startScreen,
  overviewScreen,
  scanScreen,
  warrantyScreen,
  expensesScreen,
  assistantImage,
];

const AppOverview = () => {
  const locale = useLocale();
  const t = locale === "de" ? copy.de : copy.en;
  useChatbase();

  return (
    <main className={`container ${styles.page}`}>
      <section className={styles.hero} aria-labelledby="app-title">
        <div>
          <p className="category-text">{t.eyebrow}</p>
          <h1 id="app-title" className={styles.heroTitle}>
            {t.title[0]}
            <br />
            <span>{t.title[1]}</span>
          </h1>
          <p className={styles.intro}>{t.intro}</p>
          <div className={styles.actions}>
            <Button
              to="#app-download"
              className="!bg-text !text-white hover:!bg-primary"
            >
              {t.download}
              <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
        <figure className={styles.heroVisual}>
          <div className={styles.imageWrap}>
            <Image
              src={referenceImage}
              unoptimized
              alt={
                locale === "de"
                  ? "Quitty-App auf zwei Smartphones: Spesen und Startseite"
                  : "Quitty app on two smartphones: expenses and home overview"
              }
              preload
              sizes="(min-width: 1024px) 48vw, 92vw"
            />
            <Image
              src={heroScreenLayer}
              alt=""
              aria-hidden="true"
              className={styles.heroScreenLayer}
              sizes="(min-width: 1280px) 600px, (min-width: 768px) 45vw, 90vw"
              unoptimized
            />
          </div>
        </figure>
      </section>

      <section
        id="app-scan"
        className={styles.multi}
        aria-labelledby="multiscan-title"
      >
        <figure className={styles.multiVisual}>
          <div className={styles.scanStage}>
            <Image
              src={scanScene}
              alt={
                locale === "de"
                  ? "Vier fiktive Schweizer Musterbelege auf einem Tisch"
                  : "Four fictional Swiss sample receipts on a table"
              }
              className={styles.scanPhoto}
              sizes="(min-width: 1280px) 650px, (min-width: 1024px) 55vw, 90vw"
            />
            <Image
              src={scanImage}
              alt={
                locale === "de"
                  ? "Illustratives Quitty-Kamerabild mit denselben vier Musterbelegen und originaler App-Navigation"
                  : "Illustrative Quitty camera preview with the same four sample receipts and original app navigation"
              }
              className={styles.scanPhone}
              sizes="(min-width: 1280px) 235px, (min-width: 768px) 32vw, 30vw"
            />
          </div>
        </figure>
        <div className={styles.multiCopy}>
          <p className="category-text">{t.multiLabel}</p>
          <h2 id="multiscan-title">{t.multiTitle}</h2>
          <p>{t.multiText}</p>
          <ol className={styles.scanSteps}>
            {t.multiSteps.map((step, i) => (
              <li key={step}>
                <span>{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
          <div className={styles.recognition}>
            <h3>{t.recognitionTitle}</h3>
            <p>{t.recognitionText}</p>
          </div>
        </div>
      </section>

      <AssistantSlider
        alt={t.assistantAlt}
        locale={locale === "de" ? "de" : "en"}
      >
        <div className={`${styles.assistant} ${styles.assistantSlide}`}>
          <figure className={styles.appCapture}>
            <Image
              src={assistantImage}
              alt={t.assistantAlt}
              sizes="(min-width: 768px) 270px, 70vw"
            />
          </figure>
          <div>
            <p className="category-text">{t.assistantLabel}</p>
            <h2 id="assistant-title">{t.assistantTitle}</h2>
            <p>{t.assistantText}</p>
            <p className={styles.assistantTopicsLabel}>
              {t.assistantTopicsLabel}
            </p>
            <ul className={styles.assistantTopics}>
              {t.assistantTopics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </div>
        </div>
      </AssistantSlider>

      <div id="app-features" className={styles.featureSection}>
        <AppJourney
          locale={locale === "de" ? "de" : "en"}
          steps={t.journeySteps.map((step, i) => ({
            ...step,
            image: journeyImages[i],
          }))}
        />
      </div>

      <section className={styles.faq} aria-labelledby="app-faq-title">
        <div>
          <p className="category-text">{t.faqLabel}</p>
          <h2 id="app-faq-title">{t.faqTitle}</h2>
          <Link href={`/${locale}/contact`} className={styles.textLink}>
            {t.contact}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div>
          {t.faq.map((item) => (
            <details key={item.q}>
              <summary>
                {item.q}
                <span aria-hidden="true">+</span>
              </summary>
              <p>
                {item.a}
                {"support" in item && (
                  <>
                    <a
                      href={`mailto:${supportContact.email}`}
                      className="font-medium text-[#007e68] underline underline-offset-4"
                    >
                      {supportContact.email}
                    </a>
                    {t.supportPhoneLabel}
                    <a
                      href={supportContact.phoneHref}
                      className="font-medium text-[#007e68] underline underline-offset-4"
                    >
                      {supportContact.phone}
                    </a>
                    {t.supportFormLead}
                    <Link
                      href={`/${locale}/contact`}
                      className="font-medium text-[#007e68] underline underline-offset-4"
                    >
                      {t.supportFormLabel}
                    </Link>
                    {t.supportChatText}
                  </>
                )}
              </p>
            </details>
          ))}
        </div>
      </section>
      <section id="app-download" className={styles.downloadIntro}>
        <p className="category-text">QUITTY</p>
        <h2>{t.finalTitle}</h2>
        <p>{t.finalText}</p>
        <div className={styles.storeLinks}>
          <Link href="https://apps.apple.com/us/app/quitty/id6740874619">
            <Image src={appleLogo} alt="" width={26} height={26} />
            App Store<span aria-hidden="true">→</span>
          </Link>
          <Link href="https://play.google.com/store/apps/details?id=com.syntech.quitty">
            <Image src={playLogo} alt="" width={26} height={26} />
            Google Play<span aria-hidden="true">→</span>
          </Link>
        </div>
        <p className={styles.platformNote}>{t.platformNote}</p>
      </section>
    </main>
  );
};

export default AppOverview;
