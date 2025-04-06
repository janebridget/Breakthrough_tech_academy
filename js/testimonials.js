const testimonials = [
    "“This academy helped me land my dream job!” – Student A",
    "“The courses are easy to follow and well-explained!” – Student B",
    "“I loved the community and support from mentors.” – Student C"
  ];
  
  let index = 0;
  const textElement = document.getElementById("testimonial-text");
  
  function rotateTestimonials() {
    index = (index + 1) % testimonials.length;
    textElement.textContent = testimonials[index];
  }
  
  setInterval(rotateTestimonials, 3000); // Change every 3 seconds
  