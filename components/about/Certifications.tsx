import BallCanvas from "../models/Ball";

type Props = {};

const Certifications = (props: Props) => {
  return (
    <div className="py-10 flex flex-col">
      <h3 className="subhead-text">My Awards & Certifications</h3>

      <div
        className="bg-linear-black-to-white py-8 flex flex-row gap-[20px]  flex-wrap"
      >
        <div className="flex-center flex-col">
          <BallCanvas icon="/certifications/aws-cloud-practitioner.png" />
          <h3 className="text-white text-[16px] font-bold capitalize cursor-pointer leading-tight tracking-wider ">
            AWS Cloud Practitioner
          </h3>
        </div>
        <div className="flex-center flex-col">
          <BallCanvas icon="/certifications/aws-knowledge-architecture.png" />
          <h3 className="text-white text-[16px] font-bold capitalize cursor-pointer leading-tight tracking-wider">
            AWS Cloud Practitioner
          </h3>
        </div>
        <div className="flex-center flex-col">
          <BallCanvas icon="/certifications/logo-hutech.png" />
          <h3 className="text-white text-[16px] font-bold capitalize cursor-pointer leading-tight tracking-wider">
            AWS Cloud Practitioner
          </h3>
        </div>
        <div className="flex-center flex-col">
          <BallCanvas icon="/certifications/logo-hutech.png" />
          <h3 className="text-white text-[16px] font-bold capitalize cursor-pointer leading-tight tracking-wider">
            AWS Cloud Practitioner
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
