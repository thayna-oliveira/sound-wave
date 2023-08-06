import styled from "styled-components";
import waveIcon from "./waves.svg";

const WaveImage = styled.img`
  max-width: 100%;
`;

/* Mock song wave */
const Wave = () => {
  return <WaveImage src={waveIcon} />;
};

export default Wave;
