import './FAQ.scss';
import Header from '../../components/Header/Header';
import { useState } from "react";
import FaqDecor from '../../components/FaqDecor/FaqDecor';
import Footer from '../../components/Footer/Footer';
import FAQItem from './FAQItem/FAQItem';

const questions = [
    { id: 1, question: "CGI is more expensive than shooting video and how can I guarantee to get it to look the way I need it to?", answer: "No, CG is not more expensive than video, but if you need it we can shoot a promo together with VFX, we work until you get a WOW result." },
    { id: 2, question: "May I offer my ideas?", answer: "You can offer absolutely any of your ideas and narrative, but we need to process the script technically and emotionally with a professional team so that you get the best possible result." },
    { id: 3, question: "How long does it usually take to create CGI?", answer: "Our fastest video was made in 2 days and it is here in the portfolio, can you guess which one? Usually the longer the time - the better result you can get, also - the faster the more specialists you need to involve, so you need a bigger budget." },
    { id: 4, question: "If my budget is small can I do CG?", answer: "Of course the bigger the budget the better, it depends on what you want, we are a car dealer, it all depends on whether you want a Volkswagen or a Ferrari - so it affects the budget, but almost any idea can be realized." }
];

export default () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (

        <div className='FAQ'>
            <FaqDecor />
            <div className="FAQ__accordion">
                {questions.map((item, index) => (

                    // <div key={item.id} className={`FAQ__accordion-item ${openIndex === index ? "open" : ""}`}>

                    // </div>
                    <FAQItem key={index} question={item.question} answer={item.answer} toggleAccordion={toggleAccordion} openIndex={openIndex} index={index} />
                ))}
            </div>
            <Footer />
        </div>
    )
}