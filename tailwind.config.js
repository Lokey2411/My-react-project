/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#3758F9",
				"primary-light-3": "#97A8FC",
				"gray-gray-2": "#F3F4F6",
			},
			fontFamily: {
				inter: "'Inter', sans-serif",
			},
			screens: {
				mobile: "320px",
				fs: "100px",
			},
		},
	},
	plugins: [],
};
