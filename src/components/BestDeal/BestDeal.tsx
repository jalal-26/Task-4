import "./BestDeal.css";
import Title from "../Title/Title";
import type { BestDealsSection } from "../../DataProject/Data";
import { useState } from "react";
type Props = {
    data: BestDealsSection;
};
function BestDeal({ data }: Props) {
    const [activeTab, setActiveTab] = useState<string>(data.sections[0].name);
    const activeSection = data.sections.find((s) => s.name === activeTab);
    return (
        <div className="mainContainer dealsSection">
            <Title h1={data.title} p={data.description} />
            <div className="upBtns">
                <div className="btns">
                    {data.sections.map((section) => (
                        <button
                            key={section.name}
                            onClick={() => setActiveTab(section.name)}
                        >
                            {section.name}
                        </button>
                    ))}
                </div>
            </div>
            <div className="sections">
                {activeSection?.deals.map((deal, idx) => (
                    <div className="section" key={idx}>
                        <img src={deal.image} alt={deal.title} />
                        <div className="sub-section">
                            <span className="span1">{deal.label}</span>
                            <span className="span2">{deal.tag}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BestDeal;
