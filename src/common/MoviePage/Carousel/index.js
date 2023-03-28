import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { selectActor, selectInfo, toggleActor } from '../../../features/Movie/movieSlice';
import { ReactComponent as Arrow } from "./Arrow.svg";
import {
  Actor,
  ActorDetail,
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
  Wrapper
} from './styled';

export const Carousel = () => {
  const info = useSelector(selectInfo);
  const dispatch = useDispatch();
  const actor = useSelector(selectActor);

  const createItems = () => {
    let deltaX = 0;
    let difference = 0;
    const swipeDelta = 20;

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
          <Actor className="actor">
            <ActorPhoto alt="" onMouseEnter={() => dispatch(toggleActor(info.actor))} width="150px" height="180px" src={info.photo}></ActorPhoto>
            <ActorRole>{info.role}</ActorRole>
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

  return (
    <Wrapper>
      <AliceCarousel
        items={items}
        activeIndex={activeIndex}
        onSlideChanged={syncActiveIndex}
        autoWidth
        animationType="fadeout"
        animationDuration={800}
        paddingLeft={50}
        paddingRight={50}
        disableDotsControls
        infinite
        renderPrevButton={() => {
          return <CarouselButton previous onClick={slidePrev}><Arrow /></CarouselButton>
        }}
        renderNextButton={() => {
          return <CarouselButton next onClick={slideNext}><Arrow /></CarouselButton>
        }}
      />
      <ActorDetail>
        <DetailPhoto alt="" src={actor.photo ? actor.photo : "https://multivoucher.pl/wp-content/uploads/2020/11/cinema-city-big.jpg"} />
        <DetailTextBox>
          <DetailName>{actor.actor ? actor.actor : "Choose an actor..."}</DetailName>
          <DetailRole>{actor.role}</DetailRole>
          <DetailFacts>{actor.facts ? actor.facts : "🎬"}</DetailFacts>
        </DetailTextBox>

      </ActorDetail>
    </Wrapper>
  );
};