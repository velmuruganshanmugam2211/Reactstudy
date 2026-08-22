import { Link } from "react-router-dom";

function Home() {
  return (
    <>
    <div><h1>Hi How are you, heloooo</h1></div>
      <nav> <div className="flex flex-row gap-5" >
        <Link to="/home">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/app">App</Link>
        </div>
      </nav>
    </>
  );
}

export default Home;
