import { Box, Skeleton } from "@mui/material";

export default function VideoSkeleton() {
  return (
    <Box
      sx={{
        position: "relative",
        paddingBottom: "55.25%",
        overflow: "hidden",
        maxWidth: "100%",
        borderRadius: "10px",
      }}
    >
      <Skeleton
        variant="rectangular"
        width="100%"
        height="100%"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
        animation="wave"
      />
    </Box>
  );
}

