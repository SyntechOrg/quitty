"use client";

import { usePathname } from "next/navigation";
import Transform from "@/components/shared/transform/Transform";

const SiteDownloadSection = () => {
  const pathname = usePathname();
  // The App draft has its own download section. Existing pages retain theirs.
  return /^\/(de|en)\/app\/?$/.test(pathname) ? null : <Transform />;
};

export default SiteDownloadSection;
