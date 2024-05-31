"use client";
import React, { ChangeEvent, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "use-intl";

const LocalSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <label className="rounded border-2 text-black">
      <p className="sr-only">change language</p>
      <select defaultValue={localActive} onChange={onSelectChange} disabled={isPending}>
        <option value="en">English</option>
        <option value="de">German</option>
      </select>
    </label>
  );
};

export default LocalSwitcher;
