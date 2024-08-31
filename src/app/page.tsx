import Header from "./components/header";
import Navbar from "./components/navbar";
import ProductDescription from "./components/product-description";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Header />
      <ProductDescription />
    </main>
  );
}
