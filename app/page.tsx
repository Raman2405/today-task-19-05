import Hero from '@/components/hero';
import FeaturedDesigns from '@/components/featured-designs';
import CategoryShowcase from '@/components/category-showcase';
import DesignProcess from '@/components/design-process';
import Testimonials from '@/components/testimonials';
import DesignerSpotlight from '@/components/designer-spotlight';
import CallToAction from '@/components/call-to-action';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <FeaturedDesigns />
      <CategoryShowcase />
      <DesignProcess />
      <DesignerSpotlight />
      <Testimonials />
      <CallToAction />
    </div>
  );
}