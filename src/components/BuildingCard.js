import { useState } from "react";
import {
  FaCalendarAlt,
  FaTag,
  FaEye,
  FaShapes,
  FaFingerprint,
} from "react-icons/fa";

const BuildingCard = ({ name, workId, dateOfCreation, type, visibleName }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="w-full h-full max-w-sm bg-light rounded-lg shadow-sm flex flex-col p-2">
      <div className="relative w-full aspect-square overflow-hidden rounded-md mb-4">
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-md" />
        )}
        <img
          src="https://picsum.photos/600"
          alt={name}
          className={`h-full w-full object-cover transition-opacity duration-300 ease-in-out hover:scale-105 ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsImageLoaded(true)}
        />
      </div>
      <div className="flex flex-col justify-between flex-grow text-primary">
        <div className="flex items-center">
          <FaCalendarAlt
            className={"text-gray-500 text-lg mr-3 shrink-0"}
            aria-hidden="true"
          />
          <p className="text-xl font-semibold">{dateOfCreation}</p>
        </div>

        <div className="flex items-center">
          <FaTag
            className={"text-gray-500 text-lg mr-3 shrink-0"}
            aria-hidden="true"
          />
          <p className="text-lg">{name}</p>
        </div>

        <div className="flex items-center">
          <FaEye
            className={"text-gray-500 text-lg mr-3 shrink-0"}
            aria-hidden="true"
          />
          <p>{visibleName}</p>
        </div>

        <div className="flex items-center">
          <FaShapes
            className={"text-gray-500 text-lg mr-3 shrink-0"}
            aria-hidden="true"
          />
          <p>{type}</p>
        </div>

        <div className="flex items-center">
          <FaFingerprint
            className={"text-gray-500 text-lg mr-3 shrink-0"}
            aria-hidden="true"
          />
          <p>{workId}</p>
        </div>
      </div>
    </div>
  );
};

export default BuildingCard;
