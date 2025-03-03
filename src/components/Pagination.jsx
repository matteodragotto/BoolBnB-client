const Pagination = ({ currentPage, setCurrentPage, totalPages, hasResult }) => {

    const getPageNumbers = () => {

        let pages = [];

        if (totalPages <= 5) {

            pages = Array.from({ length: totalPages }, (_, i) => i + 1);
        } else {
            pages.push(1);

            if (currentPage > 3) {
                pages.push("...");
            }

            let startPage = Math.max(2, currentPage - 1);
            let endPage = Math.min(totalPages - 1, currentPage + 1);

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            if (currentPage < totalPages - 2) {
                pages.push("...");
            }

            pages.push(totalPages);
        }

        return pages;
    };

    return (
        <div className="flex items-center justify-center gap-2 my-5">
            {/* Bottone Previous */}
            <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1 || !hasResult}
                className={`bg-gradient-to-r from-[#AA895F] to-[#708F96] text-white px-4 py-2 rounded-full transition duration-300 ${currentPage === 1 || !hasResult ? "cursor-default opacity-50" : "hover:scale-105 cursor-pointer"}`}

            >
                ← Prev
            </button>

            {/* Numeri di pagina */}
            <div className="flex items-center gap-1">
                {getPageNumbers().map((page, i) =>
                    page === "..." ? (
                        <span key={i} className="px-1 py-1 text-gray-500">...</span>
                    ) : (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(page)}
                            className={`px-2 py-2 text-sm font-medium ${currentPage === page
                                ? "underline cursor-pointer"
                                : "cursor-pointer"}`}
                        >
                            {page}
                        </button>
                    )
                )}
            </div>

            {/* Bottone Next */}
            <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages || !hasResult}
                className={`bg-gradient-to-r from-[#AA895F] to-[#708F96] text-white px-4 py-2 rounded-full disabled:opacity-50 hover:scale-105 transition duration-300 ${currentPage === totalPages ? "cursor-default" : "cursor-pointer"} ${currentPage === totalPages ? "disabled:opacity-50" : ""}`}
            >
                Next →
            </button>
        </div >
    );
};

export default Pagination;


