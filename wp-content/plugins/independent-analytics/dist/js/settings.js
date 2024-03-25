!function(e,t,n,r,o){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof i[r]&&i[r],s=a.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function d(t,n){if(!s[t]){if(!e[t]){var o="function"==typeof i[r]&&i[r];if(!n&&o)return o(t,!0);if(a)return a(t,!0);if(l&&"string"==typeof t)return l(t);var u=new Error("Cannot find module '"+t+"'");throw u.code="MODULE_NOT_FOUND",u}p.resolve=function(n){var r=e[t][1][n];return null!=r?r:n},p.cache={};var c=s[t]=new d.Module(t);e[t][0].call(c.exports,p,c,c.exports,this)}return s[t].exports;function p(e){var t=p.resolve(e);return!1===t?{}:d(t)}}d.isParcelRequire=!0,d.Module=function(e){this.id=e,this.bundle=d,this.exports={}},d.modules=e,d.cache=s,d.parent=a,d.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(d,"root",{get:function(){return i[r]}}),i[r]=d;for(var u=0;u<t.length;u++)d(t[u]);if(n){var c=d(n);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd&&define((function(){return c}))}}({"8djFA":[function(e,t,n){var r=e("@parcel/transformer-js/src/esmodule-helpers.js"),o=e("@swc/helpers/lib/_object_spread.js"),i=r.interopDefault(o),a=e("./modules/user-roles"),s=e("./modules/duplicate-field"),l=e("./modules/email-reports"),d=e("./download");jQuery((function(e){a.UserRoles.setup(),s.FieldDuplicator.setup(),l.EmailReports.setup()})),document.addEventListener("DOMContentLoaded",(function(){document.getElementById("iawp-export-views").addEventListener("click",(function(e){var t=e.target;t.textContent=iawpText.exportingPages,t.setAttribute("disabled","disabled");var n=(0,i.default)({},iawpActions.export_pages);jQuery.post(ajaxurl,n,(function(e){(0,d.downloadCSV)("exported-pages.csv",e),t.textContent=iawpText.exportPages,t.removeAttribute("disabled")}))})),document.getElementById("iawp-export-referrers").addEventListener("click",(function(e){var t=e.target;t.textContent=iawpText.exportingReferrers,t.setAttribute("disabled","disabled");var n=(0,i.default)({},iawpActions.export_referrers);jQuery.post(ajaxurl,n,(function(e){(0,d.downloadCSV)("exported-referrers.csv",e),t.textContent=iawpText.exportReferrers,t.removeAttribute("disabled")}))})),document.getElementById("iawp-export-geo").addEventListener("click",(function(e){var t=e.target;t.textContent=iawpText.exportingGeolocations,t.setAttribute("disabled","disabled");var n=(0,i.default)({},iawpActions.export_geo);jQuery.post(ajaxurl,n,(function(e){(0,d.downloadCSV)("exported-geo.csv",e),t.textContent=iawpText.exportGeolocations,t.removeAttribute("disabled")}))})),document.getElementById("iawp-export-devices").addEventListener("click",(function(e){var t=e.target;t.textContent=iawpText.exportingDevices,t.setAttribute("disabled","disabled");var n=(0,i.default)({},iawpActions.export_devices);jQuery.post(ajaxurl,n,(function(e){(0,d.downloadCSV)("exported-devices.csv",e),t.textContent=iawpText.exportDevices,t.removeAttribute("disabled")}))}));var e=document.getElementById("iawp-export-campaigns");e&&e.addEventListener("click",(function(e){var t=e.target;t.textContent=iawpText.exportingCampaigns,t.setAttribute("disabled","disabled");var n=(0,i.default)({},iawpActions.export_campaigns);jQuery.post(ajaxurl,n,(function(e){(0,d.downloadCSV)("exported-campaigns.csv",e),t.textContent=iawpText.exportCampaigns,t.removeAttribute("disabled")}))}))}))},{"@swc/helpers/lib/_object_spread.js":"6Iw7d","./modules/user-roles":"2Te23","./modules/duplicate-field":"cOboS","./modules/email-reports":"3Prqp","./download":"filEL","@parcel/transformer-js/src/esmodule-helpers.js":"kPSB8"}],"6Iw7d":[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o.default(e,t,n[t])}))}return e};var r,o=(r=e("./_define_property"))&&r.__esModule?r:{default:r}},{"./_define_property":"5UakF"}],"5UakF":[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},{}],"2Te23":[function(e,t,n){var r=e("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(n),r.export(n,"UserRoles",(function(){return s}));var o=e("@swc/helpers/lib/_object_spread.js"),i=r.interopDefault(o),a=jQuery,s={setup:function(){var e=this;a("#user-role-select").on("change",(function(){a(".role").removeClass("show"),a(".role-"+a(this).val()).addClass("show")})),a("#capabilities-form").on("submit",(function(t){t.preventDefault(),e.save()}))},save:function(){a("#save-permissions").addClass("saving");var e={};a(".role").each((function(){var t=a(this).find("select").attr("name"),n=a(this).find("select").val();e[t]=n})),e=JSON.stringify(e);var t=a("#iawp_white_label").prop("checked"),n=(0,i.default)({},iawpActions.update_capabilities,{capabilities:e,white_label:t});jQuery.post(ajaxurl,n,(function(e){a("#save-permissions").removeClass("saving")}))}}},{"@swc/helpers/lib/_object_spread.js":"6Iw7d","@parcel/transformer-js/src/esmodule-helpers.js":"kPSB8"}],kPSB8:[function(e,t,n){n.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},n.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.exportAll=function(e,t){return Object.keys(e).forEach((function(n){"default"===n||"__esModule"===n||t.hasOwnProperty(n)||Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})})),t},n.export=function(e,t,n){Object.defineProperty(e,t,{enumerable:!0,get:n})}},{}],cOboS:[function(e,t,n){var r=e("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(n),r.export(n,"FieldDuplicator",(function(){return i}));var o=jQuery,i={setup:function(){var e=this;o(".duplicator").each((function(t,n){o(this).find(".duplicate-button").on("click",(function(t){t.preventDefault(),e.createNewEntry(o(n))}))})),o(".entry").each((function(){e.attachRemoveEvent(o(this))}))},createNewEntry:function(e){var t=e.find(".new-field");if(!this.errorChecks(t)){var n=e.find(".blueprint .entry").clone();n.find("input").val(t.val()),e.next().append(n),t.hasClass("select")?t.find('option[value="'+t.val()+'"').remove():t.val(""),this.resetIndex(e.next(".saved")),this.attachRemoveEvent(n),e.parents("form").removeClass("empty exists"),this.hideNoneMessage(e)}},attachRemoveEvent:function(e){var t=this;e.find(".remove").on("click",(function(n){n.preventDefault();var r=o(e).parent(".saved");o(this).parents("form").addClass("unsaved"),o(this).parent().remove(),t.resetIndex(r)}))},resetIndex:function(e){var t=0;e.find("input").each((function(){o(this).attr("name",o(this).attr("data-option")+"["+t+"]"),o(this).attr("id",o(this).attr("data-option")+"["+t+"]"),t++})),e.parents("form").addClass("unsaved")},errorChecks:function(e){if(""==e.val())return e.parents("form").addClass("empty"),!0;var t=[];return e.parent().parent().next(".saved").find(".entry").each((function(){t.push(o(this).find("input").val())})),!!t.includes(e.val())&&(e.parents("form").addClass("exists"),!0)},hideNoneMessage:function(e){e.parent().find(".none").hide()}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"kPSB8"}],"3Prqp":[function(e,t,n){var r=e("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(n),r.export(n,"EmailReports",(function(){return s}));var o=e("@swc/helpers/lib/_object_spread.js"),i=r.interopDefault(o),a=jQuery,s={setup:function(){var e=this;this.disableTestButtonIfEmpty(),a(".email-reports .new-address input").on("change",(function(){a("#test-email").attr("disabled",!0)})),a(".email-reports .saved .remove").on("click",(function(){e.disableTestButtonIfEmpty()}));var t=a("#iawp_email_report_colors"),n=a(".iawp-color-picker"),r={change:function(e,r){var o=[];n.each((function(){o.push(a(this).iris("color"))})),t.val(o.join(","))}};n.each((function(){a(this).wpColorPicker(r)})),a("#test-email").on("click",(function(e){e.preventDefault();var t=(0,i.default)({},iawpActions.test_email);a("#test-email").addClass("sending"),jQuery.post(ajaxurl,t,(function(e){a("#test-email").removeClass("sending"),e?a("#test-email").addClass("sent"):a("#test-email").addClass("failed"),setTimeout((function(){a("#test-email").removeClass("sent failed")}),1e3)}))}))},disableTestButtonIfEmpty:function(){0==a(".email-reports .saved input").length&&a("#test-email").attr("disabled",!0)}}},{"@swc/helpers/lib/_object_spread.js":"6Iw7d","@parcel/transformer-js/src/esmodule-helpers.js":"kPSB8"}],filEL:[function(e,t,n){t.exports={downloadCSV:function(e,t){var n=new Blob([t],{type:"text/csv"}),r=window.document.createElement("a");r.href=window.URL.createObjectURL(n),r.download=e,document.body.appendChild(r),r.click(),document.body.removeChild(r)},downloadJSON:function(e,t){var n=new Blob([t],{type:"application/json"}),r=window.document.createElement("a");r.href=window.URL.createObjectURL(n),r.download=e,document.body.appendChild(r),r.click(),document.body.removeChild(r)}}},{}]},["8djFA"],"8djFA","parcelRequirec571");