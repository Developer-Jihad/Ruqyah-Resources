import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Video from "../components/video";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import videosData from "../data/videos.json";
import type { VideosData } from "../types/data";

export default function Videos() {
  const typedVideosData = videosData as VideosData;

  return (
    <div>
      <Typography variant="h1" gutterBottom sx={{ textAlign: "center", mt: 5 }}>
        রুকইয়াহ সম্পর্কিত কমপ্লিট ভিডিও রিসোর্স
      </Typography>
      {Object.entries(typedVideosData).map(([category, videos]) => (
        <React.Fragment key={category}>
          <Box sx={{ bgcolor: "#212932", py: 3, mt: 5 }}>
            <Container>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <VideoLibraryIcon sx={{ color: "#66BB6A" }} />
                <Typography variant="h2">{category}</Typography>
              </Box>
            </Container>
          </Box>
          <Container sx={{ my: 5 }}>
            {/* Optional: Add category-specific description here if needed */}
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                {videos.map((video, idx) => (
                  <Grid item xs={12} sm={6} md={4} key={video.url}>
                    <Video url={video.url} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </React.Fragment>
      ))}
    </div>
  );
}
