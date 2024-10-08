import Image from "next/image";
import Header from "./Components/Header/page";
import About from "./Components/About/page";
import Footer from "./Components/Footer/page";

export default function Home() {
  return (
    <div>
    <Header/>
    <About/>
    <Footer/>
    </div>
  );
}
