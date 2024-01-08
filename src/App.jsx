import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

function App() {


  return (

      <div className=" h-[1080px] bg-[#FAFAFA] flex w-screen">
        <Sidebar />
        <section className="grow">
          <Navbar />
        </section>
    </div>
    
  )
}

export default App
