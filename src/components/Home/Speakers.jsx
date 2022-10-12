import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Speakers = () => {
  return (
    <>
      <h2 className="my-6 text-xl font-bold">Speakers</h2>
      <section className="flex flex-wrap justify-between">
        <article className="border mb-4 border-bColor rounded-md p-3 w-[49%]">
          <img
            src="https://i.ibb.co/RgbWx11/avatar.png"
            alt="avatar"
            className="rounded-full h-16 w-16 object-cover"
          />
          <div>
            <h4 className="font-semibold">Olivia Adams</h4>
            <p className="text-sm font-semibold">
              Co-Owner of Perl Cosmetics Company
            </p>
          </div>
          <p className="py-3 text-gray-main text-sm">
            Anika Dafert is an environmental activist and co-founder of the
            Fridays For Future movement in Salzburg, Austria. In 2019 she
            traveled to the UN Climate Action Summit.
          </p>
          <div className="flex justify-between py-2 max-w-max text-gray-main">
            <FaInstagram className="h-6 w-6 mr-3" />
            <FaFacebook className="h-6 w-6" />
          </div>
        </article>
        <article className="border border-bColor mb-4 rounded-md p-3 w-[49%]">
          <img
            src="https://i.ibb.co/LkLGR9d/avatar2.png"
            alt="avatar"
            className="rounded-full h-16 w-16 object-cover"
          />
          <div>
            <h4 className="font-semibold">Oskar Bryszak</h4>
            <p className="text-sm font-semibold">
              Senior business development manager
            </p>
          </div>
          <p className="py-3 text-gray-main text-sm">
            The young climate activist was invited as a guest in several TV and
            radio shows where she raised awareness for the detrimental
            consequences of climate change.
          </p>
          <div className="flex justify-between py-2 max-w-max text-gray-main">
            <FaInstagram className="h-6 w-6 mr-3" />
            <FaFacebook className="h-6 w-6" />
          </div>
        </article>
      </section>
    </>
  );
};

export default Speakers;
