import { Stack, CircularProgress } from "@mui/material";

function Loader() {
  return (
    <Stack
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.3)", // Light black background
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <CircularProgress color="secondary"/>
    </Stack>
  );
}

export default Loader;
