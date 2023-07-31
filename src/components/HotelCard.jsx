import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{ cursor: "pointer" }}
      onClick={() => navigate(`/hotels/${hotel.slug}`)}
    >
      <CardMedia
        component="img"
        height="250"
        image={hotel.thumbnail}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography fontWeight="bold" variant="h6">
          {hotel.address}
        </Typography>
        <Typography fontWeight="bold">${hotel.pricePerNight} Night</Typography>
      </CardContent>
    </Card>
  );
};

export default HotelCard;
