import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import MainContainer from "./components/MainContainer"

function App() {


  return (

      <div className="min-h-screen max-h-fit bg-[#FAFAFA] flex w-screen">
        <Sidebar />
        <MainContainer />
    </div>
    
  )
}

export default App
