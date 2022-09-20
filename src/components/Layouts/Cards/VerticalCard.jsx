/**
 * Create's vertical card fragment
 * 
 * @param {object} movie 
 * @returns <React.Fragment>
 */
const VerticalCard = (movie) => {
    const badges = [movie.Type, movie.Year];
    return (
        <>
            <img
                src={movie.Poster}
                alt={movie.Title}
                className='object-fill w-full h-[350px]'
            />
            <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                <h3 className={"h-10"}>
                    <a
                        href={`https://www.imdb.com/title/${movie.imdbID}`}
                        className="text-dark text-2xl font-bold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary truncate ..."
                    >
                        {movie.Title}
                    </a>
                </h3>
                {/* Badges containing YEAR, TYPE */}
                <div className='items-center gap-2 my-5'>
                    {badges.map((badge) => {
                        return (
                            <span className='badge'>{badge.toUpperCase()}</span>
                        )
                    })}

                </div>
                <p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed my-4">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing
                    elit. Lorem consectetur adipiscing elit.
                </p>
                {/* URL with movieId */}
                <a
                    href={`https://www.imdb.com/title/${movie.imdbID}`}
                    className="inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium bg-blue-500/90 text-white hover:bg-blue-900/90 transition"
                >
                    Details
                </a>
            </div>
        </>
    )
}

/**
 * Carousel slick settings
 */
const VerticalSettings = {
    arrows: true,
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        }
    ]
};

export {
    VerticalCard,
    VerticalSettings
};