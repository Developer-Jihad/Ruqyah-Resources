import { Box } from "@mui/material";

interface IslamicPatternProps {
  opacity?: number;
  size?: number;
}

export default function IslamicPattern({ opacity = 0.05, size = 60 }: IslamicPatternProps) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity,
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent ${size}px,
            currentColor ${size}px,
            currentColor ${size * 2}px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent ${size}px,
            currentColor ${size}px,
            currentColor ${size * 2}px
          )
        `,
        pointerEvents: "none",
      }}
    />
  );
}

