import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import CardList from "../components/CardList/CardList";
import Footer from "../components/Footer/Footer";
import { Container } from "@mui/material";

const Blogpage = () => {
    return (
        <>
          <Header />
          <Hero />
        <Container>
          <CardList />
          <Footer />
      </Container>
      </>
    )
}

export default Blogpage;