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
}) {
  return (
    <CardLayout>
      <QuestionNumber number={number} />
      <QuestionDescription description={description} />
      <Options
        options={options}
        number={number}
        answer={answer}
        isSubmit={isSubmit}
      />
    </CardLayout>
  );
}
