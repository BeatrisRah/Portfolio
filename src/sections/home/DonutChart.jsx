export default function DonutChart({ size = 260, stroke = 30, className = '' }) {
    const data = [
        { label: 'Coding', percent: 50, color: '#ff57c4' },
        { label: 'Debugging', percent: 35, color: '#9b5de5' },
        { label: 'Naming things', percent: 10, color: '#F4C61A' },
        { label: 'Googling', percent: 15, color: '#00bbf9' },
    ];

    const radius = (size - stroke) / 2;
    const circumference = 2 * Math.PI * radius;

    let offset = 0;

    return (
        <div className={`flex items-center gap-4 ${className}`}>

            <ul className="text-lg text-white w-1/2">
                {data.map((item, i) => (
                    <li key={i} className="flex gap-5 items-center p-2">
                        <span
                            className="inline-block w-5 h-5 rounded-full"
                            style={{ backgroundColor: item.color }}
                        ></span>
                        {item.label} – {item.percent}%
                    </li>
                ))}
            </ul>
            <svg
                className="donut-spin w-1/2"
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
            >
                {data.map((slice, i) => {
                    const dash = (slice.percent / 100) * circumference;
                    const dasharray = `${dash} ${circumference - dash}`;
                    const strokeDashoffset = circumference - offset;

                    const circle = (
                        <circle
                            key={i}
                            cx={size / 2}
                            cy={size / 2}
                            r={radius}
                            stroke={slice.color}
                            strokeWidth={stroke}
                            fill="none"
                            strokeDasharray={dasharray}
                            strokeDashoffset={strokeDashoffset}
                            strokeLinecap="butt"
                        />
                    );

                    offset += dash;
                    return circle;
                })}
            </svg>

        </div>
    );
};