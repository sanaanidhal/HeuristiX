import  { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


const Signup = () => {


  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    fetchUsers();
}, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');

  const addUser = async (e:any) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/api/users', {
            name,
            email,
            password,
            location,

        });
        setUsers([...users, response.data]); 
        setName('');
        setEmail('');
        setPassword('');
        toast.success('Your Account Has Been Created! , You can now SIGN IN !', {
          position: "top-center",
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        toast.success('Weclome to the Community !', {
          position: "top-center",
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
    } catch (error:any) {
        console.error('Error adding user:', error);
        if (error.response &&
          error.response.data &&
          error.response.data.includes('users_email_key'))
          {
          toast.warn('This Email is already registered !', {
          position: "top-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        } else {
          toast.error('Something went wrong! Try again', {
            position: "top-right",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }
    }
  };

    
  return (
    <section className="">
  <div className="container max-w-full">
    <div className="row">
      <div className="min-h-[980px]  py-10 lg:col-6 lg:py-[114px] background-image: url('src\assets\theme\images\body-bg.svg');">
        <div className="mx-auto w-full max-w-[480px]">
          <img className="mb-8 w-10" src="src/assets/theme/images/logoCropped.png" alt="" />
          <h1 className="mb-4">Sign Up</h1>
          <p>Donec sollicitudin molestie malesda sollitudin</p>
          <div className="signin-options mt-10">
            <a className="btn btn-outline-white w-full text-dark align-middle flex justify-center items-center" href="#"
              >
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="25px" height="25px"><path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
              <span className="ml-2"> Sign Up With Google </span>
              </a
            >
          </div>
          <div
            className="relative my-8 text-center after:absolute after:left-0 after:top-1/2 after:z-[0] after:w-full after:border-b after:border-border after:content-['']"
          >
            <span className="relative z-[1] inline-block bg-transparent text-dark px-2"
            >Or Sign Up With Email</span>
          </div>

          <form onSubmit={addUser}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)} 
                className="form-control"
                placeholder="Your Full Name"
                required
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="email" className="form-label">Email Adrdess</label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="form-control"
                placeholder="Your Email Address"
                required
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your Password"
                required
              />
            </div>
            <div className="form-group mt-4">
                <label htmlFor="Location" className="form-label">Location</label>
                <input
                  type="text"
                  id="Location"
                  className="form-control"
                  placeholder="City, Country"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>
            <input
              className="btn btn-primary mt-10 block w-full"
              type="submit"
              value="Sign Up"
            />
            <ToastContainer />
            <p className="mt-6 text-center">
              Already have <span className="text-dark" >account?</span> <br></br>
              <a className="text-dark" href="/signin">Sign In</a> to your account.
            </p>
          </form>
        </div>
      </div>

      <div
        className="auth-banner bg-gradient flex flex-col items-center justify-center py-16 lg:col-6"
      >
        <img
          className="absolute top-0 left-0 h-full w-full"
          src="src/assets/theme/images/login-banner-bg.svg"
          alt=""
        />
        <div className="w-full text-center">
          <h2 className="h3 text-white">
            A suite product accelerate <br />
            your career design
          </h2>
          <div className="swiper auth-banner-carousel">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img
                  width="667"
                  height="557"
                  className="mx-auto"
                  src="src/assets/theme/images/signup-carousel-img-1.png"
                  alt=""
                />
              </div>
              <div className="swiper-slide">
                <img
                  width="667"
                  height="557"
                  className="mx-auto"
                  src="src/assets/theme/images/signup-carousel-img-1.png"
                  alt=""
                />
              </div>
              <div className="swiper-slide">
                <img
                  width="667"
                  height="557"
                  className="mx-auto"
                  src="src/assets/theme/images/signup-carousel-img-1.png"
                  alt=""
                />
              </div>
            </div>
            <div className="pagination"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
export default Signup;