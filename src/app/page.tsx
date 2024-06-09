import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syntech Solutions AG | Home",
  description: "Welcome to Syn-Tech!",
};

const Page = () => {
  redirect("/en");
};

export default Page;
