import Header from "./layout/header/Header"
import HomePage from "./pages/home-page/HomePage"

import {Routes , Route , Outlet} from "react-router-dom"

const Layout = () => {
  return (
    <div>
<Header />
<a href="/about">About</a>
<a href="/info">info</a>
<a href="/telephone">Телефоны</a>
<Outlet/>
    </div>
  )
}

// SPA - Single Page Applicaton

const App = () => {
  return (
    <div>
      <HomePage />
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<h2>About page</h2>}/>
        <Route path="/info" element={<h2>INFO page</h2>}/>
      <Route path="/telephone" element={<h2>telephone page</h2>}/>
      </Route>
      </Routes>

    </div>
  )
}

export default App