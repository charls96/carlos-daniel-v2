const MatrixPill = ({ red, blue }) => {
  const pillColors = {
    red: {
      backgroundImage:
        "linear-gradient(90deg,#E32E2E 50%,#E32E2E 50%,#AC2020 50%,#AC2020 100%)",
      transform: "rotate(-45deg)",
    },
    blue: {
      backgroundImage:
        "linear-gradient(90deg, #47A1E0 50%,#47A1E0 50%,#3A81B3 50%,#3A81B3 100%)",
      transform: "rotate(45deg)",
    },
  };
  return (
    <div className="relative">
      <div
        style={red ? pillColors.red : pillColors.blue}
        className="matrix-pill"
      ></div>
    </div>
  );
};

export default MatrixPill;
