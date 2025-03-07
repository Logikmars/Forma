import { useState } from 'react';
import './FAQItem.scss';

export default ({ question, answer, toggleAccordion}) => {
    
    const [oppened, setoppened] = useState(false);


    return (
    <div  className={`FAQItem ${oppened ? "open" : ""}`}>
        <div className='FAQItem-item_inner'>
            <div className="FAQItem-header" onClick={() => setoppened(!oppened)}>
                <span className={`k2_fonts FAQItem-header-title ${oppened ? "opentitle" : ""}`}>{question}</span>
                <span className={`FAQItem-header-icon ${oppened ? "opentitle" : ""}`}> {oppened ? "−" : "+"}</span>
            </div>
            <div className={`FAQItem-content ${oppened ? "FAQItem-content-open" : ""}`}>
                <div className='FAQItem-content_inner k2_fonts'>
                    {answer}
                </div>
            </div>
        </div>
    </div>
)}