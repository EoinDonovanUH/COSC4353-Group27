import MainRoutes from "./Routes"
import "./App.css"

export const activeLink = (isActive) => (isActive ? "link" : "")

function App() {
  return (
    <>
      <MainRoutes />
    </>
  )
}

export default App
