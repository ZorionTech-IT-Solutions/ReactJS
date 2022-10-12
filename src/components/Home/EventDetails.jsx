import { BsChevronRight } from "react-icons/bs";
import EventAgenda from "./EventAgenda";
import EventSeries from "./EventSeries";
import EventSponsors from "./EventSponsors";
import Speakers from "./Speakers";
import Tickets from "./Tickets";

const EventDetails = () => {
  return (
    <section
      className={
        "p-8 2xl:max-w-4xl xl:max-w-3xl max-w-xl rounded-xl"
      }
    >
      <h1 className="text-4xl font-bold max-w-3xl">
        The Beauty Exchange 2022: Start and grow a beauty business
      </h1>

      <article className="my-8 p-4 flex items-center border-y">
        <div>
          <span className="text-gray-main font-medium">Start date:</span>
          <p className="text-2xl font-bold">28 Sep, 3:00 PM EST</p>
        </div>
        <div className="px-5">
          <BsChevronRight className="text-gray-main" />
        </div>
        <div>
          <span className="text-gray-main font-medium">End date:</span>
          <p className="text-2xl font-bold">30 Sep, 12:00 AM EST</p>
        </div>
      </article>

      <article>
        <p className="font-medium">
          Taking place over two jam-packed days, SmartCon features key notes
          from thought leaders, technical workshops with top dApp developers,
          deep dives into cutting-edges research, and insight into the future of
          the space from prominent founders from across DeFi, decentralized
          gaming, NFTs, and more.
        </p>
        <p className="pt-3">
          <a
            href="#"
            className="text-anchor-primary hover:underline underline-offset-1"
          >
            Taking place over two &nbsp;
          </a>
          jam-packed days, SmartCon features key notes from thought leaders,
          technical workshops with top dApp developers, deep dives into
          cutting-edges research, and insight into the future of the space from
          prominent founders from across DeFi, decentralized gaming,
          <a
            href="#"
            className="text-anchor-secondary hover:underline underline-offset-1"
          >
            &nbsp;NFTs, and much more.
          </a>
        </p>
        <p className="pt-3">Let's define the future of Web3 together.</p>
      </article>
      <EventSponsors />
      <EventAgenda />
      <Speakers />
      <Tickets />
      <EventSeries
      />
    </section>
  );
};

export default EventDetails;
