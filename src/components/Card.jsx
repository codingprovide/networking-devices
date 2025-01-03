import CardLayout from "./CardLayout";
import QuestionDescription from "./QuestionDescription";
import QuestionNumber from "./QuestionNumber";
import Options from "./CardOptions";

export default function Card({
  number,
  description,
  options,
  answer,
  isSubmit,
  topic,
  index,
}) {
  return (
    <CardLayout>
      <QuestionNumber number={number} topic={topic} index={index} />
      <QuestionDescription description={description} />
      <Options
        options={options}
        number={number}
        answer={answer}
        isSubmit={isSubmit}
        topic={topic}
      />
    </CardLayout>
  );
}
