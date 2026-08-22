import "./App.css";
import CourseList from "./courselist";
import Counter from "./counter";
import Navbar from "./navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap">
        <CourseList />
      </div>
      <Counter />
    </>
  );
}

export default App;
