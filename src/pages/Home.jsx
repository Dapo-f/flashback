import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import ProductCard from "../Components/ProductCard";
function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <h2 className="text-3xl font-bold">Available Products</h2>
      <div className="flex items-center justify-center flex-wrap gap-3 mt-6">
        <ProductCard name="Apple watch" price={1000} />
        <ProductCard name="Iphone 14 Pro" price={200000} />
        <ProductCard name="Samsung A56" price={23000} />
        <ProductCard name="Macbook Air" price={120000} />
        <ProductCard name="Samsung S25 Ultra" price={150000} />
        <ProductCard name="Iphone 15" price={230000} />
      </div>
    </>
  );
}

export default Home;
