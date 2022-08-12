import confetti from 'canvas-confetti'
import {useCallback} from "react";

const Contact = () => {
  const onClickConfetti = useCallback(() => {
    confetti({
      particleCount: 150,
      spread: 60,
      origin: { x: 0.5, y: 0.68 }
    });
    setTimeout( function() { window.location = "mailto:charly.lopez.perez@gmail.com" }, 1000 );
  }, []);

  return (
    <div className="mt-80 lg:mt-44">
      <div className="m-auto w-fit whitespace-nowrap relative z-10">
        <h2 className=" text-5xl sm:text-7xl lg:text-8xl text-pink-500 font-extrabold after:absolute after:left-[3px] after:top-[1px] after:content-['Let\'s_talk'] after:text-pink-700 after:-z-10">
          Let's talk
        </h2>
        <div className="absolute -left-[20%] sm:left-[2%] bottom-[10%] sm:bottom-0 -z-10 opacity-[15%] grayscale-[50%]">
          <svg
            className="w-[18rem] h-[18rem] sm:w-[25rem] sm:h-[25rem]"
            id="emoji"
            viewBox="0 0 72 72"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="color">
              <ellipse
                cx="20"
                cy="26.0208"
                rx="13.8"
                ry="13.8205"
                fill="#FCEA2B"
                stroke="#FCEA2B"
                stroke-miterlimit="10"
                stroke-width="2"
              />
              <path
                fill="#FCEA2B"
                stroke="none"
                d="M18.3981,39.9096C15.2441,44.248,11,46,5,46c2.874-1.916,5.748-5.6676,6.8636-8.617L18.3981,39.9096z"
              />
              <circle
                cx="52"
                cy="41.28"
                r="13.8"
                fill="#FCEA2B"
                stroke="#FCEA2B"
                stroke-miterlimit="10"
                stroke-width="2"
              />
              <path
                fill="#FCEA2B"
                stroke="none"
                d="M53.6019,55.1896C56.7559,59.528,61,61.28,67,61.28c-2.874-1.916-5.748-5.6676-6.8636-8.617 L53.6019,55.1896z"
              />
            </g>
            <g id="hair" />
            <g id="skin" />
            <g id="skin-shadow" />
            <g id="line">
              <circle cx="13" cy="26" r="2" fill="#000000" stroke="none" />
              <circle cx="20" cy="26" r="2" fill="#000000" stroke="none" />
              <circle cx="27" cy="26" r="2" fill="#000000" stroke="none" />
              <path
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
                d="M11.8636,37.383C10.748,40.3324,7.874,44.084,5,46c6,0,10.2441-1.752,13.3981-6.0904"
              />
              <path
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="2"
                d="M22.2749,39.8161 C28.9249,38.7295,34,32.9574,34,26c0-7.732-6.268-14-14-14S6,18.268,6,26c0,3.3337,1.1652,6.3952,3.1105,8.7995"
              />
              <circle cx="59" cy="41.28" r="2" fill="#000000" stroke="none" />
              <circle cx="52" cy="41.28" r="2" fill="#000000" stroke="none" />
              <circle cx="45" cy="41.28" r="2" fill="#000000" stroke="none" />
              <path
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
                d="M60.1364,52.663C61.252,55.6124,64.126,59.364,67,61.28c-6,0-10.2441-1.752-13.3981-6.0904"
              />
              <path
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="2"
                d="M49.7251,55.0961 C43.0751,54.0095,38,48.2374,38,41.28c0-7.732,6.268-14,14-14s14,6.268,14,14c0,3.3337-1.1652,6.3952-3.1105,8.7995"
              />
            </g>
          </svg>
        </div>
        <div className="flex justify-center mt-20 relative">
          <button
            onClick={onClickConfetti}
            href=""
            className="text-pink-300 relative active:scale-110 transition duration-200"
          >
            <div className="px-4 py-2 text-2xl bg-sky-500 border-4 border-sky-700 rounded transition ease-in-out delay-150 hover:translate-y-[10px] hover:translate-x-[10px] relative z-20">
              <p className="font-extrabold after:absolute after:left-[18px] after:top-[10px] after:content-['SAY_HI'] after:text-pink-500 after:-z-10 flex gap-3">
                SAY HI <div className="text-3xl wave">👋🏼</div>
              </p>
            </div>
            <p className="w-full h-full bg-black -z-30 bg-opacity-60 rounded absolute -right-[10px] top-[10px]"></p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
