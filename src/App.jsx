import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalProvider } from "./context/GlobalContext"
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import SearchPage from "./pages/SearchPage"
import DetailPage from "./pages/DetailPage"
import AddApartment from "./pages/AddApartment"


const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/home/page/:pageNumber" component={HomePage} />
            <Route path="/search" Component={SearchPage} />
            <Route path="/add" Component={AddApartment} />
            <Route path="/dettaglio-immobile/:id" />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App