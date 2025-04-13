import { BrowserRouter } from "react-router";
import AppRoutes from "./routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
	  <Toaster position="top-right"/>
    </BrowserRouter>
  );
}

export default App;
