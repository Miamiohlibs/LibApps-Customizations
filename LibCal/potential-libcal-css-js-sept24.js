<link rel="shortcut icon" href="https://www.lib.miamioh.edu/sites/default/files/favicon_0.ico" />
<link href="https://fonts.googleapis.com/css?family=Cabin+Condensed&display=swap" rel="stylesheet">  
<link href="https://fonts.googleapis.com/css?family=Raleway:200,300&display=swap" rel="stylesheet">

<script>
/**
 * Table of Contents:
 * 0.1 - Software Checkout Sorting (JS)
 * 1.0 - Basic
 * 2.0 - Header/Navigation Bar
 * 2.1 - Header/Navigation @media queries
 * 2.2 - Google website search
 * 3.0 - LibCal
 * 4.0 - Footer
 * 6.0 - @media queries
 * 7.0 - LibChat
 * 8.0 -- @Fonts
 * ----------------------------------------------------------------------------
 */

/**
 *  0.1 - Software Checkout Sorting (JS)
 *
 * This script adds a button to certain LibCal equipment pages.
 * The button will sort the display of availability so that items
 * with more availability float to the top.
 * Note: this does NOT sort the left-hand column (items) so this method
 * is only suitable when all the items are the same (e.g. a pool of software
 * licenses). It will not work if the items are unique (such as study rooms)
 * or if the items are subdivided into groups (also like study rooms in some
 * cases.
 *
 * Currently, this is only used for Software Checkout.
 */

$(document).ready(function () {
  /* Section 0: Configuration */
  // urls for pages on which to show the sort button

  let urlsShowSort = [
    'equipment/item/105059', // Final Cut
    'equipment/item/115969', // Logic Pro
    'equipment/item/170804', // Procreate
    'equipment/item/61121', // Adobe Creative Cloud
    'equipment/item/82764', // Adobe for Fac/Staff
    'equipment/item/172159', // Acrobat for Fac/Staff
    'equipment/item/141114', // test page
    '?lid=8370', // all Library Software Checkout pages
    'lid=16728', // test page
  ];

  /* Section 1: set showSort based on url matching */

  showSort = false;
  urlsShowSort.forEach(function (groupId) {
    if (window.location.href.indexOf(groupId) > -1) {
      showSort = true;
      console.log(window.location.href + ' should include ' + groupId); 
    }
  });
     console.log('Show Sort: ' + showSort);

  /* Section 2: add sort button when time grid appears */
  function listenForTimeGrid() {
    if ($('.fc-timeline-slots').length > 0 && showSort) {
      addSortButton();
      //   console.log('time grid found');
    } else {
      setTimeout(listenForTimeGrid, 500);
    }
  }
  listenForTimeGrid();

  /* Section 3: Add sort button */
  function addSortButton() {
    let sortIcon =
      '<svg role="img" aria-labelledby="svg-sort-desc" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-up" viewBox="0 0 16 16"><path d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707V12.5zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/></svg>';
    $('#time_grid_cont').prepend(
      '<button class="btn btn-primary" id="sort-by-avail">' +
        sortIcon +
        '<desc id="svg-sort-desc"> Sort by availability</desc></button>'
    );
    $('#sort-by-avail').bind('click', function () {
      sortByAvailability();
    });
  }

  /* Section 4: Sort by availability */
  function sortByAvailability() {
    addAvailCounts();
    sortByAvail();
  }

  function addAvailCounts() {
    $('div.fc-timeline-lane-frame').each(function (index, el) {
      $(this)
        .closest('tr')
        .attr('data-avail-count', getAvailCount(el))
        .addClass('sortable');
    });
  }

  function getAvailCount(el) {
    return $(el).find('a.s-lc-eq-avail').length;
  }

  function sortByAvail() {
    let entries = $('tr.sortable');
    let tbody = $('tr.sortable:first').closest('tbody');
    $('tr.sortable').remove();
    entries
      .sort(function (a, b) {
        return $(b).attr('data-avail-count') - $(a).attr('data-avail-count');
      })
      .appendTo(tbody);
  }
});

</script>


<!-- BOOTSTRAP -->

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css">

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>


<!-- Google Custom Search -->
<script src="https://www.google.com/cse/static/element/323d4b81541ddb5b/cse_element__en.js?usqp=CAI%3D" type="text/javascript"></script>
<link type="text/css" rel="stylesheet" href="https://www.google.com/cse/static/element/323d4b81541ddb5b/default+en.css">
<link type="text/css" rel="stylesheet" href="https://www.google.com/cse/static/style/look/v4/default.css"> 

<!-- FONTS AND FAVICON-->

<link href="https://fonts.googleapis.com/css?family=Cabin+Condensed&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Raleway:200,300&display=swap" rel="stylesheet">
<link rel="shortcut icon" href="https://www.lib.miamioh.edu/sites/default/files/favicon_0.ico" />


<script>
/** ----------------------------------------------------------------
 * Table of Contents (Javascript):
 * 0.2 - Google Custom Search
 * 0.3 - Add aria-current="page" in main menu
 * 0.4 -- keyboard script for main navigation 
 * 1.0 & Beyond -- CSS (see below for detailed CSS TOC)
 * -------------------------------------------------------------------
 */


   /* 
     * 0.2 - Google Custom Search
     * adds Google Custom Search box to header 
     */

    $(function () {
      var cx = '009740610740149956689:vgajvsbmghf';
      var gcse = document.createElement('script');
      gcse.type = 'text/javascript';
      gcse.async = true;
      gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(gcse, s);

  // focus to Site Search input bar
  $('#site-search-link').click(function() {
    $('input.gsc-input').focus();
    $('input.gsc-input').attr('aria-hidden','false')
    $('input.gsc-input').attr('tabindex','0'); // set to -1 by default
});

      // Enlarge the magnify glass icon of Google Site Search Box

      setTimeout(function(){
        if ($('.gsc-search-button-v2 > svg')[0]!== undefined) {
        $('.gsc-search-button-v2 > svg')[0].setAttribute("width","25");
        $('.gsc-search-button-v2 > svg')[0].setAttribute("height","30");
        }
      },1000);
 
    // Flip search to closed upon click

    $('.site-search-icon-control').click(function(){
      $('#site-search-icon').toggleClass('bi-search');
      $('#site-search-icon').toggleClass('bi-x-circle');
      $('.bi-x-circle ~ span').text('Close Search');
      $('.bi-search ~ span').text('Site Search');
    });
   });


    /* 
     * 0.3 - Add aria-current="page"
     *
     * Add aria-current="page" to the menu item corresponding to the current page.
     * Uses JSON data generated by Jekyll to provide a crosswalk between the
     * Jekyll URLs and the LibGuides URLs. 
     *  --------------------------------------------------------------------------------------------
     */

    $(function () {
        var crosswalk;
        $.ajax({
            url: 'https://www.lib.miamioh.edu/crosswalk/jekyll-libguides.json',
            dataType: 'json',
            async: false,
            success: function (data) {
            crosswalk = data;
            },
        });

        /* find crosswalk entries that match this page url; add aria-current=page for each relevant item in nav */
        var pageUrl = window.location.href;
        var currPages = crosswalk.filter((obj) => {
            if (obj.lgurl == pageUrl) {
            return obj;
            }
        });
        currPages.forEach((currPage) => {
            $('a[href$="' + currPage.permalink + '"]')
            .first()
            .attr('aria-current', 'page');
        });
    });

$(function() {
  $('#s-lg-srch-content').addClass('row col-12');
});

   /* 
     * 0.4 - menu keyboard navigation
     *  --------------------------------------------------------------------------------------------
     */

$(document).ready(function() {

     /*
  IMPORTANT NOTE:
  This first line unbinds ALL the regular keyboard interactions with the menu.
  I don't know why it only unbinds menu effects -- why not the whole page?
  It seems to work, but it means that some desired behavior is cancelled (e.g.
  ESC to close the menu, ENTER to follow links). We had to build that functionality
  back in explicitly.
  We did this to unbind the undesired UP and DOWN key behaviors (closing the menu
  instead of navigating it). If we can find a subtler tool for the unbinding,
  we  should do it.
  */
  $(document).unbind('keyup');

  Keyboard = {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38
    }

  // remove <hr> tags in nav submenus from being selectable nav elements
$('.list-unstyled li hr').each(function() {
    $(this).attr('role','separator');
    $(this).parent().attr('tabindex','-1').attr('role','presentation').attr('aria-hidden','true');
  });

  var menus = $('.dropdown-menu');
  var menuLinks = $('a.nav-title');
  var submenus = $('.dropdown-menu .list-unstyled');
  var menuItems = $('.dropdown-menu .list-unstyled > li:not(".title"):not(".no-tab-nav"):not("[tabindex=-1]")');
  // var menuEnterKeys = [Keyboard.ENTER, Keyboard.DOWN];
  // var press = jQuery.Event("keypress");

  menus.each(function(index) {
    $(this).attr('data-menuIdx',index);
    $(this).closest('nav-item').attr('data-menuIdx',index);
  });

  menuLinks.each(function(index) {
    $(this).attr('data-menuLinkIdx',index);
    $(this).focus(function() {
      $(this).keyup(function(event) {
        console.log('keyup on a menulink', event.keyCode);
        switch (event.keyCode) {

          case Keyboard.DOWN:
            event.preventDefault();
            // console.log('keyup on a menulink', event.keyCode)
            // console.log('this:',$(this).attr('data-menuLinkIdx'));
            openMenu($(this).attr('data-menuLinkIdx'));
            break;
          case Keyboard.ENTER:
            console.log('keyup on a menulink', event.keyCode);
            event.preventDefault();
            console.log('this:',$(this).attr('data-menuLinkIdx'));
            openMenu($(this).attr('data-menuLinkIdx'));
            break;
          case Keyboard.RIGHT:
            event.preventDefault();
            // console.log('Pressed Right Arrow');
            nextMenuLink($(this).attr('data-menuLinkIdx'));
            break;
          case Keyboard.LEFT:
            event.preventDefault();
            // console.log('Pressed Left Arrow');
            nextMenuLink($(this).attr('data-menuLinkIdx'),'minus');
            break;
          default:
            // console.log('unregistered keystroke in top menu', event.keyCode);
        }
      })
    })
  })

  submenus.each(function(index) {
    $(this).attr('data-submenuIdx',index);
    var thisMenuIdx = $(this).closest('.dropdown-menu').attr('data-menuIdx');
    $(this).attr('data-menuIdx',thisMenuIdx);
    $(this).attr('id','nav-' + thisMenuIdx + '-' + index);

  });

  menuItems.each(function(index) {
  // $('.dropdown-menu .list-unstyled li').each(function () {
    thisSubMenu = $(this).closest('.list-unstyled').attr('data-submenuIdx');
    thisMenu = $(this).closest('.list-unstyled').attr('data-menuIdx');
    $(this).attr('data-colIdx',index);
    $(this).attr('data-submenuIdx',thisSubMenu);
    $(this).attr('data-menuIdx',thisMenu);
    $(this).attr('id','nav-'+thisMenu+'-'+thisSubMenu+'-'+index);
    // console.log(this);
    var thisIndex = index;
    var focusedItem = $(this);
    $(this).keyup(function(event) {
      console.log('keyup on menuItem', event.keyCode, 'on:');
      console.log(thisIndex);
      var thisId = $(this).attr('id');
      if (event.keyCode != Keyboard.TAB) {
        console.log('preventing default on:',event.keyCode);
        event.preventDefault();
      }
      if (event.keyCode == Keyboard.ESCAPE) {
        event.stopPropagation();
      }
      // console.log('hit the ',event.keyCode);
      switch (event.keyCode) {

        case Keyboard.RIGHT:
          nextSubMenu(thisId);
          break;
        case Keyboard.LEFT:
          nextSubMenu(thisId,'minus');
          break;
        case Keyboard.DOWN:
          nextItem(thisId);
          break;
        case Keyboard.UP:
          nextItem(thisId,'minus');
          break;
        case Keyboard.ENTER:
          followLink(thisId);
          break;
        case Keyboard.ESCAPE:
          nextMenu(thisId,'same')
          break;
        default:
          // console.log('hit the ',event.keyCode)
      }
    })
  })

  /* BEGIN FUNCTIONS */
    let closeMenu = function () {
      // console.log('Close menus');
      $('.dropdown-menu').removeClass('show');
      $('.nav-title').attr('aria-expanded',false);
    }

    let followLink = function (thisId) {
      let link = $('#'+thisId+' a').attr('href');
      console.log('Go to:',link);
      window.location.href = link;
    }

    let nextMenuLink = function(start,plusOrMinus="plus") {
      // console.log('nextMenuLink from', start);
      let nextLink = next(start,plusOrMinus);
      if (nextLink >= 0 && nextLink<menuLinks.length) {
        // console.log('go to menuLink',nextLink);
        $('.nav-title[data-menuLinkIdx="'+nextLink+'"]').focus();
        // console.log('went to menuLink',nextLink);
      }
    }

    let nextItem = function(start,plusOrMinus="plus") {
      let [menu,submenu,item] = parseId(start);
      // menu
      let firstSubmenuItemId = $('a[data-menuLinkIdx='+menu+']').parent()
        .find('.list-unstyled li').not('.title').attr('id');
      let [fsm,fsc,firstSubmenuItemIdx] = parseId(firstSubmenuItemId);
      //   console.log('firstSubmenuItemIdx',menu,firstSubmenuItemIdx);
      // console.log('go to next item from ',menu,submenu,item);
      let nextItem = next(item,plusOrMinus);
      if (nextItem < firstSubmenuItemIdx) {
        // console.log('close Menu and select it', menu);
        closeMenu();
        // console.log('closed menus');
        $('a[data-menuLinkIdx="'+menu+'"]').focus();
        // console.log('tried to focus on menuLink',menu);
      } else
      if (nextItem < menuItems.length && nextItem >= 0) {
        // console.log('go to item', nextItem);
        $('li[data-colIdx="'+nextItem+'"] a').focus();
      }
    }

    let nextSubMenu = function(start,plusOrMinus="plus") {
      // console.log('go to next ('+plusOrMinus+') submenu from ',menu,submenu,item)
      let [menu,submenu,item] = parseId(start);
      let nextSub = next(submenu,plusOrMinus);
      // console.log('go to submenu', nextSub);
      nextEl = $('ul.list-unstyled[data-menuIdx="'+menu+'"][data-submenuIdx="'+nextSub+'"] li:nth-child(2) a');
      nextEl.focus();
      if (! nextEl.length) { nextMenu(start,plusOrMinus); }
    }

    let nextMenu = function(start,plusOrMinus = "plus") {
      let [menu,submenu,item] = parseId(start);
      // console.log('begin go to next Menu from',menu,plusOrMinus);
      let nextN = next(menu, plusOrMinus);
      if (nextN == menus.length) {
        nextN--;
      } else if (nextN < 0) {
        nextN = 0;
      }
      // console.log('select menu',nextN)
      closeMenu();
      let nextEl = $('.dropdown-menu[data-menuIdx='+nextN+']').parent().children('a:first');
      // console.log('Next Menu',nextEl.text());
      nextEl.focus();
    }

    let openMenu = function(menuLinkIdx) {
      let menu = $('a[data-menuLinkIdx='+menuLinkIdx+']').parent();
      // if closed, then open; if open, then enter:
      if (menu.children('.nav-title').attr('aria-expanded') == 'false') {
        console.log('closed, so opening');
        menu.children('.dropdown-menu').addClass('show');
        menu.children('.nav-title').attr('aria-expanded',true);
      } else {
        console.log('open, so entering',menuLinkIdx);
        menu.find('.list-unstyled li').not('.title').children('a:first').focus();
      }
    }

    let parseId = function (start) {
      let [str,menu,submenu,item] = start.split('-');
      menu = parseInt(menu);
      submenu = parseInt(submenu);
      item = parseInt(item);
      return [menu,submenu,item];
    }

    let next = function(n, plusOrMinus) {
      let nextN = n;
      if (plusOrMinus == "same") {
        return n;
      } else if (plusOrMinus == "plus") {
         nextN++;
      }
      else {
         nextN--;
      }
      // console.log(n,plusOrMinus,1,'=',nextN)
      return nextN;
    }

  /* END FUNCTIONS */

});
 
</script>


<style>


/**
 * 1.0 Basic
 * ----------------------------------------------------------------------------
 */

html {
    overflow-y:auto;
overflow-x:hidden;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  background-color: #fff;
  width: 100%;
  margin: 0;
  padding: 0;
border-top: 4px solid #424242;
  font-size: 14px;
}

p,
li,
well {
  font-size: 14px;
  line-height: 1.5;
}

/** Links */
a {
  color: #007b89;
  text-decoration: none;
}

a:visited {
  color: #007b89;
}

a:hover {
  color: #7e0d1d;
  text-decoration: underline;
}

.social-media-list a:hover {
  text-decoration: none;
}

.social-media-list a:hover .username {
  text-decoration: underline;
}

/* --- Accessibiity focus ---- */
:focus {
  outline: auto 2px Highlight !important;
  outline: auto 5px -webkit-focus-ring-color !important;
}

/** Headers */

h1, h2, h3 {
  font-family: "Cabin Condensed", sans-serif !important;
  color: #424242;
}

h1#s-lg-guide-name,
h1#s-lib-public-header-title {
  margin: 0 0 0em 0;
  font: normal 3.25em "Cabin Condensed", sans-serif;
  padding: 2.5em 0px 0.25em 0em;
}

a.label-info {
  background-color: #008296;
color:white!important;
}

div.s-lib-box {
  box-shadow: none;
}

.alert-info {
  background-color: #fff;
  border-color: #ddd;
}

/**
 * 2.0 Header and Navbar
 * ----------------------------------------------------------------------------
 */

.site-header {
  width: 100%;
  background-color:#c3142d!important;
  border-top: 5px solid #424242;
  padding: 0 0 0.15em 0;
  margin-top: 0;
}

 .site-header {
    position: static;
    float: left;
    border: none;
    background-color: inherit;
  }

#superAndMain {
    margin: -0.25em 0 0 3em;
}

.site-header .nav-title {
  font-family: "Adelle Regular", Georgia, "Times New Roman", serif;
  font-size: 18.4px;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}


.site-header .nav-title:hover,
.site-header .nav-title:visited {
  color: #fffefc !important;
}

.site-header a.show {
  text-decoration: underline !important;
}

.site-header .nav-trigger {
  display: none;
}

.site-header .menu-icon {
  float: right;
  width: 36px;
  height: 26px;
  line-height: 0;
  padding-top: 10px;
  text-align: center;
}

.site-header .menu-icon > svg path {
  fill: #424242;
}

.site-header label[for="nav-trigger"] {
  display: block;
  float: right;
  width: 36px;
  height: 36px;
  z-index: 2;
  cursor: pointer;
}

.site-header input ~ .trigger {
  clear: both;
  display: none;
}

.site-header input:checked ~ .trigger {
  display: block;
  padding-bottom: 5px;
}

.site-header .page-link {
  color: #222;
  line-height: 1.5;
  display: block;
  padding: 5px 10px;
  margin-left: 20px;
}

.site-header .page-link:not(:last-child) {
  margin-right: 0;
}

/* Super Nav Menu */

#supernav a:hover {
  text-decoration: underline;
}

.nav>li>a:focus, .nav>li>a:hover {
    text-decoration: underline;
    background: none!important;
}

#supernav li a {
  color: white;
  font-weight: 200;
}

/* #supernav li:nth-child(-n + 3)::after {
  content: "/";
  color: white;
  padding: 0.35rem;
}
*/

#site-logo img {
width:300px; 
    height: auto; 
    margin: -0.5em 0 0 -2em;
}

#main3nav {
  max-width: 1120px;
  margin: 1.5em 0 0.5em 0;
  padding:0;
}

#main3nav .dropdown-menu {
  width: 100vw;
  left: 30%;
  margin-left: -50vw;
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: right bottom;
  border-bottom: #c3142d 1px solid;
  box-shadow: 0 0.25rem 1.25rem 0 rgba(0, 0, 0, 0.2);
}


#main3nav .dropdown-menu > div {
  width: 80%;
  margin: 0 auto 1.25rem auto;
}

#main3nav .dropdown-menu .title {
  margin: 0.5em 0 0.5em 0;
}

.dropdown-toggle.nav-title.text-white, 
.dropdown-toggle.nav-title.text-white.show
{
    padding: 0;
}

.site-header .navbar-light .navbar-toggler {
  color: rgba(0, 0, 0, 0.5);
  border-color: rgba(0, 0, 0, 0.1);
}

.site-header .navbar-toggler {
  background-color: white !important;
}

.site-header .dropdown-menu li a {
  line-height: 1.35em;
  margin-bottom: 0.75em;
  display: block;
  color: #333;
  white-space: normal;
  margin-left: -0.5em;
  padding: 0 0.25em 0 0.5em;
}

.dropdown-menu li a:hover {
  text-decoration: none;
  color: white;
  background-color: #c3142d !important;
  padding-right: 5px;
}

/* Main Nav Menu */
#cornerImgAlumni {
  background-image: url("https://www.lib.miamioh.edu/images/CornerImages/AlumniHallCornerImg.png");
  background-position: left bottom !important;
}

#cornerImgKing {
  background-image: url("https://www.lib.miamioh.edu/images/CornerImages/KingLibraryCornerImg.png");
}

#cornerImgArt {
  background-image: url("https://www.lib.miamioh.edu/images/CornerImages/LibraryCornerImg.png");
}

/**
 * 2.1 Header @media queries
 * ----------------------------------------------------------------------------
 */

@media screen and (max-width: 768px) {
    .navbar {
    margin: 0.75em auto 0.75em auto;
  }
  
 
  .container {
    max-width: 96%;
 }
 
  .site-header {
    margin-top: -1em;
    border-top: 3px solid black;
   margin: 0 0 0.25em 0;
  }

  
  #main3nav .dropdown-menu {
    width: 98%;
    left: auto;
    right: 1%;
margin:0;
  }
  .site-header .nav-title {
    font-size: 23px;
  }    

  #supernav {
    margin: 1em 0 0 0;
  }
   
  .site-header label[for="nav-trigger"] {
    display: none;
  }
  .site-header .menu-icon {
    display: none;
  }
  .site-header input ~ .trigger {
    display: block;
  }
  .site-header .page-link {
    display: inline;
    padding: 0;
    margin-left: auto;
  }
  .site-header .page-link:not(:last-child) {
    margin-right: 0px;
  }
  
}

@media screen and (min-width: 768px) {
  .site-header .nav-title {
    font-size: 20px;
  }
  #site-logo img {
    
  }
 #supernav {
    margin: 0;
  }
  
  .navbar {
  margin: 0.5em auto 0em auto;
  padding:0 0 0em 0!important;
  }
}

@media screen and (min-width: 992px) {
  .site-header .nav-title {
    font-size: 23px;
  }
    #site-logo img {
    
   }
}

@media screen and (min-width: 1200px) {
  .site-header .nav-title {
    font-size: 24.8px;
  }
   #site-logo img {
    
   }
}




/**
 * 2.2 Google Search
 * ----------------------------------------------------------------------------
 */
td.gsc-input,
td.gsc-search-button {
  border: 0px !important;
  padding: 0 0px !important;
}

.gsc-table-result { line-height: 1.5;}

.gsib_a {
  padding: 0px !important;
}

td.gsib_b {
  display: none;
}

div.ad,
div.adStd {
  display: none;
}

div.gsc-adBlock {
  display: none !important;
}

form.gsc-search-box {
  font-size: 22px !important;
}

table.gsc-input {
  margin-bottom: 0 !important;
}

/* to kill ads */
.gsc-control-cse {
  background-color: none;
  border: none !important;
  background-color: rgba(255, 255, 255, 0) !important;
  padding: 0 1em !important;
}

div.gsc-input-box {
  border: none;
  padding: 0;
  margin: 0;
}

#googleSCHLsearch {
  background-color: #c3142d;
  color: white;
}

#gSearch {
  width: 100%;
  min-width: 180px;
  background-color: #c3142d;
  border: 0px !important;
}

.gsc-input input[name="search"] {
  height: 2em !important;
  outline: 1px solid white !important;
  outline-offset: 2px !important;
}

button.gsc-search-button,
.gsc-search-button-v2 {
  background-color: #c3142d !important;
  margin-left: 0.5rem !important;
  border-color: #c3142d !important;
  padding: 0px 8px !important;
  outline: 1px solid white !important;
  outline-offset: 2px !important;
}

button.gsc-search-button :hover,
.gsc-search-button-v2 :hover {
  background-color: #c3142d !important;
}

.gs-title {
float:left;
padding:0; margin:0;
}



/*---------Oxford normal chat box----------*/
div#s-lg-box-19192826 {
  margin: -20px 0 0 0;
  padding: 0;
  border: none;
  box-shadow: none;
}

div#s-lg-box-19192826 h2 {
  display: none;
}

/**
 * 3.0 LibCal CSS
 * ----------------------------------------------------------------------------*/

.form-group-sm select.form-control {
    height: 30px;
    line-height: 20px;
}

.s-lc-pending-booking select {
    font-size: small;
    line-height: normal;
}

.btn-default.btn-sm {
    font-size: 1.0125em;
}

button#submit_times {
    font-size: 1.25em;
    padding: 0.25em 1em;
    margin: 0.125em 0 0.75em 0;
    background-color: #0752BB;
}

#sort-by-avail {
   font-size: 1em; 
   margin: 0 0 0.75em 0;
}

.s-lc-public-footer { color:black; }
.s-lc-public-footer a { color: blue!important; } 

form#s-lc-new-reservation-form select {
    font-size: 1em;
    width: 100%;
}

/**
 * 4.0 Footer CSS
 * ----------------------------------------------------------------------------*/
footer {
  font: 100 1.125em/1.5em "Raleway", sans-serif;
  padding: 0em 0em 0em 0;
  color: #fff;
}

footer .footer-container {
  background-color: #941728;
  padding: 0.75em 0 2em 0 !important;
}

footer a {
  color: #fff !important;
  font-weight: 300 !important;
}

footer img.footer-logo {
  width: 80%;
  margin: 0.75em 0 0 0;
}

footer address a,
footer p a {
  color: white;
}

footer address a:hover,
footer p a:hover {
  text-decoration: none;
  color: #941728 !important;
  background-color: white;
}

footer li {
  list-style-type: none;
  font-size: 1.1em;
  line-height: 1.7;
  margin: 0 0 0 -1em;
}

footer li a {
  color: white;
  padding: 0 0rem;
}


footer li a:hover {
  text-decoration: none;
  color: #941728 !important;
  background-color: white;
}

footer h2 {
  color: white;
  font-size: 1.15em;
  font-weight: bold;
  margin: 0.5em 0 0.5em 0;
}

#s-lib-footer-public {
  width: 100%;
  background: #fff;
  margin-top: 1em;
  padding: 0.5em 2em 0em 2em;
}

address {
  margin: 1.125em 0 0 0;
  font-size: 1.5em;
  color: #fff;
  font-weight: 300;
}


/** Site footer */
.site-footer {
  border-top: 1px solid #e8e8e8;
  padding: 30px 0;
}

.footer-heading {
  font-size: 18px;
  margin-bottom: 15px;
}

.contact-list,
.social-media-list {
  list-style: none;
  margin-left: 0;
}

.footer-col-wrapper {
  font-size: 15px;
  color: #828282;
  margin-left: -15px;
}

.footer-col {
  width: -webkit-calc(100% - (30px / 2));
  width: calc(100% - (30px / 2));
  margin-bottom: 15px;
  padding-left: 15px;
}

.footer-col-1,
.footer-col-2 {
  width: -webkit-calc(50% - (30px / 2));
  width: calc(50% - (30px / 2));
}

.footer-col-3 {
  width: -webkit-calc(100% - (30px / 2));
  width: calc(100% - (30px / 2));
}

@media screen and (min-width: 800px) {
  .footer-col-1 {
    width: -webkit-calc(35% - (30px / 2));
    width: calc(35% - (30px / 2));
  }
  .footer-col-2 {
    width: -webkit-calc(20% - (30px / 2));
    width: calc(20% - (30px / 2));
  }
  .footer-col-3 {
    width: -webkit-calc(45% - (30px / 2));
    width: calc(45% - (30px / 2));
  }
}

@media screen and (min-width: 600px) {
  .footer-col {
    float: left;
  }
}


/* 
* 5.2 BS3 crosswalk css
* -----------------------------------------------------*/

.hide {
  display: none !important;
}

.panel {
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
.panel-body {
  padding: 15px;
}
.panel-heading {
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}
.panel-heading > .dropdown .dropdown-toggle {
  color: inherit;
}
.panel-title {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 16px;
  color: inherit;
}
.panel-title > a,
.panel-title > small,
.panel-title > .small,
.panel-title > small > a,
.panel-title > .small > a {
  color: inherit;
}
.panel-footer {
  padding: 10px 15px;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.panel > .list-group,
.panel > .panel-collapse > .list-group {
  margin-bottom: 0;
}
.panel > .list-group .list-group-item,
.panel > .panel-collapse > .list-group .list-group-item {
  border-width: 1px 0;
  border-radius: 0;
}
.panel > .list-group:first-child .list-group-item:first-child,
.panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {
  border-top: 0;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}
.panel > .list-group:last-child .list-group-item:last-child,
.panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {
  border-bottom: 0;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
.panel-heading + .list-group .list-group-item:first-child {
  border-top-width: 0;
}
.list-group + .panel-footer {
  border-top-width: 0;
}
.panel-group {
  margin-bottom: 20px;
}
.panel-group .panel {
  margin-bottom: 0;
  border-radius: 4px;
}
.panel-group .panel + .panel {
  margin-top: 5px;
}
.panel-group .panel-heading {
  border-bottom: 0;
}
.panel-group .panel-heading + .panel-collapse > .panel-body,
.panel-group .panel-heading + .panel-collapse > .list-group {
  border-top: 1px solid #ddd;
}
.panel-group .panel-footer {
  border-top: 0;
}
.panel-group .panel-footer + .panel-collapse .panel-body {
  border-bottom: 1px solid #ddd;
}
.panel-default {
  border-color: #ddd;
}
.panel-default > .panel-heading {
  color: #333333;
  background-color: #f5f5f5;
  border-color: #ddd;
}
.panel-default > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #ddd;
}
.panel-default > .panel-heading .badge {
  color: #f5f5f5;
  background-color: #333333;
}
.panel-default > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #ddd;
}
.panel-primary {
  border-color: #337ab7;
}
.panel-primary > .panel-heading {
  color: #fff;
  background-color: #337ab7;
  border-color: #337ab7;
}
.panel-primary > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #337ab7;
}
.panel-primary > .panel-heading .badge {
  color: #337ab7;
  background-color: #fff;
}
.panel-primary > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #337ab7;
}
.panel-success {
  border-color: #d6e9c6;
}
.panel-success > .panel-heading {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
}
.panel-success > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #d6e9c6;
}
.panel-success > .panel-heading .badge {
  color: #dff0d8;
  background-color: #3c763d;
}
.panel-success > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #d6e9c6;
}
.panel-info {
  border-color: #bce8f1;
}
.panel-info > .panel-heading {
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
}
.panel-info > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #bce8f1;
}
.panel-info > .panel-heading .badge {
  color: #d9edf7;
  background-color: #31708f;
}
.panel-info > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #bce8f1;
}
.panel-warning {
  border-color: #faebcc;
}
.panel-warning > .panel-heading {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
}
.panel-warning > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #faebcc;
}
.panel-warning > .panel-heading .badge {
  color: #fcf8e3;
  background-color: #8a6d3b;
}
.panel-warning > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #faebcc;
}
.panel-danger {
  border-color: #ebccd1;
}
.panel-danger > .panel-heading {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}
.panel-danger > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #ebccd1;
}
.panel-danger > .panel-heading .badge {
  color: #f2dede;
  background-color: #a94442;
}
.panel-danger > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #ebccd1;
}


.collapse {
  display: none;
}
.collapse.in {
  display: block;
}
tr.collapse.in {
  display: table-row;
}
tbody.collapse.in {
  display: table-row-group;
}
.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  -webkit-transition-property: height, visibility;
  transition-property: height, visibility;
  -webkit-transition-duration: 0.35s;
  transition-duration: 0.35s;
  -webkit-transition-timing-function: ease;
  transition-timing-function: ease;
}

.s-lg-link-desc .collapse {
  display: none;
}
.s-lg-link-desc .collapse.show {
  display: block;
}
.s-lg-link-desc .collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  -webkit-transition-property: height, visibility;
  transition-property: height, visibility;
  -webkit-transition-duration: 0.15s;
  transition-duration: 0.15s;
  -webkit-transition-timing-function: ease;
  transition-timing-function: ease;
}

#s-lg-index-list .collapse {
  display: none;
}
#s-lg-index-list .collapse.in {
  display: block;
}
#s-lg-index-list .collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  -webkit-transition-property: height, visibility;
  transition-property: height, visibility;
  -webkit-transition-duration: 0.35s;
  transition-duration: 0.35s;
  -webkit-transition-timing-function: ease;
  transition-timing-function: ease;
}


.navbar-default {
  background-color: #f8f8f8;
  border-color: #e7e7e7;
}
.navbar-default .navbar-brand {
  color: #777;
}
.navbar-default .navbar-brand:hover,
.navbar-default .navbar-brand:focus {
  color: #5e5e5e;
  background-color: transparent;
}
.navbar-default .navbar-text {
  color: #777;
}
.navbar-default .navbar-nav > li > a {
  color: #777;
}
.navbar-default .navbar-nav > li > a:hover,
.navbar-default .navbar-nav > li > a:focus {
  color: #333;
  background-color: transparent;
}
.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:hover,
.navbar-default .navbar-nav > .active > a:focus {
  color: #555;
  background-color: #e7e7e7;
}
.navbar-default .navbar-nav > .disabled > a,
.navbar-default .navbar-nav > .disabled > a:hover,
.navbar-default .navbar-nav > .disabled > a:focus {
  color: #ccc;
  background-color: transparent;
}
.navbar-default .navbar-toggle {
  border-color: #ddd;
}
.navbar-default .navbar-toggle:hover,
.navbar-default .navbar-toggle:focus {
  background-color: #ddd;
}
.navbar-default .navbar-toggle .icon-bar {
  background-color: #888;
}
.navbar-default .navbar-collapse,
.navbar-default .navbar-form {
  border-color: #e7e7e7;
}
.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .open > a:hover,
.navbar-default .navbar-nav > .open > a:focus {
  color: #555;
  background-color: #e7e7e7;
}
@media (max-width: 767px) {
  .navbar-default .navbar-nav .open .dropdown-menu > li > a {
    color: #777;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #333;
    background-color: transparent;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #555;
    background-color: #e7e7e7;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {
    color: #ccc;
    background-color: transparent;
  }
}
.navbar-default .navbar-link {
  color: #777;
}
.navbar-default .navbar-link:hover {
  color: #333;
}
.navbar-default .btn-link {
  color: #777;
}
.navbar-default .btn-link:hover,
.navbar-default .btn-link:focus {
  color: #333;
}
.navbar-default .btn-link[disabled]:hover,
fieldset[disabled] .navbar-default .btn-link:hover,
.navbar-default .btn-link[disabled]:focus,
fieldset[disabled] .navbar-default .btn-link:focus {
  color: #ccc;
}


@media (min-width: 768px) {
  .navbar-header {
    float: left;
  }
}

.navbar-collapse {
  padding-right: 15px;
  padding-left: 15px;
  overflow-x: visible;
  -webkit-overflow-scrolling: touch;
  border-top: 1px solid transparent;
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);
}
.navbar-collapse.in {
  overflow-y: auto;
}

@media (min-width: 768px) {
  .navbar-collapse {
    width: auto;
    border-top: 0;
    -webkit-box-shadow: none;
            box-shadow: none;
  }
  .navbar-collapse.collapse {
    display: block !important;
    height: auto !important;
    padding-bottom: 0;
    overflow: visible !important;
  }
  .navbar-collapse.in {
    overflow-y: visible;
  }
  .navbar-fixed-top .navbar-collapse,
  .navbar-static-top .navbar-collapse,
  .navbar-fixed-bottom .navbar-collapse {
    padding-right: 0;
    padding-left: 0;
  }
}
.navbar-fixed-top .navbar-collapse,
.navbar-fixed-bottom .navbar-collapse {
  max-height: 340px;
}
@media (max-device-width: 480px) and (orientation: landscape) {
  .navbar-fixed-top .navbar-collapse,
  .navbar-fixed-bottom .navbar-collapse {
    max-height: 200px;
  }
}

.container > .navbar-header,
.container-fluid > .navbar-header,
.container > .navbar-collapse,
.container-fluid > .navbar-collapse {
  margin-right: -15px;
  margin-left: -15px;
}
@media (min-width: 768px) {
  .container > .navbar-header,
  .container-fluid > .navbar-header,
  .container > .navbar-collapse,
  .container-fluid > .navbar-collapse {
    margin-right: 0;
    margin-left: 0;
  }
}




/**
 * 6.0 Other @media queries
 * ----------------------------------------------------------------------------*/
@media screen and (max-width: 768px) {
  #s-lib-bc {
    display: none;
  }

  h1#s-lib-public-header-title {
    margin: 0.25em 0 0.25em 0em;
  }

  #s-lib-public-header {
    margin: 0em 0.75em 0em 0.75em;
  }

  #s-lib-public-main {
    margin: -0.75em 0.75em 0em 0.75em;
  }

  #s-lg-hp-nav {
    margin: -1em 0 0 0;
  }

  #s-lg-hp-nav ul {
    padding: 0em 0;
    margin: 0 0 -0.5em 0;
  }

  #s-lg-hp-nav ul li {
    margin: 0.5em 0 0.5em 0;
  }

  #s-lg-hp-nav-bottom form {
    padding: 0;
    margin: -0.5em 0 -1.25em 0;
  }

  div#s-lg-box-18909832 {
    margin: -10px 0 0 0;
  }

  ul.nav-stacked {
    margin: 0 1em 1em 1em !important;
    padding: 0em 0;
  }

  ul.nav-stacked:before {
    content: "Guide Content";
    font-size: 1.25em;
    font-weight: bold;
    padding: 0 0 0.25em 0;
  }

  ul.nav-stacked li {
    margin: 0em 0;
    padding: 0;
    border: none;
  width: 100%;
  }

  ul.nav-stacked li a {
    padding: 0.25em 1.25em !important;
    font-size: 1em;
    border-radius: 0px !important;
  }

  ul.nav-stacked li a:hover {
    border-radius: 0px !important;
  }

  ul.nav-stacked {
    margin-bottom: 1em !important;
  }

  ul.nav-stacked li {
    margin: 0.5em 1em;
    border: 1px solid #bbb;
    border-radius: 5px;
  }

  .s-lib-box-container {
    margin: 0em 1em;
  }
}

/**
 * 7.0 LibChat styles
 * ----------------------------------------------------------------------------*/

/*--- Ask Us chat button ---*/
.lcs_slide_out {
  margin-top: 1%;
}

.lcs_slide_out header a {
  font-size: 1.25rem !important;
  font-weight: 400;
  padding: 0.125em 1em!important;
}

.lcs_slide_out.open header a {
  padding: 0 0.5em!important;
}

.lcs_slide_out.open header a:before { 
  content:'\00D7\00a0\00a0\00a0'; 
  font-size: 1.25em;
}


@media only screen and (max-width: 576px) {
  .lcs_slide_out header a {
    font-size: 1.0rem !important;
    padding: 0 1em !important;
  }
}

#s-lch-header-actions button i.fa.fa-fw {
  font-size: 24px;
}

/**
 * 8.0 @ font-face
 * ----------------------------------------------------------------------------*/
@font-face {
  font-family: "Adelle Regular";
  font-style: normal;
  font-weight: normal;
  src: url("https://libapps.s3.amazonaws.com/sites/594/include/Adelle_Reg.woff")
    format("woff");
}

@font-face {
  font-family: "Adelle Italic";
  font-style: normal;
  font-weight: normal;
  src: url("https://libapps.s3.amazonaws.com/sites/594/include/Adelle_Italic.woff")
    format("woff");
}

@font-face {
  font-family: "Adelle Light Italic";
  font-style: normal;
  font-weight: normal;
  src: url("https://libapps.s3.amazonaws.com/sites/594/include/Adelle_LightItalic.woff")
    format("woff");
}

@font-face {
  font-family: "Adelle Light";
  font-style: normal;
  font-weight: normal;
  src: url("https://libapps.s3.amazonaws.com/sites/594/include/Adelle_light.woff")
    format("woff");
}

@font-face {
  font-family: "Adelle SemiBold Italic";
  font-style: normal;
  font-weight: normal;
  src: url("https://libapps.s3.amazonaws.com/sites/594/include/Adelle_SemiBoldItalic.woff")
    format("woff");
}

@font-face {
  font-family: "Adelle SemiBold";
  font-style: normal;
  font-weight: normal;
  src: url("https://libapps.s3.amazonaws.com/sites/594/include/Adelle_Semibold.woff")
    format("woff");
}

@font-face {
  font-family: "Adelle Bold";
  font-style: normal;
  font-weight: normal;
  src: url("https://libapps.s3.amazonaws.com/sites/594/include/Adelle_Bold.woff")
    format("woff");
}

@font-face {
  font-family: "Adelle Bold Italic";
  font-style: normal;
  font-weight: normal;
  src: url("https://libapps.s3.amazonaws.com/sites/594/include/Adelle_BoldItalic.woff")
    format("woff");
}

@font-face {
  font-family: "Adelle ExtraBold";
  font-style: normal;
  font-weight: normal;
  src: url("https://libapps.s3.amazonaws.com/sites/594/include/Adelle_ExtraBold.woff")
    format("woff");
}

@font-face {
  font-family: "Adelle ExtraBold Italic";
  font-style: normal;
  font-weight: normal;
  src: url("https://libapps.s3.amazonaws.com/sites/594/include/Adelle_ExtraBoldItalic.woff")
    format("woff");
}

@font-face {
  font-family: "Adelle Heavy";
  font-style: normal;
  font-weight: normal;
  src: url("https://libapps.s3.amazonaws.com/sites/594/include/Adelle_Heavy.woff")
    format("woff");
}

@font-face {
  font-family: "Adelle Heavy Italic";
  font-style: normal;
  font-weight: normal;
  src: url("https://libapps.s3.amazonaws.com/sites/594/include/Adelle_HeavyItalic.woff")
    format("woff");
}

</style>