const EventSeries = () => {
  return (
    <>
      <h2 className="my-5 text-xl font-bold">Event Series</h2>
      <hr />
      <section>
        <article className="py-4 flex items-center border-b">
          <img
            src="https://i.ibb.co/WG9M2HC/event1.png"
            alt="event"
            className="h-[5.5rem] w-[5.5rem] rounded-md"
          />
          <div className="pl-4">
            <p className="text-gray-main text-xs">
              <time>28 Sep, 3:00 PM</time>
            </p>
            <h4 className="font-semibold">
              Addressing challenges in the Cell & Gene Therapy industry
            </h4>
            <p className="pt-2 text-gray-main text-sm">
              The young climate activist was invited as a guest in several TV
              and radio shows where she raised awareness for the detrimental
              consequences of climate change.
            </p>
          </div>
        </article>
        <article className="py-4 flex items-center border-b">
          <img
            src="https://i.ibb.co/fY6wJtZ/event2.png"
            alt="event"
            className="h-[5.5rem] w-[5.5rem] rounded-md"
          />
          <div className="pl-4">
            <p className="text-gray-main text-xs">
              <time>29 Sep, 3:00 PM</time>
            </p>
            <h4 className="font-semibold">
              Giving Working Families the Benefits
            </h4>
            <p className="pt-2 text-gray-main text-sm">
              Anika Datert is an environmental activist and co-founder of the
              Fridays For Future movement in Salzburg, Austria. In 2019 she
              traveled to the UN Climate Action Summit.
            </p>
          </div>
        </article>
        <article className="py-4 flex items-center border-b">
          <img
            src="https://i.ibb.co/KjnWZzq/event3.png"
            alt="event"
            className="h-[5.5rem] w-[5.5rem] rounded-md"
          />
          <div className="pl-4">
            <p className="text-gray-main text-xs">
              <time>30 Sep, 3:00 PM</time>
            </p>
            <h4 className="font-semibold">
              Teaching that Reaches: Creating a REAL Church School
            </h4>
            <p className="pt-2 text-gray-main text-sm">
              This session will challenge clergy with the importance of the
              Church's ministry to youth and will provide insights for how
              pastoral leaders can be intentional through vision...
            </p>
          </div>
        </article>

      </section>
    </>
  );
};

export default EventSeries;
