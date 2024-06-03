import React from "react";
import { TUiDataProps } from "@/interfaces/data.interface";
import Navbar from "@/components/common/Navbar";

async function fetchData(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Home: React.FC<TUiDataProps> = async () => {
  const data = await fetchData(`${process.env.BASE_URL}/data.json`);
  console.log(data);

  return (
    <div className="bg-cover bg-no-repeat min-w-screen min-h-screen">
      <div className="mx-auto lg:w-[85vw]">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
