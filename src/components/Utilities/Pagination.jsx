const Pagination = ({page, lastPage, setPage}) => {
    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNext = () => {
        setPage(prevState => prevState + 1)
        scrollTop()
    }

    const handlePrev = () => {
        setPage(prevState => prevState - 1)
        scrollTop()
    }

    const handleLastPage = () => {
        setPage(lastPage)
        scrollTop()
    }

    return ( 
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-1xl">
            {page <= 1 ? null :
                <button onClick={handlePrev} className="transition-all hover:text-color-accent">Previous</button>
            }
            <p>{page} of {lastPage}</p>
            {page >= lastPage ? null :
                <button onClick={handleNext} className="transition-all hover:text-color-accent">Next</button>
            }
            {page == lastPage ? null :
                <button onClick={handleLastPage} className="transition-all hover:text-color-accent">Last Page</button>
            }
        </div>
    )
}

export default Pagination