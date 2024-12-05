import  { useState ,  useEffect } from "react";
import "../styles/UserProfile.css"; // Add your styles here
import { useUser } from "../assets/theme/scripts/UserContext";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import moment from 'moment';


const UserProfile = () => {
  const [activeTab, setActiveTab] = useState(0); // State for active tab
  const [imageUrl, setImageUrl] = useState(""); // State for uploaded image URL
  const { setUser , user }=useUser();

  const tabContent = [
    {
      title: "Overview",
      content: (
        <>
          <h4>Welcome, {user.name} </h4>
          <p>
            This is your profile overview. Here you can find your basic
            information, recent activities, and account status.
          </p>
          <ul>
            <li><strong>Full Name:</strong> {user.name}</li>
            <li><strong>Email:</strong> {user.email} </li>
            <li><strong>Location:</strong> {user.location} </li>
            <li><strong>Member Since: </strong> {moment(user?.created_at).format('MMMM Do, YYYY')}</li>
          </ul>
        </>
      ),
    },
    {
      title: "Activity",
      content: (
        <>
          <h4>Your Recent Activities</h4>


<section className="section changelogs pt-6">
  <div className="container">
    <div className="row justify-center">
      <div className="lg:col-10">
        <div className="row mb-10 lg:mt-0">
          <div className="lg:col-3">
            <h6 className="mb-4 pl-7 text-lg lg:mt-0 lg:pl-0">
              Octobor 15,2020
            </h6>
          </div>
          <div className="border-border lg:col-9 lg:border-l lg:pl-10 lg:pb-10">
            <div
              className="changelogs-content rounded-xl bg-white p-6 shadow-lg lg:p-10"
            >
              <span className="changelogs-tag bg-[#3A9CFF]">Changed</span>
              <ul>
                <li>
                  Enhance or improve <span>User experience</span>, our Site, or
                  our Service.
                </li>
                <li>Process transactions.</li>
                <li>
                  Send emails about our
                  <span>Site or respond to</span> inquiries.
                </li>
                <li>
                  Send emails and updates about Conclude,
                  <span>including to amended legal</span> documents
                </li>
              </ul>
              <span className="changelogs-tag bg-[#00CE92]">Added</span>
              <ul>
                <li>
                  Enhance or improve <span>User experience</span>, our Site, or
                  our Service.
                </li>
                <li>Process transactions.</li>
                <li>
                  Send emails about our
                  <span>Site or respond to</span> inquiries.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row mb-10 lg:mt-0">
          <div className="lg:col-3">
            <h6 className="mb-4 pl-7 text-lg lg:mt-0 lg:pl-0">
              Octobor 15,2020
            </h6>
          </div>
          <div className="border-border lg:col-9 lg:border-l lg:pl-10 lg:pb-10">
            <div
              className="changelogs-content rounded-xl bg-white p-6 shadow-lg lg:p-10"
            >
              <span className="changelogs-tag bg-[#973CFF]">Removed</span>
              <ul>
                <li>
                  Enhance or improve <span>User experience</span>, our Site, or
                  our Service.
                </li>
                <li>Process transactions.</li>
                <li>
                  Send emails about our
                  <span>Site or respond to</span> inquiries.
                </li>
                <li>
                  Send emails and updates about Conclude,
                  <span>including to amended legal</span> documents
                </li>
              </ul>
              <span className="changelogs-tag bg-[#9C275F]">Security</span>
              <ul>
                <li>
                  Enhance or improve <span>User experience</span>, our Site, or
                  our Service.
                </li>
                <li>Process transactions.</li>
                <li>
                  Send emails about our
                  <span>Site or respond to</span> inquiries.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row mb-10 lg:mt-0">
          <div className="lg:col-3">
            <h6 className="mb-4 pl-7 text-lg lg:mt-0 lg:pl-0">
              Octobor 15,2020
            </h6>
          </div>
          <div className="border-border lg:col-9 lg:border-l lg:pl-10">
            <div
              className="changelogs-content rounded-xl bg-white p-6 shadow-lg lg:p-10"
            >
              <span className="changelogs-tag bg-primary">Depriciated</span>
              <ul>
                <li>
                  Enhance or improve <span>User experience</span>, our Site, or
                  our Service.
                </li>
                <li>Process transactions.</li>
                <li>
                  Send emails about our
                  <span>Site or respond to</span> inquiries.
                </li>
                <li>
                  Send emails and updates about Conclude,
                  <span>including to amended legal</span> documents
                </li>
              </ul>
              <span className="changelogs-tag bg-[#973CFF]">Removed</span>
              <ul>
                <li>
                  Enhance or improve <span>User experience</span>, our Site, or
                  our Service.
                </li>
                <li>Process transactions.</li>
                <li>
                  Send emails about our
                  <span>Site or respond to</span> inquiries.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
      ),
    },
    {
      title: "Settings",
      content: (
        <>
          <h4>Account Settings</h4>
          <p>Manage your account preferences below:</p>
          <ul className='settings'>
            <li>
              <a href="/update-profile" className="btn btn-primary">
                Update Profile
              </a>
            </li>
            <li>
              <a href="/change-password" className="btn btn-primary">
                Change Password
              </a>
            </li>
            <li>
              <a href="/delete-account" className="btn btn-outline-primary">
                Delete Account
              </a>
            </li>
          </ul>
        </>
      ),
    },
  ];

  useEffect(() => {
    if (user?.profilepic) {
      setImageUrl(user.profilepic); // Sync local state with context
    }
  }, [user]);

   // Cloudinary Widget Function
   const handleUpload = () => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dbj2jhkr0",
        uploadPreset: "heuristiX",
      },
      async (error, result) => {
        if (!error && result && result.event === "success") {
          const uploadedImageUrl = result.info.secure_url;
  
          try {
            // Update backend
            await axios.post("http://localhost:5000/api/update-profile-picture", {
              userId: user.id,
              imageUrl: uploadedImageUrl,
            });
  
            // Fetch updated user data
            const response = await axios.get(`http://localhost:5000/api/users/${user.id}`);
            setUser(response.data); // Update context
            setImageUrl(response.data.profilepic); // Update local state
            toast.success('Profile Picture Changed ! ', {
              position: "top-right",
              autoClose: 10000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
          } catch (err) {
            console.error("Error updating profile picture:", err);
          }
        }
      }
    );
  
    widget.open();
  };
  

//   useEffect(() => {
//   const fetchUser = async () => {
//     try {
//       const response = await axios.get(`/api/users/${user.id}`);
//       const userData = response.data;

//       setUser(userData); // Update user context
//       setImageUrl(userData.profilepic); // Update image URL
//     } catch (error) {
//       console.error("Error fetching user:", error);
//     }
//   };

//   if (user?.id) {
//     fetchUser();
//   }
// }, [user?.id, setUser]);







if (!user) {
  return <p>Loading user information...</p>;
}


  return (
    <>
    <div className="profile-page-container">
      {/* Floating Assets */}
      <img
        className="floating-bubble-1"
        src="images/floating-bubble-1.svg"
        alt=""
      />
      <img
        className="floating-bubble-2"
        src="images/floating-bubble-2.svg"
        alt=""
      />
      <img
        className="floating-bubble-3"
        src="images/floating-bubble-3.svg"
        alt=""
      />

      {/* Profile Hero */}
      <section className="page-hero pt-12 ">
      <div className="text-center">
      <ul
        className="breadcrumb inline-flex h-8 items-center justify-center space-x-2 rounded-3xl bg-theme-light px-4 py-2"
      >
        <li className="leading-none text-dark">
          <a className="inline-flex items-center text-primary" href="/">
            <svg
              className="mr-1.5"
              width="15"
              height="15"
              viewBox="0 0 16 16"
              fill="none"
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
          <span className="text-sm leading-none">/ Profile</span>
        </li>
      </ul>
    </div>
      </section>

      {/* Profile Section */}
      <section className="profile-section section">
        <div className="container">
          <div className="row justify-center">
            <div className="col-16">
              <div className="profile-card rounded-xl bg-transparent py-16 px-5 shadow-lg">
                {/* Profile Header */}
                <div className="text-center">
                  <img
                    className="mx-auto rounded-full border border-border"
                    src={imageUrl || "src/assets/theme/images/shape.svg"}
                    alt="User Avatar"
                    width="120"
                    height="120"
                  />
                  <ToastContainer />
                  <h1 className="mt-6 text-2xl font-bold"> {user.name} </h1>
                  <p className="mt-2 text-gray-600">{user?.email}</p>
                  <p className="mt-4 text-gray-700">
                    Software Engineer | JavaScript Enthusiast | Based in San
                    Francisco, CA
                  </p>
                  <button
                    onClick={handleUpload}
                    className="btn btn-primary mt-4"
                  >
                    Upload Profile Picture
                  </button>
                </div>

                {/* Tabs Navigation */}
                <div className="tabs-navigation my-12 py-3">
                  <ul className="tab-nav flex justify-center ">
                    {tabContent.map((tab, index) => (
                      <li key={index}>
                        <button
                          className={`btn btn-primary m-6 ${
                            activeTab === index ? "active" : "text-dark"
                          }`}
                          onClick={() => setActiveTab(index)}
                        >
                          {tab.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tabs Content */}
                <div className="tab-content px-4">
                  {tabContent[activeTab].content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default UserProfile;
