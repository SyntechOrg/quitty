import { FC } from "react";
import { Clients } from "@/components/clients/Clients";
import { ContactForm, ContactPageBanner } from "@/components/contact-page";
import { SocialMedia } from "@/components/shared/social-media/SocialMedia";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syntech Solutions AG | Contact Us",
  description: "Contact us for any inquiries or questions!",
};

const ContactPage: FC = () => (
  <>
    <ContactPageBanner />
    <ContactForm />
    <Clients className="py-[100px] lg:py-[200px]" />
    <SocialMedia />
  </>
);

export default ContactPage;
