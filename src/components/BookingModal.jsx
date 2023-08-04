import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

export function BookingModal({ data, open, handleClose }) {
  const [selectedCount, setSelectedCount] = useState(2);
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const [dates, setDates] = useState([
    {
      startDate: today,
      endDate: tomorrow,
      key: "selection",
    },
  ]);

  const getTotalNights = () => {
    const { startDate, endDate } = dates[0];
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getGuests = () => {
    return Number(data?.rooms[0].content.split(" ")[0]);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          transform: "translate(-50%, -50%)",
          top: "50%",
          left: "50%",
          backgroundColor: "white",
          margin: "auto",
          width: 360,
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
          borderRadius: "5px",
          p: 3,
        }}
      >
        <Typography variant="h6" fontWeight={"bold"} sx={{ margin: "3px 0" }}>
          ${data?.pricePerNight} / Night
        </Typography>
        <FormControl fullWidth sx={{ margin: "10px 0" }}>
          <InputLabel>Number of Guests</InputLabel>
          <Select
            label="Number of Guests"
            value={selectedCount}
            onChange={(e) => setSelectedCount(e.target.value)}
          >
            {[...Array(getGuests())].map((guest, index) => (
              <MenuItem value={index + 1}>{index + 1}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography variant="h5" fontWeight={"bold"} color="gray">
          Select Dates
        </Typography>
        <DateRange
          onChange={({ selection }) => setDates([selection])}
          ranges={dates}
          minDate={new Date()}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" fontWeight={"bold"}>
            ${data?.pricePerNight} x {getTotalNights()} nights
          </Typography>

          <Typography variant="h6" fontWeight={"bold"}>
            ${data?.pricePerNight * getTotalNights()}
          </Typography>
        </Box>
        <Typography variant="h6" fontWeight={"bold"}>
          SubTotal: ${data?.pricePerNight * getTotalNights()}
        </Typography>

        <Button variant="outlined" sx={{ width: "100%", marginTop: "10px" }}>
          Reserve
        </Button>
      </Box>
    </Modal>
  );
}
