import { Dispatch, SetStateAction } from "react";

const Pagination = ({
  activePage,
  setActivePage,
}: {
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
}) => {
  const data = [0, 10, 20, 30, 40, 50];
  return (
    <ul className="flex space-x-4 justify-center">
      <li
        onClick={() => setActivePage((prev) => prev - 10)}
        className="flex items-center justify-center shrink-0 hover:bg-gray-50 cursor-pointer w-10 h-10 rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 fill-gray-400"
          viewBox="0 0 55.753 55.753"
        >
          <path
            d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
            data-original="#000000"
          />
        </svg>
      </li>
      {data.map((item) => (
        <li
          key={item}
          onClick={() => setActivePage(item)}
          className={`flex items-center justify-center shrink-0 hover:bg-gray-50 cursor-pointer text-base font-bold text-[#333] w-10 h-10 rounded-lg ${
            activePage === item && "bg-blue-500 text-white"
          }`}
        >
          {item / 10 + 1}
        </li>
      ))}
      <li
        onClick={() => setActivePage((prev) => prev + 10)}
        className="flex items-center justify-center shrink-0 hover:bg-gray-50 cursor-pointer w-10 h-10 rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 fill-gray-400 rotate-180"
          viewBox="0 0 55.753 55.753"
        >
          <path
            d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
            data-original="#000000"
          />
        </svg>
      </li>
    </ul>
  );
};

export default Pagination;
