import imageLogin from "../../../assets/image.png";

import styled from "@emotion/styled";

const StyledImageLogin = styled.img`
  height: 100vh;
  width: 100%;
  object-fit: fill;
  display: block;
`;

const ImageSection = () => {
  return <StyledImageLogin src={imageLogin} />;
};

export { ImageSection };
