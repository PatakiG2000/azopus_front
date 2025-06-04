import React, { useEffect, useState } from "react";

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
    <div>
      {result ? (
        <div>{JSON.stringify(result)}</div>
      ) : (
        <p>Adatok betöltése folyamatban...</p>
      )}
    </div>
  );
};

export default HomePage;
