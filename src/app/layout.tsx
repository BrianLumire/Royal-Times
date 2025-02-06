import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google"; // Import DM Sans
import "./globals.css"; // Ensure this is imported
import { ThemeProvider } from "../components/Theme-provider";

// Import Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { SWRConfig } from "swr";

// Define Inter and DM Sans fonts
const inter = Inter({ subsets: ["latin"] });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" }); // Define DM Sans

export const metadata: Metadata = {
  title: "Royal Times",
  description: "Royal Times App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SWRConfig
      value={{
        revalidateIfStale: false,
        revalidateOnFocus: false,
      }}
    >
      <html lang="en">
        <body className={`${inter.className} ${dmSans.variable}`}>
          {" "}
          {/* Apply DM Sans */}
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          {/* Global Toast Container */}
          <ToastContainer
            position="bottom-right"
            theme="dark"
            toastClassName="custom-toast" /* Custom class for toasts */
            progressClassName="Toastify__progress-bar" /* Custom class for progress bar */
            className="Toastify__toast-icon" /* Custom class for tick icon */
          />
        </body>
      </html>
    </SWRConfig>
  );
}
