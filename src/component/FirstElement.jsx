import React from "react";
import Image1 from "../assets/arabian-ranches.jpg";
import Image2 from "../assets/arabian-ranches-ii.jpg";
import Image3 from "../assets/downtown-dubai.jpg";
import Image4 from "../assets/dubai-hills-estate.jpg";
import Image5 from "../assets/dubai-marina.png";
import Image6 from "../assets/emirates-living.jpg";

const FirstElement = () => {
  const data = [
    {
      id: 1,
      name: "Arabian Ranches",
      desc: "Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desert scape. The development features a number of residential communities that draw inspiration from Spanish and Arabian architecture.",
      imgSrc: Image1,
    },
    {
      id: 2,
      name: "Arabian Ranches II",
      desc: "Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desert scape. The development features a number of residential communities that draw inspiration from Spanish and Arabian architecture.",
      imgSrc: Image2,
    },
    {
      id: 3,
      name: "Downtown Dubai",
      desc: "The Centre of Now. The most prestigious square kilometre in the world. Downtown Dubai is no stranger to such accolades, and yet it’s hard to overstate the prominence of this community.",
      imgSrc: Image3,
    },
    {
      id: 4,
      name: "Dubai Hills Estate",
      desc: "Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desert scape. The development features a number of residential communities that draw inspiration from Spanish and Arabian architecture.",
      imgSrc: Image4,
    },
    {
      id: 5,
      name: "Dubai Marina",
      desc: "Dubai Marina is one of the world’s largest, most meticulously planned waterfront developments and offers the exhilaration and vibrancy of a chic, urban lifestyle together with all the advantages of living on the water.",
      imgSrc: Image5,
    },
    {
      id: 6,
      name: "Emirates Living",
      desc: "Launched in 2003, Emirates Living is a modern lifestyle community focused on outdoor leisure. Emirates Living offers a serene nature-filled sanctuary, with 8,659 premium villas nestled within 52.2 million square feet of lush greenery.",
      imgSrc: Image6,
    },
  ];
  return (
    <>
      <div className="">
        <h2 className="text-[#887C68] uppercase text-center text-[20px] sm:text-[28px] text-martel font-semibold my-10">
          Communities we manage
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:m-10">
          {data.map((val) => {
            return (
              <div
                className="shadow-box flex flex-col justify-between"
                key={val.id}
              >
                <img
                  src={val.imgSrc}
                  alt={val.name}
                  className="h-[292px] object-cover"
                />
                <div className="p-6">
                  <p className="text-opensans text-base text-[#887C68]  font-[400]">
                    {val.desc}
                  </p>
                </div>
                <div className="bg-[#F8F8F8] p-6">
                  <p className="text-opensans text-[22px] text-[#887C68]">
                    {val.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FirstElement;
