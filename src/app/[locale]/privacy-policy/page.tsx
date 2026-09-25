import LegalDocument, { legalMetadata } from "@/components/legal/LegalDocument";

type Props = { params: Promise<{ locale: string }> };

export const generateMetadata = ({ params }: Props) =>
  legalMetadata("privacy-policy", params);

const PrivacyPage = ({ params }: Props) => (
  <LegalDocument slug="privacy-policy" params={params} />
);

export default PrivacyPage;
