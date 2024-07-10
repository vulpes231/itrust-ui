import React from "react";
import Card from "./Card";
import { FaTowerBroadcast } from "react-icons/fa6";
import { BsLightningChargeFill } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { GrCycle } from "react-icons/gr";
import { FaArrowUpFromBracket } from "react-icons/fa6";

const Analytics = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6">
      <Card
        name={"available signals"}
        value={0}
        icon={<FaArrowUpFromBracket />}
        customBg={"bg-yellow-100 text-yellow-500"}
      />
      <Card
        name={"active bots"}
        value={0}
        icon={<FaTowerBroadcast />}
        customBg={"bg-green-100 text-green-500"}
      />
      <Card
        name={"active signals"}
        value={0}
        icon={<BsLightningChargeFill />}
        customBg={"bg-cyan-100 text-cyan-500"}
      />
      <Card
        name={"funding AI"}
        value={0}
        icon={<GiReceiveMoney />}
        customBg={"bg-red-100 text-red-500"}
      />
      <Card
        name={"tracked assets"}
        value={0}
        icon={<GrCycle />}
        customBg={"bg-blue-100 text-blue-500"}
      />
    </div>
  );
};

export default Analytics;
