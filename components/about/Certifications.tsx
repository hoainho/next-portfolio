import { certsAndAwards } from "@/lib/constants";
import BallCanvas from "@/components/models/Ball";

type Props = {};

const Certifications = (props: Props) => {
  return (
    <div className="py-10 flex flex-col">
      <h3 className="subhead-text">My Awards & Certifications</h3>

      <div className="relative bg-linear-black-to-white py-8 flex-center flex-row flex-wrap gap-[20px] mt-16">
        <div className="bg-linear-back"></div>
        {certsAndAwards.map((cert, index) => (
          <div className="w-full max-w-[400px] flex-center flex-col" key={cert.name}>
            <BallCanvas icon={cert.badge} />
            <a href={cert.link} target="_blank" className="cursor-pointer">
              <h3 className="text-white text-center text-[16px] font-bold capitalize leading-tight tracking-wider hover:text-[#60efff]">
                {cert.name}
              </h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
