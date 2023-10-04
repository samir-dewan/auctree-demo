import { Typography, AppBar, CssBaseline, Container, Avatar, Box } from "@mui/material";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import AuctreeLogo from "../../images/Auctree-Logo.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Container>
        <AppBar position="fixed" sx={{display: "flex", flexDirection:"row", justifyContent: "space-between", backgroundColor: "white", opacity: 0.5, boxShadow: "none", padding: "1rem 2rem"}}>
            <img src={AuctreeLogo} className="headerImage"/>
            <SavedSearchIcon/>
        </AppBar>
      </Container>
    </>
  );
};

export default Header;
