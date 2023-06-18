(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{140:function(e,t,n){"use strict";var r,a,o,i=n(183),c="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function l(){o=!1}function s(e){if(e){if(e!==r){if(e.length!==c.length)throw new Error("Custom alphabet for shortid must be "+c.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter((function(e,t,n){return t!==n.lastIndexOf(e)}));if(t.length)throw new Error("Custom alphabet for shortid must be "+c.length+" unique characters. These characters were not unique: "+t.join(", "));r=e,l()}}else r!==c&&(r=c,l())}function u(){return o||(o=function(){r||s(c);for(var e,t=r.split(""),n=[],a=i.nextValue();t.length>0;)a=i.nextValue(),e=Math.floor(a*t.length),n.push(t.splice(e,1)[0]);return n.join("")}())}e.exports={get:function(){return r||c},characters:function(e){return s(e),r},seed:function(e){i.seed(e),a!==e&&(l(),a=e)},lookup:function(e){return u()[e]},shuffled:u}},181:function(e,t,n){"use strict";e.exports=n(182)},182:function(e,t,n){"use strict";var r=n(140),a=n(184),o=n(188),i=n(189)||0;function c(){return a(i)}e.exports=c,e.exports.generate=c,e.exports.seed=function(t){return r.seed(t),e.exports},e.exports.worker=function(t){return i=t,e.exports},e.exports.characters=function(e){return void 0!==e&&r.characters(e),r.shuffled()},e.exports.isValid=o},183:function(e,t,n){"use strict";var r=1;e.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(e){r=e}}},184:function(e,t,n){"use strict";var r,a,o=n(185);n(140);e.exports=function(e){var t="",n=Math.floor(.001*(Date.now()-1567752802062));return n===a?r++:(r=0,a=n),t+=o(7),t+=o(e),r>0&&(t+=o(r)),t+=o(n)}},185:function(e,t,n){"use strict";var r=n(140),a=n(186),o=n(187);e.exports=function(e){for(var t,n=0,i="";!t;)i+=o(a,r.get(),1),t=e<Math.pow(16,n+1),n++;return i}},186:function(e,t,n){"use strict";var r,a="object"===typeof window&&(window.crypto||window.msCrypto);r=a&&a.getRandomValues?function(e){return a.getRandomValues(new Uint8Array(e))}:function(e){for(var t=[],n=0;n<e;n++)t.push(Math.floor(256*Math.random()));return t},e.exports=r},187:function(e,t){e.exports=function(e,t,n){for(var r=(2<<Math.log(t.length-1)/Math.LN2)-1,a=-~(1.6*r*n/t.length),o="";;)for(var i=e(a),c=a;c--;)if((o+=t[i[c]&r]||"").length===+n)return o}},188:function(e,t,n){"use strict";var r=n(140);e.exports=function(e){return!(!e||"string"!==typeof e||e.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(e)}},189:function(e,t,n){"use strict";e.exports=0},199:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return D}));var r=n(0),a=n.n(r),o=n(11);var i={Wrapper:o.d.div(["flex-grow:1;display:flex;flex-direction:column;"])},c=(n(38),n(78),n(147));var l={Wrapper:o.d.div(["position:relative;display:flex;flex-direction:column;animation:.5s ease 1 ",";"],c.a),Header:o.d.div(["min-height:1rem;background-color:#cccccc;border-radius:.5rem .5rem 0 0;"]),Content:o.d.div(["flex:1 0 auto;display:flex;max-height:calc(100vh - 10rem);background-color:#383737;border-radius:0 0 .5rem .5rem;overflow-y:auto;box-shadow:0 1rem 1.5rem rgba(0,0,0,0.5);margin-bottom:2rem;"])},s=n(4),u=n.n(s);var m={Wrapper:o.d.div(["display:flex;flex-direction:column;margin-left:1rem;margin-right:.5rem;& + &{margin-top:1rem;}"]),Command:o.d.div(["display:flex;flex-direction:row;justify-content:space-between;"]),Value:o.d.pre(["white-space:pre-wrap;margin:0;"]),Link:o.d.a(["font-family:monospace;white-space:pre-wrap;color:",";"],(({theme:e})=>e.colours.terminal_output_colour_highlight)),Timestamp:o.d.code(["color:",";"],(({theme:e})=>e.colours.terminal_output_colour_highlight))};const p={output:u.a.shape({command:u.a.string,link:u.a.string,value:u.a.string.isRequired,timestamp:u.a.string.isRequired}).isRequired},f=({output:e})=>a.a.createElement(m.Wrapper,null,e.command&&a.a.createElement(m.Command,null,a.a.createElement("code",null,`$ ${e.command}`),a.a.createElement(m.Timestamp,null,e.timestamp)),e.link?a.a.createElement(m.Link,{href:e.link,"aria-label":e.value,target:"_blank",rel:"noopener noreferrer"},e.value):a.a.createElement(m.Value,null,e.value));f.propTypes=p;var d=f;var h={Wrapper:o.d.form(["display:flex;flex-direction:row;align-items:center;margin:1rem 0 .5rem 1rem;input{font-family:monospace;width:100%;margin:0 .5rem;background-color:transparent;border:none;color:",";&:focus{outline:none;}&::-ms-clear{display:none;}}"],(({theme:e})=>e.colours.terminal_input_colour))};const g={onSubmit:u.a.func.isRequired},w=a.a.forwardRef((({onSubmit:e},t)=>{const[n,o]=Object(r.useState)("");return a.a.createElement(h.Wrapper,{onSubmit:t=>{t.preventDefault(),0!==n.length&&(e(n),o(""))}},a.a.createElement("code",null,"$"),a.a.createElement("input",{ref:t,type:"text",maxLength:25,spellCheck:!1,value:n,"aria-label":"command-input",onChange:({target:e})=>{e&&o(e.value)}}))}));w.propTypes=g;var b=w,v=n(136),x=n(181),k=n.n(x);const y=(e,t,n)=>({id:k.a.generate(),command:e,value:t,link:n,timestamp:(new Date).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0}).toUpperCase()});var E=y,S=(e,t)=>{switch(e.toLowerCase()){case"-h":case"help":t(y(e,"contact \tLists options to contact me.\neducation \tLists details about my education.\nexperience \tLists details about my experience.\ngithub \t\tDisplays link to my Github profile.\nlinkedin \tDisplays link to my LinkedIn profile.\nlocation \tDisplays location of where I am currently based.\ntwitter \tDisplays link to my Twitter profile."));break;case"clr":case"clear":t(null,!0);break;case"-c":case"contact":t(y(e,"nick.smirnoff@live.co.uk","mailto:nick.smirnoff@live.co.uk"));break;case"-e":case"education":t(y(e,"The University of Hull (2013 - 2017)\n\tMaster of Engineering\n\tMEng Computer Science\n\t2:1\n\nWilberforce College (2011 - 2013)\n\tBTEC Level 3 Extended Diploma\n\tTriple Distinction (Star)"));break;case"-exp":case"-xp":case"experience":t(y(e,"Netwrix (2020 - Present)\n\tSoftware Engineer\n\tSouthampton, United Kingdom\n\nZupa (2018 - 2020)\n\tSoftware Engineer\n\tSouthampton, United Kingdom\n\nAPD Communications (2017 - 2018)\n\tSoftware Engineer\n\tHull, United Kingdom\n\nSeed Software (2016 - 2017)\n\tPart-Time Software Engineer\n\tHull, United Kingdom"));break;case"-gh":case"github":t(y(e,"https://www.github.com/hypzeh","https://www.github.com/hypzeh"));break;case"-li":case"linkedin":t(y(e,"https://www.linkedin.com/in/nick-smirnoff","https://www.linkedin.com/in/nick-smirnoff"));break;case"-l":case"location":t(y(e,"Southampton, United Kingdom."));break;case"-t":case"twitter":t(y(e,"https://twitter.com/hypzeh","https://twitter.com/hypzeh"));break;case"-v":case"version":t(y(e,"v1.0.0-beta"));break;default:t(y(e,"Unknown command."))}};var C=()=>{const[e,t]=Object(r.useState)([]),n=Object(r.createRef)();return Object(r.useEffect)((()=>{n.current.focus()}),[n]),Object(r.useEffect)((()=>{n.current.scrollIntoView({behavior:"smooth"})}),[n,e]),a.a.createElement(l.Wrapper,{onClick:()=>n.current.focus()},a.a.createElement(l.Header,null),a.a.createElement(l.Content,null,a.a.createElement(v.a,null,a.a.createElement(d,{output:E(void 0,"NS-CLI [Version 1.0.0-beta]\nType 'help' for a list of commands.")}),e.map((e=>a.a.createElement(d,{key:e.id,output:e}))),a.a.createElement(b,{ref:n,onSubmit:n=>{S(n,((n,r)=>t(r?[]:[...e,n])))}}))))},T=n(142),L=n(149),M=n(150);var D=()=>a.a.createElement(T.a,{title:"About Me",hideHeading:!0},a.a.createElement(i.Wrapper,null,a.a.createElement(L.a,{text:"ABOUT ME"}),a.a.createElement(M.a,null,a.a.createElement(C,null))))}}]);