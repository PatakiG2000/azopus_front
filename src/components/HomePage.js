import { useEffect, useState } from "react";
import BuildingCard from "./BuildingCard";

const HomePage = () => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/calvez/56bec47cb9c97d9999574adc65ef5368/raw/51f01cb2a160748d87dd40eae7d3785272a87355/all.json"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setResult(result);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Azopus</h1>
      {result ? (
        <div className="pr-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 border-r border-secondary border-r-[12px]">
          {result.map((building) => (
            <BuildingCard
              key={building.id}
              name={building.nev}
              workId={building.alkotoId}
              dateOfCreation={building.keletkezesKezdoIdopontjaInt}
              type={building.tipus}
              visibleName={building.megjelenitendoNev}
            />
          ))}
        </div>
      ) : (
        <p>Adatok betöltése folyamatban...</p>
      )}
    </main>
  );
};

export default HomePage;
