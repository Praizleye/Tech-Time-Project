import styled, { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import { GlobalStyles } from "./styles/Globals";

import { Navbar } from "./components";
import {
  Home,
  Partners,
  About,
  Courses,
  Community,
  Testimonial,
  Footer,
  FAQ,
} from "./pages";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Navbar />
        <Home />
        {/* <Partners /> */}
        <About />
        <Courses />
        <Testimonial />
        <Community />
        <FAQ />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
