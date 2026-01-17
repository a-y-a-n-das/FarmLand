import forestImg from '../assets/forest.jpg';

const HomepageEnding = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${forestImg})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            You'll <span className="italic font-serif">love</span>
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            the Taste
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            of
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold italic font-serif">
            Fresh
          </h1>
        </div>

        {/* Shop Now Button */}
        <button className="bg-[#8BC34A] hover:bg-[#7CB342] text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300 mb-16">
          SHOP NOW
        </button>

        {/* Features */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-4xl">
          {/* Fresh Products */}
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
            </svg>
            <span className="font-medium">Fresh Products</span>
          </div>

          {/* Delicious */}
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span className="font-medium">Delicious</span>
          </div>

          {/* Sustainable */}
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
            <span className="font-medium">Sustainable</span>
          </div>

          {/* All Organic */}
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C8 2 4 6 4 12c0 4 2 8 8 8s8-4 8-8c0-6-4-10-8-10z"/>
              <path d="M12 6v12M6 12h12"/>
            </svg>
            <span className="font-medium">All Organic</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageEnding;
