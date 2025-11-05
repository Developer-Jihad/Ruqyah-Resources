"use client";

import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  CircularProgress,
  Stack
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import pwaImage from "../images/icons/pwa.png";
import appStoreImage from "../images/icons/app-store.png";
import playStoreImage from "../images/icons/playstore.png";

const Diagnosis = () => {
  // State to manage loading of the iframe
  const [iframeLoading, setIframeLoading] = useState<boolean>(true);

  // Event handler to hide the loading spinner when iframe loads
  const handleIframeLoad = () => {
    setIframeLoading(false);
  };

  return (
    <Box
      mt={5}
    >
      <Container>
        <Typography variant="body1" sx={{ marginBottom: 3, fontSize: "17px" }}>
          <b>“সেলফ রুকইয়াহ ডায়াগনোসিস অ্যাপ”</b> এর মাধ্যমে আপনি জিন, জাদু, বদনজর
          ইত্যাদি প্যারানরমাল সমস্যাগুলো খুব সহজে যাচাই করতে পারবেন। কমপক্ষে এটি
          সমস্যার ব্যাপারে ধারণা পেতে সহায়ক হবে। আর সমস্যা যাচাইয়ের পর অ্যাপ
          থেকে একটি প্রাথমিক পরামর্শও দিয়ে দেয়া হবে। বিষয়টা চমৎকার না?
        </Typography>
        </Container>
    <Box sx={{ bgcolor: "#212932", py: 2, mt: 2 }}>
      <Container sx={{display: 'flex', flexDirection: {xs: 'column', sm: 'row'}, justifyContent: "center",
            alignItems: "center", gap: {xs: 0, sm: 5}}}>
        <Typography variant="h4" sx={{textAlign:'center', color:'#66BB6A'}} >Download the App:</Typography>
        <Stack
          spacing={{ xs: 1, sm: 5 }}
          direction="row"
          pt={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          
          <Link
            href="https://play.google.com/store/apps/details?id=org.ruqyahbd.check"
            target="_blank"
            rel="noopener noreferrer"
            passHref
          >
            <Image
              src={playStoreImage}
              width={100}
              alt="Google Playstore Ruqyah Diagnosis App"
            />
          </Link>
          <Link
            href="https://apps.apple.com/us/app/self-diagnosis/id6474099233"
            target="_blank"
            rel="noopener noreferrer"
            passHref
          >
            <Image
              src={appStoreImage}
              width={100}
              alt="App Store Ruqyah Diagnosis App"
            />
          </Link>
          <Link
            href="https://test.ruqyahbd.org/"
            target="_blank"
            rel="noopener noreferrer"
            passHref
          >
            <Image src={pwaImage} width={100} alt="PWA Ruqyah Diagnosis App" />
          </Link>
        </Stack>
      </Container>
      </Box>
        <br/>
    <Container>
        <Box sx={{ position: "relative", width: "100%", height: "100vh" }}>
          {iframeLoading && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                zIndex: 1,
              }}
            >
              <CircularProgress size={60} thickness={4.5} color="primary" />
            </Box>
          )}
          <iframe
            src="https://test.ruqyahbd.org/"
            title="Ruqyah Self Diagnosis Website"
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "10px",
            }}
            onLoad={handleIframeLoad}
            allowFullScreen
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Diagnosis;
