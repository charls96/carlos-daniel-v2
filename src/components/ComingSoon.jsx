const ComingSoon = ({ right, top, text }) => {
  return (
    <div
      className={`${right} ${top} ${text} absolute font-bold text-xs text-slate-900 bg-amber-500 px-1 rounded`}
    >
      Coming soon!
    </div>
  );
};

export default ComingSoon;
