function Footer() {
  return (
    <footer
      className="py-10 px-24 text-white text-white mt-40"
      style={{ backgroundColor: "#313232" }}
    >
      <div className="grid w-5/6 mx-auto gap-10 grid-cols-3">
        <div className="grid grid-cols-2 col-span-3 xl:col-span-2">
          <div className="col-span-2 grid grid-cols-2">
            <div className=" col-span-2 xl:col-span-1 mx-auto xl:mx-0">
              <h2 className="font-bold text-lg text-white">Heaven</h2>
              <ul className=" font-light mt-3 text-gray-300">
                <li className="mb-1">
                  <span href="/">Consultation</span>
                </li>
                <li className="mb-1">
                  <span href="/">Rent</span>
                </li>
                <li className="mb-1">
                  <span href="/">Home</span>
                </li>
              </ul>
            </div>
            <div className="col-span-2 xl:col-span-1 mt-2 mx-auto xl:mx-0">
              <h2 className="font-bold text-lg text-white">Partnerships</h2>
              <ul className="font-light mt-3 text-gray-300">
                <li className="mb-1">
                  <span href="/">Eshi Digital</span>
                </li>
                <li className="mb-1">
                  <span href="/">Green Ethiopia</span>
                </li>
                <li className="mb-1">
                  <span href="/">FAQ</span>
                </li>
                <li className="mb-1">
                  <span href="/">Contact</span>
                </li>
                <li className="mb-1">
                  <span href="/">Careers</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-2 w-full grid grid-cols-2">
            <div className="col-span-2 xl:col-span-1 mx-auto xl:mx-0">
              <h2 className="font-bold mt-10 text-lg text-white">Legal</h2>
              <ul className="font-light mt-3 text-gray-300">
                <li className="mb-1">
                  <span href="/">Privacy Policy</span>
                </li>
                <li className="mb-1">
                  <span href="/">Terms and condition</span>
                </li>
                <li className="mb-1">
                  <span href="/">Code of conduct</span>
                </li>
                <li className="mb-1">
                  <span href="/">Return policy</span>
                </li>
              </ul>
            </div>
            <div className="col-span-2 xl:col-span-1 mx-auto xl:mx-0">
              <h2 className="font-bold mt-10 text-lg text-white">contact</h2>
              <ul className="font-light mt-3 text-gray-300">
                <li className="mb-1">
                  <span href="/">Email</span>
                </li>
                <li className="mb-1">
                  <span href="/">Contact Support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex items-center mb-5">
            <span className="text-white hover:text-green-300" href="/">
              <i className="fab fa-instagram inline-block text-2xl mr-5"></i>
            </span>
            <span className="text-white hover:text-green-300" href="/">
              <i className="fab fa-twitter inline-block text-2xl mr-5"></i>
            </span>
            <span className="text-white hover:text-green-300" href="/">
              <i className="fab fa-youtube inline-block text-2xl mr-5"></i>
            </span>
          </div>
          <div className="inline-block mb-4 relative w-44 md:w-72">
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <p className="text-lg mb-1 hidden lg:block">Construction?</p>
          <p className="text-md hidden lg:block">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati,
            unde et quibusdam atque quasi ut nemo, odio omnis adipisci quia
            accusamus, numquam praesentium illo.
          </p>
        </div>
      </div>

      <h2 className="text-white text-md font-light text-center mt-2">
        © 2022 Abenezer Atnafu
      </h2>
    </footer>
  );
}

export default Footer;
