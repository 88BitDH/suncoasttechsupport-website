import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const source = readFileSync(new URL('../public/assets/residential-form-tracking.js', import.meta.url), 'utf8');
const key = 'suncoast_residential_request_pending';
const nonce = '12345678-1234-4123-8123-123456789012';
const endpoint = 'https://suncoast-b2c-lead-form.iammoeskicova0808.workers.dev/';
function browser(path = '/schedule/', hash = '', pending) {
  const hits = [], handlers = {}, data = new Map();
  if (pending) data.set(key, JSON.stringify(pending));
  const window = {
    crypto: {randomUUID: () => nonce},
    location: {pathname: path, hash, search: ''},
    history: {replaceState: () => {window.location.hash = '';}},
    sessionStorage: {getItem: k => data.get(k), setItem: (k,v) => data.set(k,v), removeItem: k => data.delete(k)},
    gtag: (...args) => hits.push(args)
  };
  const document = {addEventListener: (t,f) => {handlers[t] = f;}, createElement: () => ({})};
  const context = {window, document, Date, URLSearchParams};
  const run = () => vm.runInNewContext(source, context);
  run();
  return {window, hits, handlers, data, run};
}
const form = {action: endpoint, method: 'POST', querySelector: () => null, appendChild: f => {form.field = f;}};
const start = browser();
start.handlers.submit({target: form});
assert.equal(start.hits.length, 0, 'submitting is not a conversion');
assert.equal(form.field.value, nonce);
assert.equal(JSON.parse(start.data.get(key)).nonce, nonce);
const pending = JSON.parse(start.data.get(key));
const success = browser('/thank-you.html', '#residential-request=' + nonce, pending);
assert.equal(success.hits.length, 1);
assert.equal(success.hits[0][2].send_to, 'AW-17992501324/9cPjCOuO4bUdEMyQv4ND');
assert.equal(success.hits[0][2].transaction_id, nonce);
assert.equal(success.window.location.hash, '');
assert.equal(success.data.has(key), false);
success.run();
assert.equal(success.hits.length, 1, 'duplicate script does not duplicate conversion');
assert.equal(browser('/thank-you.html').hits.length, 0, 'direct visit');
assert.equal(browser('/thank-you.html', '', pending).hits.length, 0, 'failed submission/manual navigation');
assert.equal(browser('/thank-you.html', '#residential-request=' + nonce).hits.length, 0, 'refresh or copied confirmation link');
assert.equal(browser('/thank-you.html', '#residential-request=wrong', pending).hits.length, 0);
assert.equal(browser('/thank-you.html', '#residential-request=' + nonce, {...pending, time: Date.now()-1800001}).hits.length, 0);
const blocked = browser();
blocked.window.sessionStorage.setItem = () => {throw Error('blocked');};
assert.doesNotThrow(() => blocked.handlers.submit({target: form}));
const other = browser();
other.handlers.submit({target: {...form, action: 'https://example.invalid/'}});
assert.equal(other.data.size, 0, 'unrelated forms excluded');
const prevented = browser();
prevented.handlers.submit({target: form, defaultPrevented: true});
assert.equal(prevented.data.size, 0);
assert.ok(!JSON.stringify(success.hits).includes('phone'));
console.log('PASS: accepted receipt once; direct, refresh, expired, mismatched, failed, unrelated and blocked-storage cases');
