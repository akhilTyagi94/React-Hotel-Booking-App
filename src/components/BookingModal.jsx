import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export function BookingModal({ data, open, handleClose }) {
  const [selectedCount, setSelectedCount] = useState(2);
  const getGuests = () => {
    return Number(data?.rooms[0].content.split(" ")[0]);
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          top: "50%",
          left: "50%",
          backgroundColor: "white",
          margin: "auto",
          width: "40%",
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
      </Box>
    </Modal>
  );
}
