// theme.ts
"use client";

import { createTheme, ThemeOptions } from "@mui/material/styles";

// Define common typography with specific font families
const commonTypography: ThemeOptions["typography"] = {
  fontFamily: "Noto Serif Bengali, sans-serif", // General fallback font
  h1: {
    fontFamily: "Noto Serif Bengali, sans-serif", // Main heading font
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: "2.5rem", // Desktop
    "@media (max-width:1200px)": { fontSize: "2.25rem" }, // Tablet
    "@media (max-width:900px)": { fontSize: "2rem" }, // Mobile
  },
  h2: {
    fontFamily: "Noto Serif Bengali, sans-serif", // Subheading font
    fontWeight: 700,
    fontSize: "2rem", // Desktop
    "@media (max-width:1200px)": { fontSize: "1.75rem" }, // Tablet
    "@media (max-width:900px)": { fontSize: "1.5rem" }, // Mobile
    color: "#66BB6A",
  },
  h3: {
    fontFamily: "Noto Serif Bengali, sans-serif", // Lexend font for smaller headings
    fontWeight: 600,
    fontSize: "1.75rem", // Desktop
    "@media (max-width:1200px)": { fontSize: "1.5rem" }, // Tablet
    "@media (max-width:900px)": { fontSize: "1.3rem" }, // Mobile
  },
  h4: {
    fontFamily: "Noto Serif Bengali, sans-serif", // Font for Bengali text
    fontWeight: 600,
    fontSize: "1.25rem", // Desktop
    "@media (max-width:1200px)": { fontSize: "1.25rem" }, // Tablet
    "@media (max-width:900px)": { fontSize: "1.25rem" }, // Mobile
  },
  h5: {
    fontFamily: "Noto Serif Bengali, sans-serif",
    fontWeight: 500,
    fontSize: "1.1rem", // Desktop
    "@media (max-width:1200px)": { fontSize: "1rem" }, // Tablet
    "@media (max-width:900px)": { fontSize: "0.9rem" }, // Mobile
  },
  body1: {
    fontFamily: "Noto Serif Bengali, sans-serif", // General body text font
    fontSize: "1rem", // Desktop
    "@media (max-width:1200px)": { fontSize: "1rem" }, // Tablet
    "@media (max-width:900px)": { fontSize: "1rem" }, // Mobile
    fontWeight: 400,
    lineHeight: 2,
  },
  body2: {
    fontFamily: "Noto Serif Bengali, sans-serif", // Different font for secondary text
    fontSize: "0.875rem", // Desktop
    "@media (max-width:1200px)": { fontSize: "0.95rem" }, // Tablet
    "@media (max-width:900px)": { fontSize: "0.9rem" }, // Mobile
    fontWeight: 400,
    lineHeight: 2,
  },
  button: {
    fontFamily: "Noto Serif Bengali, sans-serif", // Font for button text
    fontWeight: 500,
    fontSize: "0.9rem",
    textTransform: "uppercase",
  },
};

// Islamic-inspired color palette
const islamicColors = {
  // Deep greens (Quran-inspired)
  greenDark: "#0F5132",
  greenPrimary: "#2D5016",
  greenLight: "#4A7C59",
  greenAccent: "#66BB6A",
  
  // Gold accents (premium, sacred)
  gold: "#D4AF37",
  goldLight: "#F4D03F",
  goldDark: "#B8940F",
  
  // Earth tones (warm, grounding)
  cream: "#F5F5DC",
  beige: "#E8DCC6",
  brown: "#8B7355",
  
  // Neutral grays
  grayDark: "#2C3E50",
  grayMedium: "#5D6D7E",
  grayLight: "#ECF0F1",
};

// Light theme with Islamic aesthetic
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: islamicColors.greenPrimary,
      light: islamicColors.greenLight,
      dark: islamicColors.greenDark,
      contrastText: "#ffffff",
    },
    secondary: {
      main: islamicColors.gold,
      light: islamicColors.goldLight,
      dark: islamicColors.goldDark,
      contrastText: islamicColors.greenDark,
    },
    background: {
      default: "#FAFAFA",
      paper: "#FFFFFF",
    },
    text: {
      primary: islamicColors.greenDark,
      secondary: islamicColors.grayMedium,
    },
    warning: {
      main: islamicColors.gold,
      contrastText: "#ffffff",
    },
    success: {
      main: islamicColors.greenAccent,
    },
  },
  typography: commonTypography,
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          transition: "all 0.3s ease-in-out",
          border: "1px solid rgba(45, 80, 22, 0.1)",
          "&:hover": {
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 600,
          padding: "10px 24px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-1px)",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
          },
        },
      },
    },
  },
});

// Dark theme with Islamic aesthetic
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: islamicColors.greenAccent,
      light: "#81C784",
      dark: "#4CAF50",
      contrastText: "#ffffff",
    },
    secondary: {
      main: islamicColors.gold,
      light: islamicColors.goldLight,
      dark: islamicColors.goldDark,
      contrastText: islamicColors.greenDark,
    },
    background: {
      default: "#0F1419",
      paper: "#1A1F2E",
    },
    text: {
      primary: "#E8E8E8",
      secondary: "#B0B0B0",
    },
    warning: {
      main: islamicColors.gold,
      contrastText: "#000000",
    },
    success: {
      main: islamicColors.greenAccent,
    },
  },
  typography: commonTypography,
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)",
          transition: "all 0.3s ease-in-out",
          border: "1px solid rgba(102, 187, 106, 0.2)",
          backgroundImage: "linear-gradient(135deg, #1A1F2E 0%, #1E2538 100%)",
          "&:hover": {
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.3)",
            transform: "translateY(-2px)",
            borderColor: "rgba(102, 187, 106, 0.4)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 600,
          padding: "10px 24px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-1px)",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
          },
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
