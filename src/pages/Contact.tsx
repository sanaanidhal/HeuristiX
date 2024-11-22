const Contact = () => {
  return (
    <>
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

    <section className="page-hero pt-16 pb-6">
      <div className="container">
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
              <span className="text-sm leading-none">/ Contact</span>
            </li>
          </ul>
        </div>
        <div className="page-hero-content mx-auto max-w-[768px] text-center">
          <h1 className="mb-5 mt-8">
            Get in touch with Our <br />
            HeuristiX team
          </h1>
        </div>
      </div>
    </section>
    
    <section className="section pt-0">
      <div className="container">
        <div className="row">
          <div className="mb-10 text-center md:col-6 md:order-2 md:mb-0 md:pt-9">
            <div className="contact-img relative inline-flex pl-5 pb-5">
              <img src="src/assets/theme/images/contact-img.png" alt="" />
              <img
                className="absolute bottom-0 left-0 -z-[1] h-14 w-14"
                src="src/assets/theme/images/shape-2.svg"
                alt=""
              />
            </div>
          </div>
          <div className="md:col-6 md:order-1">
            <form className="lg:max-w-[484px]" action="#" method="POST">
              <div className="form-group mb-5">
                <label className="form-label" htmlFor="name">Full Name</label>
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  placeholder="Your Full Name"
                />
              </div>
              <div className="form-group mb-5">
                <label className="form-label" htmlFor="eamil">Email Adrdess</label>
                <input
                  className="form-control"
                  type="text"
                  id="email"
                  placeholder="Your  Email Address"
                />
              </div>
              <div className="form-group mb-5">
                <label className="form-label" htmlFor="reason">reason/purpose</label>
                <select name="reason" id="reason" className="form-select" required>
                  <option value="">Select reason/purpose</option>
                  <option value="investment plane">Investment Plan</option>
                  <option value="investment plane-2">Investment Plan 2</option>
                  <option value="investment plane-3">Investment Plan 3</option>
                </select>
              </div>
              <div className="form-group mb-5">
                <label className="form-label" htmlFor="message">Message Here</label>
                <textarea
                  className="form-control h-[150px]"
                  id="message"
                  cols={30}
                  rows={10}
                ></textarea>
              </div>
              <input
                className="btn btn-primary block w-full"
                type="submit"
                value="Send Message"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
export default Contact;