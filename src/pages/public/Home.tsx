import AboutPreviewSection from "../../components/sections/AboutPreviewSection";
import BookingSection from "../../components/sections/BookingSection";
import GallerySection from "../../components/sections/GallerySection";
import HeroSection from "../../components/sections/HeroSection";
import ServicesPreviewSection from "../../components/sections/ServicesPreviewSection";
import TestimonialsSection from "../../components/sections/TestimonialsSection";

function Home() {
  return (
    <main className="bg-[#f5eee3] text-[#1f1a17]">
      <HeroSection />
      <ServicesPreviewSection />
      <AboutPreviewSection />
      <GallerySection />
      <TestimonialsSection />
      <BookingSection />
    </main>
  );
}

export default Home;
