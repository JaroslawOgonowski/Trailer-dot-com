import { useSelector } from "react-redux";
import { selectedMovie, selectHide } from "../../../features/Movie/movieSlice";
import { Marker, MovieBox, Title, Trailer } from "./styled";

export const TitleBox = () => {
  const hideTrailer = useSelector(selectHide);
  const {title, iFrame} = useSelector(selectedMovie);
  return (
    <>
      <Marker id="trailer" hideTrailer={hideTrailer} />
      <MovieBox >
        <Title >{title}</Title>
        <Trailer
          hideTrailer={hideTrailer}
          width=""
          height=""
          SameSite="none"
          allow="fullscreen;"
          Secure
          alt="Movie Trailer"
          src={iFrame}
          title="YouTube video player"
        />
      </MovieBox>
    </>
  );
};