
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import Collection from "@/components/home/Collection";
import BrandStory from "@/components/home/BrandStory";
import Craftsmanship from "@/components/home/Craftsmanship";
import InstagramGallery from "@/components/home/InstagramGallery";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Collection />
      <BrandStory />
      <Craftsmanship />
      <InstagramGallery />
      <Newsletter />
      <Footer />
    </main>
  );
}
