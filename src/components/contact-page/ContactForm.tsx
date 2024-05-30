'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { type FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { InputField } from '@/components/shared';
import { SelectField } from '../shared/select/Select';
import { Button } from '@/components/shared';

const SERVICE_OPTIONS = [
  'Informational Web',
  'Web Application',
  'Shop Online Web',
  'Brand Identity',
  'Social Media',
];

const BUDGET_OPTIONS = [
  'up to CHF 5,000',
  'CHF 5,000 - CHF 10,000',
  'CHF 10,000 - CHF 20,000',
  'CHF 20,000 - CHF 50,000',
  'more than CHF 50,000',
];

const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  serviceType: z
    .enum([
      'Informational Web',
      'Web Application',
      'Shop Online Web',
      'Brand Identity',
      'Social Media',
    ])
    .refine((value) => {
      return SERVICE_OPTIONS.includes(value);
    }),
  budget: z.enum([
    'up to CHF 5,000',
    'CHF 5,000 - CHF 10,000',
    'CHF 10,000 - CHF 20,000',
    'CHF 20,000 - CHF 50,000',
    'more than CHF 50,000',
  ]),
  email: z.string().email('Invalid email address'),
  phoneNumber: z.string().min(1, 'Phone number is required'),
  projectDescription: z.string().min(1, 'Project description is required'),
});

type FormType = z.infer<typeof schema>;

export const ContactForm: FC = () => {
  const formMethods = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormType) => {
    console.log('FormData::::', data);
  };

  return (
    <div className="container">
      <form
        className="mt-[130px] flex w-full flex-col gap-y-[50px] lg:px-[110px]"
        onSubmit={formMethods.handleSubmit(onSubmit)}
      >
        <div>
          <p className="pl-[18px] text-lg">Hello, I am</p>
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
          <p className="pl-[18px] text-lg">I am looking for help with a...</p>
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
          <p className="pl-[18px] text-lg">My Budget is</p>
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
          <div className="flex justify-evenly gap-[70px] text-left">
            <p className="w-full pl-[18px] text-lg">Please contact me at</p>
            <p className="w-full pl-[18px] text-lg">My phone number</p>
          </div>
          <div className="mt-[30px] flex w-full flex-col gap-[70px] lg:flex-row">
            <InputField
              name="email"
              placeholder="john@doe.com"
              error={formMethods.formState.errors.email}
              register={formMethods.register}
            />
            <InputField
              name="phoneNumber"
              placeholder="(+383) XX - XXX XXX"
              error={formMethods.formState.errors.phoneNumber}
              register={formMethods.register}
            />
          </div>
        </div>
        <div>
          <p className="w-full pl-[18px] text-lg">Description of Project</p>
          <div className="mt-[30px] flex w-full flex-col gap-[70px] lg:flex-row">
            <InputField
              name="projectDescription"
              placeholder="Project Details"
              error={formMethods.formState.errors.projectDescription}
              register={formMethods.register}
            />
          </div>
        </div>
        <Button
          type="submit"
          variant="secondary"
          className="max-w-[180px] rounded-2xl"
        >
          <span className="text-sm">SEND</span>
        </Button>
      </form>
    </div>
  );
};
