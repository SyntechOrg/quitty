import { FC } from "react";
import { Metadata } from "next";
import Partners from "@/components/shared/partners/Partners";

export const metadata: Metadata = {
  title: "Quitty | Product",
  description: "Our products",
};

const ContactPage: FC = () => (
  <div className="container">
    <p>Product Page</p>
    <Partners />
  </div>
);

export default ContactPage;
