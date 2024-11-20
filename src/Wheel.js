import React from "react";
import "./Wheel.css";

const Wheel = () => {
  const numbersArray = [
    0,
    28,
    9,
    26,
    30,
    11,
    7,
    20,
    32,
    17,
    5,
    22,
    34,
    15,
    3,
    24,
    36,
    13,
    1,
    "00",
    27,
    10,
    25,
    29,
    12,
    8,
    19,
    31,
    18,
    6,
    21,
    33,
    16,
    4,
    23,
    35,
    14,
    2,
  ];

  return (
    <div className="wheelContainer">
      <div className="pointer"></div>
      <div className="wheel">
        {numbersArray.map((number, index) => {
          const angle = 360 / numbersArray.length;
          const rotation = angle * index;
          const skew = angle * -8.5;

          return (
            <div
              className="segmentContainer"
              key={index}
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <div
                className="segment"
                style={{
                  transform: `skewY(${skew}deg)`,
                }}
              ></div>
              <div className="number">{number}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wheel;
