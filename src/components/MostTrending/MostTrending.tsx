import "./MostTrending.css";
import Title from "../Title/Title";
import type { TrendingCard } from "../../DataProject/Data";
type Props = {
    cardTINfo: TrendingCard[];
};
const MostTrending: React.FC<Props>=({ cardTINfo }) => {
    return (
        <div className="mainContainer mostTrending">
            <Title h1="Most Trending" p="Lorem ipsum dolor sit amet, consectetur adipiscing eli" />
            <div className="trending-cards">
                {cardTINfo.map((card, index) => (
                    <div className="trending-card" key={index}>
                        <img src={card.image} alt={card.title} />
                        <span>{card.price}</span>
                        <h3>{card.title}</h3>
                        <div className="address">
                            <img className="location" src="/icons/location2.svg" alt="" />
                            <p>{card.address}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MostTrending;
