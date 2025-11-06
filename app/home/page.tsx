"use client";

import React from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Chip,
  useTheme,
  Hidden,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Video from "../components/video";
import Bookmark from "../components/bookmark";
import Image from "next/image";
import DescriptionIcon from "@mui/icons-material/Description";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import StructuredData from "../components/structured-data";
import { orange } from "@mui/material/colors";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://learnruqyah.com";

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Learn Ruqyah",
  alternateName: "রুকইয়াহ শিখুন",
  url: baseUrl,
  description:
    "Learn Ruqyah (রুকইয়াহ) - Learn Islamic spiritual healing based on Quran and Sunnah",
  inLanguage: ["bn-BD", "en-US"],
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${baseUrl}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Learn Ruqyah",
  url: baseUrl,
  description:
    "Educational platform for learning Ruqyah (Islamic spiritual healing)",
  contactPoint: {
    "@type": "ContactPoint",
    email: "jihad.developer.bd@gmail.com",
    telephone: "+8801303417316",
    contactType: "Customer Support",
    areaServed: "BD",
    availableLanguage: ["Bengali", "English"],
  },
};

export default function Home() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Box>
      <StructuredData data={websiteStructuredData} />
      <StructuredData data={organizationStructuredData} />

      {/* ///////////////// Professional Hero Section ///////////////// */}
      <Box
        sx={{
          width: "100%",
          position: "relative",
          background: isDarkMode
            ? "linear-gradient(180deg, #1A1F2E 0%, #0F1419 100%)"
            : "linear-gradient(180deg,rgb(238, 238, 238) 0%, #FFFFFF 100%)",
          py: { xs: 8, sm: 10 },
        }}
      >
        <Container
          sx={{
            width: "100%",
            justifyItems: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "1.7rem", sm: "2.5rem", md: "3rem" },
              mb: 3,
              color: theme.palette.primary.main,
              textAlign: "center",
            }}
          >
            রুকইয়াহ (Ruqyah)
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",

                width: { xs: "90%", sm: "100%" },
                gap: 1.5,
                px: { xs: 4, sm: 3 },
                py: 1,
                mb: 4,
                borderRadius: "100px",
                background: isDarkMode
                  ? "linear-gradient(135deg, rgba(102, 187, 106, 0.15) 0%, rgba(102, 187, 106, 0.08) 100%)"
                  : "linear-gradient(135deg, rgba(45, 80, 22, 0.08) 0%, rgba(102, 187, 106, 0.08) 100%)",
                border: `1px solid ${
                  isDarkMode
                    ? "rgba(102, 187, 106, 0.3)"
                    : "rgba(45, 80, 22, 0.15)"
                }`,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
                  fontWeight: 600,
                  color: isDarkMode ? theme.palette.primary.main : "#2D5016",
                  letterSpacing: "0.5px",
                  lineHeight: 1.5,
                  textAlign: "center",
                }}
              >
                আমি নাযিল করছি এমন কুরআন, যা মুমিনদের জন্যে শেফা ও রহমত।
                [সূরা-১৭:৮২]
              </Typography>
            </Box>
          </Box>

          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              fontWeight: 400,
              textAlign: "center",
              color: theme.palette.text.secondary,
              lineHeight: 1.7,
              mb: 4,
            }}
          >
            কুরআন-সুন্নাহ ভিত্তিক ইসলামিক চিকিৎসার এই বরকতময় জ্ঞান অর্জন করে
            আপনি বদনজর, জাদু, জিন এবং বিভিন্ন শারীরিক-মানসিক রোগ থেকে নিজেকে ও
            আপনার পরিবারকে সুরক্ষিত রাখতে পারবেন। এটি শুধুমাত্র একটি চিকিৎসা
            পদ্ধতি নয়, বরং রাসূলুল্লাহ (সা.)-এর সুন্নাহর পুনরুজ্জীবন।
            <Box>
              এমনকি যেসকল ক্ষেত্রে আধুনিক চিকিৎসাবিজ্ঞান ব্যর্থ, সেসকল সমস্যায়ও
              নববী চিকিৎসাগুলো-ই একমাত্র অবলম্বন।
            </Box>
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: 2, sm: 3 },
            }}
          >
            <Button
              component={Link}
              href="/videos"
              variant="contained"
              startIcon={<VideoLibraryIcon />}
              size="large"
              sx={{
                px: { xs: 3, sm: 5 },
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 600,

                background: isDarkMode
                  ? "linear-gradient(135deg, #66BB6A 0%, #81C784 100%)"
                  : "linear-gradient(135deg, #2D5016 0%, #4A7C59 100%)",
                color: "white",
                boxShadow: isDarkMode
                  ? "0 4px 14px rgba(102, 187, 106, 0.4)"
                  : "0 4px 14px rgba(45, 80, 22, 0.25)",
                borderRadius: "12px",
                textTransform: "none",
                "&:hover": {
                  background: isDarkMode
                    ? "linear-gradient(135deg, #81C784 0%, #66BB6A 100%)"
                    : "linear-gradient(135deg, #1B5E20 0%, #2D5016 100%)",
                  transform: "translateY(-2px)",
                  boxShadow: isDarkMode
                    ? "0 6px 20px rgba(102, 187, 106, 0.5)"
                    : "0 6px 20px rgba(45, 80, 22, 0.35)",
                },
              }}
            >
              ভিডিও দেখুন
            </Button>
            <Button
              component={Link}
              href="/docs"
              variant="outlined"
              startIcon={<DescriptionIcon />}
              size="large"
              sx={{
                px: { xs: 3, sm: 5 },
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 600,
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
                borderRadius: "12px",
                textTransform: "none",
                "&:hover": {
                  borderColor: theme.palette.primary.light,
                  backgroundColor: isDarkMode
                    ? "rgba(102, 187, 106, 0.1)"
                    : "rgba(45, 80, 22, 0.05)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              ডকুমেন্ট পড়ুন
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ///////////////// What is Ruqyah Section ///////////////// */}
      <Box
        sx={{
          py: { xs: 8, sm: 10 },
          background: isDarkMode ? "#1A1F2E" : "rgb(238, 238, 238)",
        }}
      >
        <Container>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.7rem", sm: "2.3rem", md: "3rem" },
              fontWeight: 700,
              textAlign: "center",
              mb: { xs: 3, sm: 5 },
              lineHeight: 1.5,

              background: isDarkMode
                ? "linear-gradient(135deg, #66BB6A 0%, #81C784 100%)"
                : "linear-gradient(135deg, #2D5016 0%, #4A7C59 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            রুকইয়াহ কি, কেন?
          </Typography>

          <Grid container spacing={{ xs: 2, sm: 3 }}>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  background: theme.palette.background.paper,
                  p: { xs: 2, md: 3 },
                  borderRadius: 2,
                  border: `1px solid ${
                    isDarkMode
                      ? "rgba(102, 187, 106, 0.2)"
                      : "rgba(45, 80, 22, 0.1)"
                  }`,
                  boxShadow: isDarkMode
                    ? "0 2px 8px rgba(0, 0, 0, 0.3)"
                    : "0 2px 8px rgba(0, 0, 0, 0.04)",
                  height: "100%",
                  alignContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1.125rem",
                    lineHeight: 1.9,
                    color: theme.palette.text.primary,
                  }}
                >
                  ঝাড়ফুঁককে আরবীতে{" "}
                  <Box
                    component="span"
                    sx={{ fontWeight: 600, color: theme.palette.primary.main }}
                  >
                    রুকইয়াহ
                  </Box>{" "}
                  বলা হয়। মানুষের দৃশ্য-অদৃশ্য যে কোনো রোগের জন্য-ই ঝাড়ফুঁক করা
                  যায়। রুকইয়াহর পারিভাষিক অর্থ হচ্ছে- কোরআনের আয়াত, আল্লাহর
                  নামের যিকর এবং রাসূল ﷺ থেকে বর্ণিত বিভিন্ন দোয়া পাঠ করার
                  মাধ্যমে আল্লাহর কাছে কোন বিপদ বা রোগ থেকে মুক্তি চাওয়া।
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1.125rem",
                    lineHeight: 1.9,
                    color: theme.palette.text.primary,
                    mb: 3,
                  }}
                >
                  চিকিৎসাবিজ্ঞানের আলোকে কোন রোগের চিকিৎসা থাকুক কিংবা নাথাকুক
                  সর্বাবস্থায় শারীরিক, মানসিক, অতিপ্রাকৃতিক যেকোন রোগের জন্য
                  রুকইয়াহ কার্যকরী চিকিৎসা পদ্ধতি।
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Video
                url={
                  "https://www.youtube.com/embed/WfTaVPVCrsM?si=63qBBIFku3dF2lgo"
                }
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ///////////////// Essential Videos Section ///////////////// */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
        }}
      >
        <Container sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.7rem", sm: "2.3rem", md: "3rem" },
              fontWeight: 700,
              color: theme.palette.primary.main,
              textAlign: "center",
              mb: { xs: 3, sm: 5 },
            }}
          >
            বিষয় ভিত্তিক ভিডিও
          </Typography>

          <Grid container spacing={{ xs: 2, sm: 3 }}>
            <Grid item xs={12} sm={6} md={4}>
              <Video
                url={
                  "https://www.youtube.com/embed/WoF3psrjD5M?si=AS88P6V3tDqrBDrS"
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Video
                url={
                  "https://www.youtube.com/embed/ArrzJDUEVPo?si=fHIM30wU-upOszYT"
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Video
                url={
                  "https://www.youtube.com/embed/WJP4izBxp5k?si=QiwJqAOahLoI5Bh0"
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Video
                url={
                  "https://www.youtube.com/embed/vXKL0XwHxho?si=ZYrUQO4-N-lNJewK"
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Video
                url={
                  "https://www.youtube.com/embed/0ZWPJ4RC44M?si=x1ANFOlDP-wC0AfX"
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Video
                url={
                  "https://www.youtube.com/embed/awCnJjEUowg?si=YGummhrLCVJxqYZo"
                }
              />
            </Grid>
          </Grid>
          <Button
            component={Link}
            href="/videos"
            sx={{
              background: isDarkMode
                ? "linear-gradient(135deg, #66BB6A 0%, #81C784 100%)"
                : "linear-gradient(135deg, #2D5016 0%, #4A7C59 100%)",
              color: "white",
              py: 1.5,
              px: 5,
              mt: 5,
              mb: 2,
              fontSize: "1rem",
              fontWeight: 600,
              boxShadow: isDarkMode
                ? "0 4px 12px rgba(102, 187, 106, 0.4)"
                : "0 4px 12px rgba(45, 80, 22, 0.3)",
              borderRadius: 3,
              "&:hover": {
                background: isDarkMode
                  ? "linear-gradient(135deg, #81C784 0%, #66BB6A 100%)"
                  : "linear-gradient(135deg, #1B5E20 0%, #2D5016 100%)",
                transform: "translateY(-2px)",
                boxShadow: isDarkMode
                  ? "0 6px 16px rgba(102, 187, 106, 0.5)"
                  : "0 6px 16px rgba(45, 80, 22, 0.4)",
              },
            }}
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
          >
            বিষয় ভিত্তিক সকল ভিডিও দেখুন
          </Button>
        </Container>
      </Box>

      {/* ///////////////// Conditions for Valid Ruqyah ///////////////// */}
      <Box
        sx={{
          py: { xs: 8, sm: 10 },
          background: isDarkMode ? "#1A1F2E" : "rgb(238, 238, 238)",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.7rem", sm: "2.3rem", md: "3rem" },
            fontWeight: 700,
            color: theme.palette.primary.main,
            textAlign: "center",
            mb: 3,
          }}
        >
          রুকইয়াহ বৈধ হওয়ার শর্ত
        </Typography>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2, sm: 3 },
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              lineHeight: 1.7,
              color: theme.palette.text.secondary,
            }}
          >
            রুকইয়াহ বৈধও হতে পারে আবার অবৈধও হতে পারে। যদি শরীয়তসম্মত পন্থায় করা
            হয়, তাহলে বৈধ হবে অন্যথায় অবৈধ হবে। রুকইয়াহ শরীয়তসম্মত হওয়ার জন্য
            তিনটি শর্ত রয়েছে। [আল মাউসুআতুল ফিকহিয়া আল কুওয়াইতিয়া: ২৩/৯৭]
          </Typography>
          <Box
            sx={{
              background: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "#ffffff",
              px: 2,
              py: 1,
              display: "flex",
              alignItems: "center",
              borderRadius: { xs: 2, sm: 5 },
            }}
          >
            <Box>
              <Box
                sx={{
                  width: { xs: "30px", sm: "50px" },
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 2,
                  borderRadius: 10,
                  background: isDarkMode
                    ? "linear-gradient(135deg, rgba(102, 187, 106, 0.15) 0%, rgba(102, 187, 106, 0.08) 100%)"
                    : "linear-gradient(135deg, rgba(45, 80, 22, 0.1) 0%, rgba(102, 187, 106, 0.1) 100%)",

                  fontSize: "2rem",
                  color: theme.palette.text.primary,
                }}
              >
                ১
              </Box>
            </Box>
            <Typography
              sx={{
                fontSize: "1rem",
                lineHeight: 1.7,
                color: theme.palette.text.secondary,
              }}
            >
              মহান আল্লাহর কালাম, তাঁর নাম বা গুণাবলি কিংবা রাসূল ﷺ থেকে বর্ণিত
              বিভিন্ন দোয়া দ্বারা রুকইয়াহ করা।
            </Typography>
          </Box>
          <Box
            sx={{
              background: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "#ffffff",
              px: 2,
              py: 1,
              display: "flex",
              alignItems: "center",
              borderRadius: { xs: 2, sm: 5 },
            }}
          >
            <Box>
              <Box
                sx={{
                  width: { xs: "30px", sm: "50px" },
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 2,
                  borderRadius: 10,
                  background: isDarkMode
                    ? "linear-gradient(135deg, rgba(102, 187, 106, 0.15) 0%, rgba(102, 187, 106, 0.08) 100%)"
                    : "linear-gradient(135deg, rgba(45, 80, 22, 0.1) 0%, rgba(102, 187, 106, 0.1) 100%)",

                  fontSize: "2rem",
                  color: theme.palette.text.primary,
                }}
              >
                ২
              </Box>
            </Box>
            <Typography
              sx={{
                fontSize: "1rem",
                lineHeight: 1.7,
                color: theme.palette.text.secondary,
              }}
            >
              আরবী ভাষায় কিংবা এমন ভাষায় হওয়া, যা সবাই বুঝতে পারে। কোনো অস্পষ্ট
              বা অর্থহীন শব্দ ব্যবহার করা যাবে না।
            </Typography>
          </Box>
          <Box
            sx={{
              background: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "#ffffff",
              px: 2,
              py: 1,
              display: "flex",
              alignItems: "center",
              borderRadius: { xs: 2, sm: 5 },
            }}
          >
            <Box>
              <Box
                sx={{
                  width: { xs: "30px", sm: "50px" },
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 2,
                  borderRadius: 10,
                  background: isDarkMode
                    ? "linear-gradient(135deg, rgba(102, 187, 106, 0.15) 0%, rgba(102, 187, 106, 0.08) 100%)"
                    : "linear-gradient(135deg, rgba(45, 80, 22, 0.1) 0%, rgba(102, 187, 106, 0.1) 100%)",

                  fontSize: "2rem",
                  color: theme.palette.text.primary,
                }}
              >
                ৩
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: theme.palette.text.secondary,
                }}
              >
                রুকইয়াহর ক্ষেত্রে এই বিশ্বাস রাখতে হবে যে, রোগ নিরাময় বা বিপদ
                দূর হওয়ার বিষয়ে রুকইয়াহর নিজস্ব কোনো শক্তি নেই। রুকইয়াহ শুধু
                ওসীলা মাত্র। মূলত যে কোনো রোগ বা বিপদ আল্লাহর ইচ্ছাতেই দূর হতে
                পারে।
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              p: { xs: 2, sm: 3 },
              borderRadius: 2,
              background: isDarkMode
                ? "linear-gradient(135deg, rgba(219, 119, 4, 0.1) 0%, rgba(255, 191, 52, 0.05) 100%)"
                : "linear-gradient(135deg, rgba(219, 119, 4, 0.1) 0%, rgba(255, 191, 52, 0.05) 100%)",
              border: `1px solid ${
                isDarkMode
                  ? "rgba(255, 153, 0, 0.3)"
                  : "rgba(255, 136, 0, 0.15)"
              }`,
            }}
          >
            <Typography
              sx={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: theme.palette.text.secondary,
              }}
            >
              <Box
                component="strong"
                sx={{
                  color: "orange",
                  display: "block",
                  mb: 1,
                }}
              >
                Important Note:
              </Box>
              <Box component="span" sx={{ fontStyle: "italic" }}>
                রুকইয়াহ মনের আশা পূরণের কোন যাদু-মন্ত্র নয়, কিংবা অনৈতিক ফায়দা
                হাসিলের কোন তদবিরও নয় বরং এটি কুরআন সুন্নাহ নির্দেশীত একটি
                চিকিৎসা পদ্ধতি। আধুনিক পরিভাষায় এটিকে{" "}
                <Box component="span" sx={{ fontWeight: 600 }}>
                  Spiritual healing
                </Box>{" "}
                বলা যায়।
              </Box>
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ///////////////// Get Help From Raqies ///////////////// */}
      <Box
        sx={{
          py: { xs: 8, sm: 10 },
        }}
      >
        <Container>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.7rem", sm: "2.3rem", md: "3rem" },
              fontWeight: 700,
              color: theme.palette.primary.main,
              textAlign: "center",
              mb: { xs: 3, sm: 5 },
            }}
          >
            রাক্বিদের সাহায্য নিন
          </Typography>

          <Grid container spacing={{ xs: 2, sm: 3 }}>
            <Grid item xs={12} sm={4}>
              <Video
                url={
                  "https://www.youtube.com/embed/GFvtirknkAc?si=BJLzH999zUfOYbyq"
                }
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Bookmark
                title="রাক্বিদের বিষয়ে দায়মুক্তি"
                description="আমি কোনো রিস্ক নিব না। রিস্কের সম্ভবনাও যেখানে দেখবো তার কথা বলবো না। তাই বলে অন্যরা সব খারাপ তা বলছি না। ... Read More"
                url="https://ruqyahbd.org/blog/4649/disclaimer-about-raqis"
                coverImage="./teaching.png"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Bookmark
                title="রাক্বি Contacts"
                description="লিস্ট দিয়েছি বলেই দৌড় দিয়ে চলে যাবেন না। নিজ দায়িত্বে খোঁজখবর নিয়ে... Read More"
                url="/ruqy"
                coverImage="./ruqy.png"
              />
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              component={Link}
              href="/raqy"
              sx={{
                background: isDarkMode
                  ? "linear-gradient(135deg, #66BB6A 0%, #81C784 100%)"
                  : "linear-gradient(135deg, #2D5016 0%, #4A7C59 100%)",
                color: "white",
                py: 1.5,
                px: 5,
                mt: 5,
                mb: 2,
                fontSize: "1rem",
                fontWeight: 600,
                boxShadow: isDarkMode
                  ? "0 4px 12px rgba(102, 187, 106, 0.4)"
                  : "0 4px 12px rgba(45, 80, 22, 0.3)",
                borderRadius: 3,
                "&:hover": {
                  background: isDarkMode
                    ? "linear-gradient(135deg, #81C784 0%, #66BB6A 100%)"
                    : "linear-gradient(135deg, #1B5E20 0%, #2D5016 100%)",
                  transform: "translateY(-2px)",
                  boxShadow: isDarkMode
                    ? "0 6px 16px rgba(102, 187, 106, 0.5)"
                    : "0 6px 16px rgba(45, 80, 22, 0.4)",
                },
              }}
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
            >
              জেলা ভিত্তিক রাক্বিদের তালিকা দেখুন
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
