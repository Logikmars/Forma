import './FAQ.scss';
import Header from '../../components/Header/Header';
import { useState } from "react";

const questions = [
    { id: 1, question: "YOUR QUESTION", answer: "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { id: 2, question: "YOUR QUESTION", answer: "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { id: 3, question: "YOUR QUESTION", answer: "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },    
    { id: 4, question: "YOUR QUESTION", answer: "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." }
];

export default () => {
    
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    
    return (
    <div className='FAQ'>
        <Header />
        <div className='FAQ__decor'>
            FAQ
        </div>
         <div className="FAQ__accordion">
            {questions.map((item, index) => (
                <div key={item.id} className={`FAQ__accordion-item ${openIndex === index ? "open" : ""}`}>
                    <div className="FAQ__accordion-header" onClick={() => toggleAccordion(index)}>
                        <span className='k2_fonts FAQ__accordion-header-title'>{item.question}</span>
                        <span className="FAQ__accordion-header-icon">{openIndex === index ? "−" : "+"}</span>
                    </div>
                    {openIndex === index && <div className="FAQ__accordion-content k2_fonts">{item.answer}</div>}
                </div>
            ))}
        </div>
    </div>
)}