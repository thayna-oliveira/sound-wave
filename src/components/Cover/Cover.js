import styled from "styled-components";

const StyledCover = styled.div`
  width: 140px;
  height: 140px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const Cover = ({coverImage}) => {
  return (
    <StyledCover>
      <Image src={coverImage}></Image>
    </StyledCover>
  );
};

export default Cover;
