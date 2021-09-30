// import Footer from "./Footer/Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div
      className="container mx-auto min-h-screen  max-w-full
    ">
      <NavBar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
