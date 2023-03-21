import React from 'react';
import { useSelector } from 'react-redux';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { selectInfo } from '../../../features/Movie/movieSlice';
import { Actor, ActorName, ActorPhoto, ActorRole, Actors, Box, List, NextButton, PreviousButton, Wrapper } from './styled';
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
        autoWidth
        disableDotsControls
        controlsStrategy="alternate"
        renderPrevButton={() => {
          return <PreviousButton className="p-4 absolute left-0 top-0">⬅</PreviousButton>
        }}
        renderNextButton={() => {
          return <NextButton className="p-4 absolute right-0 top-0">➡</NextButton>
        }}
      />
    </Wrapper>
  )
}