import { useMemo } from 'react';

export default function ContributionGrid () {
    const grid = useMemo(() => {
        return Array.from({ length: 7 }, () =>
          Array.from({ length: 15 }, () => Math.floor(Math.random() * 5))
        );
      }, []);
    
      return (
        <div className="flex gap-1 p-2  w-full rounded-md">
          {grid[0].map((_, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-1">
              {grid.map((row, rowIndex) => (
                <ContributionSquare
                  key={`${rowIndex}-${colIndex}`}
                  intensity={grid[rowIndex][colIndex]}
                />
              ))}
            </div>
          ))}
        </div>
      );
    
}

const ContributionSquare = ({ intensity }) => {
    const colors = [
      "bg-[#2e2e2e]",
      "bg-[#ff8ab5]",
      "bg-[#ff6ea8]",
      "bg-[#ff509a]",
      "bg-[#ff348d]"
    ];
    return (
      <div className={`w-4 h-4 m-0.5 rounded-sm ${colors[intensity]}`} />
    );
  };