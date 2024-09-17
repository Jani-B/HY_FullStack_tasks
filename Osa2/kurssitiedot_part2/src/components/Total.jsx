const Total = ({ parts }) => {
  let exerciseArray = parts.map((part) => {
    return part.exercises;
  });

  const totalInitial = 0;

  const total = exerciseArray.reduce((accumulator, value) => {
    return accumulator + value;
  }, totalInitial);

  console.log(total);
  return <p>Number of exercises: {total}</p>;
};

export default Total;
