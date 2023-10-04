import { Typography, Container, Box } from "@mui/material";
import "./CardComponent.css";
import { Meta } from "../CardList/CardList";
import styled from "@emotion/styled";

interface CardType {
  title: string;
  subtitle: string;
  imageUrl: string;
  meta: Meta;
}

const SubtitleTypography = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow-y: hidden;
`

const CardComponent = (card: CardType) => {
  return (
    <article className="cardContainer">
      <Box sx={{ display: "flex", flexDirection: "column", width: "48%"}}>
        <Typography variant="h5" gutterBottom sx={{fontWeight: 800, fontSize: "3.2rem", lineHeight: 1.05}}>
          {card.title}
        </Typography>
        <SubtitleTypography variant="subtitle1" sx={{lineHeight: 1.25}}>{card.subtitle}</SubtitleTypography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "0.3rem", marginTop: "12px"}}>
          <Typography variant="h6" sx={{fontSize: "0.75rem", color: "gray"}}>{card.meta.date}</Typography>
          <div className="metaDot"/>
          <Typography variant="h6" sx={{fontSize: "0.75rem", color: "gray"}}>{card.meta.length}</Typography>
        </Box>
      </Box>
      <Box sx={{width: "100%"}}>
        <img src={card.imageUrl} alt={card.title} className="cardImage" />
      </Box>
    </article>
  );
};

export default CardComponent;
