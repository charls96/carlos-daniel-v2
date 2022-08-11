import { Buttons } from './Buttons';
import NavPopOS from './NavPopOS';

export const HeaderPopOS = () => {
  return (
    <div className="flex justify-between shadow-lg relative bg-[#333333] border-t rounded-t-lg border-slate-900">
      <NavPopOS />
      <Buttons />
    </div>
  );
};