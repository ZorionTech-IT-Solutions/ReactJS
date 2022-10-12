import { HiOutlineMail } from "react-icons/hi";

const Navigation = ({ transferFocus, setIsDark, isDark }) => {
  return (
    <>
      <nav className="container-fluid px-2 md:px-8 lg:px-16 flex justify-between items-center tall:h-16 h-12 bg-white fixed w-full drop-shadow-md dark:text-white dark:bg-black">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl mr-4">Kastio</h1>
        </div>
        <div className="text-1xl flex justify-end items-center w-full">
          <select>
            <option>English</option>
          </select>
          <span className="pl-1 md:pl-2 lg:pl-3 text-slate-300">|</span>
          <button className="capitalize w-32 flex justify-around items-center mx-1 md:mx-2 lg:mx-3">
            <HiOutlineMail />
            Contact Us
          </button>
          <button
            onClick={transferFocus}
            className="capitalize border border-primary rounded-md tall:py-2 py-1 px-0.5 md:px-2 lg:px-3 text-primary font-semibold hover:bg-primary hover:text-white mr-4"
          >
            Event Registration
          </button>
          <button
            onClick={() => setIsDark(!isDark)}
            className="capitalize border border-primary rounded-md tall:py-2 py-1 px-0.5 md:px-2 lg:px-3 text-primary font-semibold hover:bg-primary hover:text-white"
          >
            Mode Change
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
