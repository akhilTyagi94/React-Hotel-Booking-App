import React, { useState } from "react";
import { getHotels } from "../api/request";
import { useQuery } from "react-query";
import LoadingSkeleton from "../components/LoadingSkeleton";
import Navbar from "../components/Navbar";
import { Grid, Container, Pagination } from "@mui/material";
import HotelCard from "../components/HotelCard";

const Home = () => {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [page, setPage] = useState(1);
  const hotelLimitPerPage = 9;

  const fetchHotels = async () => {
    const { data } = await getHotels();
    setHotels(data);
    setFilteredHotels(data);
    return data;
  };

  const { isLoading } = useQuery("hotels", fetchHotels);
  const startIndex = (page - 1) * hotelLimitPerPage;
  const endIndex = page * hotelLimitPerPage - 1;
  const paginatedHotels = filteredHotels.slice(startIndex, endIndex + 1);
  const totalHotels = filteredHotels.length;
  const totalPages = Math.ceil(totalHotels / hotelLimitPerPage);

  return isLoading ? (
    <LoadingSkeleton />
  ) : (
    <>
      <Navbar
        hotels={filteredHotels}
        setHotels={setFilteredHotels}
        originalHotels={hotels}
      />
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ padding: 2 }}>
          {paginatedHotels.length > 0 ? (
            <>
              {paginatedHotels.map((hotels) => (
                <Grid item xs={12} sm={6} md={4} key={hotels.id}>
                  <HotelCard key={hotels.id} hotel={hotels} />
                </Grid>
              ))}
            </>
          ) : (
            <h2>No Hotels Found</h2>
          )}
        </Grid>
        <Pagination
          count={totalPages}
          page={page}
          onChange={(event, value) => setPage(value)}
          sx={{ display: "flex", justifyContent: "center" }}
        />
      </Container>
    </>
  );
};

export default Home;
