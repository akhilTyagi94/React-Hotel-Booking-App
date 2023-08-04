import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  FormControlLabel,
  FormGroup,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { useNavigate } from "react-router-dom";
import { SearchOutlined } from "@mui/icons-material";

export function Navbar({ hotels = [], setHotels, originalHotels = [] }) {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState();

  const handleSearch = () => {
    const filteredHotels = hotels.filter(
      (hotel) =>
        hotel.address.toLowerCase().includes(searchValue.toLowerCase()) ||
        hotel.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setHotels(filteredHotels);
  };

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));

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
              {originalHotels.length > 0 && (
                <>
                  <TextField
                    value={searchValue}
                    onChange={(e) => {
                      setSearchValue(e.target.value);
                      if (e.target.value === "") {
                        setHotels(originalHotels);
                      }
                    }}
                    variant="outlined"
                    label="Search Hotel"
                    size="small"
                    InputProps={{
                      endAdornment: (
                        <IconButton
                          disabled={!searchValue}
                          onClick={() => handleSearch()}
                        >
                          <SearchOutlined />
                        </IconButton>
                      ),
                    }}
                  />
                </>
              )}
              <FormGroup sx={{ display: { xs: "none", md: "flex" } }}>
                <FormControlLabel
                  control={<MaterialUISwitch sx={{ m: 1 }} defaultUnchecked />}
                />
              </FormGroup>
              <Typography
                sx={{ display: { xs: "block", md: "none" }, cursor: "pointer" }}
                fontSize={15}
                variant="h6"
                color="inherit"
                component="a"
              >
                DarkMode
              </Typography>
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
}
