

   /* 
     * 0.11 - Opens Academic Essentials box
     */

   const academicEssentialsBox = document.getElementById("s-lg-az-custom-box-31068009-body");
   academicEssentialsBox.classList.add("show");
   
   const academicEssentialsbutton = document.querySelector("#s-lg-az-custom-box-31068009-heading button.accordion-button.collapsed");
   academicEssentialsbutton.classList.remove("collapsed");
   
   const academicEssentialsAria = document.querySelector("[aria-controls='s-lg-az-custom-box-31068009-body']");
   let ariaExpandedEssentials = academicEssentialsAria.getAttribute("aria-expanded");
   
   if (ariaExpandedEssentials === "false") {
     ariaExpandedEssentials = "true";
   } else {
     ariaExpandedEssentials = "false";
   }
   
   academicEssentialsAria.setAttribute("aria-expanded", ariaExpandedEssentials);
   
   
      /* 
        * 0.12 - Opens MyGuide box
        */
   
   const myGuideBox = document.getElementById("s-lg-az-custom-box-27746606-body");
   myGuideBox.classList.add("show");
   
   const myGuidebutton = document.querySelector("#s-lg-az-custom-box-27746606-heading button.accordion-button.collapsed");
   myGuidebutton.classList.remove("collapsed");
   
   const myGuideAria = document.querySelector("[aria-controls='s-lg-az-custom-box-27746606-body']");
   let ariaExpanded2 = myGuideAria.getAttribute("aria-expanded");
   
   if (ariaExpanded2 === "false") {
     ariaExpanded2 = "true";
   } else {
     ariaExpanded2 = "false";
   }
   
   myGuideAria.setAttribute("aria-expanded", ariaExpanded2);