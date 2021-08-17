// import Footer from "./Footer/Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div class="container mx-auto min-h-screen bg-[#014E56] max-w-full
    ">
      <NavBar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
