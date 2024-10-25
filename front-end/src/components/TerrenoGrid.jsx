
import TerrenoCard from './TerrenoCard';
import Terrenos from './data/Terrenos'; 

const TerrenoGrid = () => {
  return (
    <div className="terreno-grid">
      {Terrenos.map((Terrenos) => (
        <TerrenoCard key={Terrenos.id} {...Terrenos} />
      ))}
    </div>
  );
}

export default TerrenoGrid;
