"use client";

import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";

interface BookmarkProps {
  title: string;
  description: string;
  url: string;
  coverImage: string;
}

export default function Bookmark({
  title,
  description,
  url,
  coverImage,
}: BookmarkProps) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "100%",
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <CardActionArea
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        {/* Cover Image */}
        <Box
          sx={{
            position: "relative",
            height: 160,
            overflow: "hidden",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "60%",
              background:
                "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
              pointerEvents: "none",
            },
          }}
        >
          <CardMedia
            component="img"
            height="180"
            image={coverImage}
            alt={title}
            sx={{
              objectFit: "cover",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
        </Box>
        {/* Content */}
        <CardContent
          sx={{ flexGrow: 1, display: "flex", flexDirection: "column", p: 2.5 }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontWeight: 700,
              mb: 1.5,
              background: isDarkMode
                ? "linear-gradient(135deg, #66BB6A 0%, #81C784 100%)"
                : "linear-gradient(135deg, #2D5016 0%, #4A7C59 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "1.25rem",
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              lineHeight: 1.7,
              flexGrow: 1,
              fontSize: "0.95rem",
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
