import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Testimonial() {
    const testimonials = [
        { id:1, author:'Sarah Thompson', text:"Whistler's Health Care has been a game-changer for me. Booking doctor appointments, therapy sessions, and even accessing nursing care has never been this easy. The platform's seamless experience has truly simplified my healthcare routine."},
        { id:2, author:'James Rodriguez', text:"I can't thank Whistler's Health Care enough for their quick and efficient ambulance service. In a recent emergency, their response was swift, and the team provided professional and compassionate care. It's a service you can truly rely on."},
        { id:3, author:'Emily Johnson', text:"Being able to manage my therapy appointments and doctor visits in one place has made a significant difference in my life. Whistler's Health Care understands the importance of holistic healthcare, and their platform reflects that commitment."},
        { id:4, author:'Michael Chen', text:"As a caregiver, Whistler's Health Care has made it easier for me to coordinate healthcare services for my elderly parents. From nurse visits to doctor consultations, the platform has streamlined the process, allowing me to focus more on my loved ones."},
        { id:5, author:'Aisha Patel', text:"I've never experienced such convenience in healthcare. Whistler's Health Care's user-friendly interface and comprehensive services have made taking care of my health a breeze. It's the all-in-one solution I didn't know I needed."}
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
      };
  return (
    <section className='section is-testimonial pb-8 w-full overflow-x-hidden'>
        <Slider {...settings}>
                {testimonials.map(testimonial => (
                <div key={testimonial.id} className="testimonial flex text-center px-48 py-32  w-full ">
                    <p className='font-merriweather text-3xl leading-loose'>{testimonial.text}</p>
                    <p className='pt-8 font-inter text-gray-700'>- {testimonial.author}</p>
                </div>
                ))}
        </Slider>
    </section>        
    );
}
export default Testimonial;