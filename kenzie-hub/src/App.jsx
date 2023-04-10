import { GlobalStyle } from "./styles/globalStyles";
import { RoutesMain } from "./routes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="App">
        <GlobalStyle />
        <RoutesMain />
      </div>
    </>
  );
}

export default App;
