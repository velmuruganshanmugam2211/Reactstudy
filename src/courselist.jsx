// import Course from "./course";
import html from "./assets/html.gif";
import gta from "./assets/GTA.jpg";
import jd from "./assets/JD.jpg";
import PropTypes from "prop-types";
import { useState } from "react";
import cart from "./assets/cart.png";
import rts from "./assets/real tech.jpg"
import We from "./assets/We.jpg"


function Course(props) {

// let purchased =false;
const [purchased , setpurchased]=useState(false);
const [discount, setdiscount]=useState(props.rate)

  function Bycourse(Discount) {
    console.log(props.name, "Vaggita da ni", Discount, "% Discount", "la");
    setpurchased(true);
    setdiscount(discount-Discount)
    console.log(purchased)
  }

  if (props.show == true) {
    return (
      <div className="card">
        <img className="img" src={props.img} alt="" />
        <div className="incard">{props.name}</div>
        {/* <div>{props.cpny}</div> */}
        <div>{discount}</div>
        <button onClick={() => Bycourse(1)} className="btn">
          Add Cart <img className="" src={cart} alt="cart" />
        </button>
        <button  onClick={() => props.delete(props.id)} className="btn">Delete</button>
        
        
        <p className="mt-5" >{
          
         purchased ? "Successfully Added in Cart ✅" : "Limited Stock " }</p>
      </div>
    );
  } else {
    return (
      <div className="card">
        Course are not Available please try another Course
      </div>
    );
  }
}

Course.PropTypes = {
  name: PropTypes.string,
  cpny: PropTypes.number,
  rate: PropTypes.number,
  show: PropTypes.bool,
};

// export default Course;

function CourseList() {
  const [Courses,setCourses] = useState([
    {
      name: "iTank",
      cpny: "hello",
      img: rts,
      rate: 333,
      id: 1,
    },
    {
      name: "TML",
      cpny: "hello",
      img: jd,
      rate: 444,
      id: 2,
    },
    {
      name: "State Book",
      cpny: "hello",
      img: We,
      rate: 555,
      id: 3,
    },
    {
      name: "GTA",
      cpny: "hello",
      img: jd,
      rate: 777,
      id: 4,
    },
    {
      name: "TA",
      cpny: "hello",
      img: html,
      rate: 544,
      id: 5,
    },

    {
      name: "JD",
      cpny: "hello",
      img: jd,
      rate: 555,
      id: 6,
    },
  ]);

  function handledelete(id){
const newCourses = Courses.filter((course)=> course.id != id)
setCourses(newCourses);


  }

  // Courses.sort((x,y)=> x.rate - y.rate)
  // const mnycourse = Courses.filter((course)=> course.rate<500)

  const courseList = Courses.map((course) => (
    <Course
      key={course.id}
      name={course.name}
      img={course.img}
      cpny={course.cpny}
      rate={course.rate}
      show={true}
      delete = {handledelete}
      id = {course.id}
    />
  ));

  return <>{courseList}</>;
}

export default CourseList;
