
import "./App.css";
import Navbar from "./Navbar";
import Course from "./course.jsx";
import Footer from "./Footer";
import html from "./assets/html.gif"
import gta from "./assets/GTA.jpg"
import jd from "./assets/JD.jpg"

function App() {
  return (
    <>
    <div className="flex" >
      {/* <Navbar /> */}
      <Course name="HTML" cpny="hello" img={html} rate="**50**" show={true} />
      <Course name="games" cpny="GTA" img={gta} show={true}  />
      <Course name="video" cpny="JN" img={jd}  />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
