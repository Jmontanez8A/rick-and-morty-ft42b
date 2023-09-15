import { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");
  const handleChange = (evento) => {
    setId(evento.target.value);
  };

  return (
    <div>
      <input type="search" onChange={handleChange} value={id} />
      <button
        onClick={() => {
          onSearch(id);
          setId("");
        }}
      >
        Agregar
      </button>
    </div>
  );
}
