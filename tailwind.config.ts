/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "361px",
      sm: "481px",
      md: "769px",
      lg: "961px",
      "1024px": "1025px",
      "1072px": "1073px",
      xl: "1201px",
      "1360px": "1361px",
      "2xl": "1441px",
      "1792px": "1793px",
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      backgroundImage: {
        "gradient-purple-coral":
          "linear-gradient(92.05deg, #d2a8ff 12.09%, #f778ba 42.58%, #ff7b72 84.96%)",
      },
      fontFamily: {
        "public-sans": ["var(--font-public-sans)"],
        "sharp-grotesk": ["var(--font-sharp-grotesk)"],
      },
      maxWidth: {
        xs: "360px",
        xl: "1200px",
        "2xl": "1360px",
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        hover: "var(--color-hover)",
        active: "var(--color-active)",
        "basics-background-default": "var(--color-basics-background-default)",
        "basics-background-dark": "var(--color-basics-background-dark)",
        "brand-gold": "var(--color-brand-gold)",
        "brand-dark-blue": "var(--color-brand-dark-blue)",
        brown: "var(--color-brown)",
        "neutral-background-1": "var(--color-neutral-background-1)",
        "neutral-background-2": "var(--color-neutral-background-2)",
        "input-error": "var(--color-input-error)",
        "input-focus": "var(--color-input-focus)",
        "line-button-idle": "var(--color-line-button-idle)",
        "line-button-hover": "var(--color-line-button-hover)",
        "solid-button-idle": "var(--color-solid-button-idle)",
        "solid-button-hover": "var(--color-solid-button-hover)",
        skeleton: "var(--color-skeleton)",
        overlay: "var(--color-overlay)",
        "overlay-black": "var(--color-overlay-black)",
        "floral-white": "var(--color-floral-white)",
        "fg-default": "var(--color-fg-default)",
        "fg-subtle": "var(--color-fg-subtle)",
        "fg-muted": "var(--color-fg-muted)",
        "fg-border": "var(--color-fg-border)",
        "fg-on-emphasis": "var(--color-fg-on-emphasis)",
        "bg-default": "var(--color-bg-default)",
        dark: "var(--color-bg-dark)",
        link: "var(--color-link-hover)",
        "wp--preset--gradient--luminous-dusk":
          "var(--wp--preset--gradient--luminous-dusk)",
        "blog-divider": "var(--blog-divider)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        "inner-border": "0px 0px 0px 2px var(--color-basics-gray-border) inset",
      },
      transitionTimingFunction: {
        fade: "cubic-bezier(0.24, 0.08, 0.32, 0.88)",
      },
    },
  },
};
