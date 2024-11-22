import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";


const Reviews = () => {
  const reviews = [
    {
      avatar: "src/assets/theme/images/users/user-5.png",
      name: "Courtney Henry",
      company: "Microsoft Corp",
      text: "Our platform helps build secure onboarding authentication experiences & engage your users. We build.",
      rating: [true, true, true, true, false],
    },
    {
      avatar: "src/assets/theme/images/users/user-2.png",
      name: "Ronald Richards",
      company: "Meta Limited",
      text: "Our platform helps build secure onboarding authentication experiences & engage your users. We build.",
      rating: [true, true, true, true, false],
    },
    {
      avatar: "src/assets/theme/images/users/user-6.png",
      name: "Bessie Cooper",
      company: "Apple Inc Ltd",
      text: "Our platform helps build secure onboarding authentication experiences & engage your users. We build.",
      rating: [true, true, true, true, false],
    },
    {
        avatar: "src/assets/theme/images/users/user-5.png",
        name: "Courtney Henry",
        company: "Microsoft Corp",
        text: "Our platform helps build secure onboarding authentication experiences & engage your users. We build.",
        rating: [true, true, true, true, false],
      },
      {
        avatar: "src/assets/theme/images/users/user-2.png",
        name: "Ronald Richards",
        company: "Meta Limited",
        text: "Our platform helps build secure onboarding authentication experiences & engage your users. We build.",
        rating: [true, true, true, true, false],
      }
  ];

  return (
    <section className="reviews">
      <div className="container">
        <div className="row justify-between">
          <div className="lg:col-6">
            <h2>Our customers have nice things to say about us</h2>
          </div>
          <div className="lg:col-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              egestas Werat viverra id et aliquet. vulputate egestas
              sollicitudin.
            </p>
          </div>
        </div>
        <div className="row mt-10">
          <div className="col-12">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={30}
              slidesPerView={3}
              className="reviews-carousel"
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="review">
                    <div className="review-author-avatar bg-gradient">
                      <img src={review.avatar} alt={review.name} />
                    </div>
                    <h4 className="mb-2">{review.name}</h4>
                    <p className="mb-4 text-[#666]">{review.company}</p>
                    <p>{review.text}</p>
                    <div className="review-rating mt-6 flex items-center justify-center space-x-2.5">
                      {review.rating.map((star, i) => (
                        <img
                          key={i}
                          src={
                            star
                              ? "src/assets/theme/images/icons/star.svg"
                              : "src/assets/theme/images/icons/star-white.svg"
                          }
                          alt="Star"
                        />
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
