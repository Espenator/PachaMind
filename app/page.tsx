import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedVideoSection } from "@/components/home/FeaturedVideoSection";
import { CrisisSection } from "@/components/home/CrisisSection";
import { CosmovisionSection } from "@/components/home/CosmovisionSection";
import { MeetMallkuSection } from "@/components/home/MeetMallkuSection";
import { PumaPathSection } from "@/components/home/PumaPathSection";
import { ThreePachasSection } from "@/components/home/ThreePachasSection";
import { FiveValuesSection } from "@/components/home/FiveValuesSection";
import { ConservationSection } from "@/components/home/ConservationSection";
import { VideoLibrarySection } from "@/components/home/VideoLibrarySection";
import { FieldNotesSection } from "@/components/home/FieldNotesSection";
import { FAQPreviewSection } from "@/components/home/FAQPreviewSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />
      {/* 2. Opening featured video */}
      <FeaturedVideoSection />
      {/* 3. Crisis of Purpose */}
      <CrisisSection />
      {/* 4. What is Andean Cosmovision? */}
      <CosmovisionSection />
      {/* 5. Meet Mallku Aribalo */}
      <MeetMallkuSection />
      {/* 6. Begin the Puma Path */}
      <PumaPathSection />
      {/* 7. Three Pachas */}
      <ThreePachasSection />
      {/* 8. Five Andean Values */}
      <FiveValuesSection />
      {/* 9. Conservation */}
      <ConservationSection />
      {/* 10. Video Library */}
      <VideoLibrarySection />
      {/* 11. Field Notes */}
      <FieldNotesSection />
      {/* 12. FAQ Preview */}
      <FAQPreviewSection />
      {/* 13. Final CTA */}
      <FinalCTASection />
    </>
  );
}
