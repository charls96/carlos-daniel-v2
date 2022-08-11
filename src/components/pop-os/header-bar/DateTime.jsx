import { useEffect, useRef, useState } from "react";
import DateTimeInfo from "./DateTimeInfo";

const DateTime = () => {
  const [date, setDate] = useState(new Date());
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  });

  const [openInfo, setOpenInfo] = useState(false);
  const dateTimeRef = useRef();
  const dateTimeInfoRef = useRef();

  useEffect(() => {
    const closeInfo = (e) => {
      if (
        !e.path.includes(dateTimeRef.current) &&
        !e.path.includes(dateTimeInfoRef.current)
      ) {
        setOpenInfo(false);
      }
    };
    document.body.addEventListener("click", closeInfo);

    return () => document.body.removeEventListener("click", closeInfo);
  }, []);

  return (
    <div className="relative">
      <button
        id="dateTimeButton"
        type="button"
        ref={dateTimeRef}
        onClick={() => setOpenInfo(!openInfo)}
        className={`${
          openInfo ? "bg-gray-200 bg-opacity-20" : ""
        } flex text-gray-300 text-sm items-center font-extrabold hover:bg-gray-200 hover:bg-opacity-20 rounded-full px-2 py-1 cursor-pointer`}
      >
        <p className="pr-2">
          {monthNames[date.getMonth()] + " " + date.getDate()}
        </p>
        <p>
          {date.getHours() + ":" + String(date.getMinutes()).padStart(2, "0")}
        </p>
      </button>
      <DateTimeInfo openInfo={openInfo} dateTimeInfoRef={dateTimeInfoRef} />
    </div>
  );
};

export default DateTime;
