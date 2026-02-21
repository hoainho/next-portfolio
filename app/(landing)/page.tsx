import Audio from "@/components/home/Audio";
import LayoutIsland from "@/components/home/LayoutIsland";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Overview | Hoai Nho - Portfolio",
  description:
    "Senior Software Engineer & Frontend Tech Lead from Vietnam with over 5 years of experience. Passionate about developing high-quality software, leading frontend teams, and open source contribution.",
  keywords:
    "Senior Software Engineer, Frontend Tech Lead, VietNam, Hoài Nhớ, Nguyễn Hoài Nhớ, Nhớ Nguyễn, portfolio, fullstack developer, open source contributor, javascript, typescript",
  openGraph: {
    title: "Hoai-Nho | Portfolio",
    description:
      "Senior Software Engineer | Frontend Tech Lead | Open Source Contributor",
    url: `https://hoainho.info`,
    siteName: "Hoai-Nho | Portfolio",
    images: [
      {
        url:
          "https://res.cloudinary.com/dgzdswdgg/image/upload/v1763897121/portfolio-logo_rpnmp9.png",
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
