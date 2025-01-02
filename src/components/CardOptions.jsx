// eslint-disable-next-line react/prop-types
export default function Options({ options }) {
  return (
    <ul
      className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownHelperRadioButton"
    >
      {options.map((option, index) => (
        <li key={index}>
          <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
            <div className="flex items-center h-5">
              <input
                id={`helper-radio-${index}`}
                name="helper-radio"
                type="radio"
                value={option.value}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
            </div>
            <div className="ms-2 text-sm">
              <label
                htmlFor={`helper-radio-${index}`}
                className="font-medium text-gray-900 dark:text-gray-300"
              >
                <div>{option.label}</div>
                <p
                  id={`helper-radio-text-${index}`}
                  className="text-xs font-normal text-gray-500 dark:text-gray-300"
                >
                  {option.description}
                </p>
              </label>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
