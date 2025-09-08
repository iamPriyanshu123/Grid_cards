import "./App.css";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Cards from "./Components/Cards";
const App = () => {
  return (
    <Provider store={store}>
      <Cards />
    </Provider>
  );
};
export default App;
