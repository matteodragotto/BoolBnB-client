import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalProvider } from "./context/GlobalContext"
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import SearchPage from "./pages/SearchPage"
import DetailPage from "./pages/DetailPage"
import AddApartment from "./pages/AddApartment"
import Assistenza from "./pages/Assistenza"
import Privacy from "./pages/PrivacyPolicy"
import Termini from "./pages/Termini"
import ChiSiamo from "./pages/ChiSiamo"
import ScrollToTop from "./components/ScrollTop"


const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/home/page/:pageNumber" component={HomePage} />
            <Route path="/search" Component={SearchPage} />
            <Route path="/add" Component={AddApartment} />
            <Route path="/dettaglio-immobile/:id" Component={DetailPage} />
            <Route path="/dettaglio-immobile/:id" />
            <Route path="/assistenza" Component={Assistenza} />
            <Route path="/privacy" Component={Privacy} />
            <Route path="/termini" Component={Termini} />
            <Route path="/chisiamo" Component={ChiSiamo} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App