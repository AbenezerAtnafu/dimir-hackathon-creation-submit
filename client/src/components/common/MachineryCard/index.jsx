import { useState } from "react";
import RentalForm from "../../RentalForm";

import Sinotruck from "../../../assets/images/Sinotruck.png";
import writerImage from "../../../assets/images/writer1.jpg";

import "./style.css";

const MachineryCard = ({
  name,
  pricePerDay,
  model,
  image,
  year,
  height,
  width,
  weight,
  currentlyAvailable,
  productId,
  _id,
}) => {
  const [IsRentalFormOpen, setIsRentalFormOpen] = useState(false);
  const [machineryId, setMachineryId] = useState("");

  const showModal = (machineryId) => {
    setMachineryId(machineryId);
    setIsRentalFormOpen(true);
  };

  const handleOk = () => {
    setIsRentalFormOpen(false);
  };

  const handleCancel = () => {
    setIsRentalFormOpen(false);
  };

  return (
    <div className="card-height max-w-sm rounded overflow-hidden shadow-lg group ">
      <div className="transition ease-in-out delay-250 duration-500 group-hover:-translate-y-24 ">
        <img
          class="h-80 w-full object-cover"
          src={`http://localhost:5000/machinery/${image}`}
          alt="banner"
        />
      </div>
      {/* <div className="md:hidden block">
        <div className="px-6 md:pr-10 pt-4 pb-2 font-semibold text-lg  h-16">
          {title}
        </div>
        <div className="text-left pl-6 mb-2 text-sm text-black font-thin ">
          Learn More
        </div>
      </div> */}

      <div className=" bg-white transition ease-in-out delay-250 duration-500 group-hover:-translate-y-40">
        <div className="px-6 md:pr-10 pt-4 pb-2 font-semibold text-lg h-18 mb-1">
          {name}
        </div>
        <div className=" flex flex-row mx-5 py-3 ">
          <img
            src={require(`../../../assets/images/${model}.png`)}
            alt=""
            className="object-contain w-14 box-shadow h-1w-14 rounded-full"
          />
          <div className="ml-4 w-full uppercase flex items-center text-base">
            <div style={{ fontFamily: "Founders Grotesk Mono" }}>{model}</div>
            <div className="ml-auto text-2xl font-thin pr-2 text-gray-700">
              ETB {pricePerDay}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 pt-2 px-4">
          <div className="tracking-wide font-semibold pl-3 mt-2">
            Year <span className="font-thin">{year}</span>
          </div>
          <div className="tracking-wide font-semibold pl-3 mt-2">
            Height <span className="font-thin">{height}</span>
          </div>
          <div className="tracking-wide font-semibold pl-3 mt-2">
            Width <span className="font-thin">{width}</span>
          </div>
          <div className="tracking-wide font-semibold pl-3 mt-2">
            Weight <span className="font-thin">{weight}</span>
          </div>
          <div
            onClick={() => {
              showModal(_id);
            }}
            className="cursor-pointer px-8 py-4 mt-7 mb-2 text-center text-base bg-[#EAB308] text-black uppercase font-semibold tracking-wider shadow-lg"
          >
            Rent Now
          </div>
          <a
            href="tel:+251946414257"
            className="flex-end text-center pl-12 mt-10 mb-2 text-sm text-black font-thin "
          >
            Learn More
          </a>
        </div>
      </div>
      <div>
        <RentalForm
          title="Rental Form"
          visible={IsRentalFormOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          machinery={machineryId}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </RentalForm>
      </div>
    </div>
  );
};

export default MachineryCard;
