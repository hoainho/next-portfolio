import Audio from "@/components/home/Audio";
import LayoutIsland from "@/components/home/LayoutIsland";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Overview | Hoai Nho - Portfolio",
  description:
    "I'm Software Engineer from Viet Nam with over 4 year of experience. I'm passionate about developing and maintaining high quality software. I love my work and I'm always looking for new challenges. I'm open for any collaboration. Let's work together!",
  keywords:
    "Software Engineer, VietNam, Hoài Nhớ, Nguyễn Hoài Nhớ, Nhớ Nguyễn, portfolio, full stack developer, software engineer, open source contributor, javascript, fullstack developer",
  openGraph: {
    title: "Hoai-Nho | Portfolio",
    description:
      "Deep Javascript & TypeScript | Software Engineer | Open Source Contributor",
    url: `https://hoainho.info`,
    siteName: "Hoai-Nho | Portfolio",
    images: [
      {
        url:
          process.env.NEXT_PUBLIC_LOGO ||
          "https://hn-portfolio.s3.ap-southeast-1.amazonaws.com/logo.jpeg",
        alt: "Hoai-Nho | Portfolio",
        width: 200,
        height: 200,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const Home = () => {
  return (
    <section className="bg-black w-full h-[100dvh] relative">
      <LayoutIsland />
      <Audio />
    </section>
  );
};

export default Home;
