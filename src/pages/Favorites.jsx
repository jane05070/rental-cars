import CarList from "../components/ListCards/ListCards";
import { GallerySection } from "./Catalogue.styled";

import EmptyFavorites from "../components/EmptyFavorites/EmptyFavorites";
import { useSelector } from "react-redux";
import { selectFavorites } from "../redux/favoriteSlice/selectors";

const Favorites = () => {
    const favorites = useSelector(selectFavorites);

    return (
        <>
            {favorites.length === 0 ? (
                <EmptyFavorites />
            ) : (
                <GallerySection>
                        <CarList renderFavorites />
                </GallerySection>
            )}
        </>
    );
};

export default Favorites;