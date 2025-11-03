// import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import MeetLivsee from "@/components/MeetLivsee";
import TrustedByIndustry from '@/components/TrustedByIndustry'
import TeamMembers from '@/components/TeamMembers'
// import Footer from "@/components/Footer";


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroBanner />
      <MeetLivsee />
      <TrustedByIndustry  />
      <TeamMembers />      
    </main>
  );
}
