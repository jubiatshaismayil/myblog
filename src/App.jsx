
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes, Switch} from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
     <Header />
     <Routes>
      <Route path="/" element={<Dashboard />}></Route>
     </Routes>
   
    </div>
  );
}
export default App;