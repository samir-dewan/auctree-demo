import CardComponent from "../CardComponent/CardComponent";

interface Card {
    title: string,
}

const CardList = () => {

    let cards: Card[] = [{title: "Test"}, {title: "Test"}, {title: "Test"},{title: "Test"}, {title: "Test"}]

    return (
        <div>
            {cards.map((card: Card) => {
                return (
                    <CardComponent title={card.title} />
                )
            })}
        </div>
    )
}

export default CardList;