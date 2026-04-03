"use client";

import { FocusEvent, LegacyRef, Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";

import { Fox } from "@/components/models/Fox";
import useAlert from "@/hooks/useAlert";
import Alert from "@/components/alert/Alert";
import { sendGAEvent } from "@next/third-parties/google";
import CanvasLoader from "@/components/loader/LoaderWithProgressPercent";

const CONTACT_INFO = [
  {
    label: "Email",
    value: "hoainho.work@gmail.com",
    href: "mailto:hoainho.work@gmail.com",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Ho Chi Minh City, Vietnam",
    href: null,
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    label: "Response",
    value: "Within 24 hours",
    href: null,
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const inputStyles = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "10px",
  color: "#f0f2f8",
  fontSize: "14px",
  padding: "12px 16px",
  width: "100%",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
} as const;

const Contact = () => {
  const formRef = useRef() as unknown as LegacyRef<HTMLFormElement> | undefined;
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = ({
    target: { name, value },
  }:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = (
    event:
      | FocusEvent<HTMLInputElement>
      | FocusEvent<HTMLTextAreaElement>
      | FocusEvent<HTMLButtonElement>,
  ) => {
    setFocusedField(event?.target?.name ?? null);
    if (event?.target?.name === "email") {
      setCurrentAnimation("walk.left");
    } else {
      setCurrentAnimation("walk");
    }
  };

  const handleBlur = () => {
    setFocusedField(null);
    setCurrentAnimation("idle");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");
    sendGAEvent({ event: "Send message by email" });

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          from_name: form.name,
          to_name: "Hoài Nhớ",
          from_email: form.email,
          to_email: "hoainho.work@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message. I appreciate your communication. Allow me a moment to review its contents.",
            type: "success",
          });
          setTimeout(() => {
            hideAlert();
            setCurrentAnimation("idle");
            setForm({ name: "", email: "", message: "" });
          }, 3000);
        },
        () => {
          setLoading(false);
          setCurrentAnimation("idle");
          showAlert({
            show: true,
            text: "Regrettably, I have not yet received your message. Please try again 😢",
            type: "danger",
          });
        },
      );
    return true;
  };

  return (
    <div
      className="relative min-h-screen"
      style={{ backgroundColor: "#050709" }}
    >
      <div className="absolute -top-60 -left-40 w-[800px] h-[800px] rounded-full bg-violet-700/[0.07] blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-500/[0.05] blur-[140px] pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 30% 40%, black 20%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 30% 40%, black 20%, transparent 70%)",
        }}
      />

      {alert.show && <Alert {...alert} />}

      <div className="ds-section-wrap relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 min-w-0 lg:max-w-[480px]"
          >
            <div className="flex items-center gap-2.5 mb-6">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-violet-400/60" />
              <p className="font-mono text-[11px] text-violet-400/80 tracking-[0.28em] uppercase">
                Contact
              </p>
            </div>

            <h1
              className="font-black leading-[0.9] tracking-tight text-white mb-5"
              style={{ fontSize: "clamp(44px,7vw,80px)" }}
            >
              Let&apos;s{" "}
              <span className="ds-gradient-text-animated">build</span>
              <br />
              something.
            </h1>

            <p className="text-[#8892a4] text-[15px] leading-relaxed mb-8 max-w-sm">
              Have a project in mind or want to explore opportunities? I&apos;d
              love to hear from you.
            </p>

            <div className="flex flex-col gap-3 mb-10">
              {CONTACT_INFO.map((info) => (
                <div
                  key={info.label}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span className="text-violet-400/60">{info.icon}</span>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] text-slate-700 tracking-[0.15em] uppercase mb-0.5">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-[#8892a4] text-sm hover:text-violet-300 transition-colors truncate block"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-[#8892a4] text-sm">{info.value}</p>
                    )}
                  </div>
                  <div className="ml-auto flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="font-mono text-[10px] text-emerald-400/70">
                      Online
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <div>
                <label className="font-mono text-[11px] text-slate-600 tracking-[0.15em] uppercase block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  style={{
                    ...inputStyles,
                    borderColor:
                      focusedField === "name"
                        ? "rgba(139,92,246,0.5)"
                        : "rgba(255,255,255,0.08)",
                    boxShadow:
                      focusedField === "name"
                        ? "0 0 0 3px rgba(139,92,246,0.1)"
                        : "none",
                  }}
                />
              </div>

              <div>
                <label className="font-mono text-[11px] text-slate-600 tracking-[0.15em] uppercase block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  value={form.email}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  style={{
                    ...inputStyles,
                    borderColor:
                      focusedField === "email"
                        ? "rgba(56,189,248,0.5)"
                        : "rgba(255,255,255,0.08)",
                    boxShadow:
                      focusedField === "email"
                        ? "0 0 0 3px rgba(56,189,248,0.1)"
                        : "none",
                  }}
                />
              </div>

              <div>
                <label className="font-mono text-[11px] text-slate-600 tracking-[0.15em] uppercase block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  style={{
                    ...inputStyles,
                    resize: "vertical",
                    borderColor:
                      focusedField === "message"
                        ? "rgba(139,92,246,0.5)"
                        : "rgba(255,255,255,0.08)",
                    boxShadow:
                      focusedField === "message"
                        ? "0 0 0 3px rgba(139,92,246,0.1)"
                        : "none",
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                name="submit"
                onFocus={handleFocus}
                onBlur={handleBlur}
                aria-label="Send Message"
                className="btn-dark group flex items-center justify-center gap-2.5 w-full mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send message</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full lg:w-[45%] md:h-[540px] h-[340px] relative"
          >
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(139,92,246,0.08) 0%, transparent 70%)",
              }}
            />
            <Canvas
              camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
            >
              <directionalLight position={[0, 0, 1]} intensity={2.5} />
              <ambientLight intensity={1} />
              <pointLight position={[5, 10, 0]} intensity={2} />
              <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                intensity={2}
              />
              <Suspense fallback={<CanvasLoader />}>
                <Fox
                  currentAnimation={currentAnimation}
                  position={[0.5, 0.35, 0]}
                  rotation={[12.629, -0.6, 0]}
                  scale={[0.65, 0.65, 0.65]}
                />
              </Suspense>
            </Canvas>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
