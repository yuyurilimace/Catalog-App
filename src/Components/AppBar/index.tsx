import { AppBar, Container, Toolbar, Box, Button } from "@mui/material";
import Logo from "../../assets/logo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { theme } from "../../theme";

import { AppBarMenu } from "./Menu";

interface CustomAppProps {
  routeNames: string[];
}

const CustomAppBar = ({ routeNames }: CustomAppProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onChangeRoute = (name: string) => {
    const routeName = "/" + name.toLowerCase();
    navigate(routeName);
  };

  return (
    <AppBar position="static">
      <Container maxWidth={false}>
        <Toolbar
          disableGutters
          variant="dense"
          sx={{ minHeight: "5vh", alignItems: "stretch" }}
        >
          <Box width={"70px"} height={"auto"} maxWidth={"400px"}>
            <Logo />
          </Box>
          <Box flexGrow={1}>
            {routeNames.map((name) => (
              <Button
                onClick={() => onChangeRoute(name)}
                sx={{
                  backgroundColor: (theme) =>
                    pathname.includes(name.toLocaleLowerCase())
                      ? theme.palette.primary.dark
                      : theme.palette.primary.main,
                  "&:hover": {
                    backgroundColor: theme.palette.primary.dark,
                  },
                  height: "100%",
                  borderRadius: "0px",
                  padding: "16px",
                }}
                color={"inherit"}
              >
                {name}
              </Button>
            ))}
          </Box>
          <AppBarMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export { CustomAppBar };
