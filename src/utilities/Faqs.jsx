/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Faq from "./Faq";

const Faqs = () => {
  const faqs = [
    {
      question: "What services do you offer as an interior design company?",
      answer:
        "We offer a comprehensive range of interior design services, including conceptualization, space planning, furniture selection, color consultation, and project management.",
    },
    {
      question: "How does the interior design process work?",
      answer:
        "Our interior design process typically involves an initial consultation, conceptualization, design development, client approval, and project implementation. We work closely with our clients to ensure their vision is brought to life.",
    },
    {
      question: "Can I choose my own furniture and decor items?",
      answer:
        "Absolutely! We encourage collaboration and welcome your input. You can choose your own furniture and decor items, or we can provide recommendations based on your style preferences.",
    },
    {
      question: "How long does an interior design project usually take?",
      answer:
        "The duration of a project depends on its complexity and size. We provide a project timeline during the initial stages, outlining each phase's estimated duration.",
    },
    {
      question: "Can I hire your services for a single room makeover?",
      answer:
        "Absolutely! Whether it's a single room or an entire home, we offer design services tailored to your specific needs and preferences.",
    },
    {
      question: "Do you work within a specific budget?",
      answer:
        "Yes, we understand the importance of budget constraints. We work closely with our clients to establish a realistic budget and ensure that the design aligns with their financial expectations.",
    },
  ];

  const [openedFaq, setOpenedFaq] = useState("");
  return (
    <section className="faqs">
      <h1 className="project_title section-title">Explore Our FAQ </h1>

      <div className="faq-container">
        {faqs.map((question, index) => (
          <Faq
            setOpenedFaq={setOpenedFaq}
            openedFaq={openedFaq}
            key={index}
            questionId={index}
            question={question}
          />
        ))}
      </div>
    </section>
  );
};

export default Faqs;
