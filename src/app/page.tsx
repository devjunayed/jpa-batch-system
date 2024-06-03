import { TUiData, TUiDataProps } from "@/interfaces/data.interface";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import Advantages from "@/components/Home/Advantages";
import Customizable from "@/components/Home/Customizable";

async function fetchData(url: string): Promise<TUiData> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data: TUiData[] = await res.json();
  return data[0];
}



const Home: React.FC<TUiData> = async  () => {

  const data = await fetchData(`${process.env.BASE_URL}/data.json`);


  return (
    <div className="relative overflow-hidden">
      <div className="bg-cover bg-no-repeat min-w-screen min-h-screen">
        <div className="mx-auto lg:w-[85vw]">
          <Navbar />
        </div>
        <Hero data={data} />
        <Features data={data.features} />
        <Advantages />
        <Customizable />
      </div>
    </div>
  );
};



export default Home;
