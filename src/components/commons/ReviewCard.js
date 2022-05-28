import React, { useEffect, useState } from "react";

function ReviewCard({ name, stars, text }) {
  const [starsEl, setStarsEl] = useState([]);
  useEffect(() => {
    if (starsEl.length < 5) {
      for (let i = 0; i < 5; i++) {
        console.log(i < stars - 1, starsEl);
        if (i < stars - 1) {
          setStarsEl((state) => {
            state.push(true);
            return state;
          });
          console.log(starsEl);
        } else {
          setStarsEl((state) => {
            state.push(false);
            return state;
          });
        }
      }
    }
    console.log(starsEl);
  }, [stars, starsEl]);

  return (
    <div className="flex flex-col gap-2 p-2 border-[1px] border-white hover:border-gray-300 will-change-transform transition-all duration-150 ease-in-out box-border">
      <h3 className="font-bold text-2xl">{name}</h3>
      <div className="flex gap-1">
        {starsEl.map((val) => {
          console.log(val);
          return val ? (
            <svg
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 0L14.1942 8.2918H22.9127L15.8593 13.4164L18.5534 21.7082L11.5 16.5836L4.44658 21.7082L7.14074 13.4164L0.0873222 8.2918H8.80583L11.5 0Z"
                fill="#F7D716"
              />
            </svg>
          ) : (
            <svg
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 0L14.1942 8.2918H22.9127L15.8593 13.4164L18.5534 21.7082L11.5 16.5836L4.44658 21.7082L7.14074 13.4164L0.0873222 8.2918H8.80583L11.5 0Z"
                fill="#D9D9D9"
              />
            </svg>
          );
        })}
      </div>
      <p className="text-xl leading-tight">{text}</p>
    </div>
  );
}

export default ReviewCard;
