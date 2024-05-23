import Link from "next/link";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Got a project brewing in your mind? <br className="sm:block hidden" />
        Let's team up and bring it to life!
      </p>
      <Link href="/contact" className="btn cursor-pointer">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
