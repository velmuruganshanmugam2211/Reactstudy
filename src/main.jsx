import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import App from './App.jsx'
import Home from "./home.jsx"
import Post from "./post.jsx"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from "./notfound.jsx"
import Counter from "./counter.jsx"
import { DataContext } from "./DataContext.jsx"


const contextValue = "data datya";

const router = createBrowserRouter([
{
  path : "/",
  element : <App/>,
  errorElement : <NotFound/>
},
{
  path : "/home",
  element : <Home/>
},
{
  path : "/app",
  element : <App/>
},
{
  path : "/courses",
  element : <App/>
},
{
  path : "/counter",
  element : <Counter/>
},
{
  path : "/post:id",
  element : <Post/>
}

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataContext.Provider value={contextValue}>
      <RouterProvider router={router} />
    </DataContext.Provider>
  </StrictMode>,
)
