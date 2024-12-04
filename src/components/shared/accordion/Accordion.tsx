"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";
import { Icon, IconType } from "@/components/shared";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
  // eslint-disable-next-line react/prop-types
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "hover:opacity-90 active:opacity-75 " +
        "transition-all duration-200 [&[data-state=open]]:py-4",
      className,
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
  // eslint-disable-next-line react/prop-types
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 items-center justify-between py-2 leading-[1.5] md:text-[18px] text-[16px] transition-all",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-3">
        <Icon
          icon={IconType.ARROW_DIAGONAL}
          className="h-[16px] w-[16px] object-contain"
        />
        {children}
      </div>
      <div className="group-data-[state=open]:hidden">+</div>
      <div className="group-data-[state=closed]:hidden">-</div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
  // eslint-disable-next-line react/prop-types
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="mt-3 overflow-hidden text-[18px] leading-[1.6] text-[#161616] transition-all data-[state=closed]:animate-accordion-up
    data-[state=open]:animate-accordion-down md:text-[16px]"
    {...props}
  >
    <div className={cn("pb-2 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
