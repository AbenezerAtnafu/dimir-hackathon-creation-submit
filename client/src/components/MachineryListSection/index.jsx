import { useEffect, useState } from "react";
import axios from "axios";
import { notification, Spin } from "antd";
import MachineryCard from "../common/MachineryCard";


const MachineryListSection = function ({ isRentalOpen, setIsRentalOpen }) {
  const getMachineryList = async () => {
    const response = axios
      .get("http://localhost:5000/api/v1/machinery/")
      .then((res) => {
        setMachineryList(res.data.result);
        setLoading(false);
      })
      .catch((err) => {
        notification.error({
          message: "Error",
          description: "No internet connection",
        });
      });
  };
  const [machineryList, setMachineryList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMachineryList();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          width: "100%",
          height: "420px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spin tip="Loading machineries..." />
      </div>
    );
  }

  return (
    <div id="rentMachineries" className=" bg-[#F3F3F3] md:px-24 py-32 px-6">
      <div className="">
        <div className="uppercase tracking-widest font-normal text-xl pb-10">
          List of Machineries for rent{" "}
          <span className="text-sm pl-5">(Price per day)</span>
        </div>
      </div>
      <div className="">
        <div className="grid md:grid-cols-3 gap-10 mx-auto w-full h-full min-w-full">
          {machineryList.map((machinery, index) => (
            <MachineryCard
              {...machinery}
              key={{ index }}
              isRentalOpen={isRentalOpen}
              setIsRentalOpen={setIsRentalOpen}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MachineryListSection;
