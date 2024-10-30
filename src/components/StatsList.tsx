import React, { useState } from "react";
import { stats } from "../assets/lists";

export const HomePageStatsList = () => {
  const [currentStats, setCurrentStats] = useState(stats);

  const handleCurrentStat = (newId: number) => {
    const newStats = currentStats
      .map((stat) => {
        if (stat.id === 0) {
          return { ...stat, id: newId };
        } else if (stat.id === newId) {
          return { ...stat, id: 0 };
        } else {
          return stat;
        }
      })
      .sort((a, b) => a.id - b.id);

    setCurrentStats(newStats);
  };
  return (
    <div className="max-w-screen-xl py-14 mx-auto flex justify-between">
      {currentStats.map(
        ({ id, title, img, count, description }) =>
          id === 0 && (
            <div
              className="w-[496px] p-4 bg-lightgrey flex flex-col gap-4"
              key={id}
            >
              <div className="flex justify-between items-center">
                <h4 className="font-libre-baskerville text-h4 uppercase">
                  {title}
                </h4>
                <img
                  src={`${process.env.PUBLIC_URL}/img/homepage/${img}`}
                  alt="satisfied clients"
                  className="w-[85px] h-16 object-contain"
                />
              </div>

              <h2 className="text-h2">{count}</h2>

              <p className="text-grey">{description}</p>
            </div>
          )
      )}

      <div className="flex flex-col justify-between">
        {currentStats.map(
          ({ id, title, img, count }) =>
            id !== 0 && (
              <div
                className="w-[600px] p-4 bg-lightgrey flex justify-between items-center cursor-pointer"
                key={id}
                onClick={() => handleCurrentStat(id)}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={`${process.env.PUBLIC_URL}/img/homepage/${img}`}
                    alt="real reviews"
                    className="w-[85px] h-16 object-contain"
                  />
                  <span className="font-libre-baskerville text-h5 uppercase">
                    {title}
                  </span>
                </div>

                <h2 className="text-h2">{count}</h2>
              </div>
            )
        )}
      </div>
    </div>
  );
};
