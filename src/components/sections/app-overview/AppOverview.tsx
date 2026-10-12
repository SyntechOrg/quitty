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
import startScreen from "public/assets/images/app-overview/start-original.png";
import overviewScreen from "public/assets/images/app-overview/overview-original.png";
import scanScreen from "public/assets/images/app-overview/scan-camera-crop.png";
import warrantyScreen from "public/assets/images/app-overview/warranty-original.png";
import expensesScreen from "public/assets/images/app-overview/expenses-original.png";
import assistantScreen from "public/assets/images/app-overview/assistant-original.png";
import styles from "./AppOverview.module.css";

const copy = {
  de: {
    eyebrow: "DIE QUITTY-APP",
    title: ["Deine Belege.", "Dein Überblick."],
    intro:
      "Erfasse Quittungen, Garantien und Ausgaben mit KI. Fotografiere mehrere Belege gleichzeitig, stelle Fragen zu deinen eigenen Belegen und behalte Garantien im Blick.",
    download: "App entdecken",
    explore: "Funktionen ansehen",
    tags: ["Mit KI erfassen", "Mehrfachscan", "KI zu deinen Belegen"],
    multiLabel: "KI-SCAN & MULTISCAN",
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
      "Quitty liest Rechnungen, Quittungen, Garantien und Ausgaben mit KI aus und füllt Felder voraus. Automatisch erkannte Händlerlogos helfen dir beim Zuordnen. Du kannst die Angaben auch vollständig manuell erfassen.",
    overviewLabel: "ALLES-ANSICHT",
    overviewTitle: "Alles zusammen. Schnell gefunden.",
    overviewText:
      "In der Alles-Ansicht findest du deine Einträge an einem Ort. Filter nach Zeitraum, Art, Kategorie und Betrag helfen dir, die Auswahl einzugrenzen.",
    filterLabel: "Filter nach",
    filters: ["Zeitraum", "Art", "Kategorie", "Betrag"],
    assistantLabel: "DEIN KI-ASSISTENT",
    assistantTitle: "Deine Belege.\nDeine Fragen.",
    assistantText:
      "Der KI-Assistent beantwortet Fragen anhand deiner eigenen Quittungen und Ausgaben. So kannst du deine erfassten Belege besser verstehen und Ausgaben nachvollziehen.",
    assistantTopics: [
      "Welche Ausgaben habe ich erfasst?",
      "Was steht auf meinen Quittungen?",
      "Wie hoch sind meine erfassten Ausgaben?",
    ],
    assistantAlt:
      "Quitty-KI-Assistent mit Chatoberfläche für Fragen zu eigenen Quittungen und Ausgaben",
    faqLabel: "GUT ZU WISSEN",
    faqTitle: "Noch eine Frage?",
    faq: [
      {
        q: "Was kann ich mit KI erfassen?",
        a: "Rechnungen, Quittungen, Garantien und Ausgaben. Du kannst auch mehrere Quittungen und Garantiebelege gleichzeitig fotografieren. Quitty sortiert die Belege und füllt Angaben voraus. Prüfe und ergänze sie vor dem Speichern; du kannst sie auch manuell erfassen.",
      },
      {
        q: "Wie organisiere ich Garantien?",
        a: "Scanne den Garantiebeleg oder trage die Angaben selbst ein. Prüfe Kaufdatum und Garantiedauer. In der Übersicht findest du Preis, Händlerlogo und Ablaufdatum deiner gespeicherten Garantie.",
      },
      {
        q: "Wie sehe ich meine Spesen?",
        a: "Wähle in der Spesenansicht einen Monat. Die Gesamtsumme und Kategorien geben dir einen Überblick über die erfassten Ausgaben.",
      },
      {
        q: "Kann ich einzelne Belege als PDF ausgeben?",
        a: "Ja. Wähle alle oder nur die gewünschten Einträge aus und drucke oder teile sie als PDF. Unter „Meine PDFs“ kannst du die gespeicherte Ausgabe später erneut öffnen.",
      },
      {
        q: "Worauf stützt sich der KI-Assistent?",
        a: "Der KI-Assistent beantwortet deine Fragen anhand deiner eigenen Quittungen und Ausgaben.",
      },
      {
        q: "Was bestätige ich bei der ersten Anmeldung?",
        a: "Bei der ersten Anmeldung wird dir die KI-Nutzung erklärt und von dir bestätigt. Nutzungsanalyse und Werbemessung sind optional und werden nur mit deinem Opt-in aktiviert.",
      },
      {
        q: "Wo bekomme ich Quitty?",
        a: "Quitty findest du im App Store und bei Google Play. Der Funktionsumfang kann je nach Plattform und Version abweichen.",
      },
      {
        q: "Wie erreiche ich den Support?",
        a: "Über unsere Kontaktseite kannst du uns schreiben oder die Support-Kontaktdaten finden.",
      },
    ],
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
          "Starte mit Quitty. Bei der ersten Anmeldung wird die KI-Nutzung erklärt und bestätigt.",
        alt: "Originale Quitty-Startansicht ohne erfasste Quittungen",
      },
      {
        title: "Deine Übersicht",
        description:
          "Finde Quittungen, Garantien und Spesen von der Startansicht aus.",
        alt: "Originale Quitty-Startübersicht mit einer erfassten Quittung",
      },
      {
        title: "Mit KI erfassen",
        description:
          "Fotografiere mehrere Quittungen oder Garantien gleichzeitig. Prüfe die vorausgefüllten Angaben.",
        alt: "Quitty-Kameraansicht mit vier Musterbelegen",
      },
      {
        title: "Garantien im Blick",
        description:
          "Behalte Preis, automatisch erkanntes Händlerlogo und Ablaufdatum im Blick.",
        alt: "Originaler Quitty-Bildschirm zum Erfassen einer Garantie",
      },
      {
        title: "Deine Spesen",
        description:
          "Behalte eigene Ausgaben im Blick. Nettobetrag, MwSt. und Steuersatz werden getrennt angezeigt.",
        alt: "Originale Quitty-Spesenübersicht",
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
    explore: "Explore features",
    tags: ["Capture with AI", "Multi-receipt scan", "AI for your own receipts"],
    multiLabel: "AI SCAN & MULTISCAN",
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
      "Quitty reads invoices, receipts, warranties and expenses with AI and pre-fills fields. Automatically recognised merchant logos help you identify entries. You can also enter the details entirely by hand.",
    overviewLabel: "EVERYTHING VIEW",
    overviewTitle: "Everything together. Easy to find.",
    overviewText:
      "The Everything view brings your entries together. Filter by period, type, category and amount to narrow your selection.",
    filterLabel: "Filter by",
    filters: ["Period", "Type", "Category", "Amount"],
    assistantLabel: "YOUR AI ASSISTANT",
    assistantTitle: "Your receipts.\nYour questions.",
    assistantText:
      "The AI assistant answers questions based on your own receipts and expenses. Understand your saved receipts and make sense of your spending.",
    assistantTopics: [
      "Which expenses have I recorded?",
      "What is on my receipts?",
      "What is the total of my recorded expenses?",
    ],
    assistantAlt:
      "Quitty AI assistant chat for questions about your own receipts and expenses",
    faqLabel: "GOOD TO KNOW",
    faqTitle: "Have a question?",
    faq: [
      {
        q: "What can I capture with AI?",
        a: "Invoices, receipts, warranties and expenses. You can also photograph several receipts and warranty documents at the same time. Quitty sorts them and pre-fills details. Check and complete them before saving, or enter them by hand.",
      },
      {
        q: "How do I organise warranties?",
        a: "Scan the warranty document or enter its details yourself. Check purchase date and warranty duration. The overview shows the price, merchant logo and expiry date for your saved warranty.",
      },
      {
        q: "How can I see my expenses?",
        a: "Choose a month in the expense view. The total and categories give you an overview of recorded spending.",
      },
      {
        q: "Can I include only selected receipts in a PDF?",
        a: "Yes. Choose all entries or just the ones you need, then print or share them as a PDF. Reopen the saved output later in “My PDFs”.",
      },
      {
        q: "What are the AI assistant’s answers based on?",
        a: "The AI assistant answers your questions based on your own receipts and expenses.",
      },
      {
        q: "What do I confirm at first login?",
        a: "At first login, AI use is explained and you confirm it. Usage analytics and advertising measurement are optional and are activated only if you opt in.",
      },
      {
        q: "Where can I get Quitty?",
        a: "Quitty is available in the App Store and on Google Play. Features may differ by platform and version.",
      },
      {
        q: "How can I contact support?",
        a: "Visit our contact page to write to us or find support contact details.",
      },
    ],
    contact: "Contact us",
    finalTitle: "Ready for less paper?",
    finalText: "Discover Quitty for your smartphone.",
    platformNote: "Features may differ by platform and version.",
    assistantTopicsLabel: "For example:",
    journeySteps: [
      {
        title: "Your start",
        description:
          "Start with Quitty. At first login, AI use is explained and you confirm it.",
        alt: "Original Quitty home screen before any receipts have been saved",
      },
      {
        title: "Your overview",
        description:
          "Find receipts, warranties and expenses from the home screen.",
        alt: "Original Quitty home overview with one saved receipt",
      },
      {
        title: "Capture with AI",
        description:
          "Photograph several receipts or warranties at once. Check the pre-filled details.",
        alt: "Quitty camera view with four sample receipts",
      },
      {
        title: "Track warranties",
        description:
          "Keep the price, automatically recognised merchant logo and expiry date in view.",
        alt: "Original Quitty warranty entry screen",
      },
      {
        title: "Your expenses",
        description:
          "Keep your own expenses in view. Net amount, VAT and tax rate are shown separately.",
        alt: "Original Quitty expenses overview",
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
  assistantScreen,
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
            <Link href="#app-scan" className={styles.textLink}>
              {t.explore}
              <span aria-hidden="true">↓</span>
            </Link>
          </div>
          <ul className={styles.tags}>
            {t.tags.map((tag) => (
              <li key={tag}>
                <span aria-hidden="true" />
                {tag}
              </li>
            ))}
          </ul>
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

      <section
        id="app-assistant"
        className={styles.assistant}
        aria-labelledby="assistant-title"
      >
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
      </section>

      <div id="app-features" className={styles.featureSection}>
        <AppJourney
          locale={locale === "de" ? "de" : "en"}
          steps={t.journeySteps.map((step, i) => ({
            ...step,
            image: journeyImages[i],
          }))}
        />
        <aside
          id="app-overview"
          className={styles.overview}
          aria-labelledby="overview-title"
        >
          <div>
            <p className="category-text">{t.overviewLabel}</p>
            <h3 id="overview-title">{t.overviewTitle}</h3>
            <p>{t.overviewText}</p>
          </div>
          <div className={styles.filterList}>
            <h4>{t.filterLabel}</h4>
            <ul>
              {t.filters.map((filter) => (
                <li key={filter}>{filter}</li>
              ))}
            </ul>
          </div>
        </aside>
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
              <p>{item.a}</p>
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
