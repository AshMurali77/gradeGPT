import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

const Text = () => {
  const [prompt, setPrompt] = useState("");
  const [sample, setSample] = useState("");
  const [answer, setAnswer] = useState("");

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSampleChange = (e) => {
    setSample(e.target.value);
  };

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleGradeClick = (e) => {
    console.log("prompt: ", prompt, "sample: ", sample, "answer: ", answer);
  };

  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      my={5}
    >
      <Box align="center">
        <Typography variant="h3" gutterBottom>
          GradeGPT
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          The automatic assignment grader
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          Provide the prompt in the top box, example answer in the left box, and
          actual answer in the right box.
        </Typography>
      </Box>
      <Container maxWidth="xl">
        <Box width="100%" display="flex" mb={3}>
          <TextField
            id="prompt-input"
            multiline
            fullWidth
            minRows={4}
            label="Enter prompt here"
            variant="outlined"
            value={prompt}
            onChange={handlePromptChange}
          />
        </Box>
        <Box width="100%" display={"flex"} gap={2} mb={3}>
          <TextField
            id="sample-answer-input"
            multiline
            fullWidth
            minRows={7}
            label="Enter sample answer here"
            variant="outlined"
            value={sample}
            onChange={handleSampleChange}
          />
          <TextField
            id="actual-answer-input"
            multiline
            fullWidth
            minRows={7}
            label="Enter actual answer here"
            variant="outlined"
            value={answer}
            onChange={handleAnswerChange}
          />
        </Box>
        <Button fullWidth variant="contained" onClick={handleGradeClick}>
          Grade
        </Button>
      </Container>
    </Box>
  );
};

export default Text;
