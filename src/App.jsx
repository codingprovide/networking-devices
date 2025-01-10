import Card from "./components/Card";
import { useState } from "react";
import {
  chapter10Questions,
  chapter11Questions,
  chapter14Questions,
  chapter15Questions,
  linearAlgebraQuestion,
  linearAlgebraQuestionAll,
} from "./components/questions";
import ChapterList from "./components/ChapterList";
import { useQuestionStore } from "./store";
import SubjectList from "./components/SubjectList";

export default function App() {
  const resetChoices = useQuestionStore((state) => state.resetChoices);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isChangeTopic, setIsChangeTopic] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [subject, setSubject] = useState(null);
  const handleSbumit = () => {
    setIsSubmit((prev) => !prev);
  };

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const handleChangeTopic = (chapter) => {
    console.log(chapter);
    if (chapter === "第十章 TCP/UDP協定") {
      shuffle(chapter10Questions);
      setQuestions([...chapter10Questions]);
    } else if (chapter === "第十一章 DNS協定") {
      shuffle(chapter11Questions);
      setQuestions([...chapter11Questions]);
    } else if (chapter === "第十四章 HTTP協定") {
      shuffle(chapter14Questions);
      setQuestions([...chapter14Questions]);
    } else if (chapter === "第十五章 SMTP協定與POP3協定") {
      shuffle(chapter15Questions);
      setQuestions([...chapter15Questions]);
    } else if (chapter === "全部章節") {
      let newQestions = [
        ...chapter10Questions,
        ...chapter11Questions,
        ...chapter14Questions,
        ...chapter15Questions,
      ];
      shuffle(newQestions);
      setQuestions([...newQestions]);
    } else if (chapter === "平時考") {
      shuffle(linearAlgebraQuestion);
      setQuestions([...linearAlgebraQuestion]);
    } else if (chapter === "禮拜五模擬考") {
      // shuffle(linearAlgebraQuestionAll);
      setQuestions([...linearAlgebraQuestionAll]);
    }
    setIsChangeTopic((prev) => !prev);
  };

  const handleBackMenu = () => {
    setIsSubmit(false);
    setIsChangeTopic(false);
    setQuestions([]);
    resetChoices();
    setSubject(null);
  };

  const chapters = [
    "第十章 TCP/UDP協定",
    "第十一章 DNS協定",
    "第十四章 HTTP協定",
    "第十五章 SMTP協定與POP3協定",
    "全部章節",
  ];

  const linearAlgebraChapters = ["平時考", "禮拜五模擬考"];

  const handleSelectSubject = (subject) => {
    setSubject(subject);
  };

  const subjects = ["網路概論", "線性代數"];

  return (
    <div className=" container mx-auto p-2">
      {subject === null && (
        <SubjectList
          subjects={subjects}
          handleSelectSubject={handleSelectSubject}
        />
      )}

      {!isChangeTopic && subject === "網路概論" && (
        <ChapterList
          chapters={chapters}
          handleChangeTopic={handleChangeTopic}
        />
      )}

      {!isChangeTopic && subject === "線性代數" && (
        <ChapterList
          chapters={linearAlgebraChapters}
          handleChangeTopic={handleChangeTopic}
        />
      )}

      {isChangeTopic && (
        <div className="mx-auto max-w-sm">
          {questions.map((question, index) => (
            <Card
              isSubmit={isSubmit}
              key={`${question.number}${index}`}
              number={question.number}
              description={question.description}
              options={question.options}
              answer={question.answer}
              topic={question.topic}
              index={index}
            />
          ))}
          <div className=" flex  justify-center justify-items-center">
            <button
              onClick={handleSbumit}
              type="button"
              className=" w-32 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              送出
            </button>
            <button
              onClick={handleBackMenu}
              type="button"
              className=" w-32 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              回到主選單
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
