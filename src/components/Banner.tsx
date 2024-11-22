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
              Scale design & dev operations with Avocode Enterprise
            </h1>
            <p className="mt-6">
              A fully integrated suite of authentication & authoriz products,
              Stytch’s platform removes the headache of.
            </p>
            <a className="btn btn-white mt-8" href="#">
              Download The Theme
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
