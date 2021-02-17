$(() => {
  let emailAddress = $('.s-lib-profile-email a').attr('title');
  let emailDiv = '<div>' + emailAddress + '</div>';
  let websiteLogo = $('.s-lib-profile-contact a .fa-bookmark');
  let skypeLogo = $('.s-lib-profile-contact a .fa-skype');
  if (websiteLogo.length > 0) {
    $(websiteLogo).parent().before(emailDiv);
  } else if (skypeLogo.length > 0) {
    $(skypeLogo).parent().before(emailDiv);
  } else {
    $('.s-lib-profile-contact').append(emailDiv);
  }
});
