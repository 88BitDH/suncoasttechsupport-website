/* Residential phone clicks. A click records intent, not a completed call. */
(function () {
  'use strict';
  if (window.suncoastResidentialPhoneTracking) return;
  window.suncoastResidentialPhoneTracking = true;
  document.addEventListener('click', function (event) {
    var link = event.target && event.target.closest ? event.target.closest('a[href]') : null;
    if (!link || !/^tel:/i.test(link.getAttribute('href') || '')) return;
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', 'conversion', {
      send_to: 'AW-17992501324/rt-XCLrMoa8cEMyQv4ND',
      value: 1.0,
      currency: 'USD',
      transport_type: 'beacon'
    });
    window.gtag('event', 'click', {
      event_category: 'contact',
      event_label: 'call_residential',
      value: 1
    });
    // Preserve native dialing; never include the phone number or form data.
  });
})();
