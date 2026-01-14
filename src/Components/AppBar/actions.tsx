import { Button, Grid } from "@mui/material";
import { LogOut } from "lucide-react";
import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface CustomAppProps {
  routeNames: string[];
}

export const NavigateButtons = ({ routeNames }: CustomAppProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onChangeRoute = (name: string) => {
    const routeName = "/" + name.toLowerCase();
    navigate(routeName);
  };

  const activeRouteStyle = useCallback(
    (routeName: string) => {
      if ("/" + routeName.toLowerCase() === pathname) {
        return {
          backgroundColor: "#fff",
          color: "#2563eb",
          boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        };
      }

      return {
        border: "none",
        color: "#fff",
        [":hover"]: {
          background: "color-mix(in oklab,#fff 10%,transparent)",
        },
      };
    },
    [pathname]
  );

  const ActiveRouteIconStyle = useCallback(
    (routeName: string) => {
      if (pathname.includes(routeName.toLowerCase())) {
        return <LogOut size={16} color="#3b82f6" />;
      }
      return <LogOut size={16} color="#fff" />;
    },
    [pathname]
  );
  return (
    <>
      {routeNames.map((routeName) => (
        <Grid>
          <Button
            startIcon={ActiveRouteIconStyle(routeName)}
            variant="outlined"
            sx={{ ...activeRouteStyle(routeName) }}
          >
            {routeName}
          </Button>
        </Grid>
      ))}

      <Grid>
        <Button
          startIcon={<LogOut size={16} color="#fff" />}
          variant="outlined"
          sx={{
            borderRadius: "calc(0.625rem - 2px)",
            background: "color-mix(in oklab,#fff 10%,transparent)",
            color: "#fff",
            border: {
              borderColor: "color-mix(in oklab,#fff 10%,transparent)",
            },
          }}
        >
          Sair
        </Button>
      </Grid>
    </>
  );
};
