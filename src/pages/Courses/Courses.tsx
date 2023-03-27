import { StyleCoursesContainer } from "./Styled.Courses";
import images from "../../constants/image";
const Courses = () => {
  return (
    <StyleCoursesContainer>
      <img src={images.coursesdecorImage} alt="a-tiny-decro-svg-img" />
      <div className="courses__heading-text">
        <div>browse our popular courses</div>
        <div>
          high-defination video is video of higher resolution and quality than
          standard definition. while there’s no standard meaning for high
          definition, generally any standard video image
        </div>
      </div>
      <div>
        <div className="tabs">
          <div className="tab__item tab-active">All Categories</div>
          <div className="tab__item">Design</div>
          <div className="tab__item">Development</div>
          <div className="tab__item">Marketing</div>
        </div>
      </div>
      <div className="courses__cards-container">
        <div className="courses__card-container">
          <div className="overflow">
            <img
              className="grey__scale"
              src={images.courseImage1}
              alt="course-img-preview"
            />
          </div>
          <div className="category">
            <div>Design</div>
            <div>4.7k⭐ (32.7k +)</div>
          </div>{" "}
          <div className="card__title">
            Introduction to user research in ux design
          </div>
          <div className="lesson-hours">
            <div>🕜 23hrs 50mins</div>
            <div>📖 15 Lessons</div>
          </div>
          <div className="instructor-info">
            <img src={images.instructorImage1} alt="course-img-preview" />
            <div>Leonard Victor</div>
            <div>$15.00</div>
          </div>
        </div>
        <div className="courses__card-container">
          <div className="overflow">
            <img
              className="grey__scale"
              src={images.courseImage2}
              alt="course-img-preview"
            />
          </div>
          <div className="category">
            <div>Design</div>
            <div>4.7k⭐ (32.7k+)</div>
          </div>{" "}
          <div className="card__title">
            Introduction to new marketing audience{" "}
          </div>
          <div className="lesson-hours">
            <div>🕜 23hrs 50mins</div>
            <div>📖 15 Lessons</div>
          </div>
          <div className="instructor-info">
            <img src={images.instructorImage1} alt="course-img-preview" />
            <div>Jeffrey Williams</div>
            <div>$15.00</div>
          </div>
        </div>
        <div className="courses__card-container">
          <div className="overflow">
            <img
              className="grey__scale"
              src={images.courseImage3}
              alt="course-img-preview"
            />
          </div>
          <div className="category">
            <div>Design</div>
            <div>4.7k⭐ (32.7k+)</div>
          </div>
          <div className="card__title">
            Introduction to html, css & bootstrap
          </div>
          <div className="lesson-hours">
            <div>🕜 23hrs 50mins</div>
            <div>📖 15 Lessons</div>
          </div>
          <div className="instructor-info">
            <img src={images.instructorImage1} alt="course-img-preview" />
            <div>Claretta Mason</div>
            <div>$15.00</div>
          </div>
        </div>
        <div className="courses__card-container">
          <div className="overflow">
            <img
              className="grey__scale"
              src={images.courseImage4}
              alt="course-img-preview"
            />
          </div>
          <div className="category">
            <div>Design</div>
            <div>4.7k⭐ (32.7k+)</div>
          </div>
          <div className="card__title">
            Introduction to javascript, git & GitHub
          </div>
          <div className="lesson-hours">
            <div>🕜 23hrs 50mins</div>
            <div>📖 15 Lessons</div>
          </div>
          <div className="instructor-info">
            <img src={images.instructorImage1} alt="course-img-preview" />
            <div>Jessica Duke</div>
            <div>$15.00</div>
          </div>
        </div>
        <div className="courses__card-container">
          <div className="overflow">
            <img
              className="grey__scale"
              src={images.courseImage5}
              alt="course-img-preview"
            />
          </div>
          <div className="category">
            <div>Design</div>
            <div>4.7k⭐ (32.7k+)</div>
          </div>
          <div className="card__title">
            Introduction to outroom marketing analysis
          </div>
          <div className="lesson-hours">
            <div>🕜 23hrs 50mins</div>
            <div>📖 15 Lessons</div>
          </div>
          <div className="instructor-info">
            <img src={images.instructorImage1} alt="course-img-preview" />
            <div>Samuel Jacobs</div>
            <div>$15.00</div>
          </div>
        </div>
        <div className="courses__card-container">
          <div className="overflow">
            <img
              className="grey__scale"
              src={images.courseImage6}
              alt="course-img-preview"
            />
          </div>
          <div className="category">
            <div>Design</div>
            <div>4.7k⭐ (32.7k+)</div>
          </div>{" "}
          <div className="card__title">
            Introduction to live marketing analysis
          </div>
          <div className="lesson-hours">
            <div>🕜 23hrs 50mins</div>
            <div>📖 15 Lessons</div>
          </div>
          <div className="instructor-info">
            <img src={images.instructorImage1} alt="course-img-preview" />
            <div>Adam Smith</div>
            <div>$15.00</div>
          </div>
        </div>
      </div>
      <button>Explore All Courses</button>
    </StyleCoursesContainer>
  );
};

export default Courses;
