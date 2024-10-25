
import Header from './components/Header';
import TerrenoGrid from './components/TerrenoGrid';
import FilterSidebar from './components/FilterSideBar';
import './Modal.css'

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <FilterSidebar />
        <TerrenoGrid />
      </div>
    </div>
  );
}

export default App;
