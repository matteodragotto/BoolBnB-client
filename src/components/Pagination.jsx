
const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
    return (
        <div className="flex items-center justify-center gap-4 my-5">
            {/* Bottone Previous */}
            <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="bg-gradient-to-r from-[#AA895F] to-[#708F96] text-white px-4 py-2 rounded-full disabled:opacity-50 hover:scale-105 transition duration-300 cursor-pointer"
            >
                ← Prev
            </button>

            {/* Contenitore numeri pagine */}
            <div className="flex items-center">
                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 cursor-pointer ${currentPage === i + 1 ? "underline" : ""}`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>

            {/* Bottone Next */}
            <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="bg-gradient-to-r from-[#AA895F] to-[#708F96] text-white px-4 py-2 rounded-full disabled:opacity-50 hover:scale-105 transition duration-300 cursor-pointer"
            >
                Next →
            </button>
        </div>
    );
};

export default Pagination;


