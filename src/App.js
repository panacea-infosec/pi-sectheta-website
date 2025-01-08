import { ThemeProvider } from "@emotion/react";
import Home from "./Content/Home";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App" style={{display:'border-box', width:'100vw', padding:'0', margin:'0', overflow:'hidden'}}>
      <Home />
    </div>
    </ThemeProvider>
  );
}

export default App;
