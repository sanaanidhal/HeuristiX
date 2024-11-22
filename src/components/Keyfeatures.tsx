import featureShape from "../assets/theme/images/icons/feature-shape.svg";
import featureIcon1 from "../assets/theme/images/icons/feature-icon-1.svg";
import featureIcon2 from "../assets/theme/images/icons/feature-icon-2.svg";
import featureIcon3 from "../assets/theme/images/icons/feature-icon-3.svg";
import featureIcon4 from "../assets/theme/images/icons/feature-icon-4.svg";
import featureIcon5 from "../assets/theme/images/icons/feature-icon-5.svg";
import featureIcon6 from "../assets/theme/images/icons/feature-icon-6.svg";
import featureIcon7 from "../assets/theme/images/icons/feature-icon-7.svg";
import featureIcon8 from "../assets/theme/images/icons/feature-icon-8.svg";
import featureIcon9 from "../assets/theme/images/icons/feature-icon-9.svg";
import featureIcon10 from "../assets/theme/images/icons/feature-icon-10.svg";

const Keyfeatures = () => {
  return (
    <section className="section key-feature relative">
      <img
        className="absolute left-0 top-0 -z-[1] -translate-y-1/2"
        src={featureShape}
        alt="Decorative Shape"
      />
      <div className="container">
        {/* Heading Section */}
        <div className="row justify-between text-center lg:text-start">
          <div className="lg:col-5">
            <h2>The Highlighting Part Of Our Solution</h2>
          </div>
          <div className="mt-6 lg:col-5 lg:mt-0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas
              Werat viverra id et aliquet. vulputate egestas sollicitudin.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="key-feature-grid mt-10 grid grid-cols-2 gap-7 md:grid-cols-3 xl:grid-cols-4">
          <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
            <div>
              <h3 className="h4 text-xl lg:text-2xl">Live Caption</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <span className="icon mt-4">
              <img className="object-contain" src={featureIcon1} alt="Live Caption" />
            </span>
          </div>
          <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
            <div>
              <h3 className="h4 text-xl lg:text-2xl">Smart Reply</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <span className="icon mt-4">
              <img className="object-contain" src={featureIcon2} alt="Smart Reply" />
            </span>
          </div>
          <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
            <div>
              <h3 className="h4 text-xl lg:text-2xl">Sound Amplifier</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <span className="icon mt-4">
              <img className="object-contain" src={featureIcon3} alt="Sound Amplifier" />
            </span>
          </div>
          <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
            <div>
              <h3 className="h4 text-xl lg:text-2xl">Gesture Navigation</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <span className="icon mt-4">
              <img className="object-contain" src={featureIcon4} alt="Gesture Navigation" />
            </span>
          </div>
          <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
            <div>
              <h3 className="h4 text-xl lg:text-2xl">Dark Theme</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <span className="icon mt-4">
              <img className="object-contain" src={featureIcon5} alt="Dark Theme" />
            </span>
          </div>
          <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
            <div>
              <h3 className="h4 text-xl lg:text-2xl">Privacy Controls</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <span className="icon mt-4">
              <img className="object-contain" src={featureIcon6} alt="Privacy Controls" />
            </span>
          </div>
          <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
            <div>
              <h3 className="h4 text-xl lg:text-2xl">Location Controls</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <span className="icon mt-4">
              <img className="object-contain" src={featureIcon7} alt="Location Controls" />
            </span>
          </div>
          <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
            <div>
              <h3 className="h4 text-xl lg:text-2xl">Security Updates</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <span className="icon mt-4">
              <img className="object-contain" src={featureIcon8} alt="Security Updates" />
            </span>
          </div>
          <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
            <div>
              <h3 className="h4 text-xl lg:text-2xl">Focus Mode</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <span className="icon mt-4">
              <img className="object-contain" src={featureIcon9} alt="Focus Mode" />
            </span>
          </div>
          <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
            <div>
              <h3 className="h4 text-xl lg:text-2xl">Family Link</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <span className="icon mt-4">
              <img className="object-contain" src={featureIcon10} alt="Family Link" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Keyfeatures;
