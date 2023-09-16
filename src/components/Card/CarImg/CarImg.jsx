import { FavoriteBtn, Image, ImageThumb } from "./CarImg.styled";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import {
    addToFavoriteList,
    deletToFavoriteList,
} from "../../../redux/favoriteSlice/slice";
import { selectIfCarFavorite } from "../../../redux/favoriteSlice/selectors";

const CarImage = ({ imageURL, alt, id }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) => selectIfCarFavorite(state, id));

  const toggleFavorite = () => {
    if (isFavorite) {
        dispatch(deletToFavoriteList({ carId: id }));
    } else {
        dispatch(addToFavoriteList({ carId: id }));
    }
  };

  return (
    <ImageThumb>
      <Image src={imageURL} alt={alt} />
      <FavoriteBtn onClick={toggleFavorite}>
        {isFavorite ? (
          <AiFillHeart color="#3470ff" size={18} />
        ) : (
          <AiOutlineHeart color="#ffffff" size={18} />
        )}
      </FavoriteBtn>
    </ImageThumb>
  );
};

export default CarImage;