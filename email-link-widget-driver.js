/*
This snippet will append your visible, readable email address to your contact info if your address is included as an "Email Me" link. Unfortunately, it won't show on your "Manage Account Page" (where you actually add this code). But it will display on the public view of your profile. 

The "profileId" corresonds to the profile number (not the user account number). 
You can find this number by browser-inspecting the profile image. You'll see it enclosed in a div like this: 
<div id="s-lib-profile-image-1234" class="s-lib-profile-div s-lib-profile-center s-lib-profile-image">...</div>
The "1234" number should be swapped into the first line of the function. 

last updated: 2021-02-25, ken irwin
*/
$(function () {
  let profileId = '1234';
  if (typeof AppendEmail == 'function') {
    AppendEmail(profileId);
  }
});
