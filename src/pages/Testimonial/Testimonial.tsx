import React, { FC } from "react";
import {
  StyleTestimonialContainer,
  StyleTestimoniesContainer,
} from "./Styled.Testimonial";

import { testimonialData } from "./TestimonialData";
import "@splidejs/react-splide/css";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";

const Testimonial = () => {
  return (
    <StyleTestimonialContainer id="testimonial">
      <div className="testimonies__heading-text">
        what our clients are saying
      </div>
      <div className="testimonies__text--sub-text">
        high-defination video is video of higher resolution and quality than
        standard definition. while there’s no standard meaning for high
        definition, generally any standard video image
      </div>

      <StyleTestimoniesContainer>
        <Splide
          hasTrack={false}
          aria-label="testimonial carousel"
          options={{
            type: "loop",
            rewind: true,
            gap: "1rem",
            arrows: false,
            width: "90vw",
            perPage: 2,
            breakpoints: {
              640: {
                perPage: 1,
              },
            },
          }}
        >
          <SplideTrack>
            {testimonialData.map((data, index) => (
              <SplideSlide key={index}>
                <div className="testimony__container">
                  <div className="testimony__content-text">{data.content}</div>
                  <div className="testifier__bottom-content">
                    <img src={data.img} alt="avartar-images-of-testifiers" />{" "}
                    <div>
                      {" "}
                      <div className="testifiers__name">
                        {data.testifierName}
                      </div>{" "}
                      <div className="testifiers__tech-stack">
                        {data.testifierTrade}
                      </div>{" "}
                    </div>{" "}
                  </div>
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>
      </StyleTestimoniesContainer>
    </StyleTestimonialContainer>
  );
};

export default Testimonial;

//const Testimonial = () => {
//   return (
//     <StyleTestimonialContainer id="testimonial">
//       <div className="testimonies__heading-text">
//         what our clients are saying
//       </div>
//       <div className="testimonies__text--sub-text">
//         high-defination video is video of higher resolution and quality than
//         standard definition. while there’s no standard meaning for high
//         definition, generally any standard video image
//       </div>

//       <StyleTestimoniesContainer>
//         <div className="testimony__container">
//           <div className="testimony__content-text">
//             high-defination video is video of higher resolution and quality than
//             standard definition. high-defination video is video of higher
//             resolution and quality than standard definition. hbuild your future
//             with our quality education. the best and largest all-in-one online
//             tutoring platform in the worldd definition. high-defination video is
//             video of higher resolution and quality than standard definition.
//             build your future with our quality education. the best and largest
//             all-in-one online tutoring platform in the world
//           </div>
//           <div className="testifier__bottom-content">
//             <img src={images.Avartar1} alt="avartar-images-of-testifiers" />
//             <div>
//               <div className="testifiers__name">Bella Moon</div>
//               <div className="testifiers__tech-stack">Product Designer</div>
//             </div>
//           </div>
//         </div>
//         <div className="testimony__container">
//           <div className="testimony__content-text">
//             high-defination video is video of higher resolution and quality than
//             standard definition. high-defination video is video of higher
//             resolution and quality than standard definition. hbuild your future
//             with our quality education. the best and largest all-in-one online
//             tutoring platform in the worldd definition. high-defination video is
//             video of higher resolution and quality than standard definition.
//             build your future with our quality education. the best and largest
//             all-in-one online tutoring platform in the world
//           </div>
//           <div className="testifier__bottom-content">
//             <img src={images.Avartar2} alt="avartar-images-of-testifiers" />
//             <div>
//               <div className="testifiers__name">Bella Moon</div>
//               <div className="testifiers__tech-stack">Product Designer</div>
//             </div>
//           </div>
//         </div>
//         <div className="testimony__container">
//           <div className="testimony__content-text">
//             high-defination video is video of higher resolution and quality than
//             standard definition. high-defination video is video of higher
//             resolution and quality than standard definition. hbuild your future
//             with our quality education. the best and largest all-in-one online
//             tutoring platform in the worldd definition. high-defination video is
//             video of higher resolution and quality than standard definition.
//             build your future with our quality education. the best and largest
//             all-in-one online tutoring platform in the world
//           </div>
//           <div className="testifier__bottom-content">
//             <img src={images.Avartar3} alt="avartar-images-of-testifiers" />
//             <div>
//               <div className="testifiers__name">Bella Moon</div>
//               <div className="testifiers__tech-stack">Product Designer</div>
//             </div>
//           </div>
//         </div>
//         <div className="testimony__container">
//           <div className="testimony__content-text">
//             high-defination video is video of higher resolution and quality than
//             standard definition. high-defination video is video of higher
//             resolution and quality than standard definition. hbuild your future
//             with our quality education. the best and largest all-in-one online
//             tutoring platform in the worldd definition. high-defination video is
//             video of higher resolution and quality than standard definition.
//             build your future with our quality education. the best and largest
//             all-in-one online tutoring platform in the world
//           </div>
//           <div className="testifier__bottom-content">
//             <img src={images.Avartar4} alt="avartar-images-of-testifiers" />
//             <div>
//               <div className="testifiers__name">Bella Moon</div>
//               <div className="testifiers__tech-stack">Product Designer</div>
//             </div>
//           </div>
//         </div>
//         <div className="testimony__container">
//           <div className="testimony__content-text">
//             high-defination video is video of higher resolution and quality than
//             standard definition. high-defination video is video of higher
//             resolution and quality than standard definition. hbuild your future
//             with our quality education. the best and largest all-in-one online
//             tutoring platform in the worldd definition. high-defination video is
//             video of higher resolution and quality than standard definition.
//             build your future with our quality education. the best and largest
//             all-in-one online tutoring platform in the world
//           </div>
//           <div className="testifier__bottom-content">
//             <img src={images.Avartar1} alt="avartar-images-of-testifiers" />

//             <div>
//               <div className="testifiers__name">Bella Moon</div>
//               <div className="testifiers__tech-stack">Product Designer</div>
//             </div>
//           </div>
//         </div>
//       </StyleTestimoniesContainer>
//     </StyleTestimonialContainer>
//   );
// };

// export default Testimonial;
