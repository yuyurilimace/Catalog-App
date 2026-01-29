import { Box, Typography } from "@mui/material";

type IconProps = {
  padding?: number | string;
  background?: string;
  borderRadius?: string;
  icon: React.ReactNode;
  title?: string;
  titleColor?: string;
  subtitle?: string;
  subtitleColor?: string;
};

export const Icon = ({
  padding = 1,
  background = "",
  borderRadius = "0.625rem",
  icon,
  title,
  titleColor = "#fff",
  subtitle,
  subtitleColor,
}: IconProps) => {
  return (
    <>
      <Box
        padding={padding}
        display={"flex"}
        textAlign={"center"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          background: background,
          borderRadius: borderRadius,
        }}
      >
        {icon}
      </Box>
      <Box
        display={{ xs: "none", sm: "flex", md: "flex" }}
        flexDirection={"column"}
      >
        {title && (
          <Typography {...(titleColor && { color: titleColor })} variant="h6">
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography
            {...(subtitleColor && { color: subtitleColor })}
            variant="subtitle1"
          >
            {subtitle}
          </Typography>
        )}
      </Box>
    </>
  );
};
