"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Link from "next/link";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: 3,
            }}
          >
            <Typography variant="h1" color="error">
              ⚠️
            </Typography>
            <Typography variant="h4" component="h1">
              কিছু একটা ভুল হয়েছে
            </Typography>
            <Typography variant="body1" color="text.secondary">
              দুঃখিত, একটি ত্রুটি ঘটেছে। অনুগ্রহ করে পৃষ্ঠাটি রিফ্রেশ করুন বা
              হোমপেজে ফিরে যান।
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {this.state.error?.message || "An unexpected error occurred"}
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <Button
                variant="contained"
                onClick={() => window.location.reload()}
              >
                পৃষ্ঠা রিফ্রেশ করুন
              </Button>
              <Button variant="outlined" component={Link} href="/">
                হোমপেজে যান
              </Button>
            </Box>
          </Box>
        </Container>
      );
    }

    return this.props.children;
  }
}

