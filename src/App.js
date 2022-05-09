import {
  BrowserRouter as Router,
} from "react-router-dom";
import './App.css';
import AppRouter from './components/AppRouter/AppRouter'
import Header from "./components/Header/Header";


function App() {
  return (
    <Router>
      <Header></Header>
      <AppRouter></AppRouter>
    </Router>
  );
}

export default App;
