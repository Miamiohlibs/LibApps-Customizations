const SuperTopMenu = [
  { name: 'myMiami', href: 'https://mymiami.miamioh.edu/' },
  {
    name: 'My Library Account',
    href: 'https://ohiolink-mu.primo.exlibrisgroup.com/discovery/account?vid=01OHIOLINK_MU:MU&section=overview&lang=en',
  },
  {
    name: 'Give',
    href: 'https://www.givetomiamioh.org/s/916/16/interior-flah.aspx?sid=916&gid=1&pgid=5141',
    icon: true,
  },
];

const ResearchMenu = [
  [
    { name: 'Find', submenuTitle: 'find-submenu-title' },
    { name: 'Research Guides', href: '/find/guides/' },
    { name: 'Databases A-Z', href: '/find/databases/' },
    { name: 'OneSearch', href: '/find/onesearch/' },
    { name: 'Articles and More', href: '/find/articles/' },
    { name: 'Books and More', href: '/find/books/' },
    { name: 'Encyclopedias and Dictionaries', href: '/find/encyclopedias/' },
    {
      name: 'Digital Collections',
      href: 'https://www.lib.miamioh.edu/digital-collections/',
      redirect: true,
    },
  ],
  [
    {
      name: 'Research Support',
      submenuTitle: 'research-support-submenu-title',
    },
    {
      name: 'Academic Integrity',
      href: '/research-support/academic-integrity/',
    },
    { name: 'Citation Resources', href: '/research-support/citation/' },
    { name: 'Ask a Librarian', href: '/research-support/ask/' },
    { name: 'Copyright', href: '/research-support/copyright/' },
    { name: 'Research Workshops', href: '/research-support/workshops/' },
    { name: 'Howe Writing Center', href: '/research-support/hcw/' },
  ],
  [
    {
      name: 'Instruction Support',
      submenuTitle: 'instruction-support-submenu-title',
    },
    { name: 'Library Instruction', href: '/instruction/library-instruction/' },
    {
      name: 'Information Literacy Modules',
      href: '/instruction/credo-instruct/',
    },
    { name: 'Course Reserves', href: '/instruction/course-reserves/' },
    { name: 'Open Educational Resources', href: '/instruction/oer/' },
    { name: 'Accessibility Resources', href: '/instruction/accessibility/' },
    { name: 'Instructional Videos', href: '/instruction/videos/' },
    { name: 'Learning Object Repository', href: '/instruction/lore/' },
  ],
  [
    { name: 'Creation', submenuTitle: 'create-submenu-title' },
    { name: 'MakerSpace', href: '/creation/makerspace/' },
    { name: 'Digital Scholarship', href: '/creation/digital-scholarship/' },
    { name: 'Scholarly Commons', href: '/creation/scholarly-commons/' },
    { name: 'Data Services', href: '/creation/data-services/' },
    { name: 'Copyright', href: '/creation/cre-copyright/' },
    { name: 'Creation Workshops', href: '/creation/cre-workshops/' },
  ],
];

const UseLibraryMenu = [
  [
    { name: 'Borrowing and Requests' },
    { name: 'Borrowing Policies', href: '/borrow/policies/' },
    { name: 'Reserves and Textbooks', href: '/borrow/borrow/reserves/' },
    { name: 'Interlibrary Loan and Storage Requests', href: '/borrow/ill/' },
    { name: 'Curbside Pickup', href: '/borrow/curbside/' },
    { name: 'Department/Dorm Delivery', href: '/borrow/department-delivery/' },
    { name: 'Home Delivery', href: '/borrow/home-delivery/' },
    {
      name: 'Limited Online Library Access Lending Service',
      href: '/borrow/lola/',
    },
  ],
  [
    { name: 'Spaces' },
    { name: 'Study Rooms', href: '/spaces/room-reservations/' },
    { name: 'Computer Availability', href: '/spaces/computer-labs/' },
    { name: 'MakerSpace', href: '/spaces/makerspace/' },
    {
      name: 'Faculty and Graduate Reading Room',
      href: '/spaces/reading-rooms/',
    },
    { name: 'Howe Writing Center', href: '/spaces/hwc/' },
    { name: 'King Cafe', href: '/spaces/king-cafe/' },
  ],
  [
    { name: 'Technology' },
    { name: 'Tech Equipment for Checkout', href: '/technology/tech-checkout/' },
    {
      name: 'Software Checkout',
      href: 'https://www.lib.miamioh.edu/software/',
      redirect: true,
    },
    { name: 'Software on Library Computers', href: '/technology/software/' },
    { name: 'Printing and WiFi', href: '/technology/printing/' },
    { name: '3D Printing', href: '/technology/3d-printing-services/' },
    { name: 'Audio-Video Production', href: '/technology/av-production/' },
    { name: 'Data Services', href: '/technology/tech-data-services/' },
  ],
  [
    { name: 'Services for...' },
    { name: 'Faculty', href: '/services/faculty/' },
    { name: 'Graduate Students', href: '/services/graduateStudents/' },
    { name: 'New Students', href: '/services/newStudents/' },
  ],
];

const AboutMenu = [
  [
    { name: 'Locations & Hours' },
    { name: 'Library Hours', href: '/locations/hours/' },
    { name: 'King Library', href: '/locations/king-library/' },
    { name: 'Wertz Art & Architecture Library', href: '/locations/art-arch/' },
    {
      name: 'Special Collections and University Archives',
      href: '/locations/special-collections-archives/',
    },
    { name: 'Regional Libraries', href: '/locations/regional/' },
  ],
  [
    { name: 'Our Organization' },
    { name: 'Contact Us', href: '/organization/contact-us/' },
    { name: 'Staff Directory', href: '/organization/staff/' },
    { name: 'Subject Librarians', href: '/organization/liaisons/' },
    { name: 'Welcome from the Dean', href: '/organization/deans-office/' },
    { name: 'Strategic Plan - Catalyst', href: '/organization/strategic/' },
    { name: 'Employment', href: '/organization/employment/' },
    { name: 'Policies', href: '/organization/policies/' },
    { name: 'FAQs', href: '/organization/faqs/' },
  ],
  [
    { name: 'News and Events' },
    { name: 'Library News', href: '/news-events/news/' },
    { name: 'Events and Exhibits', href: '/news-events/events-exhibits/' },
    { name: 'Social Media', href: '/news-events/social/' },
    { name: 'Support the Libraries', href: '/news-events/support/' },
  ],
];

const FooterMenu = [
  [
    { name: 'Libraries & Collections' },
    { name: 'King Library', href: '/about/locations/king-library/' },
    {
      name: 'Wertz Art & Architecture Library',
      href: '/about/locations/art-arch/',
    },
    {
      name: 'Special Collections and University Archives',
      href: '/about/locations/special-collections-archives/',
    },
    { name: 'Regional Libraries', href: '/about/locations/regional/' },
  ],
  [
    { name: 'Policies' },
    { name: 'Policies', href: '/about/organization/policies' },
    { name: 'Frequently Asked Questions', href: '/about/organization/faqs' },
    {
      name: 'Accessibility Services',
      href: '/research/instruction/accessibility',
    },
    {
      name: 'Website Feedback',
      href: 'https://www.lib.miamioh.edu/website-feedback/',
    },
  ],
  [
    { name: 'Account' },
    { name: 'Staff Area', href: 'https://www.lib.miamioh.edu/user/' },
    {
      name: 'My Library Account',
      href: 'https://holmes.lib.miamioh.edu/patroninfo.html',
    },
  ],
];
