import React, { useState, useRef } from "react";
import { StyleFAQContainer } from "./Styled.FAQ";

interface FaqItem {
  title: string;
  content: string;
}

interface faqProps {
  faqItem: FaqItem[];
}
const FAQ = () => {
  const [active, setActiveItem] = useState<number | null>(null); //get active nav clicked

  const toggleFaqItem = (index: number) => {
    setActiveItem((prevActiveIndex) =>
      prevActiveIndex === index ? null : index
    );
  };

  const faqItems = [
    {
      title: "Is there a free trial available?",
      content:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.",
    },
    {
      title: "Can i change my plan later?",
      content:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.",
    },
    {
      title: "Are the courses lifetime?",
      content:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.",
    },
    {
      title: "Do i get certified after taking courses?",
      content:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.",
    },
    {
      title: "How do i reach out to mentors?",
      content:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.",
    },
    {
      title: "Do we get job ready after taking courses?",
      content:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.",
    },
  ];

  return (
    <StyleFAQContainer>
      <div className="faq__heading-text">frequently asked questions </div>
      <div className="faq__text--sub-text">
        high-defination video is video of higher resolution and quality than
        standard definition. while there’s no standard meaning for high
        definition, generally any standard video image
      </div>
      <div className="faqs__container">
        {faqItems.map((item, index) => (
          <div className="faq__container" key={index}>
            <div className="faq__title" onClick={() => toggleFaqItem(index)}>
              <div>{item.title}</div>
              {/* <div className="btn">
                <div className="vertical"></div>
                <div className="horizontal"></div>
              </div> */}
              <div>{index === active ? "-" : "+"}</div>
            </div>
            <div className="faq__content">
              {index === active && item.content}
            </div>
          </div>
        ))}
      </div>
    </StyleFAQContainer>
  );
};

export default FAQ;

// <div className="faqs__container">
// <div className="faq__container">
//   <div
//     className={
//       active
//         ? "faq__title faq__active active"
//         : "faq__title faq__active"
//     }
//   >
//     <div>Is there a free trial available?</div>
//     <div className="btn">
//       <div className="vertical"></div>
//       <div className="horizontal"></div>
//     </div>
//   </div>
//   <div className="faq__content" ref={contentRef}>
//     high-defination video is video of higher resolution and quality than
//     standard definition. high-defination video is video of higher
//     resolution and quality than standard definition. hbuild your future
//     with our quality education. the best and largest all-in-one online
//     tutoring platform in the worldd definition.{" "}
//   </div>
// </div>
// <div className="faq__container">
//   <div className="faq__title">
//     <div>Can i change my plan later?</div>
//     <div className="btn">
//       <div className="vertical"></div>
//       <div className="horizontal"></div>
//     </div>
//   </div>
//   <div className="faq__content">
//     high-defination video is video of higher resolution and quality than
//     standard definition. high-defination video is video of higher
//     resolution and quality than standard definition. hbuild your future
//     with our quality education. the best and largest all-in-one online
//     tutoring platform in the worldd definition.{" "}
//   </div>
// </div>
// <div className="faq__container">
//   <div className="faq__title">
//     <div>Are the courses lifetime?</div>
//     <div className="btn">
//       <div className="vertical"></div>
//       <div className="horizontal"></div>
//     </div>
//   </div>
//   <div className="faq__content">
//     high-defination video is video of higher resolution and quality than
//     standard definition. high-defination video is video of higher
//     resolution and quality than standard definition. hbuild your future
//     with our quality education. the best and largest all-in-one online
//     tutoring platform in the worldd definition.{" "}
//   </div>
// </div>
// <div className="faq__container">
//   <div className="faq__title">
//     <div>Do i get certified after taking courses?</div>
//     <div className="btn">
//       <div className="vertical"></div>
//       <div className="horizontal"></div>
//     </div>
//   </div>
//   <div className="faq__content">
//     high-defination video is video of higher resolution and quality than
//     standard definition. high-defination video is video of higher
//     resolution and quality than standard definition. hbuild your future
//     with our quality education. the best and largest all-in-one online
//     tutoring platform in the worldd definition.{" "}
//   </div>
// </div>
// <div className="faq__container">
//   <div className="faq__title">
//     <div>How do i reach out to mentors?</div>
//     <div className="btn">
//       <div className="vertical"></div>
//       <div className="horizontal"></div>
//     </div>
//   </div>
//   <div className="faq__content">
//     high-defination video is video of higher resolution and quality than
//     standard definition. high-defination video is video of higher
//     resolution and quality than standard definition. hbuild your future
//     with our quality education. the best and largest all-in-one online
//     tutoring platform in the worldd definition.{" "}
//   </div>
// </div>
// <div className="faq__container">
//   <div className="faq__title">
//     Do we get job ready after taking courses?
//   </div>
//   <div className="faq__content">
//     high-defination video is video of higher resolution and quality than
//     standard definition. high-defination video is video of higher
//     resolution and quality than standard definition. hbuild your future
//     with our quality education. the best and largest all-in-one online
//     tutoring platform in the worldd definition.{" "}
//   </div>
// </div>
// </div>
