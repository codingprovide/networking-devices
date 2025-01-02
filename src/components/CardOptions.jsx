import clsx from "clsx";
import useQuestionStore from "../store";

export default function Options({ options, number, answer, isSubmit }) {
  const setUserChoice = useQuestionStore((state) => state.setUserChoice);
  const userChoices = useQuestionStore((state) => state.userChoices);

  const handleUserChoice = (number, selectedOption, answer) => {
    setUserChoice(number, selectedOption, answer);
    console.log(userChoices);
  };

  const userSelection = userChoices[number]?.selectedOption;

  return (
    <ul
      className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownHelperRadioButton"
    >
      {options.map((option, index) => {
        return (
          <li key={index}>
            <div
              className={clsx(
                "flex px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600",
                {
                  "bg-green-100 dark:bg-green-600":
                    isSubmit && option.label === answer,
                  "bg-red-100 dark:bg-red-600":
                    isSubmit &&
                    option.label === userSelection &&
                    userSelection !== answer,
                }
              )}
            >
              <div className="flex items-center justify-center">
                <input
                  id={`helper-radio-${option.description}-${number}-${index}`}
                  name={`helper-radio-${number}`}
                  type="radio"
                  value={option.label}
                  onChange={() =>
                    !isSubmit && handleUserChoice(number, option.label, answer)
                  }
                />
              </div>
              <div className="ms-2 text-xl w-full h-full">
                <label
                  htmlFor={`helper-radio-${option.description}-${number}-${index}`}
                  className="font-medium text-gray-900 dark:text-gray-300 w-full h-full"
                >
                  <div className=" text-yellow-200">{option.label}</div>
                  <p
                    id={`helper-radio-text-${index}`}
                    className=" text-base font-normal text-gray-500 dark:text-gray-300"
                  >
                    {option.description}
                  </p>
                </label>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
