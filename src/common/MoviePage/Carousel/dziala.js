import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { selectActor, selectInfo, toggleActor } from '../../../features/Movie/movieSlice';
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
import { ReactComponent as Arrow } from "./Arrow.svg";
export const Carousel = () => {
  const info = useSelector(selectInfo);
  const dispatch = useDispatch();
  const actor = useSelector(selectActor);
  const items = info.map(info => (
    <>
      <Box>
        <Actor className="actor" key={info.role}>
          <ActorPhoto alt="" onMouseDown={()=>dispatch(toggleActor(info.actor))} width="150px" height="180px" src={info.photo}></ActorPhoto>
          <ActorRole>{info.role}</ActorRole>
        </Actor>
      </Box>
    </>
  ));  
  return (
    <Wrapper>
      <AliceCarousel
        items={items}
        animationType="fadeout"
        animationDuration={800}
        paddingLeft={50}
        paddingRight={50}
        autoWidth
        disableDotsControls
        renderPrevButton={() => {
          return <CarouselButton previous ><Arrow/></CarouselButton>
        }}
        renderNextButton={() => {
          return <CarouselButton next><Arrow /></CarouselButton>
        }}
      />
      <ActorDetail>
        <DetailPhoto alt="" src={actor.photo}/>
        <div>
        <DetailName>{actor.actor}</DetailName>
        <DetailRole></DetailRole>
        <DetailFacts></DetailFacts>
        </div>
      </ActorDetail>
    </Wrapper>
  );
};