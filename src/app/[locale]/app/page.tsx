import type { Metadata } from "next";
import AppOverview from "@/components/sections/app-overview/AppOverview";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "de"
        ? "Quitty App | Deine Belege. Dein Überblick."
        : "Quitty App | Your receipts. Your overview.",
    description:
      locale === "de"
        ? "Entdecke Quitty: Belege mit KI erfassen, mehrere Dokumente gleichzeitig scannen, Garantien im Blick behalten und Fragen zu deinen eigenen Quittungen und Ausgaben stellen."
        : "Discover Quitty: capture documents with AI, scan several receipts at once, track warranties and ask questions about your own receipts and expenses.",
    robots: { index: false, follow: false },
  };
}

const AppPage = () => {
  return <AppOverview />;
};

export default AppPage;
