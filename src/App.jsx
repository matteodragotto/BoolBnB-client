import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import SearchPage from "./pages/SearchPage"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/search" Component={SearchPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App