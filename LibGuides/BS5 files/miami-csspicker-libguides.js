(function loadMiamiLibGuidesCss() {
  const ADMIN_CSS =
    'https://d2jv02qf7xgjwx.cloudfront.net/sites/594/include/miami-bs5-admin-libguides.css';
  const PUBLIC_CSS =
    'https://d2jv02qf7xgjwx.cloudfront.net/sites/594/include/miami-bs5-libguides.css';
  const LINK_ID = 'miami-bs5-theme-css';

  const isAdminPage = /admin_c\.php|\/libguides\/admin/i.test(
    window.location.href
  );
  const targetCss = isAdminPage ? ADMIN_CSS : PUBLIC_CSS;
  const oppositeCssFile = isAdminPage
    ? 'miami-bs5-libguides.css'
    : 'miami-bs5-admin-libguides.css';

  let link = document.getElementById(LINK_ID);
  if (!link) {
    link = document.createElement('link');
    link.id = LINK_ID;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    document.head.appendChild(link);
  }

  link.href = targetCss;

  // Remove previously added opposite theme file if present.
  document.querySelectorAll('link[rel="stylesheet"]').forEach((stylesheet) => {
    if (stylesheet !== link && stylesheet.href.includes(oppositeCssFile)) {
      stylesheet.remove();
    }
  });
})();
