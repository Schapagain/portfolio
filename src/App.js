import './App.css';
import Landing from './components/Landing';
import AppNavbar from './components/AppNavbar';

function App() {
  return (
    <div className="App">
      <div id="cover-container" class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <AppNavbar />
        <Landing />
      </div>
    </div>
  );
}

export default App;
