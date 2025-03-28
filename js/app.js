(function() {
   "use strict";

   $(document).ready(function() {
       $(".header__button.login").click(function() {
           $(".register-form").addClass("show");
           $("body").addClass("_lock");
       });

       $(document).click(function(e) {
           $(".register-form__body-close").click(function() {
               $(".register-form").removeClass("show");
               $("body").removeClass("_lock");
               $(".menu__body").removeClass("open");
               $(".menu__icon").removeClass("open");
           });
       });
   });

   $(document).ready(function() {
       $(".menu__icon").click(function() {
           if ($(this).hasClass("open")) {
               $(".menu__body").removeClass("open");
               $(this).removeClass("open");
               $("body").removeClass("_lock");
           } else {
               $(".menu__body").addClass("open");
               $(this).addClass("open");
               $("body").addClass("_lock");
           }
       });

       $(".menu__link, .header__button.register").click(function() {
           $(".menu__body").removeClass("open");
           $(".menu__icon").removeClass("open");
           $("body").removeClass("_lock");
       });
   });

   $(document).ready(function() {
       $("input[type='tel']").inputmask({
           mask: "+9{0,14}",
           placeholder: "",
           showMaskOnHover: false,
           clearIncomplete: true,
           definitions: {
               9: {
                   validator: "[0-9]",
                   cardinality: 1
               }
           }
       });

       $(document).ready(function() {
           $("input[type='email']").inputmask({
               alias: "email",
               clearIncomplete: true,
               showMaskOnHover: false
           });

           $("input[type='email']").on("blur", function() {
               var email = $(this).val();
               if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
                   $(this).removeClass("error");
               } else {
                   $(this).addClass("error");
               }
           });
       });
   });

   (function() {
       let image = new Image();
       image.onload = image.onerror = function() {
           if (image.height === 2) {
               document.documentElement.classList.add("webp");
           } else {
               document.documentElement.classList.add("no-webp");
           }
       };
       image.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   })();

})();
