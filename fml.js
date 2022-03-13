"use strict";var e=require("fs-extra"),r=require("dagrejs"),t=require("svgdom"),n=require("@svgdotjs/svg.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=o(e),i=o(r),l=o(t),u=o(n);function c(e,r,t,n){this.message=e,this.expected=r,this.found=t,this.location=n,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,c)}!function(e,r){function t(){this.constructor=e}t.prototype=r.prototype,e.prototype=new t}(c,Error),c.buildMessage=function(e,r){var t={literal:function(e){return'"'+o(e.text)+'"'},class:function(e){var r,t="";for(r=0;r<e.parts.length;r++)t+=e.parts[r]instanceof Array?a(e.parts[r][0])+"-"+a(e.parts[r][1]):a(e.parts[r]);return"["+(e.inverted?"^":"")+t+"]"},any:function(e){return"any character"},end:function(e){return"end of input"},other:function(e){return e.description}};function n(e){return e.charCodeAt(0).toString(16).toUpperCase()}function o(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+n(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+n(e)}))}function a(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+n(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+n(e)}))}return"Expected "+function(e){var r,n,o,a=new Array(e.length);for(r=0;r<e.length;r++)a[r]=(o=e[r],t[o.type](o));if(a.sort(),a.length>0){for(r=1,n=1;r<a.length;r++)a[r-1]!==a[r]&&(a[n]=a[r],n++);a.length=n}switch(a.length){case 1:return a[0];case 2:return a[0]+" or "+a[1];default:return a.slice(0,-1).join(", ")+", or "+a[a.length-1]}}(e)+" but "+function(e){return e?'"'+o(e)+'"':"end of input"}(r)+" found."};var s={SyntaxError:c,parse:function(e,r){r=void 0!==r?r:{};var t,n,o,a,i={},l={FML:Y},u=Y,s="=>",f=H("=>",!1),d="<=",p=H("<=",!1),h="<--\x3e",g=H("<--\x3e",!1),m=H(":",!1),v=H("{",!1),x=",",y=H(",",!1),b=H("}",!1),A=H("(",!1),k=H(")",!1),w=H("[",!1),E=H("]",!1),C="[ ]",q=H("[ ]",!1),F="[]",S=H("[]",!1),M="[*]",j=H("[*]",!1),G=/^[a-zA-Z0-9\/._\- ]/,R=I([["a","z"],["A","Z"],["0","9"],"/",".","_","-"," "],!1,!1),U=function(){return e.substring(_,Z)},W=K("whitespace"),z=/^[ \t\n\r]/,L=I([" ","\t","\n","\r"],!1,!1),N=K("eol"),T=/^[\n\r]/,V=I(["\n","\r"],!1,!1),Z=0,_=0,D=[{line:1,column:1}],J=0,O=[],B=0;if("startRule"in r){if(!(r.startRule in l))throw new Error("Can't start parsing from rule \""+r.startRule+'".');u=l[r.startRule]}function H(e,r){return{type:"literal",text:e,ignoreCase:r}}function I(e,r,t){return{type:"class",parts:e,inverted:r,ignoreCase:t}}function K(e){return{type:"other",description:e}}function P(r){var t,n=D[r];if(n)return n;for(t=r-1;!D[t];)t--;for(n={line:(n=D[t]).line,column:n.column};t<r;)10===e.charCodeAt(t)?(n.line++,n.column=1):n.column++,t++;return D[r]=n,n}function Q(e,r){var t=P(e),n=P(r);return{start:{offset:e,line:t.line,column:t.column},end:{offset:r,line:n.line,column:n.column}}}function X(e){Z<J||(Z>J&&(J=Z,O=[]),O.push(e))}function Y(){var e,r,t;return e=Z,(r=ee())!==i?(t=function(){var e,r,t;e=Z,r=[],t=$();for(;t!==i;)r.push(t),t=$();r!==i&&(_=e,(n=r).forEach(((e,r)=>{""==e.from&&(e.from="rimply"==n[r-1].type?n[r-1].from:n[r-1].to),""==e.to&&(e.to="rimply"==n[r-1].type?n[r-1].from:n[r-1].to)})),r={imply:n.filter((e=>"imply"==e.type||"rimply"==e.type)),exclude:n.filter((e=>"exclude"==e.type))});var n;return e=r}(),t!==i?e=r=[r,t]:(Z=e,e=i)):(Z=e,e=i),e}function $(){var r;return(r=function(){var r,t,n,o;r=Z,(t=te())!==i&&ne()!==i?(e.substr(Z,4)===h?(n=h,Z+=4):(n=i,0===B&&X(g)),n!==i&&ne()!==i&&(o=te())!==i&&oe()!==i?(_=r,a=o,r=t={from:t.trim(),to:a.trim(),type:"exclude"}):(Z=r,r=i)):(Z=r,r=i);var a;return r}())===i&&(r=function(){var r,t,n,o;r=Z,(t=te())!==i&&ne()!==i?(e.substr(Z,2)===s?(n=s,Z+=2):(n=i,0===B&&X(f)),n!==i&&ne()!==i&&(o=te())!==i&&oe()!==i?(_=r,a=o,r=t={from:t.trim(),to:a.trim(),type:"imply"}):(Z=r,r=i)):(Z=r,r=i);var a;return r}())===i&&(r=function(){var r,t,n,o;r=Z,(t=te())!==i&&ne()!==i?(e.substr(Z,2)===d?(n=d,Z+=2):(n=i,0===B&&X(p)),n!==i&&ne()!==i&&(o=te())!==i&&oe()!==i?(_=r,a=t,r=t={from:o.trim(),to:a.trim(),type:"rimply"}):(Z=r,r=i)):(Z=r,r=i);var a;return r}()),r}function ee(){var r;return(r=function(){var r,t,n,o;r=Z,(t=re())!==i?(58===e.charCodeAt(Z)?(n=":",Z++):(n=i,0===B&&X(m)),n!==i?(o=function(){var r,t,n,o,a,l,u,c;if(r=Z,(t=ne())!==i)if(123===e.charCodeAt(Z)?(n="{",Z++):(n=i,0===B&&X(v)),n!==i)if(ne()!==i)if((o=ee())!==i){for(a=[],l=Z,44===e.charCodeAt(Z)?(u=x,Z++):(u=i,0===B&&X(y)),u!==i&&(c=ee())!==i?l=u=[u,c]:(Z=l,l=i);l!==i;)a.push(l),l=Z,44===e.charCodeAt(Z)?(u=x,Z++):(u=i,0===B&&X(y)),u!==i&&(c=ee())!==i?l=u=[u,c]:(Z=l,l=i);a!==i&&(l=ne())!==i?(125===e.charCodeAt(Z)?(u="}",Z++):(u=i,0===B&&X(b)),u!==i&&(c=ne())!==i?(_=r,r=t={exclusive:!0,list:[o].concat(a).flat().filter((e=>","!=e))}):(Z=r,r=i)):(Z=r,r=i)}else Z=r,r=i;else Z=r,r=i;else Z=r,r=i;else Z=r,r=i;if(r===i){if(r=Z,(t=ne())!==i)if(40===e.charCodeAt(Z)?(n="(",Z++):(n=i,0===B&&X(A)),n!==i)if(ne()!==i)if((o=ee())!==i){for(a=[],l=Z,44===e.charCodeAt(Z)?(u=x,Z++):(u=i,0===B&&X(y)),u!==i&&(c=ee())!==i?l=u=[u,c]:(Z=l,l=i);l!==i;)a.push(l),l=Z,44===e.charCodeAt(Z)?(u=x,Z++):(u=i,0===B&&X(y)),u!==i&&(c=ee())!==i?l=u=[u,c]:(Z=l,l=i);a!==i&&(l=ne())!==i?(41===e.charCodeAt(Z)?(u=")",Z++):(u=i,0===B&&X(k)),u!==i&&(c=ne())!==i?(_=r,t=function(e,r){return{exclusive:!1,list:[e].concat(r).flat().filter((e=>","!=e))}}(o,a),r=t):(Z=r,r=i)):(Z=r,r=i)}else Z=r,r=i;else Z=r,r=i;else Z=r,r=i;else Z=r,r=i;if(r===i)if(r=Z,(t=ne())!==i)if(91===e.charCodeAt(Z)?(n="[",Z++):(n=i,0===B&&X(w)),n!==i)if(ne()!==i)if((o=ee())!==i){for(a=[],l=Z,44===e.charCodeAt(Z)?(u=x,Z++):(u=i,0===B&&X(y)),u!==i&&(c=ee())!==i?l=u=[u,c]:(Z=l,l=i);l!==i;)a.push(l),l=Z,44===e.charCodeAt(Z)?(u=x,Z++):(u=i,0===B&&X(y)),u!==i&&(c=ee())!==i?l=u=[u,c]:(Z=l,l=i);a!==i&&(l=ne())!==i?(93===e.charCodeAt(Z)?(u="]",Z++):(u=i,0===B&&X(E)),u!==i&&(c=ne())!==i?(_=r,t=function(e,r){return{exclusive:void 0,list:[e].concat(r).flat().filter((e=>","!=e))}}(o,a),r=t):(Z=r,r=i)):(Z=r,r=i)}else Z=r,r=i;else Z=r,r=i;else Z=r,r=i;else Z=r,r=i}return r}(),o!==i?(_=r,l=o,r=t={required:(a=t).required,label:a.label.trim(),exclusive:l.exclusive,features:l.list}):(Z=r,r=i)):(Z=r,r=i)):(Z=r,r=i);var a,l;return r}())===i&&(r=re()),r}function re(){var r,t,n;return r=Z,ne()!==i?(t=function(){var r,t;r=function(){var r,t;r=Z,e.substr(Z,3)===M?(t=M,Z+=3):(t=i,0===B&&X(j));t!==i&&(_=r,t=!0);return r=t}(),r===i&&(r=function(){var r,t;r=Z,e.substr(Z,3)===C?(t=C,Z+=3):(t=i,0===B&&X(q));t!==i&&(_=r,t=!1);return r=t}(),r===i&&(r=function(){var r,t;r=Z,e.substr(Z,2)===F?(t=F,Z+=2):(t=i,0===B&&X(S));t!==i&&(_=r,t=!1);return r=t}(),r===i&&(r=Z,(t=ne())!==i&&(_=r,t=void 0),r=t)));return r}(),t!==i&&ne()!==i&&(n=te())!==i&&ne()!==i?(_=r,r={required:t,label:n.trim()}):(Z=r,r=i)):(Z=r,r=i),r}function te(){var r,t,n;for(r=Z,t=[],G.test(e.charAt(Z))?(n=e.charAt(Z),Z++):(n=i,0===B&&X(R));n!==i;)t.push(n),G.test(e.charAt(Z))?(n=e.charAt(Z),Z++):(n=i,0===B&&X(R));return t!==i&&(_=r,t=U()),r=t}function ne(){var r,t,n;for(B++,r=Z,t=[],z.test(e.charAt(Z))?(n=e.charAt(Z),Z++):(n=i,0===B&&X(L));n!==i;)t.push(n),z.test(e.charAt(Z))?(n=e.charAt(Z),Z++):(n=i,0===B&&X(L));return t!==i&&(_=r,t=void 0),B--,(r=t)===i&&(t=i,0===B&&X(W)),r}function oe(){var r,t,n;for(B++,r=Z,t=[],T.test(e.charAt(Z))?(n=e.charAt(Z),Z++):(n=i,0===B&&X(V));n!==i;)t.push(n),T.test(e.charAt(Z))?(n=e.charAt(Z),Z++):(n=i,0===B&&X(V));return t!==i&&(_=r,t=void 0),B--,(r=t)===i&&(t=i,0===B&&X(N)),r}if((t=u())!==i&&Z===e.length)return t;throw t!==i&&Z<e.length&&X({type:"end"}),n=O,o=J<e.length?e.charAt(J):null,a=J<e.length?Q(J,J+1):Q(J,J),new c(c.buildMessage(n,o),n,o,a)}};const f=a.default,d=i.default,p=s,{createSVGWindow:h}=l.default,g=h(),m=g.document,{SVG:v,registerWindow:x}=u.default;const y=new d.graphlib.Graph;y.setGraph({}),y.setDefaultEdgeLabel((function(){return{}}));let b=process.argv[2],A=process.argv[3];if(null!=b&&null!=A||console.log("Usage: node "+process.argv[1]+" [input.fml] [output.svg]"),A=A||"output.svg",b=b||"input.fml",f.existsSync(b))try{let e=f.readFileSync(b),r=p.parse((""+e).split("\n").map((e=>e.split("///")[0])).join("\n"));!function(e,r){let t={};!function e(r){r.features&&r.features.forEach(e),r.feat&&(r.features=r.feat.map((e=>({name:e}))))}(e.root);let n=0;!function e(o){let a=o.name||o.label;o.id="f"+n,t[a]=o.id,r.setNode(o.id,{label:a,width:10*a.length+30,height:40,required:o.required,exclusive:o.exclusive}),n++,o.features&&o.features.forEach(e)}(e.root),function e(t){t.features&&t.features.forEach((n=>{e(n),r.setEdge(t.id,n.id,{type:"feature"})}))}(e.root),e.required.forEach((e=>{let n=t[e.from],o=t[e.to];n&&o?r.setEdge(n,o,{type:"required"}):console.error("Warning: Unknown Feature: "+(null==n?"! "+e.from+" !":e.from)+" => "+(null==o?"! "+e.to+" !":e.to))})),e.exclude.forEach((e=>{let n=t[e.from],o=t[e.to];n&&o?r.setEdge(n,o,{type:"exclude"}):console.error("Warning: Unknown Feature: "+(null==n?"! "+e.from+" !":e.from)+" <--\x3e "+(null==o?"! "+e.to+" !":e.to))}))}({root:r[0],required:r[1].imply,exclude:r[1].exclude},y),d.layout(y),x(g,m);const t=v(m.documentElement);function n(e,r){var t,n,o=e.x,a=e.y,i=r.x-o,l=r.y-a,u=e.width/2,c=e.height/2;return Math.abs(l)*u>Math.abs(i)*c?(l<0&&(c=-c),t=0===l?0:c*i/l,n=c):(i<0&&(u=-u),t=u,n=0===i?0:u*l/i),{x:o+t,y:a+n}}function o(e,r){var t=e.edge(r),o=e.node(r.v),a=e.node(r.w),i=t.points.slice(1,t.points.length-1);return i.unshift(n(o,i[0])),i.push(n(a,i[i.length-1])),i}function a(e,r){return e.sy&&(r[0].y=e.sy),t.polyline(r.map((e=>[e.x,e.y]))).stroke("black").fill("none")}y.nodes().forEach((e=>{let r=y.node(e);t.rect(r.width,r.height).center(r.x,r.y).fill("white").stroke("black");t.text(r.label).center(r.x,r.y).bbox()})),t.viewbox(t.bbox()),y.nodes().forEach((e=>{let r=y.outEdges(e),n=y.node(e);if(r.length>1&&void 0!==n.exclusive){let e=[];r.forEach((r=>{let t=o(y,r);e.push(t[0])}));let a=e.map((e=>e.x)).reduce(((e,r)=>Math.max(e,r))),i=e.map((e=>e.x)).reduce(((e,r)=>Math.min(e,r))),l=e.map((e=>e.y)).reduce(((e,r)=>Math.max(e,r)));e.map((e=>e.y)).reduce(((e,r)=>Math.min(e,r)));r.forEach((e=>{y.edge(e).sy=l+10})),t.polygon([a,l+10,(a+i)/2,l+1,i,l+10]).fill(n.exclusive?"white":"black").stroke("black")}})),y.edges().forEach((e=>{var r=y.edge(e);let t=a(r,o(y,e));var n=y.node(e.w);void 0!==n.required&&"feature"==r.type&&t.marker("end",14,14,(function(e){e.circle(10).center(7,7).fill(n.required?"black":"white").stroke({width:2,color:"black"})})),"required"==r.type&&(t.stroke({dasharray:"4"}),t.marker("end",14,14,(function(e){e.polygon([0,14,7,7,0,0,2,7]).fill("black").stroke({width:1,color:"black"})}))),"exclude"==r.type&&(t.stroke({dasharray:"4"}),t.marker("end",14,14,(function(e){e.polygon([0,14,7,7,0,0,2,7]).fill("black").stroke({width:1,color:"black"})})),t.marker("start",14,14,(function(e){e.polygon([14,0,7,7,14,14,12,7]).fill("black").stroke({width:1,color:"black"})})))})),"-"==A?console.info(t.svg()):f.writeFile(A,t.svg())}catch(e){console.error(e.name+" at line "+e.location.start.line+":"+e.location.start.column),console.error(e.message),console.error(JSON.stringify(e,null,2)),process.exit(1)}else console.error(b+" does not exist"),process.exit(2);module.exports={};
