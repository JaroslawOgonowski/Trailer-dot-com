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
  Wrapper
} from './styled';

export const Carousel = () => {
  const info = useSelector(selectInfo);
  const dispatch = useDispatch();
  const actor = useSelector(selectActor);


  const responsive = {
    0: { items: 6 },
    568: { items: 6 },
    1024: { items: 6 },
  };


  const createItems = ([handleClick]) => {
    let deltaX = 0;
    let difference = 0;
    const swipeDelta = 20;


    return Array.from(info).map((info, i) => (

      <div
        key={info.role}
        data-value={i + 1}
        className="item"
        onMouseDown={(e) => (deltaX = e.pageX)}
        onMouseUp={(e) => (difference = Math.abs(e.pageX - deltaX))}
        onClick={() => (difference < swipeDelta) && handleClick(i)}
      >
        <Box>
          <Actor className="actor">
            <ActorPhoto alt="" onMouseDown={() => dispatch(toggleActor(info.actor))} width="150px" height="180px" src={info.photo}></ActorPhoto>
            <ActorRole>{info.role}</ActorRole>
          </Actor>
        </Box>
      </div>

    ));




  };








  const [activeIndex, setActiveIndex] = useState(0);
  const [items] = useState(createItems([setActiveIndex]));

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  const syncActiveIndex = ({ item }) => setActiveIndex(item);


  return [
    <Wrapper>
      <AliceCarousel
        items={items}
        activeIndex={activeIndex}
        onSlideChanged={syncActiveIndex}
        disableButtonsControls
        autoWidth
        animationType="fadeout"
        animationDuration={800}
        paddingLeft={50}
        paddingRight={50}
        disableDotsControls
      />
      <div className="b-refs-buttons">
        <CarouselButton previous onClick={slidePrev}><Arrow /></CarouselButton>
        <CarouselButton next onClick={slideNext}><Arrow /></CarouselButton>
      </div>,

      <ActorDetail>
        <DetailPhoto alt="" src={actor.photo} />
        <div>
          <DetailName>{actor.actor}</DetailName>
          <DetailRole></DetailRole>
          <DetailFacts></DetailFacts>
        </div>
      </ActorDetail>
    </Wrapper>
  ];
};