import styled from "styled-components";
import {colors} from "../../styles";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

const StyledTimmer = styled.span`
  color: ${colors.light10};
  font-size: 11px;
`;

const Timmer = ({currentTime, duration}) => {
  return (
    <Wrapper>
      <StyledTimmer>{currentTime}</StyledTimmer>
      <StyledTimmer>{duration}</StyledTimmer>
    </Wrapper>
  );
};

export default Timmer;
