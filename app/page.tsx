import Hero from "@/components/Home/Hero";
import MarketplaceTeaser from "@/components/Home/MarketplaceTeaser";
import ProfileSection from "@/components/Home/ProfileSection";
import FoundersNote from "@/components/Home/FoundersNote";
import ExperienceSection from "@/components/Home/ExperienceSection";
import TechStack from "@/components/Home/TechStack";

export default function Home() {
  return (
    <div>
      <Hero />
      <MarketplaceTeaser />
      <ProfileSection />
      <FoundersNote />
      <ExperienceSection />
      <TechStack />
    </div>
  );
}
