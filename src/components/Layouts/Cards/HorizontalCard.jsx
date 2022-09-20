/**
 *  Create's horizontal card fragment
 * 
 * @param {object} movie 
 * @returns <React.Fragment>
 */
 const HorizontalCard = (movie) => {
    const badges = [movie.Type, movie.Year];
    return (
        <div class="flex flex-col items-center bg-white rounded-lg md:flex-row  ">
            <img 
                class="flex-none object-contain w-[350px] h-[500px] bg-black" 
                src={movie.Poster}
                alt={movie.Title}
                />
            <div 
                class="flex flex-col justify-between p-4 items-center  w-[320px]"
            >
                <h5 class="my-2 px-2 text-xl font-bold tracking-tight text-gray-900 h-30 ...">{movie.Title}</h5>
                {/* Badges containing YEAR, TYPE */}
                <div className='items-center gap-2 py-5'>
                    {badges.map((badge) => {
                        return (
                            <span className='badge'>{badge.toUpperCase()}</span>
                        )
                    })}

                </div>
                <p class="font-small text-gray-700 dark:text-gray-400 leading-relaxed my-2 text-center">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing
                    elit. Lorem consectetur adipiscing elit.
                </p>
                {/* URL with movieId */}
                <a
                    href={`https://www.imdb.com/title/${movie.imdbID}`}
                    className="inline-block my-4 py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium bg-blue-500/90 hover:bg-blue-900/90 text-white transition"
                >
                    View more
                </a>
            </div>
        </div>
    )
}

/**
 * Carousel slick settings
 */
 const HorizontalSettings = {
    arrows: true,
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
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
    HorizontalCard,
    HorizontalSettings
};