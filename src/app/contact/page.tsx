"use client";
import { ContactForm, ContactPageBanner } from "@/components/contact-page";
import { type FC } from "react";

type ContactPageProps = {};

const ContactPage: FC<ContactPageProps> = () => {
  return (
    <div className="container">
      <ContactPageBanner />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
