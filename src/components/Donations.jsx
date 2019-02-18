import React from "react";
import { Sticky } from "react-sticky";

import "./Donations.css";

export const Donations = () => {
  return (
    <Sticky topOffset={400}>
      {({ style }) => {
        return (
          <div className="Donations" style={style}>
            {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
            <iframe
              src="https://money.yandex.ru/quickpay/shop-widget?writer=seller&targets=На+продвижение+группы&targets-hint=&default-sum=2000&button-text=11&hint=&successURL=&quickpay=shop&account=410011420821055"
              width="423"
              height="222"
              frameBorder="0"
              allowtransparency="true"
              scrolling="no"
            />
          </div>
        );
      }}
    </Sticky>
  );
};
