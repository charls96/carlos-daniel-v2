import Home from "../page/Home/Home";
import HeaderBarPopOS from "./header-bar/HeaderBarPopOS";
import { HeaderPopOS } from "./header/HeaderPopOS";
import FooterPopOS from "./footer/FooterPopOs";

const LayoutPopOS = ({ children }) => {
  return (
    <div className="bg-[#373737] h-screen w-screen bg-clip-padding backdrop-filter bg-opacity-40 flex items-center justify-center overflow-x-hidden">
      <div className="bg-[#373737] max-w-[80rem] w-[90vw] drop-shadow-2xl shadow-[0px_0px_15px_2px_rgba(0,0,0,0.6)] rounded-t-lg border border-slate-900">
        <HeaderBarPopOS />
        <HeaderPopOS />
        {children}
        <FooterPopOS />
      </div>
    </div>
  );
};

export default LayoutPopOS;
