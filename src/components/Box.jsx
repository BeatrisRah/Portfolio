
export default function Box({ children, headther, className = "" }) {
    return (
        <div
            className={`glow-border bg-[#12121b]/80 z-0 relative p-4 ${className}`} >

            {headther && (
                <div className={`border-b-4 border-indigo-500 w-full ${headther.textPosition === 'center' ?
                        'text-center' :
                        'text-start'
                    }`} >
                    <h1 className="jersay">{headther.title}</h1>
                </div>
            )}

            {children}
        </div>
    );
}