"use client";
import React, { ChangeEvent, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "use-intl";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/select/basicSelect";

const LocalSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (value: string) => {
    startTransition(() => {
      router.replace(`/${value}`);
    });
  };
  return (
    <Select
      defaultValue={localActive}
      onValueChange={onSelectChange}
      disabled={isPending}
    >
      <SelectTrigger className="z-[10] w-16 rounded-[30px] border-none bg-transparent px-3.5 hover:opacity-75 active:opacity-50">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="min-w-[60px] rounded-xl border-none">
        <SelectItem
          className="cursor-pointer rounded-lg hover:opacity-60 active:opacity-75"
          value="en"
        >
          En
        </SelectItem>
        <SelectItem
          className="cursor-pointer rounded-lg hover:opacity-60 active:opacity-75"
          value="de"
        >
          De{" "}
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LocalSwitcher;
