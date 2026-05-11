import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import ProductCard from "../Components/ProductCard";
import { products } from "../assets/products/products";
function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <h2 className="text-3xl font-bold px-4">Available Products</h2>
      <div className="flex items-center justify-center flex-wrap gap-3 mt-6">
        {products.map((product) => (
        <ProductCard key={product.id} name={product.name} price={product.price} image={product.image} />
        ))}
      </div>
    </>
  );
}

export default Home;
