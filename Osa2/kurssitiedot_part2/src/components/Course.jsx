import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = (props) => {
  return (
    <>
      <Header course={props.course} />
      <Content parts={props.parts} />
      <Total parts={props.parts} />
    </>
  );
};

export default Course;
