import { useEffect, useRef, useState } from "react";

const LogoPopOS = () => {
  const [openInfo, setOpenInfo] = useState(false);
  const logoRef = useRef();
  const logoInfoRef = useRef();

  useEffect(() => {
    const closeInfo = (e) => {
      if (!e.path.includes(logoRef.current) && !e.path.includes(logoInfoRef.current)) {
        setOpenInfo(false);
      }
    };
    document.body.addEventListener("click", closeInfo);

    return () => document.body.removeEventListener("click", closeInfo);
  }, []);
  
  return (
    <div>
      <button
        type="button"
        ref={logoRef}
        onClick={(e) => {
          e.preventDefault();
          setOpenInfo(!openInfo);
        }}
        className={`${
          openInfo ? "bg-gray-200 bg-opacity-20" : ""
        } cursor-pointer rounded-full hover:bg-gray-200 p-0.5 hover:bg-opacity-20 flex items-center justify-center`}
      >
        <svg
          className=""
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 172 172"
        >
          <defs>
            <linearGradient
              x1="25.21592"
              y1="25.21592"
              x2="161.36825"
              y2="161.36825"
              gradientUnits="userSpaceOnUse"
              id="color-1_PKDtxqyKdkxU_gr1"
            >
              <stop offset="0" stopColor="#05acb3"></stop>
              <stop offset="1" stopColor="#038387"></stop>
            </linearGradient>
            <linearGradient
              x1="79.82592"
              y1="113.68483"
              x2="113.44117"
              y2="206.84433"
              gradientUnits="userSpaceOnUse"
              id="color-2_PKDtxqyKdkxU_gr2"
            >
              <stop offset="0" stopColor="#ffffff"></stop>
              <stop offset="0.472" stopColor="#dde0e2"></stop>
              <stop offset="1" stopColor="#bbc1c4"></stop>
            </linearGradient>
            <linearGradient
              x1="107.70067"
              y1="57.78842"
              x2="146.544"
              y2="165.4425"
              gradientUnits="userSpaceOnUse"
              id="color-3_PKDtxqyKdkxU_gr3"
            >
              <stop offset="0" stopColor="#ffffff"></stop>
              <stop offset="0.472" stopColor="#dde0e2"></stop>
              <stop offset="1" stopColor="#bbc1c4"></stop>
            </linearGradient>
            <linearGradient
              x1="102.34358"
              y1="106.9625"
              x2="113.3265"
              y2="137.4065"
              gradientUnits="userSpaceOnUse"
              id="color-4_PKDtxqyKdkxU_gr4"
            >
              <stop offset="0" stopColor="#ffffff"></stop>
              <stop offset="0.472" stopColor="#dde0e2"></stop>
              <stop offset="1" stopColor="#bbc1c4"></stop>
            </linearGradient>
            <linearGradient
              x1="61.00983"
              y1="29.91725"
              x2="145.6195"
              y2="264.407"
              gradientUnits="userSpaceOnUse"
              id="color-5_PKDtxqyKdkxU_gr5"
            >
              <stop offset="0" stopColor="#f0f0f0"></stop>
              <stop offset="1" stopColor="#ffffff"></stop>
            </linearGradient>
          </defs>
          <g transform="">
            <g
              fill="none"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
            >
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <path d="" fill="none"></path>
              <g>
                <path
                  d="M157.66667,86c0,39.57792 -32.08875,71.66667 -71.66667,71.66667c-39.57792,0 -71.66667,-32.08875 -71.66667,-71.66667c0,-39.57792 32.08875,-71.66667 71.66667,-71.66667c39.57792,0 71.66667,32.08875 71.66667,71.66667z"
                  fill="url(#color-1_PKDtxqyKdkxU_gr1)"
                ></path>
                <path
                  d="M55.54167,137.95833h60.91667c3.95958,0 7.16667,-3.20708 7.16667,-7.16667v0c0,-3.95958 -3.20708,-7.16667 -7.16667,-7.16667h-60.91667c-3.95958,0 -7.16667,3.20708 -7.16667,7.16667v0c0,3.95958 3.20708,7.16667 7.16667,7.16667z"
                  fill="url(#color-2_PKDtxqyKdkxU_gr2)"
                ></path>
                <path
                  d="M121.83333,57.33333c-10.75,-3.58333 -12.54167,1.79167 -14.33333,8.95833c-2.2145,8.86158 -3.58333,25.08333 -3.58333,30.45833c0,5.375 3.58333,7.16667 7.16667,1.79167c3.58333,-5.375 14.33333,-23.29167 16.125,-28.66667c1.79167,-5.375 1.634,-10.20533 -5.375,-12.54167z"
                  fill="url(#color-3_PKDtxqyKdkxU_gr3)"
                ></path>
                <path
                  d="M100.319,109.10175c-2.3005,2.98492 -1.55158,9.21275 3.82342,9.27725c3.36117,0.03942 5.676,-3.17842 5.40725,-7.27058c-0.1935,-2.94908 -5.26033,-7.15592 -9.23067,-2.00667z"
                  fill="url(#color-4_PKDtxqyKdkxU_gr4)"
                ></path>
                <path
                  d="M93.16667,43c-10.95067,-18.77308 -30.09642,-15.69142 -47.89483,-2.68033c-4.53292,3.311 -5.91608,9.49225 -3.26083,14.43725l31.9275,59.50483c1.75583,3.27158 5.719,4.65833 9.13392,3.19633v0c3.60483,-1.54442 5.29975,-5.70108 3.79475,-9.32383c-2.93475,-7.07708 -7.50708,-18.12808 -9.8255,-23.92592c7.16667,-3.58333 29.9065,-17.587 16.125,-41.20833zM76.51133,70.26558c-1.84542,1.08575 -6.83342,1.61967 -11.60642,-10.07633c-4.34658,-10.64608 -3.04225,-15.53375 -0.75967,-16.29342c2.28258,-0.75967 7.06275,1.73792 11.62433,10.75358c4.56158,9.01567 2.59075,14.53042 0.74175,15.61617z"
                  fill="url(#color-5_PKDtxqyKdkxU_gr5)"
                ></path>
              </g>
              <path d="" fill="none"></path>
            </g>
          </g>
        </svg>
      </button>
      <div
        ref={logoInfoRef}
        className={`${
          openInfo ? "visible opacity-100" : "invisible opacity-0"
        } transition-all duration-200 absolute left-0 mt-1 py-2 px-1 rounded-lg shadow-lg text-gray-300 bg-[#303030] border border-slate-700 flex flex-col gap-1`}
      >
        <h3 className="whitespace-nowrap font-bold text-sm text-center mb-1">
          My custom POP_OS!
        </h3>
        <a
          href="https://www.gnome-look.org/p/1403328/"
          target="_blank"
          className="text-sm transition ease-in-out hover:bg-gray-200 hover:bg-opacity-20 py-1 px-1.5 rounded-sm duration-300"
        >
          🎨 WhiteSur-dark
        </a>
        <a
          href="https://www.linuxhelp.com/how-to-install-plank-on-popos"
          target="_blank"
          className="text-sm transition ease-in-out hover:bg-gray-200 hover:bg-opacity-20 py-1 px-1.5 rounded-sm duration-300"
        >
          ⚓ Plank dock app
        </a>
        <a
          href="https://github.com/dikiaap/frost-plank-theme"
          target="_blank"
          className="text-sm transition ease-in-out hover:bg-gray-200 hover:bg-opacity-20 py-1 px-1.5 rounded-sm duration-300 whitespace-nowrap"
        >
          🧊 Plank Frost Theme
        </a>
        <a
          href="https://github.com/PapirusDevelopmentTeam/papirus-icon-theme"
          target="_blank"
          className="text-sm transition ease-in-out hover:bg-gray-200 hover:bg-opacity-20 py-1 px-1.5 rounded-sm duration-300"
        >
          😱 Papirus-dark Icons
        </a>
      </div>
    </div>
  );
};

export default LogoPopOS;
