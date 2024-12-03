import { FC } from "react";
import { Metadata } from "next";
import Partners from "@/components/shared/partners/Partners";

export const metadata: Metadata = {
  title: "Quitty | Contact Us",
  description: "Contact us for any inquiries or questions!",
};

const ContactPage: FC = () => (
  <>
    <p>Contact Page</p>
    <Partners />
  </>
);

export default ContactPage;
