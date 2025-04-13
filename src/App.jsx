import { Element } from "react-scroll"
import Sidebar from "./components/sidebar/SideNavBar"

function App() {

  return (
    <div className="flex">
  {/* Sidebar */}
  <div className="w-64 fixed h-screen bg-[#12121B]/90 text-white z-10">
    <Sidebar />
  </div>

  {/* Page Content */}
  <div className="ml-64 flex-1">
    <Element name="home" className="min-h-screen bg-white p-8">
      Home Section
    </Element>
    <Element name="tech" className="min-h-screen bg-gray-100 p-8">
      Tech Section
    </Element>
    {/* Add more sections as needed */}
  </div>
</div>
  )
}

export default App
