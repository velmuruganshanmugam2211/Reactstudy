import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cart from "../../data/assets/cart.png";
import gta from "../../data/assets/GTA.jpg";
import html from "../../data/assets/html.jpg";
import jd from "../../data/assets/JD.jpg";
import realTech from "../../data/assets/real tech.jpg";
import we from "../../data/assets/We.jpg";
import { useNavigate } from "react-router-dom";

const initialCourses = [
  { name: "iTank", cpny: "hello", img: realTech, rate: 333, id: 1 },
  { name: "TML", cpny: "hello", img: jd, rate: 444, id: 2 },
  { name: "State Book", cpny: "hello", img: we, rate: 555, id: 3 },
  { name: "GTA", cpny: "hello", img: gta, rate: 777, id: 4 },
  { name: "TA", cpny: "hello", img: html, rate: 544, id: 5 },
  { name: "Hellow", cpny: "hello", img: jd, rate: 555, id: 6 },
];

function Course(props) {
  const [purchased, setPurchased] = useState(false);
  const [discount, setDiscount] = useState(props.rate);
  const navigate = useNavigate();

  function buyCourse(discountPercentage) {
    console.log(
      props.name,
      "Vangitta da ni",
      discountPercentage,
      "% Discount la",
    );

    setPurchased(true);

    const discountedPrice =
      props.rate - props.rate * (discountPercentage / 100);

    setDiscount(discountedPrice);
  }

  useEffect(() => {
    console.log("Use Effect Called");
    console.log(purchased);
  }, [purchased]);

  if (props.show === true) {
    return (
      <div className="card" onClick={() => navigate("/post/+course.id")}>
        <img className="img" src={props.img} alt={props.name} />

        <div className="incard">{props.name}</div>

        <div>₹{discount}</div>

        <button onClick={() => buyCourse(50)} className="btn">
          Add Cart
          <img src={cart} alt="cart" />
        </button>

        <button onClick={() => props.delete(props.id)} className="btn">
          Delete
        </button>

        <p className="mt-5">
          {purchased ? "Successfully Added in Cart ✅" : "Limited Stock"}
        </p>
      </div>
    );
  }

  return (
    <div className="card">
      Course is not available. Please try another course.
    </div>
  );
}

Course.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  cpny: PropTypes.string,
  rate: PropTypes.number,
  show: PropTypes.bool,
  delete: PropTypes.func,
  id: PropTypes.number,
};

function CourseList() {
  const [courses, setCourses] = useState(initialCourses);

  function handleDelete(id) {
    const newCourses = courses.filter((course) => course.id !== id);

    setCourses(newCourses);
  }
  const courseList = courses.map((course) => (
    <Course
      key={course.id}
      name={course.name}
      img={course.img}
      cpny={course.cpny}
      rate={course.rate}
      show={true}
      delete={handleDelete}
      id={course.id}
    />
  ));

  return <>{courseList}</>;
}

export default CourseList;
