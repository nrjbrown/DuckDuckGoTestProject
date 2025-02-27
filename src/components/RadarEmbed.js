import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const RadarEmbed = () => {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: 4, width: "100%", marginTop: 2 }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          🌍 Live Visitor Data (Cloudflare Radar)
        </Typography>
        <iframe
          src="https://radar.cloudflare.com/embed/VisitorLocationCombined?domain=duckduckgo.com&chartState=%7B%7D"
          title="Cloudflare Radar - Visitor Location"
          loading="lazy"
          style={{
            width: "100%",
            height: "700px", // Increased size for better visibility
            border: "none",
            borderRadius: "10px", // Smooth rounded edges for premium look
          }}
        />
      </CardContent>
    </Card>
  );
};

export default RadarEmbed;
