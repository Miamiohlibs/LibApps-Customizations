/*
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
    }
  });
  //   console.log(showSort);

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
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-up" viewBox="0 0 16 16"><path d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707V12.5zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/></svg>';
    $('#time_grid_cont').prepend(
      '<h2 class="btn btn-primary" id="sort-by-avail">' +
        sortIcon +
        ' Sort by availability</h2>'
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
