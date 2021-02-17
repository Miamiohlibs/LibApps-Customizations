$(() => {
  let userId = '5546';
  let thisProfile = $('#s-lib-profile-' + userId);
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
