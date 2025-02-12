export default function CardLayout({ children }) {
  return (
    <div className=" mx-auto max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-2">
      {children}
    </div>
  );
}
