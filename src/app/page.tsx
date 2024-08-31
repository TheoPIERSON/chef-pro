import Header from "./components/header";
import Navbar from "./components/navbar";
import NewsletterForm from "./components/newsletter-form";
import ProductDescription from "./components/product-description";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Header />
      <ProductDescription />
      <NewsletterForm />
    </main>
  );
}
