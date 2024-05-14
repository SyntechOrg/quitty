import { FC } from "react";
import { Clients } from '@/components/clients/Clients';
import { ContactForm, ContactPageBanner } from '@/components/contact-page';
import { SocialMedia } from '@/components/shared/social-media/SocialMedia';

const ContactPage: FC = () => (
  <div>
    <ContactPageBanner />
    <ContactForm />
    <Clients />
    <SocialMedia />
  </div>
);

export default ContactPage;
