const BuildingCard = ({ name, workId, dateOfCreation, type, visibleName }) => {
  return (
    <div className="w-full h-full max-w-sm bg-light rounded-lg shadow-sm flex flex-col p-2">
      <div className="w-full aspect-square overflow-hidden rounded-md mb-4">
        <img
          src="https://picsum.photos/600"
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow text-primary">
        <p className="text-xl font-semibold ">{dateOfCreation}</p>
        <p className="text-lg">{name}</p>
        <p>{visibleName}</p>
        <p>{type}</p>
        <p>{workId}</p>
      </div>
    </div>
  );
};

export default BuildingCard;
