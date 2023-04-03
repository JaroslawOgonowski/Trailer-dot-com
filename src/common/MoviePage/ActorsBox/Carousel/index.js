import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { selectActor, selectInfo, toggleActor } from '../../../../features/Movie/movieSlice';
import { ReactComponent as Next } from "./Next.svg";
import { ReactComponent as Previous } from "./Previous.svg";
import {
  Actor,
  ActorDetail,
  ActorFacts,
  ActorName,
  ActorPhoto,
  ActorRole,
  Box,
  CarouselButton,
  DetailFacts,
  DetailName,
  DetailPhoto,
  DetailRole,
  DetailTextBox,
  Item,
  StyledCarousel,
  Wrapper
} from './styled';

export const Carousel = () => {
  const info = useSelector(selectInfo);
  const dispatch = useDispatch();
  const { actor, role, photo, facts } = useSelector(selectActor);

  const createItems = () => {
    let deltaX = 0;
    let difference = 0;
    const swipeDelta = 60;

    return Array.from(info).map((info, i) => (
      <Item
        key={info.role}
        data-value={i + 1}
        className="item"
        onMouseDown={(e) => (deltaX = e.pageX)}
        onMouseUp={(e) => (difference = Math.abs(e.pageX - deltaX))}
        onClick={() => (difference < swipeDelta)}
      >
        <Box>
          <Actor>
            <ActorPhoto alt="" onMouseEnter={() => dispatch(toggleActor(info.actor))} width="150px" height="180px" src={info.photo}></ActorPhoto>
            <ActorName>{info.actor}</ActorName>
            <ActorRole>{info.role}</ActorRole>
            <ActorFacts>{info.facts}</ActorFacts>
          </Actor>
        </Box>
      </Item>
    ));
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const [items] = useState(createItems([setActiveIndex]));
  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  const syncActiveIndex = ({ item }) => setActiveIndex(item);
const autoWidthChanger= () => {
  if (window.innerWidth < 767) return false
  else return true
}
  return (
    <Wrapper>
      <StyledCarousel>
        <AliceCarousel
          items={items}
          activeIndex={activeIndex}
          onSlideChanged={syncActiveIndex}
          autoWidth={autoWidthChanger()}
          animationType="fadeout"
          animationDuration={800}
          paddingLeft={10}
          paddingRight={10}
          disableDotsControls
          renderPrevButton={() => {
            return <CarouselButton aria-label="Previous button" previous onClick={slidePrev}><Previous /></CarouselButton>
          }}
          renderNextButton={() => {
            return <CarouselButton aria-label="Next button" next onClick={slideNext}><Next /></CarouselButton>
          }}
        />
      </StyledCarousel>
      <ActorDetail>
        <DetailPhoto
          alt=""
          width="980px"
          height="554px"
          src={
            photo ?
              photo : "https://multivoucher.pl/wp-content/uploads/2020/11/cinema-city-big.jpg"} />
        <DetailTextBox>
          <DetailName>{actor ? actor : "Choose an actor..."}</DetailName>
          <DetailRole>{role}</DetailRole>
          <DetailFacts>{facts ? facts : "🎬"}</DetailFacts>
        </DetailTextBox>
      </ActorDetail>
    </Wrapper>
  );
};