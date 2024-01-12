import Intro from "@/components/Intro";
import SectionDivider from "@/components/SectionDivider";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <Technologies />
    </main>
  );
}
