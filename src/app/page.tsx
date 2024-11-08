import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quitty | Home",
  description: "Welcome to Quitty!",
};

const Page = () => {
  redirect("/en");
};

export default Page;
