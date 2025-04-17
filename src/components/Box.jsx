
export default function Box({ children, headther = null, className = "" }) {

    const textAlign = {
        center: "text-center",
        right: "text-right",
        left: "text-left",
    }[headther?.textPosition || "left"];
    return (
        <div
            className={`glow-border bg-[#12121b]/80 z-0 relative p-4 ${className}`} >

            {headther && (
                <div className={`border-b-2 border-[#28282F] mb-${headther.marginB} w-full ${textAlign}`} >
                    <h1 className="jersay text-2xl">{headther.title}</h1>
                </div>
            )}

            {children}
        </div>
    );
}