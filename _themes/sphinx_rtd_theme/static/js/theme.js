/* sphinx_rtd_theme version 0.4.3 | MIT license */
/* Built 20190813 08:08 */
require=function r(s,a,l){function c(e,n){if(!a[e]){if(!s[e]){var t="function"==typeof require&&require;if(!n&&t)return t(e,!0);if(u)return u(e,!0);var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}var o=a[e]={exports:{}};s[e][0].call(o.exports,function(n){return c(s[e][1][n]||n)},o,o.exports,r,s,a,l)}return a[e].exports}for(var u="function"==typeof require&&require,n=0;n<l.length;n++)c(l[n]);return c}({"sphinx-rtd-theme":[function(n,e,t){var jQuery="undefined"!=typeof window?window.jQuery:n("jquery");e.exports.ThemeNav={navBar:null,win:null,winScroll:!1,winResize:!1,linkScroll:!1,winPosition:0,winHeight:null,docHeight:null,isRunning:!1,enable:function(e){var t=this;void 0===e&&(e=!0),t.isRunning||(t.isRunning=!0,jQuery(function(n){t.init(n),t.reset(),t.win.on("hashchange",t.reset),e&&t.win.on("scroll",function(){t.linkScroll||t.winScroll||(t.winScroll=!0,requestAnimationFrame(function(){t.onScroll()}))}),t.win.on("resize",function(){t.winResize||(t.winResize=!0,requestAnimationFrame(function(){t.onResize()}))}),t.onResize()}))},enableSticky:function(){this.enable(!0)},init:function(t){t(document);var i=this;this.navBar=t("div.wy-side-scroll:first"),this.win=t(window),t(document).on("click","[data-toggle='wy-nav-top']",function(){t("[data-toggle='wy-nav-shift']").toggleClass("shift"),t("[data-toggle='rst-versions']").toggleClass("shift")}).on("click",".wy-menu-vertical .current ul li a",function(){var n=t(this);t("[data-toggle='wy-nav-shift']").removeClass("shift"),t("[data-toggle='rst-versions']").toggleClass("shift"),i.toggleCurrent(n),i.hashChange()}).on("click","[data-toggle='rst-current-version']",function(){t("[data-toggle='rst-versions']").toggleClass("shift-up")}),t("table.docutils:not(.field-list,.footnote,.citation)").wrap("<div class='wy-table-responsive'></div>"),t("table.docutils.footnote").wrap("<div class='wy-table-responsive footnote'></div>"),t("table.docutils.citation").wrap("<div class='wy-table-responsive citation'></div>"),t(".wy-menu-vertical ul").not(".simple").siblings("a").each(function(){var e=t(this);expand=t('<span class="toctree-expand"></span>'),expand.on("click",function(n){return i.toggleCurrent(e),n.stopPropagation(),!1}),e.prepend(expand)})},reset:function(){var n=encodeURI(window.location.hash)||"#";try{var e=$(".wy-menu-vertical"),t=e.find('[href="'+n+'"]');if(0===t.length){var i=$('.document [id="'+n.substring(1)+'"]').closest("div.section");0===(t=e.find('[href="#'+i.attr("id")+'"]')).length&&(t=e.find('[href="#"]'))}0<t.length&&($(".wy-menu-vertical .current").removeClass("current"),t.addClass("current"),t.closest("li.toctree-l1").addClass("current"),t.closest("li.toctree-l1").parent().addClass("current"),t.closest("li.toctree-l1").addClass("current"),t.closest("li.toctree-l2").addClass("current"),t.closest("li.toctree-l3").addClass("current"),t.closest("li.toctree-l4").addClass("current"),t.closest("li.toctree-l5").addClass("current"),t.closest("li.toctree-l6").addClass("current"))}catch(o){console.log("Error expanding nav for anchor",o)}},onScroll:function(){this.winScroll=!1;var n=this.win.scrollTop(),e=n+this.winHeight,t=this.navBar.scrollTop()+(n-this.winPosition);n<0||e>this.docHeight||(this.navBar.scrollTop(t),this.winPosition=n)},onResize:function(){this.winResize=!1,this.winHeight=this.win.height(),this.docHeight=$(document).height()},hashChange:function(){this.linkScroll=!0,this.win.one("hashchange",function(){this.linkScroll=!1})},toggleCurrent:function(n){var e=n.closest("li");e.siblings("li.current").removeClass("current"),e.siblings().find("li.current").removeClass("current"),e.find("> ul li.current").removeClass("current"),e.toggleClass("current")}},"undefined"!=typeof window&&(window.SphinxRtdTheme={Navigation:e.exports.ThemeNav,StickyNav:e.exports.ThemeNav}),function(){for(var r=0,n=["ms","moz","webkit","o"],e=0;e<n.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[n[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n[e]+"CancelAnimationFrame"]||window[n[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(n,e){var t=(new Date).getTime(),i=Math.max(0,16-(t-r)),o=window.setTimeout(function(){n(t+i)},i);return r=t+i,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(n){clearTimeout(n)})}()},{jquery:"jquery"}]},{},["sphinx-rtd-theme"]);
