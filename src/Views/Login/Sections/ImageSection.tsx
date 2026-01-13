import { Grid, Box } from "@mui/material";
import imageLogin from "../../../assets/image.png";

import styled from "@emotion/styled";

const StyledImageLogin = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  inset: 0;
`;

const ImageSection = () => {
  return (
    <Grid size={{ md: 6, xs: 0, sm: 0 }}>
      <Box
        display={"block"}
        height={"100%"}
        width={"100%"}
        position={"relative"}
      >
        <StyledImageLogin src={imageLogin} />
      </Box>
    </Grid>
  );
};

export { ImageSection, StyledImageLogin };
