import { useEffect, useState } from "react";
import { List, ListWrapper, LoadMoreBtn } from "./ListCards.styled";
import { getCatalog } from "../../service/car-service";
import Card from "../Card/Card";

import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favoriteSlice/selectors";

import Loader from "../Loader/Loader";
import Error from "../Error/Error";

const CarList = ({ renderFavorites }) => {
  const [cars, setCars] = useState([]);
  const favorites = useSelector(selectFavorites);

  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async (page) => {
      setIsLoading(true);
      try {
        const response = await getCatalog(page);
        const newCars = response;

        setCars((prevCars) => [...prevCars, ...newCars]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCars(page);
  }, [page]);


  const favoriteCars = cars.filter((car) => favorites.includes(car.id));
  const isLoadMoreVisible = cars.length % 8 === 0;

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (

    <ListWrapper>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : (
        <>
    <List>
      {cars &&
        (renderFavorites
          ? favoriteCars.map((car) => <Card key={car.id} car={car} />)
          : cars.map((car) => <Card key={car.id} car={car} />))}
    </List>
          {!renderFavorites && isLoadMoreVisible && (
            <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>
          )}
        </>
      )}
    </ListWrapper>
  );
};

export default CarList;