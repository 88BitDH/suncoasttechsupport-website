/* Count accepted residential requests, never a submit-button click. */
(function () {
  'use strict';
  if (window.suncoastResidentialFormTracking) return;
  window.suncoastResidentialFormTracking = true;
  var key = 'suncoast_residential_request_pending';
  var maxAge = 30 * 60 * 1000;
  var endpoint = 'https://suncoast-b2c-lead-form.iammoeskicova0808.workers.dev/';

  document.addEventListener('submit', function (event) {
    var form = event.target;
    if (event.defaultPrevented || !form || form.action !== endpoint ||
        String(form.method).toLowerCase() !== 'post') return;
    try {
      var nonce = window.crypto.randomUUID();
      window.sessionStorage.setItem(key, JSON.stringify({nonce: nonce, time: Date.now()}));
      var field = form.querySelector('input[name="_conversion_nonce"]');
      if (!field) {
        field = document.createElement('input');
        field.type = 'hidden';
        field.name = '_conversion_nonce';
        form.appendChild(field);
      }
      field.value = nonce;
    } catch (error) {
      // Storage restrictions must never prevent a customer from submitting.
    }
  });

  if (window.location.pathname !== '/thank-you.html') return;
  var receipt = new URLSearchParams(window.location.hash.slice(1)).get('residential-request');
  if (!receipt) return;
  // Remove the receipt before Google reads the page URL.
  window.history.replaceState(null, '', window.location.pathname + window.location.search);
  try {
    var pending = JSON.parse(window.sessionStorage.getItem(key) || 'null');
    if (!pending || pending.nonce !== receipt ||
        Date.now() - pending.time < 0 || Date.now() - pending.time > maxAge) return;
    if (typeof window.gtag !== 'function') return;
    window.sessionStorage.removeItem(key);
    window.gtag('event', 'conversion', {
      send_to: 'AW-17992501324/9cPjCOuO4bUdEMyQv4ND',
      value: 1.0,
      currency: 'USD',
      transaction_id: receipt
    });
  } catch (error) {
    // A direct visit, missing storage, or malformed receipt is not a lead.
  }
})();
