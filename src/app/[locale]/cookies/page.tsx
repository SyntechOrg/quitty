import LegalDocument, { legalMetadata } from "@/components/legal/LegalDocument";

type Props = { params: Promise<{ locale: string }> };

export const generateMetadata = ({ params }: Props) =>
  legalMetadata("cookies", params);

const CookiesPage = ({ params }: Props) => (
  <LegalDocument slug="cookies" params={params} />
);

export default CookiesPage;
