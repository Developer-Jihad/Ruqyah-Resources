import { Box } from "@mui/material";
import React from "react";

interface VideoProps {
  url: string;
}

export default function Video({ url }: VideoProps) {
  return (
    <Box
      sx={{
        position: "relative",
        paddingBottom: { xs: "65%", md: "75%" },
        overflow: "hidden",
        borderRadius: 2,
        maxWidth: "100%",
        height: "100%",
      }}
    >
      <iframe
        width="1236"
        height="695"
        src={url}
        loading="lazy"
        frameBorder="0"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allow=""
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        title="YouTube video player"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </Box>
  );
}
