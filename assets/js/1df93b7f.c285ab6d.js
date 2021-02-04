(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{86:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(97),c=a(93),s=a(22),o=a(94),i=a(138);var m=[{title:"Preconfigured Code Linters",description:"ESLint and Prettier to enforce code style."},{title:"Continuous Integration",description:"Preconfigured Github workflow actions to run tests after each pushed commit."},{title:"Test Development Driven",description:"Preconfigured Jest and react-testing-library to test (ts|tsx) files and colect coverage from all packages."}];var p=[{title:"uikit",src:"https://raw.githubusercontent.com/episclera/uikit/master/logo.png",to:"https://github.com/episclera/uikit",pinned:!0},{title:"configkit",src:"https://raw.githubusercontent.com/episclera/configkit/master/logo.png",to:"https://github.com/episclera/configkit",pinned:!0}];var d=[{src:"https://opencollective.com/episclera/tiers/sponsor.svg",to:"https://opencollective.com/episclera"}];t.default=()=>{const{siteConfig:e}=Object(s.default)(),[t,a]=Object(r.useState)(!1),h=Object(o.a)("/");return n.a.createElement(i.ConfigProvider,{componentSize:"large"},n.a.createElement(l.a,{title:e.title,description:e.tagline},n.a.createElement("header",{className:"bg-primary-color py-10"},n.a.createElement("section",{className:"container"},n.a.createElement(i.Row,null,n.a.createElement(i.Col,{span:24,className:"flex justify-center mb-4"},n.a.createElement("div",{className:"bg-white overflow-hidden rounded-full p-5 w-28 h-28"},n.a.createElement(i.Image,{width:"100%",src:e.favicon,preview:!1}))),n.a.createElement(i.Col,{span:24},n.a.createElement(i.Typography.Title,{className:"text-white text-center"},e.title)),n.a.createElement(i.Col,{span:24},n.a.createElement(i.Typography.Paragraph,{className:"mx-auto text-white text-center text-lg w-3/7 md:w-3/5"},e.tagline)),n.a.createElement(i.Col,{span:24,className:"text-center mt-6"},n.a.createElement(i.Button,{type:"default",shape:"round",className:"text-primary-color"},n.a.createElement(c.a,{to:Object(o.a)("docs/doc-introduction")},"Get Started")))))),n.a.createElement("main",null,m&&m.length>0&&n.a.createElement("section",{className:"container"},n.a.createElement(i.Row,{justify:"center"},m.map((({title:e,description:t})=>n.a.createElement(i.Col,{key:e,span:24,md:8,className:"pt-8 md:pt-28 md:pb-16"},n.a.createElement(i.Typography.Title,{level:4},e),n.a.createElement(i.Typography.Paragraph,null,t)))))),p&&p.length>0&&n.a.createElement("section",{className:"container"},n.a.createElement(i.Divider,{className:"mb-16"}),n.a.createElement(i.Row,{justify:"center"},n.a.createElement(i.Col,{span:24,className:"mb-10"},n.a.createElement(i.Typography.Title,{level:3,className:"text-center"},"Who is Using This?"),n.a.createElement(i.Typography.Paragraph,{className:"text-center"},"This project is used by all these users")),p.filter((({pinned:e})=>t||e)).map((({title:e,src:t,to:a})=>n.a.createElement(i.Col,{key:e,span:24,md:6,className:"text-center pt-8 md:pt-4"},n.a.createElement(i.Typography.Link,{href:a,target:"_blank"},n.a.createElement(i.Image,{width:200,src:t,preview:!1,className:"ml-3"}),n.a.createElement(i.Typography.Title,{level:4,className:"text-link-color"},e))))),p.length>4&&n.a.createElement(i.Col,{span:24,className:"text-center"},n.a.createElement(i.Button,{onClick:()=>a(!t),type:"primary",shape:"round",className:"mt-10"},t?"Show less users":"Show more users")),d&&d.length>0&&n.a.createElement(i.Divider,{className:"mt-16"}))),d&&d.length>0&&n.a.createElement("section",{className:"container py-8 md:py-12"},n.a.createElement(i.Row,{justify:"center"},n.a.createElement(i.Col,{span:24,className:"mb-6"},n.a.createElement(i.Typography.Title,{level:3,className:"text-center"},"Sponsor ",n.a.createElement(c.a,{to:h},e.title)," ","Development"),n.a.createElement(i.Typography.Paragraph,{className:"mx-auto text-center w-3/7 md:w-3/5"},n.a.createElement(c.a,{to:h},e.title)," is an MIT licensed open source project and completely free to use. However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing. You can support"," ",n.a.createElement(c.a,{to:h},e.title)," development via the following methods:")),d.map((({src:e,to:t})=>n.a.createElement(i.Col,{key:e,span:24,md:4,className:"text-center pt-8 md:pt-4"},n.a.createElement(i.Typography.Link,{href:t,target:"_blank"},n.a.createElement(i.Image,{width:200,src:e,preview:!1,className:"ml-3"}))))))))))}}}]);