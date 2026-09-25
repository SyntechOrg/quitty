import LegalDocument, { legalMetadata } from "@/components/legal/LegalDocument";

type Props = { params: Promise<{ locale: string }> };

export const generateMetadata = ({ params }: Props) =>
  legalMetadata("data", params);

const DataPage = ({ params }: Props) => (
  <LegalDocument slug="data" params={params} />
);

export default DataPage;
