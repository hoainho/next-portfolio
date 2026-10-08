import AnimatedSection from "@/components/shared/AnimatedSection";

const Education = () => (
  <AnimatedSection className="ds-section">
    <div className="ds-section-header">
      <h3 className="text-3xl md:text-4xl font-black text-white">Education</h3>
    </div>

    <div className="ds-section-divider mb-10" />

    <div className="ds-section-wrap">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-5 border-b border-white/[0.06]">
        <div>
          <h4 className="font-bold text-white text-[15px]">
            Software Technology
          </h4>
          <p className="font-mono text-xs text-slate-500 mt-1">
            HUTECH University
          </p>
        </div>
        <p className="font-mono text-xs text-slate-500">
          <time dateTime="2018-08">Aug 2018</time> –{" "}
          <time dateTime="2022-06">Jun 2022</time>
        </p>
      </div>
    </div>
  </AnimatedSection>
);

export default Education;
