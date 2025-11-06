export default function Pagination({ page = 2, total = 3, onChange = () => { } }) {
    const pages = Array.from({ length: total }, (_, i) => i + 1);
    const isFirst = page === 1;
    const isLast = page === total;

    return (
        <nav aria-label="Pagination" className="w-full h-[84px] py-50">
            <div className="mx-auto flex justify-center">
                <div
                    className="
            inline-flex items-stretch overflow-hidden
            w-[313px] h-[74px]
            rounded-[6.73px]
            border-[1.35px] border-[#BDBDBD]
            divide-x-[1.35px] divide-[#BDBDBD]
            bg-white
            [box-shadow:0_2px_4px_0_rgba(0,0,0,0.10)]
          "
                >

                    <button
                        disabled={isFirst}
                        className="
              px-5 text-[15px] font-semibold
              h-full
              disabled:bg-gray-100 disabled:text-[#BDBDBD] disabled:cursor-not-allowed
              text-[#23A6F0] hover:bg-[#F5FAFF]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23A6F0]/50
            "
                        onClick={() => !isFirst && onChange(1)}
                    >
                        First
                    </button>

                    {pages.map((n) => (
                        <button
                            key={n}
                            aria-current={n === page ? "page" : undefined}
                            onClick={() => onChange(n)}
                            className={[
                                "px-6 text-[15px] font-semibold h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23A6F0]/50",
                                n === page
                                    ? "bg-[#23A6F0] text-white"
                                    : "bg-white text-[#23A6F0] hover:bg-[#F5FAFF]"
                            ].join(" ")}
                        >
                            {n}
                        </button>
                    ))}

                    <button
                        disabled={isLast}
                        className="
              px-5 text-[15px] font-semibold
              h-full
              text-[#23A6F0] hover:bg-[#F5FAFF]
              disabled:bg-gray-100 disabled:text-[#BDBDBD] disabled:cursor-not-allowed
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23A6F0]/50
            "
                        onClick={() => !isLast && onChange(page + 1)}
                    >
                        Next
                    </button>
                </div>
            </div>
        </nav>
    );
}