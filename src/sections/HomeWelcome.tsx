import { useNavigate } from "react-router-dom";

function HomeWelcome() {
  const navigate = useNavigate();
  return (
    <section className="bg-[url('./assets/homepagebg.jpg')] bg-cover bg-center h-screen w-full flex flex-col  items-center text-center px-4">
      <div className="flex flex-col   text-center mt-40">
        <h1 className="mb-4 text-3xl font-bold text-heading md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-white from-sky-400">
            Welcome to
          </span>{" "}
          <span className="text-green-400">FarmLand.</span>
        </h1>
        <p className="text-lg font-normal text-body lg:text-xl text-white">
          Farm-fresh products, delivered daily
        </p>

        <button
          type="button"
          className="mx-auto mt-4 w-40 text-white bg-green-600 box-border border border-transparent hover:bg-green-700 focus:ring-4 focus:ring-green-300 shadow-xs font-medium cursor-pointer  leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none"
          onClick={()=>{navigate("/shop")}}
        >
          Shop Now
        </button>
        <div className="mt-50 flex flex-col ">
          {/* Features Section */}
          <div className="flex gap-8 mt-16 justify-center items-center flex-wrap">
            {/* Made by Local Farmers */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center mb-2">
                <svg
                  className="w-12 h-12 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="8" r="6" />
                  <path d="M12 14c-3 0-8 1.5-8 4.5V20h16v-1.5c0-3-5-4.5-8-4.5z" />
                </svg>
              </div>
              <p className="text-white text-sm font-medium uppercase tracking-wider">
                Made by Local
              </p>
              <p className="text-white text-sm font-medium uppercase tracking-wider">
                Farmers
              </p>
            </div>

            {/* Same Day Delivery */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center mb-2">
                <svg
                  className="w-12 h-12 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 18.5a1.5 1.5 0 01-1 1.5 1.5 1.5 0 11-1-1.5m1.5-9l1.96 2.5H17V9.5m-11 9A1.5 1.5 0 015 20a1.5 1.5 0 011-1.5A1.5 1.5 0 017.5 20 1.5 1.5 0 016 18.5M20 8h-3V4H3c-1.11 0-2 .89-2 2v11h2a3 3 0 003 3 3 3 0 003-3h6a3 3 0 003 3 3 3 0 003-3h2v-5l-3-4z" />
                </svg>
              </div>
              <p className="text-white text-sm font-medium uppercase tracking-wider">
                Same Day
              </p>
              <p className="text-white text-sm font-medium uppercase tracking-wider">
                Delivery
              </p>
            </div>

            {/* Organic Produce */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center mb-2">
                <svg
                  className="w-12 h-12 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 8c0-3.31-2.69-6-6-6S6 6.69 6 10c0 2.22 1.21 4.15 3 5.19V22h2v-5h2v5h2v-6.81c1.79-1.04 3-2.97 3-5.19z" />
                </svg>
              </div>
              <p className="text-white text-sm font-medium uppercase tracking-wider">
                Organic
              </p>
              <p className="text-white text-sm font-medium uppercase tracking-wider">
                Produce
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeWelcome;
