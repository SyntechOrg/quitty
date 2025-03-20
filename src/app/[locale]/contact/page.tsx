"use client";
import React, { FC } from "react";
import Partners from "@/components/shared/partners/Partners";
import ContactUsSection from "@/components/sections/contact-us-section/ContactUsSection";
import ContactHero from "@/components/sections/contact-hero/ContactHero";
import withAuth from "@/components/hocs/withAuth";
import { Metadata } from "next";
import useChatbase from "@/components/chatbot/useChatbase";

// export async function generateMetadata({
//   params,
// }: {
//   params: { locale: string };
// }): Promise<Metadata> {
//   const lang = params.locale || "de";
//
//   const metadataMap = {
//     en: {
//       title: "Contact Quitty – Let’s Talk",
//       description: "Get in Touch with Quitty. Have questions? Need support? Contact us today to learn more about Quitty and how we can help your business thrive.",
//     },
//     de: {
//       title: "Kontakt Quitty – Lassen Sie Uns Reden",
//       description: "Kontaktieren Sie Quitty. Haben Sie Fragen? Brauchen Sie Unterstützung? Kontaktieren Sie uns noch heute, um mehr über Quitty zu erfahren und wie wir Ihrem Unternehmen helfen können.",
//     },
//   };
//
//   return metadataMap[lang] || metadataMap.de;
// }

const ContactPage = () => {
  useChatbase();
  return (
    <div className="container">
      <ContactHero />
      <ContactUsSection />
      {/* <Partners /> */}
    </div>
  );
};

export default withAuth(ContactPage);
