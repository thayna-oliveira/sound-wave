import styled from "styled-components";
import {colors} from "../../styles";

const Wrapper = styled.div`
  text-align: left;
  font-size: 18px;
  margin-bottom: 26px;
`;

const Title = styled.h3`
  color: ${colors.light12};
  font-weight: 700;
`;

const Author = styled.p`
  color: ${colors.light10};
  font-weight: 400;
`;

const SongDetail = ({songName, author}) => {
  return (
    <Wrapper>
      <Title>{songName}</Title>
      <Author>{author}</Author>
    </Wrapper>
  );
};

export default SongDetail;
