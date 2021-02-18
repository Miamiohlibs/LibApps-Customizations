/*
This is the stand-alone version of the email-link-widget. To use it, place this code (and update the first line!) in the "Manage Account > Profile Box > Other Widgets" section linked from the gear-icon at:
https://muohio.libapps.com/libapps/accounts.php

Advantages: 
 * doesn't rely on external code (except jQuery itself) to run.

Disadvantages: 
  * if we ever need to update the code, we'll have to update each instance individually.

The "profileId" corresonds to the profile number (not the user account number). 
You can find this number by browser-inspecting the profile image. You'll see it enclosed in a div like this: 
<div id="s-lib-profile-image-1234" class="s-lib-profile-div s-lib-profile-center s-lib-profile-image">...</div>
The "1234" number should be swapped into the first line of the function. 
*/

$(() => {
  // This function adds the email address in a visible form at the end of the profile box contact section
  let profileId = '1234';
  let thisProfile = $('#s-lib-profile-' + profileId);
  let emailAddress = $(thisProfile)
    .find('.s-lib-profile-email a')
    .attr('title');
  let emailDiv = '<div>' + emailAddress + '</div>';
  let websiteLogo = $(thisProfile).find(
    '.s-lib-profile-contact a .fa-bookmark'
  );
  let skypeLogo = $(thisProfile).find('.s-lib-profile-contact a .fa-skype');
  if (websiteLogo.length > 0) {
    $(websiteLogo).parent().before(emailDiv);
  } else if (skypeLogo.length > 0) {
    $(skypeLogo).parent().before(emailDiv);
  } else {
    $(thisProfile).find('.s-lib-profile-contact').append(emailDiv);
  }
});

{
  /* <script>
$(() => {
let emailAddress = $(".s-lib-profile-email a").attr('title');
let emailDiv = '<div>'+emailAddress+'</div>';
let websiteLogo = $('.s-lib-profile-contact a .fa-bookmark');
let skypeLogo = $('.s-lib-profile-contact a .fa-skype');
if (websiteLogo.length > 0) { 
    $(websiteLogo).parent().before(emailDiv);
} else if (skypeLogo.length > 0) {
    $(skypeLogo).parent().before(emailDiv);
} else { 
    $(".s-lib-profile-contact").append(emailDiv);
}
});
</script> */
}

// Krista:
{
  /* <script>
$(() => {
let userId = '5542';
let emailAddress = $("#s-lib-profile-email-"+userId+" a").attr('title');
let emailDiv = '<div>'+emailAddress+'</div>';
console.log('this is a test');
let websiteLogo = $('.s-lib-profile-contact a .fa-bookmark');
let skypeLogo = $('.s-lib-profile-contact a .fa-skype');
if (websiteLogo.length > 0) {
$(websiteLogo).parent().before(emailDiv);
} else if (skypeLogo.length > 0) {
$(skypeLogo).parent().before(emailDiv);
} else {
$("#s-lib-profile-contact-"+userId).append(emailDiv);
}
});
</script> */
}

// Jessie:
{
  /* <script>
$(() => {
let userId = '5546';
let emailAddress = $("#s-lib-profile-email-"+userId+" a").attr('title');
let emailDiv = '<div>'+emailAddress+'</div>';
console.log('this is a test');
let websiteLogo = $('.s-lib-profile-contact a .fa-bookmark');
let skypeLogo = $('.s-lib-profile-contact a .fa-skype');
if (websiteLogo.length > 0) {
$(websiteLogo).parent().before(emailDiv);
} else if (skypeLogo.length > 0) {
$(skypeLogo).parent().before(emailDiv);
} else {
$("#s-lib-profile-contact-"+userId).append(emailDiv);
}
});
</script> */
}
