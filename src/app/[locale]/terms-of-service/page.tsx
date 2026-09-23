import LegalDocument, { legalMetadata } from "@/components/legal/LegalDocument";

type Props = { params: Promise<{ locale: string }> };

export const generateMetadata = ({ params }: Props) =>
  legalMetadata("terms-of-service", params);

const TermsPage = ({ params }: Props) => (
  <LegalDocument slug="terms-of-service" params={params} />
);

export default TermsPage;
