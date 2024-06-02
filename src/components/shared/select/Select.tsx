import classNames from "classnames";
import { useTranslations } from "next-intl";
import { useEffect, useState, type FC } from "react";
import { Control, Controller, FieldError, FieldValues } from "react-hook-form";

type SelectProps = {
  options: string[];
  // eslint-disable-next-line no-unused-vars
  onChange?: (option: string) => void;
  value: string | null;
};

export const Select: FC<SelectProps> = (props) => {
  const t = useTranslations("Contact");
  const [selectedOption, setSelectedOption] = useState<string | null>(
    props.value
  );

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    props.onChange?.(option);
  };

  useEffect(() => {
    setSelectedOption(props.value);
  }, [props.value]);

  return (
    <div className="flex w-full flex-1 flex-wrap gap-[30px] text-sm text-[#A3A2A7]">
      {props.options.map((option) => (
        <div
          key={option}
          className={classNames(
            "px-5 py-[15px] cursor-pointer hover:opacity-90 transition-all duration-150 ease-in-out max-h-[40px] border border-[#3F3D45] rounded-[16px] flex items-center justify-end",
            selectedOption === option &&
              "bg-[#3F3D45] border-transparent text-white",
          )}
          onClick={() => handleOptionClick(option)}
        >
          {t(option)}
        </div>
      ))}
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SelectFieldProps<T extends FieldValues = any> = {
  error: FieldError | undefined;
  name: string;
  options: string[];
  control: Control<T>;
  className?: string;
};

export const SelectField: FC<SelectFieldProps> = ({ control, ...props }) => {
  return (
    <Controller
      name={props.name}
      control={control}
      render={({ field }) => {
        return (
          <div className="w-full">
            <Select
              key={props.name}
              {...props}
              onChange={(option) => field.onChange(option)}
              value={field.value ?? null}
            />
            {props.error && (
              <span className="text-xs font-medium text-red-500">
                {props.error?.message}
              </span>
            )}
          </div>
        );
      }}
    />
  );
};
