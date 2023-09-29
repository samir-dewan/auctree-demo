import { Typography, Container } from "@mui/material";

interface CardType {
  title: string,
}
const CardComponent = (card: CardType) => {
  return (
    <>
      <Container>
        <Typography variant="h2">{card.title}</Typography>
      </Container>
    </>
  );
};

export default CardComponent;
