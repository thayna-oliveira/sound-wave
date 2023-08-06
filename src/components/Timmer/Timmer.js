import styled from "styled-components";
import {colors} from "../../styles";

const StyledTimmer = styled.span`
  color: ${colors.light10};
  font-size: 11px;
`;

const Timmer = ({time}) => {
  return <StyledTimmer>{time}</StyledTimmer>;
};

export default Timmer;
