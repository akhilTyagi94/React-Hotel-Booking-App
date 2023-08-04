import React, { useState } from "react";
import { Box, Button, Container, ListItem, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getHotelBySlug } from "../api/request";
import LoadingSkeleton from "../components/LoadingSkeleton";
import { Gallery } from "../components/Gallery";
import { Navbar } from "../components/Navbar";
import { BookingModal } from "../components/BookingModal";

function HotelInfo() {
  const { slug } = useParams();

  const [open, setOpen] = useState(false);

  const fetchHotelData = async () => {
    const { data } = await getHotelBySlug(slug);
    return data;
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { isLoading, data } = useQuery("hotel-slug", fetchHotelData);

  return (
    <>
      <Navbar />
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <Container maxWidth="lg">
          <Typography
            variant="h5"
            fontWeight={"bold"}
            sx={{ marginBottom: "20px", marginTop: "20px" }}
          >
            {data?.name}
          </Typography>
          <Gallery images={data?.images} />
          <Box sx={{ margin: "3px 0", display: "flex" }}>
            {data?.rooms.map((room) => (
              <Typography
                variant="h6"
                fontWeight={"bold"}
                key={room.id}
                sx={{ margin: "5px 20px 5px 0px", color: "gray" }}
              >
                {room.content}
              </Typography>
            ))}
          </Box>
          <Typography variant="paragraph" fontWeight={"bold"}>
            {data?.aboutThePlace}
          </Typography>
          <Typography
            variant="h4"
            fontWeight={"bold"}
            sx={{ marginBottom: "20px", marginTop: "20px" }}
          >
            What This Place Offers!
          </Typography>
          <Box
            sx={{
              margin: "3px 0",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Box sx={{ maxWidth: "80%" }}>
              {data?.features.map((feature) => (
                <ListItem key={feature.id}>{feature.text}</ListItem>
              ))}
            </Box>
            <Button onClick={handleOpen} variant="outlined">
              Reserve
            </Button>
          </Box>

          <BookingModal data={data} open={open} handleClose={handleClose} />
        </Container>
      )}
    </>
  );
}

export default HotelInfo;
