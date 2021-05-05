   /** ----------------------------------------------------------------
     * Table of Contents (Javascript):
     * 0.1 - AppendEmail
     * 0.2 - Google Custom Search
     * 0.3 - Add aria-current="page" in main menu
     * 1.0 & Beyond -- CSS (see below for detailed CSS TOC)
     * -------------------------------------------------------------------
     */

    /* 
     *   0.1 - Append Email
     *   this function can be called from the "other widget code" section
     *   to append a users email address to the contact box (in addition to
     *   the "Email Me" button)
     * --------------------------------------- 
    */

    const AppendEmail = (profileId) => {
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
    }

    /* 
     * 0.2 - Google Custom Search
     * adds Google Custom Search box to header 
     * * ---------------------------------------
     */

    $(function () {
        var cx = '009740610740149956689:vgajvsbmghf';
        var gcse = document.createElement('script');
        gcse.type = 'text/javascript';
        gcse.async = true;
        gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(gcse, s);

        // Enlarge the magnify glass icon of Google Site Search Box
        setTimeout(function () {
            if ($('.gsc-search-button-v2 > svg')[0] !== undefined) {
                $('.gsc-search-button-v2 > svg')[0].setAttribute("width", "20");
                $('.gsc-search-button-v2 > svg')[0].setAttribute("height", "20");
            }
        }, 1000);
    });

    $('.site-search-icon-control').click(function(){
        $('#site-search-icon').toggleClass('bi-search');
        $('#site-search-icon').toggleClass('bi-x-circle');
        $('.bi-x-circle ~ span').text('Close');
        $('.bi-search ~ span').text('Site Search');
        });


    /* 


   $('site-search-icon-control').click(function () {
        $('#site-search-icon').toggleClass('fa-search');
        $('#site-search-icon').toggleClass('fa-times-circle');
        $('.fa-times-circle ~ span').text('Close');
        $('.fa-search ~ span').text('Site Search');
    });


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

