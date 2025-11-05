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
      {/* ========== Professional Hero Section ==========*/}
      <Box
        sx={{
          width: "100%",
          position: "relative",
          background: isDarkMode
            ? "linear-gradient(180deg, #0F1419 0%, #1A1F2E 100%)"
            : "linear-gradient(180deg,rgb(238, 238, 238) 0%, #FFFFFF 100%)",
          py: { xs: 6, md: 10 },
        }}
      >
        <Container
          sx={{
            width: "100%",
            justifyItems: "center",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                px: 2.5,
                py: 1,
                mb: 4,
                borderRadius: "50px",
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
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #66BB6A 0%, #4A7C59 100%)",
                  animation: "pulse 2s infinite",
                  "@keyframes pulse": {
                    "0%, 100%": {
                      opacity: 1,
                      transform: "scale(1)",
                    },
                    "50%": {
                      opacity: 0.7,
                      transform: "scale(1.1)",
                    },
                  },
                }}
              />
              <Typography
                sx={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: isDarkMode ? theme.palette.primary.main : "#2D5016",
                  letterSpacing: "0.5px",
                }}
              >
                Stay Safe with Devine Protection
              </Typography>
            </Box>
          </Box>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              mb: 3,
              color: theme.palette.primary.main,
            }}
          >
            রুকইয়াহ: Spiritual healing
          </Typography>

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
            আল-কুরআন ও সহীহ সুন্নাহ-নির্ভর ইসলামিক চিকিৎসার এই বরকতময় জ্ঞান
            অর্জন করে আপনি বদনজর, জাদু, জিন এবং বিভিন্ন শারীরিক-মানসিক রোগ থেকে
            নিজেকে ও আপনার পরিবারকে সুরক্ষিত করতে পারবেন। এটি শুধুমাত্র একটি
            চিকিৎসা পদ্ধতি নয়, বরং রাসূলুল্লাহ (সা.)-এর সুন্নাহর পুনরুজ্জীবন।
            যেসকল ক্ষেত্রে আধুনিক চিকিৎসাবিজ্ঞান ব্যর্থ হয় সেসকল সমস্যায়ও নববী
            চিকিৎসাগুলো-ই একমাত্র অবলম্বন। তাই, নির্ভরযোগ্য ভিডিও রিসোর্স ও
            বিস্তারিত ডকুমেন্টেশনের মাধ্যমে রুকইয়াহর সঠিক পদ্ধতি, শর্ত ও
            নিয়মাবলী শিখুন এবং বিজ্ঞ আলেম ও রাক্বিদের সাথে যুক্ত হয়ে এই জ্ঞানকে
            সফলভাবে কাজে লাগান।
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, mb: 4 }}>
            <Button
              component={Link}
              href="/videos"
              variant="contained"
              startIcon={<VideoLibraryIcon />}
              size="large"
              sx={{
                px: 5,
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
                px: 5,
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
      {/* ========== What is Ruqyah Section ========== */}
      <Container sx={{ mb: 3, py: { xs: 6, md: 10 } }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 700,
            textAlign: "center",
            mb: 6,
            lineHeight: 1.5,

            background: isDarkMode
              ? "linear-gradient(135deg, #66BB6A 0%, #81C784 100%)"
              : "linear-gradient(135deg, #2D5016 0%, #4A7C59 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          রুকইয়াহ কি? (What is Ruqyah?)
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                background: theme.palette.background.paper,
                p: { xs: 3, md: 5 },
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
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.125rem",
                  lineHeight: 1.9,
                  color: theme.palette.text.primary,
                  mb: 3,
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
                যায়। রুকইয়াহর পারিভাষিক অর্থ হচ্ছে- কোরআনের আয়াত, আল্লাহর নামের
                যিকর এবং রাসূল ﷺ থেকে বর্ণিত বিভিন্ন দোয়া পাঠ করার মাধ্যমে
                আল্লাহর কাছে কোন বিপদ বা রোগ থেকে মুক্তি চাওয়া।
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
                রুকইয়াহ কার্যকরী।
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Video
              url={
                "https://www.youtube.com/embed/WfTaVPVCrsM?si=63qBBIFku3dF2lgo"
              }
            />
            {/* <Box
              sx={{
                p: 3,
                borderRadius: 2,
                background: isDarkMode
                  ? "linear-gradient(135deg, rgba(102, 187, 106, 0.1) 0%, rgba(102, 187, 106, 0.05) 100%)"
                  : "linear-gradient(135deg, rgba(45, 80, 22, 0.05) 0%, rgba(102, 187, 106, 0.05) 100%)",
                border: `1px solid ${
                  isDarkMode
                    ? "rgba(102, 187, 106, 0.3)"
                    : "rgba(45, 80, 22, 0.15)"
                }`,
              }}
            >
              <Typography
                sx={{
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  color: theme.palette.text.primary,
                }}
              >
                <Box
                  component="strong"
                  sx={{
                    color: theme.palette.primary.main,
                    display: "block",
                    mb: 1,
                  }}
                >
                  Important Note:
                </Box>
                <Box component="span" sx={{ fontStyle: "italic" }}>
                  রুকইয়াহ মনের আশা পূরণের কোন যাদু-মন্ত্র নয় কিংবা অনৈতিক ফায়দা
                  হাসিলের কোন তদবিরও নয় বরং এটি কুরআন সুন্নাহ নির্দেশীত একটি
                  চিকিৎসা পদ্ধতি। আধুনিক পরিভাষায় এটাকে{" "}
                  <Box component="span" sx={{ fontWeight: 600 }}>
                    Spiritual healing
                  </Box>{" "}
                  বলা যায়।
                </Box>
              </Typography>
            </Box> */}
            {/* Conditions for Valid Ruqyah - Now part of What is Ruqyah section */}
            {/* <Box sx={{ mt: 4 }}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "1.15rem", md: "1.5rem" },
                  fontWeight: 700,
                  mb: 2,
                  background: isDarkMode
                    ? "linear-gradient(135deg, #66BB6A 0%, #81C784 100%)"
                    : "linear-gradient(135deg, #2D5016 0%, #4A7C59 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                রুকইয়াহ বৈধ হওয়ার শর্ত:
              </Typography>
              <Grid container spacing={3}>
                <Grid item>
                  <Box
                    sx={{
                      background: theme.palette.background.paper,
                      px: 3,
                      py: 2,
                      display: "flex",
                      borderRadius: 2,
                      border: `2px solid ${
                        isDarkMode
                          ? "rgba(102, 187, 106, 0.2)"
                          : "rgba(45, 80, 22, 0.15)"
                      }`,
                      height: "100%",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: theme.palette.primary.main,
                        transform: "translateY(-4px)",
                        boxShadow: isDarkMode
                          ? "0 8px 16px rgba(0, 0, 0, 0.4)"
                          : "0 8px 16px rgba(45, 80, 22, 0.1)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: "50%",
                          background: isDarkMode
                            ? "linear-gradient(135deg, rgba(102, 187, 106, 0.15) 0%, rgba(102, 187, 106, 0.08) 100%)"
                            : "linear-gradient(135deg, rgba(45, 80, 22, 0.1) 0%, rgba(102, 187, 106, 0.1) 100%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "2rem",
                          color: theme.palette.text.primary,
                        }}
                      >
                        ১
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        lineHeight: 1.7,
                        color: theme.palette.text.secondary,
                      }}
                    >
                      মহান আল্লাহর কালাম, তাঁর নাম বা গুণাবলি কিংবা রাসূল ﷺ থেকে
                      বর্ণিত বিভিন্ন দোয়া দ্বারা রুকইয়াহ করা।
                    </Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Box
                    sx={{
                      background: theme.palette.background.paper,
                      px: 3,
                      py: 2,
                      display: "flex",
                      borderRadius: 2,
                      border: `2px solid ${
                        isDarkMode
                          ? "rgba(102, 187, 106, 0.2)"
                          : "rgba(45, 80, 22, 0.15)"
                      }`,
                      height: "100%",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: theme.palette.primary.main,
                        transform: "translateY(-4px)",
                        boxShadow: isDarkMode
                          ? "0 8px 16px rgba(0, 0, 0, 0.4)"
                          : "0 8px 16px rgba(45, 80, 22, 0.1)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: "50%",
                          background: isDarkMode
                            ? "linear-gradient(135deg, rgba(102, 187, 106, 0.15) 0%, rgba(102, 187, 106, 0.08) 100%)"
                            : "linear-gradient(135deg, rgba(45, 80, 22, 0.1) 0%, rgba(102, 187, 106, 0.1) 100%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "2rem",
                          color: theme.palette.text.primary,
                        }}
                      >
                        ২
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        lineHeight: 1.7,
                        color: theme.palette.text.secondary,
                      }}
                    >
                      আরবী ভাষায় কিংবা এমন ভাষায় হওয়া, যা সবাই বুঝতে পারে। কোনো
                      অস্পষ্ট বা অর্থহীন শব্দ ব্যবহার করা যাবে না।
                    </Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Box
                    sx={{
                      background: theme.palette.background.paper,
                      px: 3,
                      py: 2,
                      display: "flex",
                      borderRadius: 2,
                      border: `2px solid ${
                        isDarkMode
                          ? "rgba(102, 187, 106, 0.2)"
                          : "rgba(45, 80, 22, 0.15)"
                      }`,
                      height: "100%",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: theme.palette.primary.main,
                        transform: "translateY(-4px)",
                        boxShadow: isDarkMode
                          ? "0 8px 16px rgba(0, 0, 0, 0.4)"
                          : "0 8px 16px rgba(45, 80, 22, 0.1)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: "50%",
                          background: isDarkMode
                            ? "linear-gradient(135deg, rgba(102, 187, 106, 0.15) 0%, rgba(102, 187, 106, 0.08) 100%)"
                            : "linear-gradient(135deg, rgba(45, 80, 22, 0.1) 0%, rgba(102, 187, 106, 0.1) 100%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "2rem",
                          color: theme.palette.text.primary,
                        }}
                      >
                        ৩
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        lineHeight: 1.7,
                        color: theme.palette.text.secondary,
                      }}
                    >
                      রোগ নিরাময় বা বিপদ দূর হওয়ার বিষয়ে রুকইয়াহর নিজস্ব কোনো
                      শক্তি নেই। রুকইয়াহ শুধু ওসীলা মাত্র। মূলত যে কোনো রোগ বা
                      বিপদ আল্লাহর ইচ্ছাতেই দূর হতে পারে। _আল মাউসুআতুল ফিকহিয়া
                      আল কুওয়াইতিয়া: ২৩/৯৭
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box> */}
          </Grid>
        </Grid>
      </Container>

      {/* -------------- Essential Videos Section ========== */}
      <Box
        sx={{
          background: isDarkMode ? "#1A1F2E" : "rgb(238, 238, 238)",

          py: { xs: 6, md: 10 },
        }}
      >
        <Container sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 700,
              color: theme.palette.primary.main,
              textAlign: "center",
              mb: 6,
            }}
          >
            মৌলিক ভিডিও (Basic Videos)
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Video
                url={
                  "https://www.youtube.com/embed/WfTaVPVCrsM?si=63qBBIFku3dF2lgo"
                }
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Video
                url={
                  "https://www.youtube.com/embed/ArrzJDUEVPo?si=fHIM30wU-upOszYT"
                }
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Video
                url={
                  "https://www.youtube.com/embed/WJP4izBxp5k?si=QiwJqAOahLoI5Bh0"
                }
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Video
                url={
                  "https://www.youtube.com/embed/vXKL0XwHxho?si=ZYrUQO4-N-lNJewK"
                }
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Video
                url={
                  "https://www.youtube.com/embed/0ZWPJ4RC44M?si=x1ANFOlDP-wC0AfX"
                }
              />
            </Grid>
            <Grid item xs={12} md={4}>
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
              mt: 8,
              mb: 3,
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

      {/* -------------- Get Help From Raqies ---------------- */}
      <Box
        sx={{
          background: isDarkMode ? theme.palette.background.default : "#FAFAFA",
          py: { xs: 6, md: 10 },
        }}
      >
        <Container>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 700,
              color: theme.palette.primary.main,
              textAlign: "center",
              mb: 6,
            }}
          >
            রাক্বির সাহায্য নিন (Get Support)
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  mb: 3,
                }}
              >
                <Video
                  url={
                    "https://www.youtube.com/embed/GFvtirknkAc?si=BJLzH999zUfOYbyq"
                  }
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Bookmark
                    title="রাক্বিদের বিষয়ে দায়মুক্তি"
                    description="আমি কোনো রিস্ক নিব না। রিস্কের সম্ভবনাও যেখানে দেখবো তার কথা বলবো না। তাই বলে অন্যরা সব খারাপ তা বলছি না। ... Read More"
                    url="https://ruqyahbd.org/blog/4649/disclaimer-about-raqis"
                    coverImage="./teaching.png"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Bookmark
                    title="রাক্বি Contacts"
                    description="লিস্ট দিয়েছি বলেই দৌড় দিয়ে চলে যাবেন না। নিজ দায়িত্বে খোঁজখবর নিয়ে... Read More"
                    url="/ruqy"
                    coverImage="./ruqy.png"
                  />
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
