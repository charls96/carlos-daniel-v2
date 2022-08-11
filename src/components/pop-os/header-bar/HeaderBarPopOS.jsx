import DateTime from "./DateTime";
import LogoPopOS from "./LogoPopOS";
import BuiltWith from "./BuiltWith";

const HeaderBarPopOS = () => {
  return (
    <div className="relative z-50 py-0.5 px-4 bg-[#272424] drop-shadow-sm rounded-t-lg flex justify-between items-center">
        <LogoPopOS />
        <DateTime />
        <BuiltWith />
    </div>
  );
};

export default HeaderBarPopOS;
