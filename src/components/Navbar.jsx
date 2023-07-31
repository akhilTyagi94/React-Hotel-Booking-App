import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { useNavigate } from "react-router-dom";

const Navbar = ({ hotels, setHotels, originalHotels }) => {
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
                          <SearchOutlinedIcon />
                        </IconButton>
                      ),
                    }}
                  />
                </>
              )}
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
