import {useRef, useState} from "react";
import styled from "styled-components";
import {colors} from "../../styles";
import {CardContent, Cover, SoundBar} from "../index";

const AudioPlayer = styled.audio`
  display: none;
`;

const CardWrapper = styled.div`
  border-radius: 16px;
  border: 1px solid ${colors.light5};
  background: ${colors.light1};
  box-shadow: 0px 16px 32px 0px rgba(0, 0, 0, 0.06);
  max-width: 500px;
  overflow: hidden;
`;

const CardContentWrapper = styled.div`
  display: grid;
  padding: 16px;
  gap: 16px;
  grid-template-columns: auto 1fr;
`;

const Card = ({song}) => {
  const audioRef = useRef(null);

  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");
  const [isPlaying, setIsPlaying] = useState(false);

  const timeUpdate = (event) => {
    const minutes = Math.floor(event.target.currentTime / 60);
    const seconds = Math.floor(event.target.currentTime - minutes * 60);

    setCurrentTime(minutes + ":" + seconds);
  };

  const handleLoadedMetaData = (event) => {
    const minutes = Math.floor(event.target.duration / 60);
    const seconds = Math.floor(event.target.duration - minutes * 60);
    setDuration(minutes + ":" + seconds);
  };

  const handleOnPlaySound = () => {
    setIsPlaying(!isPlaying);

    if (isPlaying) {
      audioRef.current.pause();
      return;
    }

    audioRef.current.play();
  };

  return (
    <CardWrapper>
      <CardContentWrapper>
        <AudioPlayer
          src={song.src}
          ref={audioRef}
          onTimeUpdate={timeUpdate}
          onLoadedMetadata={handleLoadedMetaData}
        />

        <Cover coverImage={song.thumbnail}></Cover>

        <CardContent
          song={song}
          duration={duration}
          currentTime={currentTime}
        ></CardContent>
      </CardContentWrapper>

      <SoundBar playSound={handleOnPlaySound} isPlaying={isPlaying}></SoundBar>
    </CardWrapper>
  );
};

export default Card;
