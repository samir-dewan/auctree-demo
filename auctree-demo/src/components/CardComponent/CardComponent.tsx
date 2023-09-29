import { Typography, Container, Box } from "@mui/material";
import "./CardComponent.css";

interface CardType {
  title: string,
  subtitle: string,
  imageUrl: string,
}

const CardComponent = (card: CardType) => {
  return (
    <div className="cardContainer">
      <Container sx={{display: "flex", flexDirection: "column"}}>
        <Typography variant="h1" gutterBottom>{card.title}</Typography>
        <Typography variant="h4">{card.subtitle}</Typography>
      </Container>
      <Box>
        <img src={card.imageUrl} alt={card.title} />
      </Box>
    </div>
  );
};

export default CardComponent;
