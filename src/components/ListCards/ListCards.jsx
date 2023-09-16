import { useEffect, useState } from "react";
import { List } from "./ListCards.styled";
import { getCatalog } from "../../service/car-service";
import Card from "../Card/Card";

import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favoriteSlice/selectors";

const CarList = ({ renderFavorites }) => {
  const [cars, setCars] = useState([]);
  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    async function fetch() {
      try {
        const result = await getCatalog();
        setCars(result);
      } catch (error) {
        console.error("Error fetching catalog:", error);
      }
    }

    fetch();
  }, []);

  const favoriteCars = cars.filter((car) => favorites.includes(car.id));

  return (
    <List>
      {cars &&
        (renderFavorites
          ? favoriteCars.map((car) => <Card key={car.id} car={car} />)
          : cars.map((car) => <Card key={car.id} car={car} />))}
    </List>
  );
};

export default CarList;