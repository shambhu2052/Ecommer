import React, { useState } from "react";
import { Slider, Switch } from "antd";
const Range = () => {
  const [disabled, setDisabled] = useState(false);
  const onChange = (checked: boolean) => {
    setDisabled(checked);
  };
  return (
    <>
      {/* <Slider defaultValue={30} disabled={disabled} /> */}
      <Slider range defaultValue={[20, 50]} disabled={disabled} />
    </>
  );
};

export default Range;
