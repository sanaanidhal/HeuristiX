import  { useState, useEffect } from "react";
import sellsByCountry from '../assets/theme/images/sells-by-country.png';
import collaboration from '../assets/theme/images/collaboration.png';
import dropIcon from '../assets/theme/images/icons/drop.svg';
import brainIcon from '../assets/theme/images/icons/brain.svg';
import timerIcon from '../assets/theme/images/icons/timer.svg';
import shape from '../assets/theme/images/shape.svg';
import checkmark from '../assets/theme/images/icons/checkmark-circle.svg'
import playIcon from '../assets/theme/images/icons/play-icon.svg';
import introThumbnail from '../assets/theme/images/intro-thumbnail.png';


const Services = () => {
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("activeTabName-integration-tab") || "0"
  );

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    localStorage.setItem("activeTabName-integration-tab", activeTab);
  }, [activeTab]);

  return (
    <section className="section services">
      <div className="container">
        {/* First Tab Group */}
        <div className="tab row gx-5 items-center" data-tab-group="integration-tab">
          <div className="lg:col-7 lg:order-2">
            <div className="tab-content" data-tab-content>
              {["0", "1", "2"].map((tabName) => (   
                <div
                  key={tabName}
                  className={`tab-content-panel ${activeTab === tabName ? "active" : ""}`}
                  data-tab-panel={tabName}
                >
                  <img
                    className="w-full object-contain"
                    src={
                      tabName === "0"
                        ? sellsByCountry
                        : tabName === "1"
                        ? collaboration
                        : sellsByCountry
                    }
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 lg:col-5 lg:order-1 lg:mt-0">
            <div className="text-container">
              <h2 className="lg:text-4xl">
                Prevent failure from impacting your reputation
              </h2>
              <p className="mt-4">
                Our platform helps you build secure onboarding authentication
                experiences that retain and engage your users. We build the
                infrastructure, you can.
              </p>
              <ul className="tab-nav -ml-4 mt-8 border-b-0" data-tab-nav>
                {["0", "1", "2"].map((tabName, index) => (
                  <li
                    key={tabName}
                    className={`tab-nav-item ${activeTab === tabName ? "active" : ""}`}
                    data-tab={tabName}
                    onClick={() => handleTabClick(tabName)}
                  >
                    <img
                      className="mr-3"
                      src={
                        index === 0
                          ? dropIcon
                          : index === 1
                          ? brainIcon
                          : timerIcon
                      }
                      alt=""
                    />
                    {index === 0
                      ? "Habit building essential choose habit"
                      : index === 1
                      ? "Get an overview of Habit Calendars."
                      : "Start building with Habitify platform"}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        </div>
        {/* Second Section */}
        <div className="row gx-5 mt-12 items-center lg:mt-0">
          <div className="lg:col-7">
            <div className="relative">
              <img
                className="w-full object-contain"
                src={collaboration}
                alt=""
              />
              <img
                className="absolute bottom-6 left-1/2 -z-[1] -translate-x-1/2"
                src={shape}
                alt=""
              />
            </div>
          </div>
          <div className="mt-6 lg:col-5 lg:mt-0">
            <div className="text-container">
              <h2 className="lg:text-4xl">
                Accept payments any country in this whole universe
              </h2>
              <p className="mt-4">
                Donec sollicitudin molestie malesuada. Mauris pellentesque nec,
                egestas non nisi. Cras ultricies ligula sed
              </p>
              <ul className="mt-6 text-dark lg:-ml-4">
                <li className="mb-2 flex items-center rounded px-4">
                  <img
                    className="mr-3"
                    src={checkmark}
                    alt="Check"
                  />
                  Supporting more than 119 country world
                </li>
                <li className="mb-2 flex items-center rounded px-4">
                  <img
                    className="mr-3"
                    src={checkmark}
                    alt="Check"
                  />
                  Open transaction with more than currencies
                </li>
                <li className="mb-2 flex items-center rounded px-4">
                  <img
                    className="mr-3"
                    src={checkmark}
                    alt="Check"
                  />
                 Customer Service with 79 languages
                </li>
              </ul>
            </div>
          </div>
        </div>
    <div className="row gx-5 mt-12 items-center lg:mt-0">
      <div className="lg:col-7 lg:order-2">
        <div className="video pb-5 pr-9">
          <div className="video-thumbnail overflow-hidden rounded-2xl">
            <img
              className="w-full object-contain"
              src={introThumbnail}
              alt="Intro Thumbnail"
            />
            <button className="video-play-btn">
              <img
                src={playIcon}
                alt="Play Button"
              />
            </button>
          </div>
          <div
            className="video-player absolute left-0 top-0 z-10 hidden h-full w-full"
          >
            <iframe
              className="h-full w-full"
              allowFullScreen
              src="https://www.youtube.com/embed/g3-VxLQO7do?autoplay=1"
              title="Intro Video"
            ></iframe>
          </div>
          <img
            className="intro-shape absolute bottom-0 right-0 -z-[1]"
            src={shape}
            alt="Decorative Shape"
          />
        </div>
      </div>
      <div className="mt-6 lg:col-5 lg:order-1 lg:mt-0">
        <div className="text-container">
          <h2 className="lg:text-4xl">Accountability that works for you</h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            egestas Werat viverra id et aliquet. vulputate egestas sollicitudin.
          </p>
          <button className="btn btn-white mt-6">Know about us</button>
        </div>
      </div>
    </div>

    </section>
  );
};

export default Services;
