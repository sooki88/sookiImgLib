interface PaginationProps {
  start: number;
  display: number;
  total: number;
  isFetching: boolean;
  onClick: (selectedPage: number) => void;
}

export default function Pagination({
  start,
  display,
  total,
  isFetching,
  onClick,
}: PaginationProps) {
  const totalPages = Math.ceil(total / display);
  const startPage = (Math.ceil(start / 10) - 1) * 10 + 1;
  const endPage = Math.min(startPage + 9, totalPages);
  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  const handleClick = (selectedPage: number) => {
    onClick(selectedPage);
  };

  const handleNext = () => {
    const newStartPage = startPage + 10;
    onClick(newStartPage);
  };

  const handlePrev = () => {
    const newStartPage = startPage - 1;
    onClick(newStartPage);
  };

  return (
    <>
      {total && !isFetching && totalPages > 1 && (
        <div className="fixed bottom-0 left-0 right-0 z-10 flex items-center justify-center w-full gap-1 py-6 bg-gray-100">
          <button
            className="flex items-center justify-center w-8 h-8 mr-2 rounded-md hover:bg-gray-200"
            disabled={startPage === 1}
            onClick={handlePrev}
          >
            {startPage > 1 && (
              <img
                src="/images/page_arrow_left.svg"
                alt="이전 페이지 이동 버튼"
                className={`w-6 h-6`}
              />
            )}
          </button>
          {pageNumbers.map((num) => (
            <div
              key={num}
              onClick={() => handleClick(num)}
              className={`flex justify-center items-center w-8 h-8 rounded-md hover:bg-gray-200 ${
                num === start
                  ? "small-bold text-main border border-main"
                  : "small-regular text-gray-500"
              }`}
            >
              {num}
            </div>
          ))}

          <button
            className="flex items-center justify-center w-8 h-8 ml-2 rounded-md hover:bg-gray-200"
            disabled={endPage === totalPages}
            onClick={handleNext}
          >
            {endPage < totalPages && (
              <img
                src="/images/page_arrow_right.svg"
                alt="다음 페이지 이동 버튼"
                className={`w-6 h-6`}
              />
            )}
          </button>
        </div>
      )}
    </>
  );
}
