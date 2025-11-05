"use client";

import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Link,
  Grid,
  Container,
  useTheme,
} from "@mui/material";
import data from "../data/raqyContacts.json";
import type { RaqyContactsData, Locations } from "../types/data";

const Ruqy = () => {
  const theme = useTheme();
  const typedData = data as RaqyContactsData;
  const locations: Locations = typedData.locations;

  return (
    <Box sx={{ py: 5 }}>
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          fontWeight: theme.typography.h2.fontWeight,
          fontFamily: theme.typography.h2.fontFamily,
          color: theme.palette.primary.main,
          textAlign: "center",
        }}
      >
        বাংলাদেশের বিভিন্ন রাক্বির নাম ও যোগাযোগের উপায়
      </Typography>

      <Box
        sx={{
          textAlign: "center",
          bgcolor: theme.palette.background.paper,
          py: 3,
          my: 3,
        }}
      >
        <Container>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.warning.main,
              fontFamily: theme.typography.body1.fontFamily,
              fontSize: "17px",
            }}
          >
            ⚠️ লিস্ট দিয়েছি বলেই দৌড় দিয়ে চলে যাবেন না। নিজ দায়িত্বে খোঁজখবর নিয়ে যাবেন। ভাল যদি মনে না করেন যাবেন না। ভালমত জেনে বুঝে যাবেন। লিস্টের রাকি ছাড়া প্রতিষ্ঠানগুলোতে অন্যান্য রাকি থাকতে পারে। এমন না উক্ত প্রতিষ্ঠানে শুধু মাত্র এই রাকিরাই বসেন।
          </Typography>
        </Container>
      </Box>

      <Container>
        {Object.keys(locations).map((city, index) => (
          <Box key={index} sx={{ mb: 6 }}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontWeight: theme.typography.h3.fontWeight,
                fontFamily: theme.typography.h3.fontFamily,
                color: theme.palette.secondary.main,
                borderBottom: `3px solid ${theme.palette.primary.main}`,
                pb: 1,
                mb: 3,
              }}
            >
              {city}
            </Typography>
            <Grid container spacing={4}>
              {locations[city].map((center, idx) => (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <Card
                    sx={{
                      borderLeft: `6px solid ${theme.palette.primary.main}`,
                      boxShadow: "0 3px 5px rgba(0, 0, 0, 0.1)",
                      borderRadius: 3,
                      transition: "transform 0.2s, box-shadow 0.2s",
                      bgcolor: theme.palette.background.paper,
                      "&:hover": {
                        transform: "scale(1.02)",
                        boxShadow: "0 3px 7px rgba(0, 0, 0, 0.15)",
                      },
                      pt: 1
                    }}
                  >
                    <CardContent>
                      {center.name && (
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: "600",
                            fontFamily: theme.typography.h6?.fontFamily,
                            color: theme.palette.text.primary,
                            mb: 1,
                          }}
                        >
                          {center.name}
                        </Typography>
                      )}
                      {center.organization && (
                        <Typography
                          variant="h5"
                          sx={{
                            fontFamily: theme.typography.h5.fontFamily,
                            color: theme.palette.text.secondary,
                          }}
                        >
                          প্রতিষ্ঠান: {center.organization}
                        </Typography>
                      )}
                      {center.address && (
                        <Typography
                          variant="body1"
                          sx={{
                            fontFamily: theme.typography.body2.fontFamily,
                            color: theme.palette.text.secondary,
                          }}
                        >
                          ঠিকানা: {center.address}
                        </Typography>
                      )}
                      {center.additional_address && (
                        <Typography
                          variant="body1"
                          sx={{
                            fontFamily: theme.typography.body2.fontFamily,
                            color: theme.palette.text.secondary,
                          }}
                        >
                          অতিরিক্ত ঠিকানা: {center.additional_address}
                        </Typography>
                      )}
                      {center.contact && (
                        <Typography
                          variant="body1"
                          sx={{
                            fontFamily: theme.typography.body2.fontFamily,
                            color: theme.palette.text.secondary,
                          }}
                        >
                          ফোন: {center.contact}
                        </Typography>
                      )}
                      {center.consultation_time && (
                        <Typography
                          variant="body1"
                          sx={{
                            fontFamily: theme.typography.body2.fontFamily,
                            color: theme.palette.text.secondary,
                          }}
                        >
                          কন্সালটেশন সময়: {center.consultation_time}
                        </Typography>
                      )}
                      {center.page_link && (
                        <Link
                          href={center.page_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: theme.palette.primary.main,
                            textDecoration: "underline",
                            fontWeight: theme.typography.button.fontWeight,
                            fontFamily: theme.typography.button.fontFamily,
                            display: "block",
                          }}
                        >
                          <Typography>
                          ফেইসবুক পেইজ
                          </Typography>
                        </Link>
                      )}
                      {center.notes && (
                        <Typography
                          variant="body2"
                          sx={{
                            mt: 1,
                            fontFamily: theme.typography.body2.fontFamily,
                            color: theme.palette.text.secondary,
                          }}
                        >
                          নোটস: {center.notes}
                        </Typography>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Ruqy;
