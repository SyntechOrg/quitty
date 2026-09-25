import LegalDocument, { legalMetadata } from "@/components/legal/LegalDocument";

type Props = { params: Promise<{ locale: string }> };

export const generateMetadata = ({ params }: Props) =>
  legalMetadata("impressum", params);

const ImpressumPage = ({ params }: Props) => (
  <LegalDocument slug="impressum" params={params} />
);

export default ImpressumPage;
