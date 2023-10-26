type TireType = 'hard' | 'medium' | 'soft' | 'wet';

interface TireProps {
  type: TireType;
  laps: number;
  totalLaps: number;
  position?: 'first' | 'last';
}

const Tire: React.FC<TireProps> = ({ type, laps, totalLaps, position }) => {
  const getColorClass = () => {
    switch (type) {
      case 'hard':
        return 'bg-gray-300';
      case 'medium':
        return 'bg-yellow-400';
      case 'soft':
        return 'bg-red-500';
      case 'wet':
        return 'bg-blue-500';
      default:
        return 'bg-gray-300';
    }
  };

  const getRoundedClass = () => {
    switch (position) {
      case 'first':
        return 'rounded-l-full';
      case 'last':
        return 'rounded-r-full';
      default:
        return '';
    }
  };

  const TOTAL_WIDTH = 200;  // Ancho fijo total, cambia según lo necesites
  const computedWidth = (laps / totalLaps) * TOTAL_WIDTH;

  return (
    <div className={`inline-flex items-center border border-black p-1 ${getColorClass()} text-black h-5 ${getRoundedClass()}`} style={{ width: `${computedWidth}px` }}>
      <span className="flex-1 text-center text-xs">{laps}</span>
    </div>
  );
};

interface TireData {
  [key: string]: number;
}

interface TireTrackerProps {
  tireData: TireData[];
}

const TireTracker: React.FC<TireTrackerProps> = ({ tireData }) => {
  const totalLaps = tireData.reduce((total, current) => total + Object.values(current)[0], 0);

  return (
    <div className="flex items-center space-x-0">
      {tireData.map((data, idx) => {
        const type = Object.keys(data)[0] as TireType;
        const laps = data[type];
        const position = idx === 0 ? 'first' : (idx === tireData.length - 1 ? 'last' : undefined);
        return <Tire key={idx} type={type} laps={laps} totalLaps={totalLaps} position={position} />;
      })}
    </div>
  );
};

export default TireTracker;
