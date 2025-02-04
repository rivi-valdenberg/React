import { Typography, Box } from "@mui/material";
import { GiCook, GiForkKnifeSpoon } from "react-icons/gi";
import { FaUtensils } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = [
    "Discover New Recipes Every Day!",
    "Cook Like a Pro!",
    "Your Kitchen Adventure Starts Here!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        background: "linear-gradient(to bottom, #ff7e5f, #feb47b)",
        color: "#fff",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          The wonderful Recipes!
        </Typography>
      </motion.div>

      <motion.div
        key={messageIndex}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h5" sx={{ fontStyle: "italic", mt: 2 }}>
          {messages[messageIndex]}
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ display: "flex", gap: "20px", marginTop: "20px" }}
      >
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          <GiCook size={60} color="#fff" />
        </motion.div>
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          <FaUtensils size={60} color="#fff" />
        </motion.div>
        <motion.div
          animate={{ rotate: [0, -360] }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          <GiForkKnifeSpoon size={60} color="#fff" />
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default HomePage;

