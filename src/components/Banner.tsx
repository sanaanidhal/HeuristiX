import bannerImg from "../assets/theme/images/banner-img.png"; 
import bannerShape from "../assets/theme/images/banner-shape.svg";

const Banner = () => {
  return (
    <section className="section banner relative">
      <div className="container">
        <div className="row items-center">
          {/* Left Column */}
          <div className="lg:col-6">
            <h1 className="banner-title">
              Dive into NP-Hard Problems: Algorithms and Solutions
            </h1>
            <p className="mt-6">
            Explore the complexities of NP-hard problems and discover how metaheuristic algorithms provide innovative solutions. Join our community to collaborate and learn. 
            </p>
            <a className="btn btn-white mt-8" href="/signin">
              Join Our Community Now !
            </a>
          </div>

          {/* Right Column */}
          <div className="lg:col-6">
            <img
              className="w-full object-contain"
              src={bannerImg}
              width="603"
              height="396"
              alt="Banner Image"
            />
          </div>
        </div>
      </div>

      {/* Background Shape */}
      <img
        className="banner-shape absolute -top-28 right-0 -z-[1] w-full max-w-[30%]"
        src={bannerShape}
        alt="Decorative Shape"
      />
    </section>
  );
};

export default Banner;
