import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-poppins",
});

export const metadata = {
	title: "Cooking Ng Ina Mo",
	description: `Your mom's recipe in one app`,
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" data-theme="cupcake">
			<body className={poppins.className}>{children}</body>
		</html>
	);
}
