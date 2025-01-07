import React, { FC } from "react";
import { Metadata } from "next";
import Partners from "@/components/shared/partners/Partners";
import ContactUsSection from "@/components/sections/contact-us-section/ContactUsSection";
import ContactHero from "@/components/sections/contact-hero/ContactHero";

export const metadata: Metadata = {
  title: "Quitty | Contact Us",
  description: "Contact us for any inquiries or questions!",
};

const ContactPage: FC = () => (
  <div className="container">
    <ContactHero />
    <ContactUsSection />
    <Partners />
  </div>
);

export default ContactPage;
