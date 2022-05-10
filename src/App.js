import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRouter from "./components/AppRouter/AppRouter";
import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppRouter></AppRouter>
      </Router>
    </Provider>
  );
}

export default App;
