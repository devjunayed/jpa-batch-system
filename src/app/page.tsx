import { TUiData } from "@/interfaces/data.interface";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import Advantages from "@/components/Home/Advantages";
import Customizable from "@/components/Home/Customizable";
import Testimonials from "@/components/Home/Testimonials";
import Pricing from "@/components/Home/Pricing";
import FAQ from "@/components/Home/FAQ/FAQ";
import GetStarted from "@/components/Home/GetStarted";
import Footer from "@/components/Home/Footer";

async function fetchData(url: string): Promise<TUiData> {
  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${JSON.stringify(data)}`);
    }

    return data.data[0];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

const Home = async () => {
  let data: TUiData;
  try {
    data = await fetchData(`${process.env.NEXT_PUBLIC_BASE_URL}/api/data`);
  } catch (error) {
    // Render error page or fallback UI
    return <div>Failed to load data.</div>;
  }

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
        <Testimonials />
        <Pricing data={data.pricing} />
        <FAQ />
        <GetStarted />
        <div className="mx-auto lg:w-[85vw]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
