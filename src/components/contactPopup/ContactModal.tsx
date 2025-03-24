import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "../shared";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  const t = useTranslations("DataDeletion");

  return (
    <>
      <Button
        onClick={toggleModal}
        to={""}
        className="bg-primary hover:bg-primary/80 active:bg-primary/90"
      >
        POS-Anbindung anfragen
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4">Contact Form</h2>
            <form
              className="flex w-full flex-col justify-center gap-[20px]"
              action=""
            >
              <div className="flex flex-col justify-center gap-[10px]">
                <label
                  className="text-[13px] leading-[1.5] text-[#161519] md:text-[14px]"
                  htmlFor="email"
                >
                  {t("labelName")}
                </label>
                <input
                  className="h-[48px] rounded bg-[#90919C14] pl-[10px] text-[#000]"
                  name="email"
                  type="email"
                  placeholder={t("inputName")}
                />
              </div>
              <div className="flex flex-col justify-center gap-[10px]">
                <label
                  className="text-[13px] leading-[1.5] text-[#161519] md:text-[14px]"
                  htmlFor="email"
                >
                  {t("labelCompany")}
                </label>
                <input
                  className="h-[48px] rounded bg-[#90919C14] pl-[10px] text-[#000]"
                  name="email"
                  type="email"
                  placeholder={t("inputCompany")}
                />
              </div>
              <div className="flex flex-col justify-center gap-[10px]">
                <label
                  className="text-[13px] leading-[1.5] text-[#161519] md:text-[14px]"
                  htmlFor="email"
                >
                  {t("label1")}
                </label>
                <input
                  className="h-[48px] rounded bg-[#90919C14] pl-[10px] text-[#000]"
                  name="email"
                  type="email"
                  placeholder={t("input1")}
                />
              </div>
              <div className="flex flex-col justify-center gap-[10px]">
                <label
                  className="text-[13px] leading-[1.5] text-[#161519] md:text-[14px]"
                  htmlFor="phone"
                >
                  {t("label2")}
                </label>
                <input
                  className="h-[48px] rounded bg-[#90919C14] pl-[10px] text-[#000]"
                  name="phone"
                  type="tel"
                  placeholder={t("input2")}
                />
              </div>
              <div className="flex flex-col justify-center gap-[10px]">
                <label
                  className="text-[13px] leading-[1.5] text-[#161519] md:text-[14px]"
                  htmlFor="reason"
                >
                  {t("label3")}
                </label>
                <input
                  className="h-[48px] rounded bg-[#90919C14] pl-[10px] text-[#60606B]"
                  name="reason"
                  placeholder={t("input3")}
                />
              </div>
              {/* <div className="flex flex-row justify-start gap-[8px]">
                <input className="rounded-md" type="checkbox" />
                <p className="text-[13px] leading-[1.85] text-[#161519] md:text-[14px]">
                  {t("formCheck")}
                </p>
              </div> */}
              <button
                className="h-[43px] w-[160px] rounded-md bg-[#111013] text-[14px] text-[#fff] md:h-[48px] md:w-[180px] md:text-[16px]"
                type="submit"
              >
                {t("formButton")}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
