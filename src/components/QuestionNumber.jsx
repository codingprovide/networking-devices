export default function QuestionNumber({ index, topic }) {
  return (
    <div>
      <p className=" text-center dark:text-white">{topic}</p>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {index + 1}
      </h5>
    </div>
  );
}
