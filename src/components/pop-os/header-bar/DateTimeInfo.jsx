import { IoInformationCircleSharp } from "react-icons/io5";

const DateTimeInfo = ({ openInfo, dateTimeInfoRef }) => {
  return (
    <div
      ref={dateTimeInfoRef}
      className={`${
        openInfo ? "visible opacity-100" : "invisible opacity-0"
      } transition-all duration-200 whitespace-nowrap absolute right-[-117%] sm:right-[-150%] mt-1 p-3 rounded-lg shadow-lg text-gray-300 bg-[#303030] border border-slate-700 flex flex-col gap-1`}
    >
      <h3 className="font-bold text-xl border-b-2 pb-1 border-[#373737] text-center mb-3 shadow-sm">
        Interesting Info 🧐
      </h3>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 p-3 bg-[#5e5e5e] shadow-lg bg-opacity-20 rounded-lg hover:bg-gray-50 hover:bg-opacity-20 transition ease-in-out">
          <IoInformationCircleSharp className="text-4xl" />
          <div className="text-sm sm:text-[1rem]">
            <p className="font-bold">Can I use the code in your github?</p>
            <p className="font-regular">
              Yes, but you have to give me attribution
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateTimeInfo;
