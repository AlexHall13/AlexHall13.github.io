webpackJsonp([60],{"./node_modules/@gitbook/slate-edit-code/dist/handlers/onBackspace.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:true});o("./node_modules/@gitbook/slate/lib/slate.es.js");var s=o("./node_modules/ends-with/index.js");var r=l(s);var n=o("./node_modules/@gitbook/slate-edit-code/dist/utils/index.js");function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t,o,s){var l=o.value;if(l.isExpanded)return;var i=l.startOffset,d=l.startText;var a=l.startBlock;var u=(0,n.getCurrentIndent)(e,l);var m=a.text.slice(0,i);if((0,r.default)(m,u)){t.preventDefault();return o.deleteBackward(u.length).focus()}if(e.exitBlockType){var c=(0,n.getCurrentCode)(e,l);var f=0===i&&c.getFirstText()===d;var b=1===c.nodes.size&&0===a.text.length;if(f&&b){t.preventDefault();return o.setBlocks(e.exitBlockType,{normalize:false}).unwrapNodeByKey(a.key)}}return}t.default=i},"./node_modules/@gitbook/slate-edit-code/dist/handlers/onEnter.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:true});o("./node_modules/@gitbook/slate/lib/slate.es.js");var s=o("./node_modules/@gitbook/slate-edit-code/dist/utils/index.js");function r(e,t,o,r){var n=o.value;if(!n.isCollapsed)return;t.preventDefault();var l=n.startBlock;var i=l.text;var d=(0,s.getIndent)(i,"");return o.splitBlock().insertText(d).focus()}t.default=r},"./node_modules/@gitbook/slate-edit-code/dist/handlers/onKeyDown.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:true});var s=o("./node_modules/is-hotkey/lib/index.js");o("./node_modules/@gitbook/slate/lib/slate.es.js");var r=o("./node_modules/@gitbook/slate-edit-code/dist/utils/index.js");var n=o("./node_modules/@gitbook/slate-edit-code/dist/handlers/onTab.js");var l=y(n);var i=o("./node_modules/@gitbook/slate-edit-code/dist/handlers/onShiftTab.js");var d=y(i);var a=o("./node_modules/@gitbook/slate-edit-code/dist/handlers/onEnter.js");var u=y(a);var m=o("./node_modules/@gitbook/slate-edit-code/dist/handlers/onModEnter.js");var c=y(m);var f=o("./node_modules/@gitbook/slate-edit-code/dist/handlers/onBackspace.js");var b=y(f);var v=o("./node_modules/@gitbook/slate-edit-code/dist/handlers/onSelectAll.js");var _=y(v);function y(e){return e&&e.__esModule?e:{default:e}}var j=(0,s.isKeyHotkey)("mod+a");var g=(0,s.isKeyHotkey)("shift+tab");var p=(0,s.isKeyHotkey)("tab");var k=(0,s.isKeyHotkey)("mod+enter");var h=(0,s.isKeyHotkey)("enter");var I=(0,s.isKeyHotkey)("backspace");function x(e,t,o,s){var n=o.value;var i=(0,r.getCurrentCode)(e,n);if(!i)return;var a=[e,t,o,s];if(e.selectAll&&j(t))return _.default.apply(void 0,a);if(g(t))return d.default.apply(void 0,a);if(p(t))return l.default.apply(void 0,a);if(e.exitBlockType&&k(t))return c.default.apply(void 0,a);if(h(t))return u.default.apply(void 0,a);if(I(t))return b.default.apply(void 0,a);return}t.default=x},"./node_modules/@gitbook/slate-edit-code/dist/handlers/onModEnter.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:true});o("./node_modules/@gitbook/slate/lib/slate.es.js");function s(e,t,o,s){var r=o.value;if(!r.isCollapsed)return;t.preventDefault();return e.resolvedOnExit(o)}t.default=s},"./node_modules/@gitbook/slate-edit-code/dist/handlers/onPaste.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:true});var s=o("./node_modules/@gitbook/slate/lib/slate.es.js");var r=o("./node_modules/@gitbook/slate-react/lib/slate-react.es.js");var n=o("./node_modules/@gitbook/slate-edit-code/dist/utils/index.js");function l(e,t,o,l){var i=o.value;var d=(0,r.getEventTransfer)(t);var a=(0,n.getCurrentCode)(e,i);var u=i.endBlock;if(!a||!a.hasDescendant(u.key))return;var m=void 0;m="fragment"===d.type?d.fragment.getTexts().map(function(e){return e.text}).join("\n"):d.text;var c=(0,n.deserializeCode)(e,m).nodes;var f=s.Document.create({nodes:c});return o.insertFragment(f)}t.default=l},"./node_modules/@gitbook/slate-edit-code/dist/handlers/onSelectAll.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:true});o("./node_modules/@gitbook/slate/lib/slate.es.js");var s=o("./node_modules/@gitbook/slate-edit-code/dist/utils/index.js");function r(e,t,o,r){var n=o.value;t.preventDefault();var l=(0,s.getCurrentCode)(e,n);return o.collapseToStartOf(l.getFirstText()).extendToEndOf(l.getLastText())}t.default=r},"./node_modules/@gitbook/slate-edit-code/dist/handlers/onShiftTab.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:true});o("./node_modules/@gitbook/slate/lib/slate.es.js");var s=o("./node_modules/@gitbook/slate-edit-code/dist/utils/index.js");var r=o("./node_modules/@gitbook/slate-edit-code/dist/changes/index.js");function n(e,t,o,n){var l=o.value;t.preventDefault();t.stopPropagation();var i=(0,s.getCurrentIndent)(e,l);return(0,r.dedentLines)(e,o,i)}t.default=n},"./node_modules/@gitbook/slate-edit-code/dist/handlers/onTab.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:true});o("./node_modules/@gitbook/slate/lib/slate.es.js");var s=o("./node_modules/@gitbook/slate-edit-code/dist/utils/index.js");var r=o("./node_modules/@gitbook/slate-edit-code/dist/changes/index.js");function n(e,t,o,n){var l=o.value;t.preventDefault();t.stopPropagation();var i=l.isCollapsed;var d=(0,s.getCurrentIndent)(e,l);if(i)return o.insertText(d).focus();return(0,r.indentLines)(e,o,d)}t.default=n},"./node_modules/@gitbook/slate-edit-list/dist/changes/decreaseItemDepth.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:true});var s=o("./node_modules/@gitbook/slate/lib/slate.es.js");var r=o("./node_modules/@gitbook/slate-edit-list/dist/utils/index.js");function n(e,t){var o=t.value;var n=o.document;var l=(0,r.getItemDepth)(e,o);if(1==l)return t;var i=(0,r.getCurrentItem)(e,o);if(!i)return t;var d=n.getParent(i.key);var a=n.getParent(d.key);var u=n.getParent(a.key);var m=d.nodes.skipUntil(function(e){return e===i}).rest();var c=d.nodes.size===m.size+1;if(m.isEmpty())t.moveNodeByKey(i.key,u.key,u.nodes.indexOf(a)+1);else{var f=s.Block.create({object:"block",type:d.type,data:d.data});t.insertNodeByKey(i.key,i.nodes.size,f,{normalize:false});t.moveNodeByKey(i.key,u.key,u.nodes.indexOf(a)+1,{normalize:false});m.forEach(function(e,o){return t.moveNodeByKey(e.key,f.key,f.nodes.size+o,{normalize:false})})}c&&t.removeNodeByKey(d.key);return t}t.default=n},"./node_modules/@gitbook/slate-edit-list/dist/changes/increaseItemDepth.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:true});var s=o("./node_modules/@gitbook/slate/lib/slate.es.js");var r=o("./node_modules/@gitbook/slate-edit-list/dist/utils/index.js");function n(e,t){var o=(0,r.getPreviousItem)(e,t.value);var s=(0,r.getCurrentItem)(e,t.value);if(!o)return t;if(!s)return t;return l(e,t,s,o.key)}function l(e,t,o,n){var l=t.value.document.getDescendant(n);var i=l.nodes.size;var d=l.nodes.last();var a=(0,r.isList)(e,d)?d:null;if(a)return t.moveNodeByKey(o.key,a.key,a.nodes.size);var u=(0,r.getListForItem)(e,t.value,l);if(!u)throw new Error("Destination is not in a list");var m=s.Block.create({object:"block",type:u.type,data:u.data});t.insertNodeByKey(n,i,m,{normalize:false});return t.moveNodeByKey(o.key,m.key,0)}t.default=n},"./node_modules/@gitbook/slate-edit-list/dist/changes/index.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.decreaseItemDepth=t.increaseItemDepth=t.splitListItem=t.unwrapList=t.wrapInList=void 0;var s=o("./node_modules/@gitbook/slate-edit-list/dist/changes/wrapInList.js");var r=f(s);var n=o("./node_modules/@gitbook/slate-edit-list/dist/changes/unwrapList.js");var l=f(n);var i=o("./node_modules/@gitbook/slate-edit-list/dist/changes/splitListItem.js");var d=f(i);var a=o("./node_modules/@gitbook/slate-edit-list/dist/changes/increaseItemDepth.js");var u=f(a);var m=o("./node_modules/@gitbook/slate-edit-list/dist/changes/decreaseItemDepth.js");var c=f(m);function f(e){return e&&e.__esModule?e:{default:e}}t.wrapInList=r.default;t.unwrapList=l.default;t.splitListItem=d.default;t.increaseItemDepth=u.default;t.decreaseItemDepth=c.default},"./node_modules/@gitbook/slate-edit-list/dist/changes/splitListItem.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:true});o("./node_modules/@gitbook/slate/lib/slate.es.js");var s=o("./node_modules/@gitbook/slate-edit-list/dist/utils/index.js");function r(e,t){var o=t.value;var r=(0,s.getCurrentItem)(e,o);if(!r)return t;var n=o.startOffset;return t.splitDescendantsByKey(r.key,o.startKey,n)}t.default=r},"./node_modules/@gitbook/slate-edit-list/dist/changes/unwrapList.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:true});o("./node_modules/@gitbook/slate/lib/slate.es.js");var s=o("./node_modules/@gitbook/slate-edit-list/dist/utils/index.js");function r(e,t){var o=(0,s.getItemsAtRange)(e,t.value);if(o.isEmpty())return t;o.forEach(function(e){return t.unwrapNodeByKey(e.key,{normalize:false})});var r=o.first();var n=t.value.document.getParent(r.key);var l=n.nodes.findIndex(function(e){return e.key===r.key});o.forEach(function(e){e.nodes.forEach(function(e){t.moveNodeByKey(e.key,n.key,l,{normalize:false});l+=1})});o.forEach(function(e){return t.removeNodeByKey(e.key,{normalize:false})});return t}t.default=r},"./node_modules/@gitbook/slate-edit-list/dist/changes/wrapInList.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:true});var s=o("./node_modules/@gitbook/slate/lib/slate.es.js");var r=o("./node_modules/immutable/dist/immutable.js");var n=o("./node_modules/@gitbook/slate-edit-list/dist/utils/index.js");function l(e,t,o,r){var l=i(t.value);o=o||e.types[0];t.wrapBlock({type:o,data:s.Data.create(r)},{normalize:false});l.forEach(function(o){(0,n.isList)(e,o)?o.nodes.forEach(function(e){var o=e.key;return t.unwrapNodeByKey(o,{normalize:false})}):t.wrapBlockByKey(o.key,e.typeItem,{normalize:false})});return t.normalize()}function i(e){var t=e.selection;var o=e.document;var s=o.getClosestBlock(t.startKey);var n=o.getClosestBlock(t.endKey);if(s===n)return(0,r.List)([s]);var l=o.getCommonAncestor(s.key,n.key);var i=l.getPath(s.key);var d=l.getPath(n.key);return l.nodes.slice(i[0],d[0]+1)}t.default=l},"./node_modules/@gitbook/slate-edit-list/dist/core.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:true});var s=o("./node_modules/babel-runtime/helpers/toConsumableArray.js");var r=u(s);var n=o("./node_modules/@gitbook/slate-edit-list/dist/options.js");var l=u(n);var i=o("./node_modules/@gitbook/slate-edit-list/dist/validation/index.js");var d=o("./node_modules/@gitbook/slate-edit-list/dist/changes/index.js");var a=o("./node_modules/@gitbook/slate-edit-list/dist/utils/index.js");function u(e){return e&&e.__esModule?e:{default:e}}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e=new l.default(e);return{schema:(0,i.schema)(e),validateNode:(0,i.validateNode)(e),utils:{getCurrentItem:a.getCurrentItem.bind(null,e),getCurrentList:a.getCurrentList.bind(null,e),getItemDepth:a.getItemDepth.bind(null,e),getItemsAtRange:a.getItemsAtRange.bind(null,e),getPreviousItem:a.getPreviousItem.bind(null,e),isList:a.isList.bind(null,e),isSelectionInList:a.isSelectionInList.bind(null,e)},changes:{decreaseItemDepth:c(e,d.decreaseItemDepth),increaseItemDepth:c(e,d.increaseItemDepth),splitListItem:c(e,d.splitListItem),unwrapList:c(e,d.unwrapList),wrapInList:d.wrapInList.bind(null,e)}}}function c(e,t){return function(o){for(var s=arguments.length,n=Array(s>1?s-1:0),l=1;l<s;l++)n[l-1]=arguments[l];var i=o.value;if(!(0,a.isSelectionInList)(e,i))return o;return t.apply(void 0,(0,r.default)([e,o].concat(n)))}}t.default=m},"./node_modules/@gitbook/slate-edit-list/dist/handlers/index.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.onBackspace=t.onTab=t.onEnter=void 0;var s=o("./node_modules/@gitbook/slate-edit-list/dist/handlers/onEnter.js");var r=a(s);var n=o("./node_modules/@gitbook/slate-edit-list/dist/handlers/onTab.js");var l=a(n);var i=o("./node_modules/@gitbook/slate-edit-list/dist/handlers/onBackspace.js");var d=a(i);function a(e){return e&&e.__esModule?e:{default:e}}t.onEnter=r.default;t.onTab=l.default;t.onBackspace=d.default},"./node_modules/@gitbook/slate-edit-list/dist/index.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:true});var s=o("./node_modules/babel-runtime/helpers/extends.js");var r=u(s);var n=o("./node_modules/@gitbook/slate-edit-list/dist/options.js");var l=u(n);var i=o("./node_modules/@gitbook/slate-edit-list/dist/handlers/index.js");var d=o("./node_modules/@gitbook/slate-edit-list/dist/core.js");var a=u(d);function u(e){return e&&e.__esModule?e:{default:e}}var m="Enter";var c="Tab";var f="Backspace";function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e=new l.default(e);var t=(0,a.default)(e);return(0,r.default)({},t,{onKeyDown:v.bind(null,e)})}function v(e,t,o,s){var r=[t,o,s,e];switch(t.key){case m:return i.onEnter.apply(void 0,r);case c:return i.onTab.apply(void 0,r);case f:return i.onBackspace.apply(void 0,r);default:return}}t.default=b},"./node_modules/@gitbook/slate-edit-list/dist/options.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:true});var s=o("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");var r=c(s);var n=o("./node_modules/babel-runtime/helpers/classCallCheck.js");var l=c(n);var i=o("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");var d=c(i);var a=o("./node_modules/babel-runtime/helpers/inherits.js");var u=c(a);var m=o("./node_modules/immutable/dist/immutable.js");function c(e){return e&&e.__esModule?e:{default:e}}var f=function(e){(0,u.default)(t,e);function t(){(0,l.default)(this,t);return(0,d.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return t}((0,m.Record)({types:["ul_list","ol_list"],typeItem:"list_item",typeDefault:"paragraph",canMerge:function e(t,o){return t.type===o.type}}));t.default=f},"./node_modules/@gitbook/slate-edit-list/dist/utils/getCurrentItem.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:true});o("./node_modules/@gitbook/slate/lib/slate.es.js");function s(e,t,o){var s=t.document;if(!o){if(!t.selection.startKey)return null;o=t.startBlock}var r=s.getParent(o.key);return r&&r.type===e.typeItem?r:null}t.default=s},"./node_modules/@gitbook/slate-edit-list/dist/utils/getCurrentList.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:true});o("./node_modules/@gitbook/slate/lib/slate.es.js");var s=o("./node_modules/@gitbook/slate-edit-list/dist/utils/getCurrentItem.js");var r=i(s);var n=o("./node_modules/@gitbook/slate-edit-list/dist/utils/getListForItem.js");var l=i(n);function i(e){return e&&e.__esModule?e:{default:e}}function d(e,t,o){var s=(0,r.default)(e,t,o);if(!s)return null;return(0,l.default)(e,t,s)}t.default=d},"./node_modules/@gitbook/slate-edit-list/dist/utils/getItemDepth.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:true});o("./node_modules/@gitbook/slate/lib/slate.es.js");var s=o("./node_modules/@gitbook/slate-edit-list/dist/utils/getCurrentItem.js");var r=n(s);function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t,o){var s=t.document,n=t.startBlock;o=o||n;var i=(0,r.default)(e,t,o);if(!i)return 0;var d=s.getParent(i.key);return 1+l(e,t,d)}t.default=l},"./node_modules/@gitbook/slate-edit-list/dist/utils/getItemsAtRange.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:true});o("./node_modules/@gitbook/slate/lib/slate.es.js");var s=o("./node_modules/immutable/dist/immutable.js");var r=o("./node_modules/@gitbook/slate-edit-list/dist/utils/isList.js");var n=d(r);var l=o("./node_modules/@gitbook/slate-edit-list/dist/utils/getCurrentItem.js");var i=d(l);function d(e){return e&&e.__esModule?e:{default:e}}function a(e,t,o){o=o||t.selection;if(!o.startKey)return(0,s.List)();var r=t.document;var l=r.getClosestBlock(o.startKey);var d=r.getClosestBlock(o.endKey);if(l===d){var a=(0,i.default)(e,t,l);return a?(0,s.List)([a]):(0,s.List)()}var u=r.getCommonAncestor(l.key,d.key);if((0,n.default)(e,u)){var m=u.getPath(l.key);var c=u.getPath(d.key);return u.nodes.slice(m[0],c[0]+1)}if(u.type===e.typeItem)return(0,s.List)([u]);return(0,s.List)()}t.default=a},"./node_modules/@gitbook/slate-edit-list/dist/utils/getListForItem.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:true});o("./node_modules/@gitbook/slate/lib/slate.es.js");var s=o("./node_modules/@gitbook/slate-edit-list/dist/utils/isList.js");var r=n(s);function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t,o){var s=t.document;var n=s.getParent(o.key);return n&&(0,r.default)(e,n)?n:null}t.default=l},"./node_modules/@gitbook/slate-edit-list/dist/utils/getPreviousItem.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:true});o("./node_modules/@gitbook/slate/lib/slate.es.js");var s=o("./node_modules/@gitbook/slate-edit-list/dist/utils/getCurrentItem.js");var r=n(s);function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t,o){var s=t.document,n=t.startBlock;o=o||n;var l=(0,r.default)(e,t,o);if(!l)return null;var i=s.getPreviousSibling(l.key);if(!i)return null;if(i.type===e.typeItem)return i;return null}t.default=l},"./node_modules/@gitbook/slate-edit-list/dist/utils/index.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.isSelectionInList=t.isList=t.getPreviousItem=t.getListForItem=t.getItemsAtRange=t.getItemDepth=t.getCurrentList=t.getCurrentItem=void 0;var s=o("./node_modules/@gitbook/slate-edit-list/dist/utils/getCurrentItem.js");var r=g(s);var n=o("./node_modules/@gitbook/slate-edit-list/dist/utils/getCurrentList.js");var l=g(n);var i=o("./node_modules/@gitbook/slate-edit-list/dist/utils/getItemDepth.js");var d=g(i);var a=o("./node_modules/@gitbook/slate-edit-list/dist/utils/getItemsAtRange.js");var u=g(a);var m=o("./node_modules/@gitbook/slate-edit-list/dist/utils/getListForItem.js");var c=g(m);var f=o("./node_modules/@gitbook/slate-edit-list/dist/utils/getPreviousItem.js");var b=g(f);var v=o("./node_modules/@gitbook/slate-edit-list/dist/utils/isList.js");var _=g(v);var y=o("./node_modules/@gitbook/slate-edit-list/dist/utils/isSelectionInList.js");var j=g(y);function g(e){return e&&e.__esModule?e:{default:e}}t.getCurrentItem=r.default;t.getCurrentList=l.default;t.getItemDepth=d.default;t.getItemsAtRange=u.default;t.getListForItem=c.default;t.getPreviousItem=b.default;t.isList=_.default;t.isSelectionInList=j.default},"./node_modules/@gitbook/slate-edit-list/dist/utils/isList.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:true});o("./node_modules/@gitbook/slate/lib/slate.es.js");function s(e,t){return e.types.includes(t.type)}t.default=s},"./node_modules/@gitbook/slate-edit-list/dist/utils/isSelectionInList.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:true});o("./node_modules/@gitbook/slate/lib/slate.es.js");var s=o("./node_modules/@gitbook/slate-edit-list/dist/utils/getItemsAtRange.js");var r=i(s);var n=o("./node_modules/@gitbook/slate-edit-list/dist/utils/getListForItem.js");var l=i(n);function i(e){return e&&e.__esModule?e:{default:e}}function d(e,t,o){var s=(0,r.default)(e,t);return!s.isEmpty()&&(!o||(0,l.default)(e,t,s.first()).get("type")===o)}t.default=d},"./node_modules/@gitbook/slate-edit-list/dist/validation/index.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.validateNode=t.schema=void 0;var s=o("./node_modules/@gitbook/slate-edit-list/dist/validation/schema.js");var r=i(s);var n=o("./node_modules/@gitbook/slate-edit-list/dist/validation/validateNode.js");var l=i(n);function i(e){return e&&e.__esModule?e:{default:e}}t.schema=r.default;t.validateNode=l.default},"./node_modules/@gitbook/slate-edit-list/dist/validation/schema.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:true});var s=o("./node_modules/babel-runtime/helpers/defineProperty.js");var r=n(s);o("./node_modules/@gitbook/slate/lib/slate.es.js");function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t={blocks:(0,r.default)({},e.typeItem,{parent:{types:e.types},nodes:[{objects:["block"]}],normalize:i({parent_type_invalid:function e(t,o){return t.unwrapBlockByKey(o.node.key,{normalize:false})},child_object_invalid:function t(o,s){return d(e,o,s.node)}})})};e.types.forEach(function(o){t.blocks[o]={nodes:[{types:[e.typeItem]}],normalize:i({child_type_invalid:function t(o,s){return o.wrapBlockByKey(s.child.key,e.typeItem,{normalize:false})}})}});return t}function i(e){return function(t,o,s){var r=e[o];r&&r(t,s)}}function d(e,t,o){t.wrapBlockByKey(o.nodes.first().key,e.typeDefault,{normalize:false});var s=t.value.document.getDescendant(o.key).nodes.first();o.nodes.rest().forEach(function(e,o){return t.moveNodeByKey(e.key,s.key,o+1,{normalize:false})});return t}t.default=l},"./node_modules/@gitbook/slate-edit-list/dist/validation/validateNode.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:true});var s=o("./node_modules/babel-runtime/helpers/slicedToArray.js");var r=l(s);o("./node_modules/@gitbook/slate/lib/slate.es.js");var n=o("./node_modules/@gitbook/slate-edit-list/dist/utils/index.js");function l(e){return e&&e.__esModule?e:{default:e}}function i(e){return function(t){return d(e,t)}}function d(e,t){if("document"!==t.object&&"block"!==t.object)return;var o=t.nodes.map(function(o,s){if(!(0,n.isList)(e,o))return null;var r=t.nodes.get(s+1);if(!r||!(0,n.isList)(e,r)||!e.canMerge(o,r))return null;return[o,r]}).filter(Boolean);if(o.isEmpty())return;return function(e){o.reverse().forEach(function(t){var o=(0,r.default)(t,2),s=o[0],n=o[1];var l=e.value.document.getDescendant(n.key);l.nodes.forEach(function(t,o){e.moveNodeByKey(t.key,s.key,s.nodes.size+o,{normalize:false})});e.removeNodeByKey(n.key,{normalize:false})})}}t.default=i},"./node_modules/babel-runtime/core-js/array/from.js":function(e,t,o){e.exports={default:o("./node_modules/babel-runtime/node_modules/core-js/library/fn/array/from.js"),__esModule:true}},"./node_modules/babel-runtime/core-js/get-iterator.js":function(e,t,o){e.exports={default:o("./node_modules/babel-runtime/node_modules/core-js/library/fn/get-iterator.js"),__esModule:true}},"./node_modules/babel-runtime/core-js/is-iterable.js":function(e,t,o){e.exports={default:o("./node_modules/babel-runtime/node_modules/core-js/library/fn/is-iterable.js"),__esModule:true}},"./node_modules/babel-runtime/helpers/defineProperty.js":function(e,t,o){"use strict";t.__esModule=true;var s=o("./node_modules/babel-runtime/core-js/object/define-property.js");var r=n(s);function n(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,o){t in e?(0,r.default)(e,t,{value:o,enumerable:true,configurable:true,writable:true}):e[t]=o;return e}},"./node_modules/babel-runtime/helpers/extends.js":function(e,t,o){"use strict";t.__esModule=true;var s=o("./node_modules/babel-runtime/core-js/object/assign.js");var r=n(s);function n(e){return e&&e.__esModule?e:{default:e}}t.default=r.default||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s])}return e}},"./node_modules/babel-runtime/helpers/slicedToArray.js":function(e,t,o){"use strict";t.__esModule=true;var s=o("./node_modules/babel-runtime/core-js/is-iterable.js");var r=i(s);var n=o("./node_modules/babel-runtime/core-js/get-iterator.js");var l=i(n);function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(){function e(e,t){var o=[];var s=true;var r=false;var n=void 0;try{for(var i=(0,l.default)(e),d;!(s=(d=i.next()).done);s=true){o.push(d.value);if(t&&o.length===t)break}}catch(e){r=true;n=e}finally{try{!s&&i["return"]&&i["return"]()}finally{if(r)throw n}}return o}return function(t,o){if(Array.isArray(t))return t;if((0,r.default)(Object(t)))return e(t,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},"./node_modules/babel-runtime/helpers/toConsumableArray.js":function(e,t,o){"use strict";t.__esModule=true;var s=o("./node_modules/babel-runtime/core-js/array/from.js");var r=n(s);function n(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return(0,r.default)(e)}},"./node_modules/babel-runtime/node_modules/core-js/library/fn/array/from.js":function(e,t,o){o("./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js");o("./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.from.js");e.exports=o("./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Array.from},"./node_modules/babel-runtime/node_modules/core-js/library/fn/get-iterator.js":function(e,t,o){o("./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js");o("./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js");e.exports=o("./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator.js")},"./node_modules/babel-runtime/node_modules/core-js/library/fn/is-iterable.js":function(e,t,o){o("./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js");o("./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js");e.exports=o("./node_modules/babel-runtime/node_modules/core-js/library/modules/core.is-iterable.js")},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_classof.js":function(e,t,o){var s=o("./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js");var r=o("./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")("toStringTag");var n="Arguments"==s(function(){return arguments}());var l=function(e,t){try{return e[t]}catch(e){}};e.exports=function(e){var t,o,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(o=l(t=Object(e),r))?o:n?s(t):"Object"==(i=s(t))&&"function"==typeof t.callee?"Arguments":i}},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_create-property.js":function(e,t,o){"use strict";var s=o("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");var r=o("./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");e.exports=function(e,t,o){t in e?s.f(e,t,r(0,o)):e[t]=o}},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array-iter.js":function(e,t,o){var s=o("./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");var r=o("./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")("iterator");var n=Array.prototype;e.exports=function(e){return void 0!==e&&(s.Array===e||n[r]===e)}},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-call.js":function(e,t,o){var s=o("./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");e.exports=function(e,t,o,r){try{return r?t(s(o)[0],o[1]):t(o)}catch(t){var n=e["return"];void 0!==n&&s(n.call(e));throw t}}},"./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-detect.js":function(e,t,o){var s=o("./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")("iterator");var r=false;try{var n=[7][s]();n["return"]=function(){r=true};Array.from(n,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!r)return false;var o=false;try{var n=[7];var l=n[s]();l.next=function(){return{done:o=true}};n[s]=function(){return l};e(n)}catch(e){}return o}},"./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator-method.js":function(e,t,o){var s=o("./node_modules/babel-runtime/node_modules/core-js/library/modules/_classof.js");var r=o("./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")("iterator");var n=o("./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");e.exports=o("./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").getIteratorMethod=function(e){if(void 0!=e)return e[r]||e["@@iterator"]||n[s(e)]}},"./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator.js":function(e,t,o){var s=o("./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");var r=o("./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator-method.js");e.exports=o("./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").getIterator=function(e){var t=r(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return s(t.call(e))}},"./node_modules/babel-runtime/node_modules/core-js/library/modules/core.is-iterable.js":function(e,t,o){var s=o("./node_modules/babel-runtime/node_modules/core-js/library/modules/_classof.js");var r=o("./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")("iterator");var n=o("./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");e.exports=o("./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").isIterable=function(e){var t=Object(e);return void 0!==t[r]||"@@iterator"in t||n.hasOwnProperty(s(t))}},"./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.from.js":function(e,t,o){"use strict";var s=o("./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js");var r=o("./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");var n=o("./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js");var l=o("./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-call.js");var i=o("./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array-iter.js");var d=o("./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js");var a=o("./node_modules/babel-runtime/node_modules/core-js/library/modules/_create-property.js");var u=o("./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator-method.js");r(r.S+r.F*!o("./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-detect.js")(function(e){Array.from(e)}),"Array",{from:function e(t){var o=n(t);var r="function"==typeof this?this:Array;var m=arguments.length;var c=m>1?arguments[1]:void 0;var f=void 0!==c;var b=0;var v=u(o);var _,y,j,g;f&&(c=s(c,m>2?arguments[2]:void 0,2));if(void 0==v||r==Array&&i(v)){_=d(o.length);for(y=new r(_);_>b;b++)a(y,b,f?c(o[b],b):o[b])}else for(g=v.call(o),y=new r;!(j=g.next()).done;b++)a(y,b,f?l(g,c,[j.value,b],true):j.value);y.length=b;return y}})},"./node_modules/ends-with/index.js":function(e,t,o){"use strict";
/*!
 * ends-with <https://github.com/jonschlinkert/ends-with>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */e.exports=function(e,t){if(Array.isArray(e))return e[e.length-1]===t;e=String(e);t=String(t);var o=t.length;var s=e.length-o;while(o--)if(t.charAt(o)!==e.charAt(s+o))return false;return true}}});
//# space-part-38.fc3c28d2.js.map