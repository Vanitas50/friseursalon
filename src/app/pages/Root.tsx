import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function Root() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#0c0c0c", minHeight: "100vh" }}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html {
          scroll-behavior: smooth;
          scrollbar-width: thin;
          scrollbar-color: rgba(201,168,76,0.3) transparent;
        }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(201,168,76,0.3); border-radius: 3px; }
        ::selection { background: rgba(201,168,76,0.25); color: #f0ebe0; }
        a { text-decoration: none; }
      `}</style>
    </div>
  );
}
