import "./App.css";
import Cards from "./components/Cards/Cards";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Error from "./components/Error/Error";
import Favorites from "./components/Favorites/Favorites";

const email = "ejemplo@gmail.com";
const password = "chucho123";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const login = (userData) => {
    if (userData.email === email && userData.password === password) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("¡No hay personajes con este ID!");
        }
      });
  };
  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(charactersFiltered);
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname !== "/" && <NavBar onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error mensaje="Error 404: Not Fount" />} />
      </Routes>
    </div>
  );
}

export default App;
