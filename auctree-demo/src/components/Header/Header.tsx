import { Typography, AppBar, CssBaseline, Container, Avatar } from "@mui/material";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import AuctreeLogo from "../../images/Auctree-Logo.png";

const Header = () => {
  return (
    <>
        <AppBar position="relative">
            <Avatar alt="Auctree Logo" src={AuctreeLogo} />
            <SavedSearchIcon />
        </AppBar>
    </>
  );
};

export default Header;
