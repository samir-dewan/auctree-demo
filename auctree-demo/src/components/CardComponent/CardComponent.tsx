import { Typography, Container, Box } from "@mui/material";
import "./CardComponent.css";
import { Meta } from "../CardList/CardList";

interface CardType {
  title: string;
  subtitle: string;
  imageUrl: string;
  meta: Meta;
}

const CardComponent = (card: CardType) => {
  return (
    <article className="cardContainer">
      <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "30%"}}>
        <Typography variant="h1" gutterBottom sx={{fontWeight: 800, fontSize: "3.2rem", lineHeight: 1.05}}>
          {card.title}
        </Typography>
        <Typography variant="h4" sx={{fontSize: "1.6rem", lineHeight: 1.05}}>{card.subtitle}</Typography>
        <Box sx={{ display: "flex", gap: "1rem", marginTop: "12px", fontSize: "1.3rem"}}>
          <Typography variant="h6">{card.meta.date}</Typography>
          <Typography variant="h6">{card.meta.length}</Typography>
        </Box>
      </Box>
      <Box sx={{width: "100%"}}>
        <img src={card.imageUrl} alt={card.title} className="cardImage" />
      </Box>
    </article>
  );
};

export default CardComponent;
