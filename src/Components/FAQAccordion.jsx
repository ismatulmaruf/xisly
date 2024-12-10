import { useState } from "react";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Tracks which FAQ is open

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the active FAQ
  };

  const faqItems = [
    {
      question: "What are your focus areas as a UI/UX agency?",
      answer:
        "User experience is in our bloodline as a global design agency. We create design solutions that are easily interactable, visually pleasing, and intuitively user-friendly. Your digital products, like websites, apps, and enterprise software, need user acceptance, interaction, and user experience. Focusing on that, we craft solutions for our clients like you.",
    },
    {
      question:
        "What sets Musemind apart from other top UI/UX design agencies?",
      answer:
        "At Musemind, we never over-promise with our clients. We only guarantee what we can deliver. As a result, up to 97% of our clients are happy with our work and communication. Most of them work with us repeatedly. Everybody claims they are the best, but we don’t. Our work and our customers are our advocates. This is what sets us apart from others.",
    },
    {
      question:
        "What services do you offer for start-ups, and how can they add value to my business?",
      answer:
        "As a UI/UX design agency, we understand startup's unique challenges. That's why we craft custom designs for our clients just like you. From sleek websites to intuitive apps, we'll make your product easy and navigatable. But it's not just about pretty pixels. We dig deep to understand your users' needs and pain points, mapping their journey and building solutions that solve real problems.",
    },
    {
      question:
        "Can you help us redesign our app, website, or enterprise/B2B software?",
      answer:
        "The biggest timeframe determiner for any UI/UX project is highly dependable on the project type and deliverables. Generally, a UI UX design agency like ours may take a tentative duration of 2 weeks to 6 months for a project to finish. Within this period, we will go through a step-by-step process of actions that includes strategy, research, design, prototyping, and usability testing. The timeline will be extended if the result needs more changes or clients seek more add-on solutions.",
    },
    {
      question: "How much does a UI/UX design project cost?",
      answer:
        "Though UI/UX design costs depend highly on your project goal, duration, and deliverables, our solution normally starts from $3000. However, our pricing plan is not fixed. Normally, we encourage you to contact us via scheduling and meeting by submitting the contact form. We also reach out to the clients if they want. After hearing your requirements or plan, we deliver a detailed project proposal along with the pricing plan discussed in detail, subject to be altered based on mutual discussion.",
    },
    // Add more FAQ items as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="section-title-wrap text-center mb-12">
        <h2 className="text-5xl font-semibold text-gray-800">
          Have Questions?
        </h2>
      </div>
      <div className="faq-item-wrap space-y-4 max-w-4xl mx-auto">
        {faqItems.map((faq, index) => (
          <div
            key={index}
            className="faq-item bg-white shadow-xl rounded-lg overflow-hidden"
          >
            <div
              className="faq-question flex items-center justify-between p-5 cursor-pointer bg-gray-100 hover:bg-blue-50 transition-all ease-in-out duration-300"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="faq-title text-lg font-bold text-gray-800">
                {faq.question}
              </h3>
              <svg
                className={`transition-transform transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                width="14"
                height="14"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 0L6 10L10 6L12 8L6 12L0 8L2 6L6 0Z"
                  fill="black"
                ></path>
              </svg>
            </div>
            <div
              className={`faq-answer  overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index ? "min-h-60 p-4" : "max-h-0"
              }`}
            >
              <p className="faq-paragraph text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
