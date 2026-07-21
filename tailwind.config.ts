import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{mdx,md}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1360px",
      },
    },
    extend: {
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        heading: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        gold: {
          DEFAULT: "hsl(var(--gold))",
          foreground: "hsl(var(--gold-foreground))",
        },
        "gold-vivid": "hsl(var(--gold-vivid))",
        navy: {
          DEFAULT: "hsl(var(--navy))",
          foreground: "hsl(var(--navy-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, hsl(var(--background)))",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.4s ease-out",
        shimmer: "shimmer 3s linear infinite",
      },
      boxShadow: {
        soft: "0 1px 2px 0 rgb(15 27 61 / 0.04), 0 8px 24px -8px rgb(15 27 61 / 0.10)",
        elevated:
          "0 2px 8px 0 rgb(15 27 61 / 0.06), 0 16px 40px -12px rgb(15 27 61 / 0.16)",
        glow: "0 0 0 1px hsl(var(--gold-vivid) / 0.3), 0 8px 30px -8px hsl(var(--gold-vivid) / 0.35)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};

export default config;
