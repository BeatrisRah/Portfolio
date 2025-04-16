
export default function Box({ children, headther = null, className = "" }) {
    return (
        <div
            className={`glow-border bg-[#12121b]/80 z-0 relative p-4 ${className}`} >

            {headther && (
                <div className={`border-b-2 border-[#28282F] mb-${headther.marginB} w-full text-${headther.textPosition}`} >
                    <h1 className="jersay text-2xl">{headther.title}</h1>
                </div>
            )}

            {children}
        </div>
    );
}