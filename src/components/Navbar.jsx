import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <AppBar position="static" color="inherit">
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingY: 1.2,
            }}
          >
            <Typography
              onClick={() => navigate("/")}
              sx={{ cursor: "pointer" }}
              variant="h5"
              color="black"
              fontWeight={"bold"}
            >
              MakeMyBooking
            </Typography>

            <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <Typography
                onClick={() => navigate("/")}
                sx={{ cursor: "pointer" }}
                variant="h6"
                fontSize="16px"
                color="black"
                fontWeight={"bold"}
              >
                Home
              </Typography>
              <IconButton>
                <Avatar
                  src="https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE="
                  sx={{ width: 32, height: 32 }}
                />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
