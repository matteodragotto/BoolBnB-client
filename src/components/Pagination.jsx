
const Pagination = ({ currentPage, setCurrentPage, Pages }) => {

    const setPageNumbers = () => {
        let pages = [];
        for (let i = 1; i <= Pages; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={currentPage === i ? "text-blue-500 cursor-pointer" : "cursor-pointer"}
                >
                    {i}
                </button>
            );
        }
        return pages;
    };

    return (
        <div>
            {setPageNumbers()}
        </div>
    );
};

export default Pagination;

