import "./ToggleButton.css";

function ToggleButton({ Toggle, setToggle }) {
  const handleToggle = () => {
    setToggle({
      sidebar: `${Toggle.sidebar === "0px" ? "-250px" : "0px"}`,
      toggle: !Toggle.toggle,
    });
  };

  return (
    <>
      <div
        onClick={handleToggle}
        className={`menu ${Toggle.toggle ? "open" : ""}`}
      >
        <div>
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
        </div>
      </div>
    </>
  );
}

export default ToggleButton;
