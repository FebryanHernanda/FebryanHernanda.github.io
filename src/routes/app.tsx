import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../assets/pages";

const App = () => {
  const fullText =
    "Febryan Hernanda Mashudi | Fullstack Developer • Building the Future •            ";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      document.title = fullText.slice(index) + fullText.slice(0, index);
      index = (index + 1) % fullText.length;
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
