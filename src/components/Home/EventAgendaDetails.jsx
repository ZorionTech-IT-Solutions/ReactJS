const EventAgendaDetails = () => {
  return (
    <section>
      <p className="text-gray-main pt-4">
        <time>11:30 AM - 11:45 AM</time>
      </p>
      <h3 className="text-lg py-2">
        Top tips for growth: Panel with successful beauty entrepreneurs
      </h3>
      <p className="text-gray-main font-normal">
        Panel of successful beauty entrepreneurs will kickstart the day by
        sharing their business journeys, and how they got started. The panelists
        will be Anna Brightman, co-founder of UpCircle Beauty, and Isobel Perl,
        founder of Perl Cosmetics.
      </p>
      <section className="flex flex-wrap">
        <div className="my-4 mr-8 flex">
          <img
            src="https://i.ibb.co/RgbWx11/avatar.png"
            alt="icon"
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="ml-2">
            <h4>Olivia Adams</h4>
            <p className="text-gray-main font-normal">
              Co-Owner of Perl Cosmetics
            </p>
          </div>
        </div>
        <div className="my-4 flex">
          <img
            src="https://i.ibb.co/RgbWx11/avatar.png"
            alt="icon"
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="ml-2">
            <h4>Michael Smith</h4>
            <p className="text-gray-main font-normal">Head of Marketing Team</p>
          </div>
        </div>
      </section>
      <hr className="my-6" />
    </section>
  );
};

export default EventAgendaDetails;
