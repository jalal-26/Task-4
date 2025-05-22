import "./HowItWork.css";
import Title from "../Title/Title";
import type { CardInfo } from "../../DataProject/Data";
type Props = {
    cardWINfo: CardInfo[];
};
const HowItWork : React.FC<Props> =({ cardWINfo })=>{
    return (
        <div className="mainContainer howWork">
            <Title h1="How it Works" p="Lorem ipsum dolor sit amet, consectetur adipiscing eli" />
            <div className="cards">
                {cardWINfo.map((card, index) => (
                    <div key={index} className="card">
                        <img src={card.icon} alt="" />
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default HowItWork;
