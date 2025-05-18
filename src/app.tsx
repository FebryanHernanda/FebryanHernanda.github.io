import { useEffect } from "react";

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

  return <></>;
};

export default App;
