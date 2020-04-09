(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"7OsV":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return b}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk");var a=n("/FXl"),r=n("TjRS");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"README.md"}});var c={_frontmatter:i},l=r.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(l,o({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"fxtrotedge"},"@fxtrot/edge"),Object(a.b)("p",null,"A component library for ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/LexSwed/foxtrot"}),Object(a.b)("inlineCode",{parentName:"a"},"foxtrot"))," project."),Object(a.b)("h3",{id:"documentation"},"Documentation"),Object(a.b)("p",null,"The documentation is created with ",Object(a.b)("a",o({parentName:"p"},{href:"https://www.docz.site/"}),Object(a.b)("inlineCode",{parentName:"a"},"docz"))," and hosted here: ",Object(a.b)("a",o({parentName:"p"},{href:"https://lexswed.github.io/edge/"}),"https://lexswed.github.io/edge/")),Object(a.b)("h3",{id:"acknowledgments"},"Acknowledgments"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://tailwindcss.com"}),"TailwindCSS")," for some design inspirations and color palette"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://seek-oss.github.io/braid-design-system"}),"Braid Design System")," for components implementations examples"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://reacttraining.com/reach-ui"}),"@reach/ui")," for accessible inputs logic"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://www.youtube.com/watch?v=EDyiaDJJu-4"}),"Alex Sexton")," for some of the tips for Design Systems")),Object(a.b)("h3",{id:"installation"},"Installation"),Object(a.b)("p",null,"Install the library:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"npm install @fxtrot/edge --save\n")),Object(a.b)("p",null,"Or via ",Object(a.b)("inlineCode",{parentName:"p"},"yarn"),":"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"yarn add @fxtrot/edge\n")),Object(a.b)("p",null,"Wrap your app in ",Object(a.b)("inlineCode",{parentName:"p"},"ThemeProvider")," which currently just injects global CSS-variables, but in case there will be some proper CSS-in-JS solution, it can actually do something:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-tsx"}),"import ReactDOM from 'react-dom';\n\nimport { Edge } from '@fxtrot/edge';\n\nReactDOM.render(\n  <Edge>\n    <App />\n  </Edge>\n);\n")),Object(a.b)("p",null,"Or for concurrent mode"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-tsx"}),"import ReactDOM from 'react-dom';\n\nimport { Edge } from '@fxtrot/edge';\n\nimport '@fxtrot/edge/style.css';\n\nReactDOM.createRoot(document.getElementById('root')).render(\n  <Edge>\n    <App />\n  </Edge>\n);\n")),Object(a.b)("h3",{id:"usage"},"Usage"),Object(a.b)("p",null,"Components are fully typed with ",Object(a.b)("inlineCode",{parentName:"p"},"TypeScript"),", but you don't have to use ",Object(a.b)("inlineCode",{parentName:"p"},"TypeScript"),":"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\n\nimport { TextField } from '@fxtrot/edge';\n\nconst MyComponent = () => {\n  const [text, setText] = React.useState('Hello world!');\n\n  return (\n    <main>\n      <h1>{text}</h1>\n      <TextField value={text} onChange={(e) => setText(e.target.value)} label=\"Welcome message\" />\n    </main>\n  );\n};\n")))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"README.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---readme-md-d3d531226d53cfb07369.js.map