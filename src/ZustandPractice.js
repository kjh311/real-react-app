import React from "react";
import DisplayCounter from "./DisplayCounter";
import CounterControl from "./CounterControl";
import DecrementCounter from "./DecrementCounter";
import ResetCounter from "./ResetCounter";
import WhatsMyNameBitch from "./WhatsMyNameBitch";

const ZustandPractice = () => {
  return (
    <div>
      <DisplayCounter />
      <CounterControl />
      <DecrementCounter />
      <ResetCounter />
      <br />
      <WhatsMyNameBitch />
    </div>
  );
};

export default ZustandPractice;
