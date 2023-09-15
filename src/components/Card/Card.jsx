import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/action";
import { useEffect, useState } from "react";

const Card = ({ id, name, image, onClose, addFav, removeFav, myFavorites }) => {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, image });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styles.container}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button
        className={styles.buttonContainer}
        onClick={() => {
          onClose(id);
        }}
      >
        X
      </button>
      <Link className={styles.link} to={`/detail/${id}`}>
        <h2>Name: {name}</h2>
      </Link>
      <img className={styles.image} src={image} alt={name} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
