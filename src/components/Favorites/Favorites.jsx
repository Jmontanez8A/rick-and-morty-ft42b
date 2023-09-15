import { useSelector } from "react-redux";
import Card from "../Card/Card";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);

  return (
    <div>
      {favorites.map(({ id, name, status, species, gender, origin, image }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            image={image}
            origin={origin ? origin.name : ""}
          />
        );
      })}
    </div>
  );
};

export default Favorites;
