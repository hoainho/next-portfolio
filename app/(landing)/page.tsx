import Audio from "@/components/home/Audio";
import LayoutIsland from "@/components/home/LayoutIsland";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Overview | Hoai Nho - Portfolio",
  description:
    "I'm Software Engineer from Viet Nam with over 4 year of experience. I'm passionate about developing and maintaining high quality software. I love my work and I'm always looking for new challenges. I'm open for any collaboration. Let's work together!",
  keywords:
    "Software Engineer, VietNam, Hoài Nhớ, Nguyễn Hoài Nhớ, Nhớ Nguyễn, portfolio, full stack developer, software engineer, open source contributor, javascript, fullstack developer",
};

const Home = () => {
  return (
    <section className="w-full h-[100dvh] relative">
      <LayoutIsland />
      <Audio />
    </section>
  );
};

export default Home;
