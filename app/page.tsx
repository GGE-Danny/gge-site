import Hero from "@/components/Home/Hero";
import WhatWeRun from "@/components/Home/WhatWeRun";
import WhatWeBuild from "@/components/Home/WhatWeBuild";
import ProfileSection from "@/components/Home/ProfileSection";
import TeamSection from "@/components/Home/TeamSection";
import FoundersNote from "@/components/Home/FoundersNote";
import TechStack from "@/components/Home/TechStack";
import Begin from "@/components/Home/Begin";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhatWeRun />
      <WhatWeBuild />
      <ProfileSection />
      <TechStack />
      <TeamSection />
      <FoundersNote />
      <Begin />
    </div>
  );
}
