import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import { useState, useEffect } from "react";

const Detail = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [character, setCharacter] = useState({
    name: "",
    status: "",
    specie: "",
    gender: "",
    origin: "",
    image: "",
  });
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter({
            name: data.name,
            status: data.status,
            specie: data.species,
            gender: data.gender,
            origin: data.origin.name,
            image: data.image,
          });
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div>
      <div className={styles.divPrincipal}>
        <div className={styles.info}>
          {character.name && (
            <p className={styles.textos}>
              <b>Name:</b>
              {character.name}
            </p>
          )}
          {character.status && (
            <p className={styles.textos}>
              <b>Status:</b>
              {character.status}
            </p>
          )}
          {character.specie && (
            <p className={styles.textos}>
              <b>Specie:</b>
              {character.specie}
            </p>
          )}
          {character.gender && (
            <p className={styles.textos}>
              <b>Gender:</b>
              {character.gender}
            </p>
          )}
          {character.origin && (
            <p className={styles.textos}>
              <b>Origin:</b>
              {character.origin}
            </p>
          )}
          {character.name && (
            <img className={styles.image} src={character.image} />
          )}
        </div>
      </div>
      <button className={styles.styleButton} onClick={() => navigate("/home")}>
        Back to Home
      </button>
    </div>
  );
};

export default Detail;
