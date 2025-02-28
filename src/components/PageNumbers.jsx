import { useGlobalContext } from "../context/GlobalContext"

const PageNumbers = ({ currentPage, setCurrentPage }) => {
    const { totalPages } = useGlobalContext();

    const setPageNumbers = () => {
        let pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <span key={i}>
                    <button
                        onClick={() => setCurrentPage(i)}
                        className={currentPage === i ? "text-blue-500 cursor-pointer" : "cursor-pointer"}
                    >
                        {i}
                    </button>
                    {i < totalPages && " - "}
                </span>
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

export default PageNumbers;

