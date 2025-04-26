function HomePage() {
    return (
        <>
            <div className="container w-full flex">
                <div className="container flex w-full flex-1/2">
                    <video
                        src="Chemex.mp4"
                        autoPlay
                        muted // Consider adding this to ensure autoplay works in more browsers
                        loop
                        className="w-full h-auto"
                        poster="chemex-poster.jpg" // Example poster image
                        title="Chemex Pour-Over Coffee Brewing"
                    >
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute  flex z-2 left-1/6 italic text-amber-100 opacity-60  text-shadow-blue-600 flex-col gap-10  top-1/7 font-bold text-7xl  m-0  w-1/2 h-1/2">
                        <span className="mt-30  ">Espresso </span>
                        <span className="mt-8">ve</span>

                        <span className="mt-8">Kahveye Dair Her Şey </span>
                        <span className="ml-25"></span>
                    </div>
                </div>

            </div>
        </>
    );
}
export default HomePage;