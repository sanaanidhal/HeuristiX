import  { useEffect, useState } from "react";

const AboutPage = () => {
  const counters = [
    { target: 500, suffix: "", color: "#A3A1FB", label: "Algorithms Explored" },
    { target: 440, suffix: "M", color: "#5EE2A0", label: "Products " },
    { target: 50, suffix: "K", color: "#0000FF", label: "Community Members" },
    { target: 20, suffix: "K", color: "#FEC163", label: "Discussions" },
  ];

  const [counts, setCounts] = useState(
    counters.map(() => 0) // Initialize all counters to 0
  );

  // Counter logic using useEffect
  useEffect(() => {
    counters.forEach((counter, index) => {
      const increment = counter.target / 100; // Divide the target into 100 steps
      const interval = setInterval(() => {
        setCounts((prevCounts) => {
          const updatedCounts = [...prevCounts];
          if (updatedCounts[index] < counter.target) {
            updatedCounts[index] = Math.min(
              updatedCounts[index] + increment,
              counter.target
            );
          }
          return updatedCounts;
        });
      }, 30); // Update every 30ms

      return () => clearInterval(interval); // Cleanup
    });
  }, []);

  return (
    <div>
      {/* Floating Assets */}
      <img
        className="floating-bubble-1 absolute right-0 top-0 -z-[1]"
        src="src/assets/theme/images/floating-bubble-1.svg"
        alt=""
      />
      <img
        className="floating-bubble-2 absolute left-0 top-[387px] -z-[1]"
        src="src/assets/theme/images/floating-bubble-2.svg"
        alt=""
      />
      <img
        className="floating-bubble-3 absolute right-0 top-[605px] -z-[1]"
        src="src/assets/theme/images/floating-bubble-3.svg"
        alt=""
      />

      {/* Hero Section */}
      <section className="page-hero py-16">
        <div className="container text-center">
          <ul className="breadcrumb inline-flex h-8 items-center justify-center space-x-2 rounded-3xl bg-theme-light px-4 py-2">
          <li className="leading-none text-dark">
          <a className="inline-flex items-center text-primary" href="/">
                <svg
                  className="mr-1.5"
                  width="15"
                  height="15"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.1769 15.0588H10.3533V9.41178H5.64744V15.0588H2.82391V6.58825H1.88274V16H14.118V6.58825H13.1769V15.0588ZM6.58862 15.0588V10.353H9.41215V15.0588H6.58862ZM15.8084 6.09225L15.2512 6.85178L8.00038 1.52472L0.749559 6.8499L0.192383 6.09131L8.00038 0.357666L15.8084 6.09225Z"
                    fill="black"
                  />
                </svg>
                <span className="text-sm leading-none">Home</span>
              </a>
            </li>
            <li className="leading-none text-dark">
            <span className="text-sm leading-none">/ About Us</span>
            </li>
          </ul>

          <div className="page-hero-content mx-auto max-w-[768px]">
            <h1 className="mb-5 mt-8">About NP-Hard Explorer</h1>
            <p>
            NP-Hard Explorer is a platform dedicated to the study and application of NP-hard problems, bringing together enthusiasts, students, and experts to discuss, learn, and innovate.
            </p>
            <div className="mt-11 flex justify-center">
              <a className="btn btn-primary m-3" href="#">
              Join Our Community Now !
              </a>
              <a className="btn btn-outline-primary m-3" href="#">
                Learn more
              </a>
            </div>
          </div>

          {/* Counter Section */}
          <div className="counter mt-16">
            <div className="row mx-0 rounded-[20px] bg-white px-10 shadow-lg lg:py-10">
              {counters.map((counter, index) => (
                <div
                  key={index}
                  className="border-border  text-center sm:col-6 lg:col-3 lg:border-r"
                >
                  <h2>
                    <span className="count">
                      {Math.floor(counts[index])}
                      {counter.suffix}
                    </span>
                    <span style={{ color: counter.color }}>+</span>
                  </h2>
                  <p>{counter.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-8">
              <h2>We started with one single goal: Empower entrepreneurs</h2>
            </div>
          </div>
          <div className="row mt-2.5">
            <div className="md:col-6">
              <img
                className="w-full object-cover mt-8"
                src="src/assets/theme/images/about/gallery-img-1.png"
                alt="Gallery Image 1"
              />
              <img
                className="w-full object-cover mt-8"
                src="src/assets/theme/images/about/gallery-img-2.png"
                alt="Gallery Image 2"
              />
            </div>
            <div className="md:col-6">
              <img
                className="w-full object-cover mt-8"
                src="src/assets/theme/images/about/gallery-img-3.png"
                alt="Gallery Image 3"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
