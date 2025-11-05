"use client";

import React from "react";
import Link from "next/link";
import { Container, Grid, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 6, md: 10 },
        backdropFilter: "blur(20px) saturate(180%)",
        borderTop: `2px solid ${
          isDarkMode ? "rgba(102, 187, 106, 0.2)" : "rgba(45, 80, 22, 0.15)"
        }`,
        backgroundColor: isDarkMode
          ? "rgba(15, 20, 25, 0.95)"
          : "rgba(255, 255, 255, 0.95)",
        backgroundImage: isDarkMode
          ? "linear-gradient(135deg, rgba(15, 20, 25, 0.95) 0%, rgba(26, 31, 46, 0.95) 100%)"
          : "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 250, 250, 0.95) 100%)",
        transition: "all 0.3s ease",
      }}
    >
      <Container>
        <Grid container spacing={4}>
          {/* Column 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 700,
                mb: 2,
                fontSize: "1.1rem",
              }}
            >
              About Us
            </Typography>
            <Typography
              sx={{
                color: theme.palette.text.secondary,
                lineHeight: 2,
                fontSize: "1rem",
              }}
            >
              ঘরে ঘরে কুরআন সুন্নাহ ভিত্তিক রুকিয়াহ সচেতনতা বৃদ্ধির লক্ষে আমাদের
              এই প্রচেষ্টা ... <br />
              ওয়ামা তাওফীকী ইল্লা বিল্লাহ ।
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 700,
                mb: 2,
                fontSize: "1.1rem",
              }}
            >
              Contact Info
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  "&:hover": {
                    color: theme.palette.primary.main,
                    transition: "color 0.3s",
                  },
                }}
              >
                ● +88 01303 417 316
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  "&:hover": {
                    color: theme.palette.primary.main,
                    transition: "color 0.3s",
                  },
                }}
              >
                ● jihad.developer.bd@gmail.com
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                }}
              >
                ● Bangladesh
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 700,
                mb: 2,
                fontSize: "1.1rem",
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {[
                { label: "হোম", href: "/" },
                { label: "ভিডিও", href: "/videos" },
                { label: "ডকুমেন্ট", href: "/docs" },
                { label: "ডায়াগনোসিস", href: "/diagnosis" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      transition: "all 0.3s ease",
                      display: "inline-block",
                      "&:hover": {
                        color: theme.palette.primary.main,
                        transform: "translateX(4px)",
                      },
                    }}
                  >
                    → {link.label}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Column 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 700,
                mb: 2,
                fontSize: "1.1rem",
              }}
            >
              Trusted Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {[
                { label: "Ruyah Support BD", href: "https://ruqyahbd.org/" },
                { label: "Dua & Ruqyah", href: "https://duaruqyah.com/ruqyah" },
                {
                  label: "Hijama & Ruqya BD",
                  href: "https://www.youtube.com/@HijamaRuqyaBD",
                },
                {
                  label: "SukunLife",
                  href: "https://www.facebook.com/sukunlife",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      transition: "all 0.3s ease",
                      display: "inline-block",
                      "&:hover": {
                        color: theme.palette.primary.main,
                        transform: "translateX(4px)",
                      },
                    }}
                  >
                    🔗 {link.label}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
