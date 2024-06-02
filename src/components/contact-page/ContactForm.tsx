"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { type FC, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { InputField } from "@/components/shared";
import { SelectField } from "../shared/select/Select";
import { Button } from "@/components/shared";
import { toast } from "react-toastify";
import { FadeIn } from "../fade-in/FadeIn";
import { useTranslations } from "next-intl";

const SERVICE_OPTIONS = [
  "Contact form-s-1",
  "Contact form-s-2",
  "Contact form-s-3",
  "Contact form-s-4",
  "Contact form-s-5",
];

const BUDGET_OPTIONS = [
  "Contact form-b-1",
  "Contact form-b-2",
  "Contact form-b-3",
  "Contact form-b-4",
  "Contact form-b-5",
];

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  serviceType: z
    .enum([
      "Contact form-s-1",
      "Contact form-s-2",
      "Contact form-s-3",
      "Contact form-s-4",
      "Contact form-s-5",
    ])
    .refine((value) => {
      return SERVICE_OPTIONS.includes(value);
    }),
  budget: z.enum([
    "Contact form-b-1",
    "Contact form-b-2",
    "Contact form-b-3",
    "Contact form-b-4",
    "Contact form-b-5",
  ]),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  projectDescription: z.string().min(1, "Project description is required"),
});

type FormType = z.infer<typeof schema>;

export const ContactForm: FC = () => {
  const t = useTranslations("Contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formMethods = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormType) => {
    setIsSubmitting(true);
    try {
      const payload = JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        serviceType: t(data.serviceType),
        budget: t(data.budget),
        email: data.email,
        phoneNumber: data.phoneNumber,
        projectDescription: data.projectDescription,
      });

      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: payload,
      });

      if (response.ok) {
        toast.success(t("EmailSuccessMessage"));
      }

      formMethods.reset();
    } catch (error) {
      console.error("Error sending email", error);
      toast.error(t("EmailErrorMessage"));
    } finally {
      formMethods.reset();
      setIsSubmitting(false);
    }
  };

  return (
    <FadeIn className="container">
      <form
        className="mt-[130px] flex w-full flex-col gap-y-[50px] lg:px-[110px]"
        onSubmit={formMethods.handleSubmit(onSubmit)}
      >
        <div>
          <p className="pl-[18px] text-lg">{t("Contact form-t-1")}</p>
          <div className="mt-[30px] flex w-full flex-col gap-[70px] lg:flex-row">
            <InputField
              name="firstName"
              placeholder="John"
              error={formMethods.formState.errors.firstName}
              register={formMethods.register}
            />
            <InputField
              name="lastName"
              placeholder="Doe"
              error={formMethods.formState.errors.lastName}
              register={formMethods.register}
            />
          </div>
        </div>
        <div>
          <p className="pl-[18px] text-lg">{t("Contact form-t-2")}</p>
          <div className="mt-[30px] flex flex-col gap-[70px] lg:flex-row">
            <SelectField
              name="serviceType"
              error={formMethods.formState.errors.serviceType}
              control={formMethods.control}
              options={SERVICE_OPTIONS}
            />
          </div>
        </div>
        <div>
          <p className="pl-[18px] text-lg">{t("Contact form-t-3")}</p>
          <div className="mt-[30px] flex flex-col gap-[70px] lg:flex-row">
            <SelectField
              name="budget"
              error={formMethods.formState.errors.budget}
              control={formMethods.control}
              options={BUDGET_OPTIONS}
            />
          </div>
        </div>
        <div>
          <div className="hidden justify-evenly gap-[70px] text-left lg:flex">
            <p className="w-full pl-[18px] text-lg">{t("Contact form-t-4")}</p>
            <p className="w-full pl-[18px] text-lg">{t("Contact form-t-5")}</p>
          </div>
          <div className="mt-[30px] flex w-full flex-col gap-[70px] lg:flex-row">
            <div className="w-full">
              <p className="mb-[30px] w-full pl-[18px] text-lg lg:hidden">
                {t("Contact form-t-4")}
              </p>
              <InputField
                name="email"
                placeholder="john@doe.com"
                error={formMethods.formState.errors.email}
                register={formMethods.register}
              />
            </div>
            <div className="w-full">
              <p className="mb-[30px] w-full pl-[18px] text-lg lg:hidden">
                {t("Contact form-t-5")}
              </p>
              <InputField
                name="phoneNumber"
                placeholder="(+383) XX - XXX XXX"
                error={formMethods.formState.errors.phoneNumber}
                register={formMethods.register}
              />
            </div>
          </div>
        </div>
        <div>
          <p className="w-full pl-[18px] text-lg">{t("Contact form-t-6")}</p>
          <div className="mt-[30px] flex w-full flex-col gap-[70px] lg:flex-row">
            <InputField
              name="projectDescription"
              placeholder={t("Contact form-t-7")}
              error={formMethods.formState.errors.projectDescription}
              register={formMethods.register}
            />
          </div>
        </div>
        <Button
          type="submit"
          variant="secondary"
          className="max-w-[180px] rounded-2xl"
          disabled={isSubmitting}
        >
          <span className="text-sm">{t("Contact form-bt-1")}</span>
        </Button>
      </form>
    </FadeIn>
  );
};
