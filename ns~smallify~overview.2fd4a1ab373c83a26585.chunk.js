(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{190:function(e,t,l){"use strict";var a=l(40),r=l(191),n=[].reverse,i=[1,2];a({target:"Array",proto:!0,forced:String(i)===String(i.reverse())},{reverse:function(){return r(this)&&(this.length=this.length),n.call(this)}})},191:function(e,t,l){var a=l(23);e.exports=Array.isArray||function(e){return"Array"==a(e)}},196:function(e,t,l){"use strict";l.r(t),l.d(t,"default",(function(){return j}));var a=l(0),r=l.n(a),n=l(11);var i={Wrapper:n.d.div(["flex-grow:1;display:flex;flex-direction:column;"])},o=l(133);let c;var s={Wrapper:n.d.div(["display:flex;flex-direction:column;align-items:center;justify-content:center;",""],o.a.medium(c||(c=(e=>e)`
    flex-direction: row;
  `))),Logo:n.d.div(["width:10rem;margin:1rem;"]),Container:n.d.ul(["display:inline-flex;flex-direction:column;border:1px solid ",";border-radius:.5rem;margin:0;padding:0;list-style:none;"],(({theme:e})=>e.colours.smallify_download_colour_highlight)),Item:n.d.li(["display:flex;flex-direction:column;justify-content:center;text-align:center;padding:.5rem 1rem;& + &{border-top:1px solid ",";}"],(({theme:e})=>e.colours.smallify_download_colour_highlight))},m=l(162),u=l(4),p=l.n(u),d=l(148);var h={Wrapper:n.d.a([""," "," "," "," "," "," text-decoration:none;cursor:pointer;&:focus{outline:none;}&:hover{","}&:active{","}"],(({isTextLink:e})=>!e&&"display: flex;"),(({isTextLink:e})=>!e&&"justify-content: center;"),(({isTextLink:e})=>!e&&"border-radius: .25rem;"),(({isTextLink:e})=>!e&&"padding: .5rem 1rem;"),(({theme:e,isTextLink:t})=>!t&&`background-color: ${e.colours.button_link_colour_highlight};`),(({theme:e,isTextLink:t})=>`color: ${t?e.colours.global_content_primary:"black"};`),(({theme:e,isTextLink:t})=>`${t?"color":"background-color"}: ${Object(d.a)(.15,e.colours.button_link_colour_highlight)};`),(({theme:e,isTextLink:t})=>`${t?"color":"background-color"}: ${Object(d.a)(.25,e.colours.button_link_colour_highlight)};`))};const g={children:l(39).a.CHILDREN,to:p.a.string.isRequired,text:p.a.string,openInNewTab:p.a.bool,isTextLink:p.a.bool},f=({children:e,to:t,text:l,openInNewTab:a,isTextLink:n})=>r.a.createElement(h.Wrapper,{href:t,"aria-label":l,target:a?"_blank":"_self",rel:"noopener noreferrer",isTextLink:n},e||l);f.propTypes=g,f.defaultProps={children:null,text:"",openInNewTab:!1,isTextLink:!1};var x=f;var b=()=>r.a.createElement(s.Wrapper,null,r.a.createElement(s.Logo,null,r.a.createElement(m.a,null)),r.a.createElement(s.Container,null,r.a.createElement(s.Item,null,r.a.createElement("strong",null,"MIT"),r.a.createElement(x,{to:"https://github.com/hypzeh/smallify/blob/master/LICENSE",isTextLink:!0},r.a.createElement("small",null,"License"))),r.a.createElement(s.Item,null,r.a.createElement("strong",null,"Windows"),r.a.createElement("small",null,"For 64-bit Windows 10")),r.a.createElement(s.Item,null,r.a.createElement(x,{to:"https://github.com/hypzeh/smallify/releases/latest/download/Smallify.GUI.zip"},r.a.createElement("strong",null,"Download"))))),y=(l(190),l(147));let E,w,v=e=>e;var k={Wrapper:n.d.div(["display:flex;flex-direction:column;align-items:flex-start;"]),Screenshot:n.d.div(["position:relative;width:100%;display:flex;flex-direction:column;animation:.5s ease 1 ",";"," img{position:relative;height:auto;width:600px;max-width:100%;box-shadow:0 1rem 1.5rem rgba(0,0,0,0.5);margin:2rem auto 2rem auto;","}"],(({reverse:e})=>e?y.b:y.c),o.a.huge(E||(E=v`
    flex-direction: ${0};
  `),(({reverse:e})=>e?"row-reverse":"row")),o.a.huge(w||(w=v`
      margin: ${0};
    `),(({reverse:e})=>e?"2rem 0 2rem 1rem":"2rem 1rem 2rem 0"))),Description:n.d.div(["flex-grow:1;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;p{margin:0 0 .5rem;}"])},T=l.p+"public/62a419d37ccd9aba2f38071c0ae4299e.png",L=l.p+"public/c45743d1707214f744976ea52bcf4b1b.png";var _=()=>r.a.createElement(k.Wrapper,null,r.a.createElement("p",null,"Smallify is a WPF application built with .NET Core 3.1, aiming to provide a simple and minimalistic Spotify experience. Published as a single executable, all dependencies are packaged alongside the application."),r.a.createElement(k.Screenshot,null,r.a.createElement("img",{src:T,alt:"default-player"}),r.a.createElement(k.Description,null,r.a.createElement("p",null,"View what is currently playing at any time, and control playback with a Spotify premium account."),r.a.createElement(x,{to:"https://github.com/hypzeh/smallify",text:"View project"}))),r.a.createElement(k.Screenshot,{reverse:!0},r.a.createElement("img",{src:L,alt:"authentication-settings"}),r.a.createElement(k.Description,null,r.a.createElement("p",null,"Smallify uses the 'Authorization Code Flow' for authentication with Spotify. This flow includes refresh tokens, which allows users to stay authenticated."),r.a.createElement(x,{to:"https://developer.spotify.com/documentation/general/guides/authorization-guide/#authorization-code-flow",text:"Learn more",openInNewTab:!0}))));var S={Wrapper:n.d.div(["display:flex;flex-direction:column;align-items:flex-start;"])};var W=()=>r.a.createElement(S.Wrapper,null,r.a.createElement("h2",null,"Open source"),r.a.createElement("p",null,"Smallify is open source, pull requests are welcome!"),r.a.createElement(x,{to:"https://github.com/hypzeh/smallify",text:"Fork on GitHub"})),I=l(142),z=l(149),$=l(150);var j=()=>r.a.createElement(I.a,{title:"Overview",hideHeading:!0},r.a.createElement(i.Wrapper,null,r.a.createElement(z.a,{text:"Smallify"}),r.a.createElement($.a,null,r.a.createElement(b,null)),r.a.createElement($.a,null,r.a.createElement(_,null)),r.a.createElement($.a,null,r.a.createElement(W,null))))}}]);