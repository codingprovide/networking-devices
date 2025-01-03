import Card from "./components/Card";
import { useState } from "react";
import {
  chapter10Questions,
  chapter11Questions,
  chapter14Questions,
} from "./components/questions";
import ChapterList from "./components/ChapterList";

export default function App() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isChangeTopic, setIsChangeTopic] = useState(true);
  const [questions, setQuestions] = useState([]);
  const handleSbumit = () => {
    setIsSubmit((prev) => !prev);
  };

  const handleChangeTopic = (chapter) => {
    console.log(chapter);
    if (chapter === "第十章 TCP/UDP協定") {
      setQuestions([...chapter10Questions]);
    } else if (chapter === "第十一章 DNS協定") {
      setQuestions([...chapter11Questions]);
    }
    setIsChangeTopic((prev) => !prev);
  };

  const chapters = [
    "第十章 TCP/UDP協定",
    "第十一章 DNS協定",
    "第十四章 HTTP協定",
    "第十五章 SMTP協定與POP3協定",
    "全部章節",
  ];

  return (
    <div className=" container mx-auto p-2">
      {isChangeTopic && (
        <ChapterList
          chapters={chapters}
          handleChangeTopic={handleChangeTopic}
        />
      )}
      {!isChangeTopic && (
        <div className="mx-auto max-w-sm">
          {questions.map((question, index) => (
            <Card
              isSubmit={isSubmit}
              key={question.number}
              number={question.number}
              description={question.description}
              options={question.options}
              answer={question.answer}
              topic={question.topic}
              index={index}
            />
          ))}
          <button
            onClick={handleSbumit}
            type="button"
            className=" w-20 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            送出
          </button>
        </div>
      )}
    </div>
  );
}
