import smoke from "../../assets/images/Layer4.png";
import year from "../../assets/images/Layer5.png";
import set from "../../assets/images/Layer3.png";
import hat from "../../assets/images/Layer2.png";
import path from "../../assets/images/Layer 1.png";

function NumberSection() {
  return (
    <div id="ourNumber" className="h-screen pt-10 md-flex font-sans">
      <h2 className="mx-auto font-black text-7xl ml-10 text-yellow-500 text-center m-12 px-12 py-4 tracking-normal">
        Building People, Creating a Sustainable Future
      </h2>
      <p className="mx-auto font-bold text-3xl m-10 ml-10 text-slate-800 text-center italic ">
        "Based on what we have before..."
      </p>
      <div className="grid md:grid-cols-5 sm:cols-1 m-8 p-8">
      <figure>
          <img
            class="h-18 w-18 mx-auto object-fill "
            src={year}
            alt=""
            width="150"
            height="430"
          />
          <div class="pt-6 space-y-2 text-center">
            <p class=" w-full mt-2 order-1 text-6xl font-black text-slate-900 ">
              112
            </p>
            <div className="capitalize text-black font-bold text-base text-center">
              years in business
            </div>
            <div className="">Kiwi owned and operated since 1910</div>
          </div>
        </figure>
        <figure>
          <img
           class="h-18 w-18 mx-auto object-fill "
            src={set}
            alt=""
            width="60"
            height="141"
          />
          <div class="pt-6 space-y-2 text-center">
            <p class=" w-full mt-2 order-1 text-6xl font-black text-slate-900 ">
              100+
            </p>

            <div className="capitalize text-black font-bold text-base text-center">
            current projects
            </div>
            <div>All over Ethiopia</div>
          </div>
        </figure>
        <figure>
          <img
            class="h-18 w-18 mx-auto object-fill "
            src={path}
            alt=""
            width="90"
            height="141"
          />
          <div class="pt-6 space-y-2 text-center">
            <p class=" w-full mt-2 order-1 text-6xl font-black text-slate-900 ">
              800+
            </p>

            <div className="capitalize text-black font-bold text-base text-center">
              Staff
            </div>
            <div>with an unmatched range of expertise</div>
          </div>
        </figure>
        <figure>
          <img
            class="h-18 w-18 mx-auto object-fill "
            src={hat}
            alt=""
            width="120"
            height="171"
          />
          <div class="pt-6 space-y-2 text-center">
            <p class="text-lg w-full mt-2 order-1 text-6xl font-black text-slate-900 ">
             83
            </p>

            <div className="capitalize text-black font-bold text-base text-center">
            apprentices & cadets
            </div>
            <div>in training</div>
          </div>
        </figure>
        <figure >
          <img
            class="h-18 w-18 mx-auto object-fill "
            src={smoke}
            alt=""
            width="80"
            height="151"
          />
          <div class="pt-6 space-y-2 text-center">
            <p class="text-lg w-full mt-2 order-1 text-6xl font-black text-slate-900 ">
              95%
            </p>

            <div className="capitalize text-black font-bold text-base text-center">
              Eco-Friendly
            </div>
            <div>working habit</div>
          </div>
        </figure>
        
      </div>
    </div>
  );
}

export default NumberSection;
