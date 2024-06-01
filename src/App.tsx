import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginView } from "./pages/LoginView"
import { SignUp } from "./pages/Signup"
import { HomeView } from "./pages/HomeView"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/sign-in" element={<LoginView />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
