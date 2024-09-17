import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
import NewsletterForm from "./components/newsletter-form";
import ProductDescription from "./components/product-description";
import Questions from "./components/questions";
import Reviews from "./components/reviews";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Header />
      <ProductDescription />
      <NewsletterForm />
      <Reviews />
      <Questions />
      <Footer />
    </main>
  );
}
