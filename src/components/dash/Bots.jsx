import React from "react";
import Dashbots from "./Dashbots";
const Bots = () => {
  return (
    <div className="overflox-auto">
      <div className="flex flex-col gap-6">
        <h3 className="bg-orange-50 text-center mx-8 p-3 rounded shadow font-medium text-sm">
          Available BOTS
        </h3>
        <Dashbots
          botName={"smart swan"}
          botShort={"smart swan services"}
          winRate={"84.57"}
          interest={"37"}
          aum={"257"}
          rating={"4.8"}
        />

        <Dashbots
          botName={"greatriver technology"}
          botShort={"information technology"}
          winRate={"84.57"}
          interest={"37"}
          aum={"297"}
          rating={"4.5"}
        />
        <Dashbots
          botName={"manta network finance"}
          botShort={"finance services"}
          winRate={"84.57"}
          interest={"37"}
          aum={"257"}
          rating={"4.2"}
        />
      </div>
    </div>
  );
};

export default Bots;
