
const list = [
    'hero',
    'tech',
    'projects',
    'education',
    'about me (curr)'
]

export default function ListContent() {
   return (

    <div className="text-white p-6  border-t border-green-400">
      <p className="text-green-400 mb-4">Site Content:</p>
      <ul className="space-y-2">
        {list.map(item => (
          <li key={item}>
            <span className="text-yellow-300">{item}</span>{" "}
          </li>
        ))}
      </ul>
    </div>
   );
}