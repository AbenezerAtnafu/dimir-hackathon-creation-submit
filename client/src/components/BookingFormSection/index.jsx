import React, { useState } from "react";
import { Button } from "antd";
import CustomModal from "../common/Modal";
import BookingForConsultation from "../modals/BookingForConsultation";

const BookingForm = () => {
  const [visibleBooking, setVisibleBooking] = useState(false);

  return (
    <>
      <div id="consultation" className="md:flex flex-row bg-[#EAB308] md:px-24 py-28 px-6 mt-0 h-screen">
        <div className="basis-2/3 px-10">
          <div className="uppercase tracking-wider font-bold text-7xl pb-10 leading-tight">
            Booking for consultation
          </div>
          <div className="pl-2 pr-28 text-xl leading-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim rerum
            quidem blanditiis sequi et eos, ullam magni natus porro non tempore
            similique quibusdam tempora pariatur numquam dicta itaque sapiente
            totam?Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis sunt saepe natus consectetur. Aut vero, dignissimos
            asperiores ducimus quasi magnam? Iste magnam voluptate mollitia
            distinctio odit accusantium, praesentium alias excepturi.
          </div>
          <div className="pl-2 pr-28 text-xl leading-8 mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim rerum
            quidem blanditiis sequi et eos, ullam magni natus porro non tempore
            
          </div>
        </div>
        <div className="basis-1/3">
          <div className="flex flex-row w-full h-full min-w-full">
            <div className="w-full my-auto mx-auto text-center justify-center ">
              <button
                className=" bg-black text-white font-bold py-6 px-24 text-2xl tracking-widest"
                onClick={() => setVisibleBooking(true)}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <CustomModal
        visible={visibleBooking}
        onCancel={() => setVisibleBooking(false)}
        width={600}
      >
        <BookingForConsultation />
      </CustomModal>
    </>
  );
};

export default BookingForm;
