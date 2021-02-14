
shadow.cljs.devtools.client.env.module_loaded('app');

try { swg_website.core.init(); } catch (e) { console.error("An error occurred when calling (swg-website.core/init)"); throw(e); }