import { AiOutlineStar } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";

const Tickets = () => {
  return (
    <>
      <h2 className="my-6 text-xl font-bold">Tickets Packages</h2>
      <section className="flex flex-wrap justify-between">
        <article className="border border-bColor mb-4 rounded-md p-3 w-[49%]">
          <div className="mb-2 h-8 w-8 bg-blue-200 text-blue-800 rounded-full flex justify-center items-center">
            <AiOutlineStar className="h-4 w-4" />
          </div>
          <div>
            <h4 className="font-semibold">General Admission</h4>
            <p className="text-sm font-semibold">$89.00</p>
          </div>
          <p className="py-3 text-gray-main text-sm">
            Includes access to both New York Hall and Virtual Festival days.
          </p>
          <div className="flex justify-between py-2 max-w-max text-gray-main"></div>
        </article>
        <article className="border border-bColor mb-4 rounded-md p-3 w-[49%]">
          <div className="mb-2 h-8 w-8 bg-blue-200 text-blue-800 rounded-full flex justify-center items-center">
            <BsBookmark className="h-4 w-4" />
          </div>
          <div>
            <h4 className="font-semibold">Sponsor Special</h4>
            <p className="text-sm font-semibold">Free Price</p>
          </div>
          <p className="py-3 text-gray-main text-sm">
            Includes access to Virtual Festival days only. and video content.
          </p>
          <div className="flex justify-between py-2 max-w-max text-gray-main"></div>
        </article>
      </section>
    </>
  );
};

export default Tickets;
