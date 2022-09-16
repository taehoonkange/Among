import { useState } from "react";
import arrow from "../../images/arrow-down.png";
import "./Dropdown.css";
function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = [
    "2022-09-15",
    "2022-09-16",
    "2022-09-17",
    "2022-09-18",
    "2022-09-19",
  ];
  return (
    <div className="container">
      <div className="dropdown">
        <div
          style={{
            color: selected !== "Choose" && "black",
            border: selected !== "Choose" && !isActive && "1px solid #000000",
          }}
          onClick={(e) => setIsActive(!isActive)}
          className={`dropdown-btn ${isActive && "active"}`}
        >
          {selected}
          <img
            className={`arrowImg ${isActive && "rotate"}`}
            src={arrow}
            alt=""
          />
        </div>
        {isActive && (
          <div className={`dropdown-content ${isActive && "active"}`}>
            {options.map((option) => (
              <div
                onClick={(e) => {
                  setSelected(option);
                  setIsActive(false);
                }}
                className="dropdown-item"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
