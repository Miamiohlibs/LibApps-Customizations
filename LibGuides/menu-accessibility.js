$(document).ready(function() {

    /*
    IMPORTANT NOTE: New key unbinding script. Test more to insure it does what we expect.
    */
  
  window.addEventListener("keydown", function(e) {
      if(["Escape","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
          e.preventDefault();
      }
  }, false);
  
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