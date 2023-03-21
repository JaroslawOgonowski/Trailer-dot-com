import React from 'react';
import { useSelector } from 'react-redux';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { selectInfo } from '../../../features/Movie/movieSlice';
import { Actor, ActorName, ActorPhoto, ActorRole, Box, CarouselButton, Wrapper } from './styled';
import { ReactComponent as Arrow } from "./Arrow.svg";
export const Carousel = () => {
  const info = useSelector(selectInfo);
  const items = info.map(info => (
    <Box>
      <Actor key={info.actor} >
        <ActorPhoto alt="" src={info.photo}></ActorPhoto>
        <ActorName>{info.actor}</ActorName>
        <ActorRole>{info.role}</ActorRole>
      </Actor>
    </Box>
  ));

  return (
    <Wrapper>
      <AliceCarousel
        items={items}
        animationType="fadeout"
        animationDuration={800}
        paddingLeft={50}
        paddingRight={50}
        infinite
        autoPlay
        autoPlayInterval={3000}
        autoWidth
        disableDotsControls
        controlsStrategy="alternate"
        renderPrevButton={() => {
          return <CarouselButton previous><Arrow /></CarouselButton>
        }}
        renderNextButton={() => {
          return <CarouselButton next><Arrow /></CarouselButton>
        }}
      />
    </Wrapper>
  );
};