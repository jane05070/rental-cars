import styled from '@emotion/styled';
import { AiTwotoneHeart } from "react-icons/ai";

export const ImageThumb = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 274px;
  height: 268px;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FavoriteBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  padding: 0;
  background: none;
  border: none;
`;

export const HeartIcon = styled(AiTwotoneHeart)`
  width: 18px;
  height: 18px;
`;