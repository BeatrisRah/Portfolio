export default function TopNavigation() {
   return (
    <div className="sticky top-0 z-20 w-full p-4 flex justify-end gap-4" style={{
        backgroundColor: "rgba(17, 24, 39, 0)", 
        backdropFilter: "blur(10px)",
    }}>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Twitter</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:underline">GitHub</a>
        <a href="mailto:you@example.com" className="text-pink-500 hover:underline">Email</a>
    </div>
   );
}