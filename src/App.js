import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Hotels from './pages/Hotels';
import  List from './pages/List';

function App() {
  return (
     <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/hotels" element={<List/>} />
         <Route path="/hotels/:id" element={<Hotels/>} />
      </Routes>
     </BrowserRouter>
  );
}

export default App;
