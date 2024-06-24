import Header from "@/components/main/header";
import Footer from "@/components/main/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <Header />
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </section>
  );
}
