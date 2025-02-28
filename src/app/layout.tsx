// import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <html lang="en">
      <body className="">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Outlet />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}


