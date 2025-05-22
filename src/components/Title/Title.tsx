import "./Title.css";
type Props = {
    h1: string;
    p: string;
};
const Title: React.FC<Props> = ({ h1, p }) => {
    return (
        <div className="title">
            <h1>{h1}</h1>
            <p>{p}</p>
        </div>
    );
};
export default Title;
