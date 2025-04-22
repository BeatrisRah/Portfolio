import Sidebar from "./components/sidebar/SideNavBar"
import TopNavigation from "./components/Navigation"
import Home from "./sections/home/Home"
import { useEffect, useState } from "react";
import DotPagination from "./components/DotPagination";
import Tetch from "./sections/tech/Tech";
import Projects from "./sections/projects/Projects.jsx";
import Education from "./sections/education/EducationSection.jsx";
function App() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	
	useEffect(() => {
		const handleMouseMove = (e) => {
			const { clientX: x, clientY: y } = e;
			setMousePosition({ x, y });
		};

		window.addEventListener('mousemove', handleMouseMove);

		
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);


	const gradientStyle = {
		background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px,rgba(232, 73, 174, 0.82) , #0E172B, #0E172B)`,
		height: '100%',
		minHeight: '100%',
		position: 'fixed',
		// position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		zIndex: -1,
		transition: 'background-position 0.1s ease', // Smooth transition
	  }
	return (
		<div className="flex relative">
			<div style={gradientStyle}></div>

			<div className="w-64 fixed h-screen bg-[#12121B]/90 text-white z-10">
				<Sidebar />
			</div>

			{/* Page Content */}
			<div className="ml-64 w-10/12">
				<TopNavigation />
				<Home />
				<Tetch />
				<Projects />
				<Education />
			</div>

			<DotPagination />
		</div>
	)
}

export default App
