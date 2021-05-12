import './App.css';
import Header from "./components/Header/Header"
import Search from "./components/CurrentSearch/Search"
import Previous from "./components/PreviousSearch/Previous"
function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Previous/>
    
    </div>
  );
  
  
}

export default App;
