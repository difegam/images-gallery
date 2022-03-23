import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";



const App = () => {

  const [search, setSearch] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    // console.log(e.target[0].value);
    console.log(search);
  };

  // console.log(search);

  return (
    <div>
      <Header title="Images Gallery" />
      <Search search={search} setSearch={setSearch} handleSubmit={handleSearchSubmit} />
    </div>
  );
};

export default App;
