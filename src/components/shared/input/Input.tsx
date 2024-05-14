import { ComponentProps, Fragment, type FC } from "react";
import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";

type InputProps<T extends FieldValues = any> = {
  register?: UseFormRegister<T>;
} & ComponentProps<"input">;

export const Input: FC<InputProps> = ({ register, ...props }) => {
  return (
    <label htmlFor={props.name} className="w-full">
      <input
        className="border-b border-b-[#3F3D45] bg-transparent pb-5 pl-[35px] text-base w-full focus:outline-primary"
        type="text"
        {...props}
        {...register?.(props?.name ?? "name")}
      />
    </label>
  );
};

type InputFieldProps<T extends FieldValues = any> = {
  register: UseFormRegister<T>;
  error: FieldError | undefined;
  name: string;
} & ComponentProps<"input">;

export const InputField: FC<InputFieldProps> = ({ error, ...props }) => {
  return (
    <div className="w-full">
      <Input {...props} />
      {error && (
        <span className="text-xs text-red-500 font-medium">
          {error?.message}
        </span>
      )}
    </div>
  );
};
