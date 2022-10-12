import { useState } from "react";

const Registration = ({ registrationInputRef, isRegisterNowOpen }) => {
  const [person, setPerson] = useState({});

  return (
    <>
      <div className="p-6">
        {isRegisterNowOpen || (
          // add class in section tall:max-h-max max-h-[500px] overflow-auto 
          <section className="bg-white rounded-xl fixed top-14 tall:top-28 right-20 3xl:right-1/4 xl:max-w-md lg:max-w-sm drop-shadow-md z-30 dark:bg-gray-800 dark:text-white">
            <div className="px-6 pt-4 tall:py-6">
              <h3 className="text-xl font-bold leading-4">
                Quick Registration
              </h3>
              <p className="my-2 text-sm text-gray-main">
                Fill all the fields below to register this event, and we send
                you link through email.
              </p>
            </div>
            <form>
              <div>
                <div className="px-6 tall:pb-1">
                  <div>
                    <label
                      htmlFor="email"
                      className="inline-block text-sm font-medium"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="given-name"
                      className=" focus:outline-none focus:ring-primary focus:border-primary w-full sm:text-sm border border-bColor rounded-md py-2 px-3"
                      placeholder="john@example.com"
                      ref={registrationInputRef}
                    />
                  </div>
                  <div className="mt-1 tall:mt-3">
                    <label
                      htmlFor="first-name"
                      className="inline-block text-sm font-medium"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className=" focus:outline-none focus:ring-primary focus:border-primary w-full sm:text-sm border border-bColor rounded-md py-2 px-3"
                      placeholder="John"
                    />
                  </div>
                  <div className="mt-1 tall:mt-3">
                    <label
                      htmlFor="last-name"
                      className="inline-block text-sm font-medium"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="given-name"
                      className=" focus:outline-none focus:ring-primary focus:border-primary w-full sm:text-sm border border-bColor rounded-md py-2 px-3"
                      placeholder="Smith"
                    />
                  </div>
                  <div className="mt-1 tall:mt-3">
                    <label
                      htmlFor="country"
                      className="inline-block text-sm font-medium"
                    >
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className=" inline-block w-full py-2 px-3 border border-bColor bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                  <div className="mt-1 tall:mt-3">
                    <label
                      htmlFor="province"
                      className="inline-block text-sm font-medium"
                    >
                      State or Province
                    </label>
                    <input
                      type="text"
                      name="province"
                      id="province"
                      autoComplete="given-name"
                      className=" focus:outline-none focus:ring-primary focus:border-primary w-full sm:text-sm border border-bColor rounded-md py-2 px-3"
                      placeholder="Optional"
                    />
                  </div>
                  <div className="mt-1 tall:mt-3">
                    <label
                      htmlFor="city"
                      className="inline-block text-sm font-medium"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="given-name"
                      className=" focus:outline-none focus:ring-primary focus:border-primary block w-full sm:text-sm border border-bColor rounded-md py-2 px-3"
                      placeholder="Optional"
                    />
                  </div>
                  <div className="mt-1 tall:mt-3">
                    <label
                      htmlFor="phone"
                      className="inline-block text-sm font-medium"
                    >
                      Phone number
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <input
                        type="text"
                        name="price"
                        id="price"
                        className=" focus:outline-none focus:ring-primary focus:border-primary block w-full sm:text-sm border border-bColor rounded-md py-2 pl-16 pr-12 "
                        placeholder="+1 (555) 000-0000"
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center">
                        <label htmlFor="countryCode" className="sr-only">
                          Country Code
                        </label>
                        <select
                          id="countryCode"
                          name="countryCode"
                          className="focus:outline-none focus:ring-primary focus:border-primary block w-full sm:text-sm border-bColor rounded-md px-1 ml-1"
                        >
                          <option>US</option>
                          <option>ISR</option>
                          <option>IND</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-2 tall:my-3" />
                <div className="px-6 pb-4 text-right">
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    className="inline-flex justify-center py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:text-primary hover:bg-white hover:border hover:border-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary w-full"
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
          </section>
        )}
      </div>
    </>
  );
};

export default Registration;
