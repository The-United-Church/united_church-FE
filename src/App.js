import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  // Hide header and footer on login and signup pages
  const hideHeaderFooter = ["/login", "/signup"].includes(location.pathname);

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <main className={`min-h-[calc(100vh-120px)] ${!hideHeaderFooter ? 'border-bluex' : ''}`}>
        <Outlet />
      </main>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default App;