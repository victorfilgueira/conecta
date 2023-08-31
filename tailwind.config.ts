import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "bg-header": "url('/public/images/bg-image.jpg')",
            },
            colors: {
                "primary-gray": "#1B1F1C",
                "primary-black": "#101213",
                "primary-green": "#00EC5B",
                "secondary-black": "#0E0E0E",
            },
        },
    },
    plugins: [],
};
export default config;
