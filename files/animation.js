gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {

   gsap.fromTo(".hero__title",
      { opacity: 0, x: -50 },
      {
         opacity: 1, x: 0, duration: 1,
         scrollTrigger: {
            trigger: ".hero__title",
            start: "top 95%",
            once: true,
         }
      }
   );

   gsap.fromTo(".hero__subtitle",
      { opacity: 0, x: -50 },
      {
         opacity: 1, x: 0, duration: 1, delay: 0.4,
         scrollTrigger: {
            trigger: ".hero__subtitle",
            start: "top 95%",
            once: true,
         }
      }
   );


   gsap.fromTo(".hero__button",
      { opacity: 0 },
      {
         opacity: 1, duration: 1, delay: 0.6,
         scrollTrigger: {
            trigger: ".hero__button",
            start: "top 95%",
            once: true,
         }
      }
   );

   gsap.fromTo(".hero__form-block",
      { opacity: 0, y: 100 },
      {
         opacity: 1, y: 0, duration: 1, delay: 0.9,
         scrollTrigger: {
            trigger: ".hero__form-block",
            start: "top 95%",
            once: true,
         }
      }
   );
   gsap.fromTo(".about-section__top-left-title",
      { opacity: 0, x: -100 },
      {
         opacity: 1, x: 0, duration: 1,
         scrollTrigger: {
            trigger: ".about-section__top-left-title",
            start: "top 95%",
            once: true,
         }
      }
   );


   gsap.fromTo(".about-section__top-left p",
      { opacity: 0, x: -50 },
      {
         opacity: 1, x: 0, duration: 1, delay: 0.3,
         scrollTrigger: {
            trigger: ".about-section__top-left p",
            start: "top 95%",
            once: true,
         }
      }
   );

   gsap.fromTo(".about-section__top-left .about-section__button",
      { opacity: 0 },
      {
         opacity: 1, x: 0, duration: 1, delay: 0.6,
         scrollTrigger: {
            trigger: ".about-section__top-left .about-section__button",
            start: "top 95%",
            once: true,
         }
      }
   );

 
   gsap.fromTo(".about-section__top-right-image img",
      { opacity: 0, x: 50 },
      {
         opacity: 1, x: 0, duration: 1,
         scrollTrigger: {
            trigger: ".about-section__top-right-image img",
            start: "top 95%",
            once: true,
         }
      }
   );

   gsap.fromTo(".about-section__bottom-right-title",
      { opacity: 0, x: 50 },
      {
         opacity: 1, x: 0, duration: 1,
         scrollTrigger: {
            trigger: ".about-section__bottom-right-title",
            start: "top 95%",
            once: true,
         }
      }
   );

   gsap.fromTo(".about-section__bottom-right ul",
      { opacity: 0, x: 50 },
      {
         opacity: 1, x: 0, duration: 1, delay: 0.3,
         scrollTrigger: {
            trigger: ".about-section__bottom-right ul",
            start: "top 95%",
            once: true,
         }
      }
   );

   gsap.fromTo(".about-section__bottom-right .about-section__button",
      { opacity: 0 },
      {
         opacity: 1, x: 0, duration: 1, delay: 0.6,
         scrollTrigger: {
            trigger: ".about-section__bottom-right .about-section__button",
            start: "top 95%",
            once: true,
         }
      }
   );


   gsap.fromTo(".about-section__bottom-left-image img",
      { opacity: 0, x: -50 },
      {
         opacity: 1, x: 0, duration: 1,
         scrollTrigger: {
            trigger: ".about-section__bottom-left-image img",
            start: "top 95%",
            once: true,
         }
      }
   );

   gsap.fromTo(".consultation-section__left h3",
      { opacity: 0, y: 50 },
      {
         opacity: 1, y: 0, duration: 1,
         scrollTrigger: {
            trigger: ".consultation-section__left h3",
            start: "top 95%",
            once: true,
         }
      }
   );

   gsap.fromTo(".consultation-section__left p",
      { opacity: 0, y: 50 },
      {
         opacity: 1, y: 0, duration: 1, delay: 0.3,
         scrollTrigger: {
            trigger: ".consultation-section__left p",
            start: "top 95%",
            once: true,
         }
      }
   );

   gsap.fromTo(".consultation-section__left .consultation-section__group-button",
      { opacity: 0},
      {
         opacity: 1, y: 0, duration: 1, delay: 0.3,
         scrollTrigger: {
            trigger: ".consultation-section__left .consultation-section__group-button",
            start: "top 95%",
            once: true,
         }
      }
   );

   // Анимация блока "Гарантия"
   gsap.fromTo(".consultation-section__right h3",
      { opacity: 0, y: 50 },
      {
         opacity: 1, y: 0, duration: 1,
         scrollTrigger: {
            trigger: ".consultation-section__right h3",
            start: "top 95%",
            once: true,
         }
      }
   );

   gsap.fromTo(".consultation-section__right p",
      { opacity: 0, y: 50 },
      {
         opacity: 1, y: 0, duration: 1, delay: 0.3,
         scrollTrigger: {
            trigger: ".consultation-section__right p",
            start: "top 95%",
            once: true,
         }
      }
   );

   gsap.fromTo(".consultation-section__right .consultation-section__group-button",
      { opacity: 0 },
      {
         opacity: 1, x: 0, duration: 1, delay: 0.3,
         scrollTrigger: {
            trigger: ".consultation-section__right .consultation-section__group-button",
            start: "top 95%",
            once: true,
         }
      }
   );
   gsap.fromTo(".claim-section__top h2",
      { opacity: 0, y: -50 },
      {
         opacity: 1, y: 0, duration: 1,
         scrollTrigger: {
            trigger: ".claim-section__top h2",
            start: "top 95%",
            once: true,
         }
      }
   );

   gsap.fromTo(".claim-section__top p",
      { opacity: 0, y: -50 },
      {
         opacity: 1, y: 0, duration: 1, delay: 0.3,
         scrollTrigger: {
            trigger: ".claim-section__top p",
            start: "top 95%",
            once: true,
         }
      }
   );

   // Анимация полей формы (поочередное появление)
   gsap.utils.toArray(".claim-section__form-group").forEach((field, index) => {
      gsap.fromTo(field,
         { opacity: 0, x: -50 },
         {
            opacity: 1, x: 0, duration: 0.8, delay: index * 0.2,
            scrollTrigger: {
               trigger: field,
               start: "top 98%",
               once: true,
            }
         }
      );
   });

   gsap.fromTo(".claim-section__submit-button",
      { opacity: 0, scale: 0.8 },
      {
         opacity: 1, scale: 1, duration: 1, delay: 0.1,
         scrollTrigger: {
            trigger: ".claim-section__submit-button",
            start: "top 95%",
            once: true,
         }
      }
   );
});
