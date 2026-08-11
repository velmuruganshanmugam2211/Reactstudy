function Course(props) {
  if (props.show == true) {
    return (
      <div className="card">
        <img className="img" src={props.img} alt="" />
        {/* <h3>{course1}</h3> <p>How are you</p> */}
        <div className="incard">{props.name}</div>
        <div>{props.cpny}</div>
        <div>{props.rate}</div>
      </div>
    );}

else{

    return(
        <div className="card">Course are not Available please try another Course</div>
    )
}

  
}

export default Course;
