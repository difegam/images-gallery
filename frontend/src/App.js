import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";


const UNSPLASH_API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

const App = () => {

  const [search, setSearch] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    // console.log(e.target[0].value);
    // console.log(search);

    fetch(`https://api.unsplash.com/photos/random/?query=${search}&client_id=${UNSPLASH_API_KEY}`)
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // console.log(search);

  return (
    <div>
      <Header title="Images Gallery" />
      <Search search={search} setSearch={setSearch} handleSubmit={handleSearchSubmit} />
    </div>
  );
};

export default App;
