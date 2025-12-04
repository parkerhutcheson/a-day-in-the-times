import Header from "./components/Header";
import Footer from "./components/Footer";
import LookBackSection from "./components/LookBackSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-serif">
      <Header />
      <LookBackSection />
      <Footer />
    </div>
  );
}