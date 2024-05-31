import { FC } from "react";
import { Clients } from "@/components/clients/Clients";
import { ContactForm, ContactPageBanner } from "@/components/contact-page";
import { SocialMedia } from "@/components/shared/social-media/SocialMedia";

const ContactPage: FC = () => (
  <>
    <ContactPageBanner />
    <ContactForm />
    <div className="py-[100px] lg:py-[200px]">
      <Clients />
    </div>
    <SocialMedia />
  </>
);

export default ContactPage;
