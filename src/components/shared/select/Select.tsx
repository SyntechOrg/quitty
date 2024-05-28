import classNames from "classnames";
import { useState, type FC } from "react";
import { Control, Controller, FieldError, FieldValues } from "react-hook-form";

type SelectProps = {
  options: string[];
  // eslint-disable-next-line no-unused-vars
  onChange?: (option: string) => void;
  value?: string;
};

export const Select: FC<SelectProps> = (props) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    props.onChange?.(option);
  };

  return (
    <div className="flex gap-[30px] text-sm text-[#A3A2A7] w-full flex-1 flex-wrap">
      {props.options.map((option) => (
        <div
          key={option}
          className={classNames(
            "px-5 py-[15px] cursor-pointer hover:opacity-90 transition-all duration-150 ease-in-out max-h-[40px] border border-[#3F3D45] rounded-[16px] flex items-center justify-end",
            selectedOption === option &&
              "bg-[#3F3D45] border-transparent text-white"
          )}
          onClick={() => handleOptionClick(option)}
        >
          {option}
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
              {...props}
              onChange={(option) => field.onChange(option)}
              value={field.value}
            />
            {props.error && (
              <span className="text-xs text-red-500 font-medium">
                {props.error?.message}
              </span>
            )}
          </div>
        );
      }}
    />
  );
};
