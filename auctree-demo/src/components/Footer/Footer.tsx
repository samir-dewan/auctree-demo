import { Typography, Container, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./Footer.css";

const CustomisedContainer = styled(Container)`
    color: white;
    text-align: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 140px;
    padding-top: 48px;
`;

const Footer = () => {
    return (
        <footer className="footerContainer">
            <CustomisedContainer >
            <Typography>This is a footer.</Typography>
            <Typography>This is a label.</Typography>
            </CustomisedContainer>
        </footer>
    )
};

export default Footer;