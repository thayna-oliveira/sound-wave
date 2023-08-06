import styled from "styled-components";
import {SongDetail, Timmer, Wave} from "../index";

const ContentWrapper = styled.div`
  max-width: 100%;
  overflow: hidden;
`;

const CardContent = ({song, currentTime, duration}) => {
  return (
    <ContentWrapper>
      <SongDetail author={song.author} songName={song.title}></SongDetail>
      <Wave></Wave>
      <Timmer currentTime={currentTime} duration={duration}></Timmer>
    </ContentWrapper>
  );
};

export default CardContent;
