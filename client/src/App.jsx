import { useState } from "react";
import PostsList1 from "./PostsList1";
import PostsList2 from "./PostsList2";

function App() {
  const [currentPage, setCurrentPage] = useState(<PostsList1 />);
  return (
    <div className="App">
      <button onClick={() => setCurrentPage(<PostsList1 />)}>
        Posts LIst 1
      </button>
      <button onClick={() => setCurrentPage(<PostsList2 />)}>
        Posts LIst 2
      </button>
      <br />
      {currentPage}
    </div>
  );
}

export default App;
