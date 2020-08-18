
import React from "react";
import moment from "moment";
import "antd/dist/antd.css";
import { TimePicker } from "antd";

const format = "HH:mm:ss";
const now = moment().hour(0).minute(0);

export const CTimePicker: React.FC = () => {
  const [openT, setOpenT] = React.useState(null);
  const [closeT, setCloseT] = React.useState(null);

  const changeOpen = (value: any) => {
    console.log(value && value.format(format));
    setOpenT(value);
  };

  const changeClose = (value: any) => {
    console.log(value && value.format(format));
    setCloseT(value);
    
  };

  return (
    <React.Fragment>
    <TimePicker size="large" onChange= {changeOpen} value={openT}  />
  
    </React.Fragment>
  );
};
