import { Typography, AppBar, CssBaseline, Container } from "@mui/material";

const Header = () => {
  return (
    <>
        <AppBar position="relative">
          <Typography variant="h5" gutterBottom>Logo</Typography>
          <Typography variant="h5">Search Feature</Typography>
        </AppBar>
    </>
  );
};

export default Header;
