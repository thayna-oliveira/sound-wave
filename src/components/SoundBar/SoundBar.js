import styled from "styled-components";
import {colors} from "../../styles";
import pauseIcon from "./pause.svg";
import playIcon from "./play.svg";
import volumeIcon from "./volume.svg";

const SoundBarWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: center;
  border-top: 1px solid ${colors.light5};
  background: ${colors.light2};
  padding: 16px;
`;

const ProgressBar = styled.div`
  height: 6px;
  background: ${colors.light12};
  border-radius: 30px;
`;

const ProgressBarWrapper = styled.div`
  height: 6px;
  background: ${colors.light6};
  border-radius: 30px;
`;

const SoundBar = ({isPlaying, playSound}) => {
  return (
    <SoundBarWrapper>
      <img src={isPlaying ? pauseIcon : playIcon} onClick={() => playSound()} />

      <ProgressBarWrapper>
        <ProgressBar style={{width: "20%"}}></ProgressBar>
      </ProgressBarWrapper>

      <img src={volumeIcon} />
    </SoundBarWrapper>
  );
};

export default SoundBar;
