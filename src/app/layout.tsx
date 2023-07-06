import Footer from "./Footer";
import Header from "./Header";
import "./globals.css";

export const metadata = {
  title: "Aeona",
  description:
    "Enabling businesses to streamline their logistics operations and enhance their overall efficiency.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col ">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
