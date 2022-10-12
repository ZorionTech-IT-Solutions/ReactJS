import React from "react";

const EventSponsors = () => {
  return (
    <section>
      <article className="pt-8">
        <h3 className="text-lg font-bold capitalize">Event Sponsors</h3>
        <p>
          We are happy to present our sponsors for this year's event: The Beauty
          Exchange 2022: Start and grow a beauty business
        </p>
        <section className="flex justify-between max-w-max flex-wrap">
          <div className="my-3 p-3 mr-3 w-max font-bold text-xl border-bColor border rounded-md flex items-center">
            <img src="https://i.ibb.co/JjCkhQD/sponsors1.png" alt="PrinceTon" />
          </div>
          <div className="my-3 mr-3 p-3 w-max font-bold text-xl border-bColor border rounded-md flex items-center">
            <img src="https://i.ibb.co/6bqx1xm/sponsors2.png" alt="PrinceTon" />
          </div>
          <div className="my-3 mr-3 p-3 w-max font-bold text-xl border-bColor border rounded-md flex items-center">
            <img src="https://i.ibb.co/RCCYSkY/sponsors3.png" alt="PrinceTon" />
          </div>
          <div className="my-3 mr-3 p-3 w-max font-bold text-xl border-bColor border rounded-md flex items-center">
            <img src="https://i.ibb.co/cD3yb0S/sponsors4.png" alt="PrinceTon" />
          </div>
        </section>
      </article>

      <article className="pt-8">
        <h3 className="text-lg font-bold capitalize">Why Attend?</h3>
        <section className="pt-4">
          <ul className="ml-4 pl-2">
            <li>Pitch your products to Boots</li>
            <li>
              Hear top tips from successful beauty entrepreneurs including
              Dr.PAWPAW, UpCircle and Perl Cosmetics
            </li>
            <li>Learn how to pitch your products to retailers</li>
            <li>Understand how to do market research for your brand</li>
            <li>Meet like-minded entrepreneurs and beauty industry experts</li>
          </ul>
          <p className="py-4">
            Proudly sponsored by:
            <a href="#" className="text-blue-700 hover:underline">
              GS1 UK, TSB Bank, Pulse Law
            </a>
            &nbsp; and &nbsp;
            <a href="#" className="text-blue-700 hover:underline">
              Aviva.
            </a>
          </p>
        </section>
        <div className="pt-2">
          <iframe
            className="w-full aspect-video rounded-lg"
            src="https://player.vimeo.com/video/230550778?color=0c88dd&title=0&byline=0&portrait=0&badge=0"
            allow="autoplay; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </article>

      <article className="pt-6">
        <h3 className="py-3 text-lg font-bold capitalize">
          About Enterprise Nation
        </h3>
        <p>
          Enterprise Nation is the UK's most active small business network,
          helping thousands of people turn their good idea into a great
          business. Join today to get everything you need to start and grow your
          small business, in one place.
        </p>
      </article>
    </section>
  );
};

export default EventSponsors;
