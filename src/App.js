import { ThemeProvider } from "@emotion/react";
import Home from "./Content/Home";
import theme from "./theme";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    const disableRightClick = (e) => {
      e.preventDefault(); // Disable right-click context menu
    };

    // Add event listener for right-click
    window.addEventListener('contextmenu', disableRightClick);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('contextmenu', disableRightClick);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
    <div className="App" style={{display:'border-box', width:'100vw', padding:'0', margin:'0', overflow:'hidden'}}>
      <Home />
    </div>
    </ThemeProvider>
  );
}

export default App;
