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
  const reds = [
    1, 3, 5, 7, 9, 12, 14, 16, 18, 21, 23, 25, 27, 28, 30, 32, 34, 36,
  ];
  const blacks = [
    2, 4, 6, 8, 10, 11, 13, 15, 17, 19, 20, 22, 24, 26, 29, 31, 33, 35,
  ];

  return (
    <div className="wheelContainer">
      <div className="pointer"></div>
      <div className="wheel">
        {numbersArray.map((number, index) => {
          // Notice that there is a new const for the angle.
          // This is because we will be multipying the angle to get the skew value.
          // The skew is going to change dynamically with the angle.
          const angle = 360 / numbersArray.length;
          const rotation = angle * index;
          const skew = angle * -8.5;
          return (
            <div
              className="segment"
              style={{ transform: `rotate(${rotation}deg) skewY(${skew}deg)` }}
            >
              <div className="number">{number}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wheel;