const tabs = ["Info", "Features", "Links"];


export default function TabNav({onChange, activeTab}) {
   return (
    <div className="flex">
    {tabs.map((tab, index) => (
        <div key={tab} className="flex items-center">
            <button
                onClick={() => onChange(tab)}
                className={`pb-1 transition-all duration-200 relative
                ${activeTab === tab
                        ? "text-white font-semibold after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-[2px] after:bg-pink-500"
                        : "text-white/50 hover:text-white"
                    }`}
            >
                {tab}
            </button>

            {index < tabs.length - 1 && (
                <span className="mx-3 text-white/30 select-none">/</span>
            )}
        </div>
    ))}
    </div>
   );
}