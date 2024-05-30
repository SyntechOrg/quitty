import React from 'react';
import { Button, Icon, IconType } from '@/components/shared';

const OverviewCard = () => {
  return (
    <div className="w-full rounded-[30px] border border-gray bg-radial-gradient-background px-8 py-14 md:p-12 md:py-32">
      <div className="mx-auto w-11/12 max-w-[700px] text-center">
        <h4 className="mx-auto max-w-[600px] text-[24px] leading-[1.14] md:text-[32px] lg:text-[48px]">
          Unlock 30 minutes to dream together
        </h4>
        <p className="mt-6 text-[14px] font-light leading-[1.875] md:mt-10 md:text-[16px]">
          Join us for a 30-minute conversation where we can explore your ideas,
          collaborate on possibilities, and shape your vision into reality!
        </p>
        <div className="group mx-auto mt-6 flex w-fit items-center md:mt-10 ">
          <Button to="/contact">Book the journey</Button>
          <Button to="/contact">
            <Icon icon={IconType.ARROW} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
