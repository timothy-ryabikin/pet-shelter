import {
  BrowserRouter as Router,
} from "react-router-dom";
import './App.css';
import AppRouter from './components/AppRouter/AppRouter'
import Header from "./components/Header/Header";
import { store } from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header></Header>
        <AppRouter></AppRouter>
      </Router>
    </Provider>
  );
}

export default App;
