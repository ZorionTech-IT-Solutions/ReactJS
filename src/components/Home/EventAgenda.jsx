import { useState } from "react";
import EventAgendaDetails from "./EventAgendaDetails";

const EventAgenda = () => {
  const [tab, setTab] = useState(1);

  return (
    <section>
      <h2 className="pt-14 text-xl font-bold">Event Agenda</h2>
      <article className="text-sm font-medium">
        <ul className="flex flex-wrap list-none border-b" role="tablist">
          <li className="mr-2">
            <a
              href="#"
              className={
                tab === 1
                  ? "inline-block p-4 text-anchor-primary border-b-2 border-anchor-primary"
                  : "inline-block p-4 border-b-2 border-transparent hover:border-gray-main"
              }
              onClick={(e) => {
                e.preventDefault();
                setTab(1);
              }}
              data-toggle="tab"
              role="tablist"
            >
              28 Sept, 2022
              <span className="inline-flex items-center justify-center h-6 w-6 ml-2 rounded-full bg-blue-50">
                2
              </span>
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className={
                tab === 2
                  ? "inline-block p-4 text-anchor-primary border-b-2 border-anchor-primary"
                  : "inline-block p-4 border-b-2 border-transparent hover:border-gray-main"
              }
              onClick={(e) => {
                e.preventDefault();
                setTab(2);
              }}
              data-toggle="tab"
              role="tablist"
            >
              29 Sept, 2022
              <span className="inline-flex items-center justify-center h-6 w-6 ml-2 rounded-full bg-blue-50">
                5
              </span>
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className={
                tab === 3
                  ? "inline-block p-4 text-anchor-primary border-b-2 border-anchor-primary"
                  : "inline-block p-4 border-b-2 border-transparent hover:border-gray-main"
              }
              onClick={(e) => {
                e.preventDefault();
                setTab(3);
              }}
              data-toggle="tab"
              role="tablist"
            >
              30 Sept, 2022
              <span className="inline-flex items-center justify-center h-6 w-6 ml-2 rounded-full bg-blue-50">
                3
              </span>
            </a>
          </li>
        </ul>
        <div>
          <div className="min-w-0 w-full py-4">
            <div className={tab === 1 ? "block" : "hidden"}>
              <EventAgendaDetails />
              {/* remove below section while API call */}
              <section>
                <p className="text-gray-main pt-4">
                  <time>1:00 PM-1:30 PM</time>
                </p>
                <h3 className="text-lg py-2">
                  Learn how you can get paid on time, with TSB Bank and BankiFi
                </h3>
                <p className="text-gray-main font-normal">
                  Our friends from TSB Bank and BankiFi share all you need to
                  know about how you can set up and receive payments on time for
                  your startup.
                </p>
                <section className="flex flex-wrap">
                  <div className="my-4 mr-8 flex">
                    <img
                      src="https://i.ibb.co/LkLGR9d/avatar2.png"
                      alt="icon"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="ml-2">
                      <h4>Oskar Bryszak</h4>
                      <p className="text-gray-main font-normal">
                        Senior business development manager
                      </p>
                    </div>
                  </div>
                </section>
                <hr className="my-4" />
              </section>
              {/* remove above section while API call */}
            </div>
            <div className={tab === 2 ? "block" : "hidden"}>
              <section>
                <p className="text-gray-main pt-4">
                  <time className="">1:00 PM-1:30 PM</time>
                </p>
                <h3 className="text-lg py-2">
                  Learn how you can get paid on time, with TSB Bank and BankiFi
                </h3>
                <p className="text-gray-main font-normal">
                  Our friends from TSB Bank and BankiFi share all you need to
                  know about how you can set up and receive payments on time for
                  your startup.
                </p>
                <section className="flex flex-wrap">
                  <div className="my-4 mr-8 flex">
                    <img
                      src="https://i.ibb.co/LkLGR9d/avatar2.png"
                      alt="icon"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="ml-2">
                      <h4>Oskar Bryszak</h4>
                      <p className="text-gray-main font-normal">
                        Senior business development manager
                      </p>
                    </div>
                  </div>
                </section>
                <hr className="my-4" />
              </section>
              <EventAgendaDetails />
            </div>
            <div className={tab === 3 ? "block" : "hidden"}>
              <EventAgendaDetails />
              <EventAgendaDetails />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default EventAgenda;
