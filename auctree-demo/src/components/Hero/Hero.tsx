import { Typography, Container} from "@mui/material";
import HeroImage from "../../images/electrical-brain-hero-image.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="heroContainer">
      <img alt="Hero image" src={HeroImage} className="heroImage" />
      <Container className="heroText" sx={{color: 'white'}}>
        <Typography variant="h1">Hero Title</Typography>
        <Typography variant="subtitle1" sx={{ padding: "2rem" }}>
          Hero subtitle
        </Typography>
      </Container>
    </div>
  );
};

export default Hero;
