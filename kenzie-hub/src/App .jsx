import { GlobalStyle } from "./styles/globalStyles";
import { RoutesMain } from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./providers/userContext";

function App() {
  return (
    <>
      <div className="App">
        <GlobalStyle />
        <UserProvider>
          <RoutesMain />
        </UserProvider>
      </div>
    </>
  )
}

export default App;
