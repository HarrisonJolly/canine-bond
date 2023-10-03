//Testimonial Data
const testimonials = [
    {
      image: "images\\happy-customer1.jpg",
      testimonial:
      "We have just completed our Puppy training with Donna, I can not recommend her enough. Penny loved her lessons and I feel like I've learnt so much as well, Donna was very knowledgeable and helpful.",
    },
    {
      image: "images\\happy-customer2.jpg",
      testimonial:
      "After a few sessions with Donna I feel so much more confident with Kobi. He has definitely lacked confidence in some situations and Donna has helped me manage them in a calm and relaxed way.",
    },
    {
      image: "images\\happy-customer3.jpg",
      testimonial:
        "Donna has been helping Tess and I deal with reactivity around other dogs, she has made a huge difference it has been a great experience and I would absolutely recommend her for any training needs, thank you for all your help!",
    },
    {
      image: "images\\\happy-customer4.jpg",
      testimonial:
      "Donna, has been amazing with our two very anxious dachshunds. With Donna’s advice and guidance, we are starting to see positive changes in our dogs behaviour. Highly recommended!",
    },
  ];
  
  //Current Slide
  let i = 0;
  //Total Slides
  let j = testimonials.length;
  
  let testimonialContainer = document.getElementById("testimonial-container");
  let nextBtn = document.getElementById("next");
  let prevBtn = document.getElementById("prev");
  
  nextBtn.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial();
  });
  prevBtn.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayTestimonial();
  });
  
  let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
      <p>${testimonials[i].testimonial}</p>
      <img src=${testimonials[i].image}>
    `;
  };
  window.onload = displayTestimonial;

  /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}