import { Avatar, Box, IconButton, MenuItem, Menu } from "@mui/material";
import { useRef, useState } from "react";

const AppBarMenu = () => {
  const anchorElement = useRef(null);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    if (anchorElement.current) {
      setOpen(true);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <IconButton
        ref={anchorElement}
        onClick={handleClick}
        color="inherit"
        sx={{ height: "100%" }}
      >
        <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorElement.current}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Box>
  );
};

export { AppBarMenu };
