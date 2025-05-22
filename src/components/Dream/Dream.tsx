import "./Dream.css";
import Title from "../Title/Title";
import type { DreamSection } from "../../DataProject/Data";
type Props = {
    data: DreamSection;
};
function Dream({ data }: Props) {
    return (
        <div className="dream-section">
            <Title h1={data.title} p={data.description} />
            <img src={data.img} alt="Dream Home" />
        </div>
    );
}

export default Dream;
