import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const source=readFileSync(new URL('../public/assets/residential-tracking.js',import.meta.url),'utf8');
const handlers=[];const hits=[];
const context={window:{gtag:(...args)=>hits.push(args)},document:{addEventListener:(type,fn)=>handlers.push(fn)}};
vm.runInNewContext(source,context);vm.runInNewContext(source,context);
assert.equal(handlers.length,1,'duplicate script must not install twice');
function click(href){let prevented=false;handlers[0]({target:{closest:()=>({getAttribute:()=>href})},preventDefault:()=>{prevented=true}});assert.equal(prevented,false,'native dialing preserved');}
click('tel:17276479000');
assert.equal(hits.filter(h=>h[1]==='conversion').length,1);
assert.equal(hits[0][2].send_to,'AW-17992501324/rt-XCLrMoa8cEMyQv4ND');
assert.equal(hits[0][2].transport_type,'beacon');
click('sms:17276479000');click('/schedule/');
assert.equal(hits.filter(h=>h[1]==='conversion').length,1,'SMS and navigation excluded');
context.window.gtag=undefined;click('tel:17276479000');
assert.equal(hits.length,2,'missing tag must not throw or send');
assert.ok(!JSON.stringify(hits).includes('17276479000'),'no phone number in payload');
console.log('PASS: single phone conversion, duplicate-load guard, native dialing, SMS/navigation exclusion, missing tag, no phone PII');
