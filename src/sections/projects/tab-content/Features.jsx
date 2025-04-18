export default function FeaturesTab({featuresArr}) {
   return (
       <ul className="space-y-1 list-none h-35 flex flex-col flex-wrap">
            {featuresArr.map(f => <li
            key={f}
            className="flex items-baseline gap-3 text-white/90 hover:text-white transition"
            >
                <span className="mt-1 text-pink-500 text-lg">•</span>
                <span>{f}</span>
            </li>)}
       </ul>
   );
}