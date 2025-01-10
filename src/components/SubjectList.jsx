const SubjectList = ({ subjects, handleSelectSubject }) => {
  return (
    <div className="mx-auto max-w-sm p-2">
      <div className=" mx-auto w-50 text-center text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <a
          href="#"
          aria-current="true"
          className="block w-full px-4 py-2 text-white bg-blue-700 border-b border-gray-200 rounded-t-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600"
        >
          請選取要科目
        </a>
        {subjects.map((subject, index) => (
          <a
            onClick={() => handleSelectSubject(subject)}
            key={index}
            href="#"
            className={`block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white ${
              index === subject.length - 1 ? "rounded-b-lg border-b-0" : ""
            }`}
          >
            {subject}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SubjectList;
