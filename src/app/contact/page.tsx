"use client";
import { Clients } from "@/components/clients/Clients";
import { ContactForm, ContactPageBanner } from "@/components/contact-page";
import { SocialMedia } from "@/components/shared/social-media/SocialMedia";
import { type FC } from "react";

type ContactPageProps = {};

const ContactPage: FC<ContactPageProps> = () => {
  return (
    <div>
      <ContactPageBanner />
      <ContactForm />
      <Clients />
      <SocialMedia />
    </div>
  );
};

export default ContactPage;
