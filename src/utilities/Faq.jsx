import { useRef } from "react";
import { FaAngleDown } from "react-icons/fa";

const Faq = ({ question, setOpenedFaq, openedFaq, questionId }) => {
  const faq = useRef();
  function handleOpenFaq(e) {
    e.preventDefault();

    if (openedFaq === questionId) {
      faq.current.classList.toggle("active");
      return;
    }

    setOpenedFaq(questionId);
  }

  return (
    <div
      onClick={handleOpenFaq}
      ref={faq}
      className={`faq  ${openedFaq === questionId ? "active" : ""}`}
    >
      <div className="question">
        <h1>{question?.question}</h1>
        <FaAngleDown className="open-question-icon" size={"2rem"} />
      </div>
      <div className="answer">
        <p>{question?.answer}</p>
      </div>
    </div>
  );
};

export default Faq;
