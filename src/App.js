import { useState } from "react";
import Home from "./pages/Home";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <section className={isDark ? "dark" : ""}>
      <Home setIsDark={setIsDark} isDark={isDark} />
    </section>
  );
}
export default App;
