(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{Dpvj:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return f}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk");var o=n("/FXl"),a=n("TjRS"),i=n("ZFoC"),c=n("Fmya"),r=n("EUTL"),d=n("40xt"),p=n("0brI"),b=n("RRD+"),l=n("e6Z3"),u=n("TR4e");n("aD51");function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/Option/readme.mdx"}});var m={_frontmatter:s},x=a.a;function f(e){var t,n,f,j=e.components,y=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(o.b)(x,O({},m,y,{components:j,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"option"},"Option"),Object(o.b)("p",null,"Option component is used inside dropdowns."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"value")," property should be specified if used within ",Object(o.b)("a",O({parentName:"li"},{href:"/edge/fx-select"}),Object(o.b)("inlineCode",{parentName:"a"},"Select"))," component"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onSelect")," callback should be used to handle ",Object(o.b)("inlineCode",{parentName:"li"},"Option")," click within for example ",Object(o.b)("a",O({parentName:"li"},{href:"/edge/fx-menubutton"}),Object(o.b)("inlineCode",{parentName:"a"},"MenuButton")))),Object(o.b)("h2",{id:"basic-usage"},"Basic usage"),Object(o.b)("pre",null,Object(o.b)("code",O({parentName:"pre"},{className:"language-tsx"}),"import { MenuButton, Button, ListBox, Option } from '@fxtrot/edge';\n")),Object(o.b)(i.c,{__position:0,__code:'<MenuButton>\n  <Button size="s">\n    <Icon icon="more_horiz" />\n  </Button>\n  <ListBox>\n    <Option onSelect={() => alert(\'Edit\')}>\n      <Icon icon="edit" tone="outlined" />\n      Edit\n    </Option>\n    <Option onSelect={() => alert(\'Remove\')}>\n      <Icon icon="delete" tone="outlined" /> Remove\n    </Option>\n  </ListBox>\n</MenuButton>',__scope:(t={props:y,DefaultLayout:a.a,Playground:i.c,MenuButton:c.a,Button:r.a,ListBox:d.a,Box:p.a,Stack:b.a,Option:l.a,Icon:u.a},t.DefaultLayout=a.a,t._frontmatter=s,t),mdxType:"Playground"},Object(o.b)(c.a,{mdxType:"MenuButton"},Object(o.b)(r.a,{size:"s",mdxType:"Button"},Object(o.b)(u.a,{icon:"more_horiz",mdxType:"Icon"})),Object(o.b)(d.a,{mdxType:"ListBox"},Object(o.b)(l.a,{onSelect:function(){return alert("Edit")},mdxType:"Option"},Object(o.b)(u.a,{icon:"edit",tone:"outlined",mdxType:"Icon"}),"Edit"),Object(o.b)(l.a,{onSelect:function(){return alert("Remove")},mdxType:"Option"},Object(o.b)(u.a,{icon:"delete",tone:"outlined",mdxType:"Icon"})," Remove")))),Object(o.b)("h2",{id:"different-states"},"Different states"),Object(o.b)(i.c,{__position:1,__code:'<Box p="none" style={{ width: \'200px\' }}>\n  <Stack>\n    <Option>Default</Option>\n    <Option disabled>Disabled</Option>\n    <Option aria-selected="true">Selected</Option>\n    <Option>\n      <Icon icon="settings" mode="outlined" />\n      With icon\n    </Option>\n  </Stack>\n</Box>',__scope:(n={props:y,DefaultLayout:a.a,Playground:i.c,MenuButton:c.a,Button:r.a,ListBox:d.a,Box:p.a,Stack:b.a,Option:l.a,Icon:u.a},n.DefaultLayout=a.a,n._frontmatter=s,n),mdxType:"Playground"},Object(o.b)(p.a,{p:"none",style:{width:"200px"},mdxType:"Box"},Object(o.b)(b.a,{mdxType:"Stack"},Object(o.b)(l.a,{mdxType:"Option"},"Default"),Object(o.b)(l.a,{disabled:!0,mdxType:"Option"},"Disabled"),Object(o.b)(l.a,{"aria-selected":"true",mdxType:"Option"},"Selected"),Object(o.b)(l.a,{mdxType:"Option"},Object(o.b)(u.a,{icon:"settings",mode:"outlined",mdxType:"Icon"}),"With icon")))),Object(o.b)("h2",{id:"variants"},"Variants"),Object(o.b)(i.c,{__position:2,__code:'<Box p="none" style={{ width: \'200px\' }}>\n  <Stack>\n    <Option variant="bordered">Default</Option>\n    <Option variant="bordered" disabled>\n      Disabled\n    </Option>\n    <Option variant="bordered" aria-selected="true">\n      Selected\n    </Option>\n  </Stack>\n</Box>',__scope:(f={props:y,DefaultLayout:a.a,Playground:i.c,MenuButton:c.a,Button:r.a,ListBox:d.a,Box:p.a,Stack:b.a,Option:l.a,Icon:u.a},f.DefaultLayout=a.a,f._frontmatter=s,f),mdxType:"Playground"},Object(o.b)(p.a,{p:"none",style:{width:"200px"},mdxType:"Box"},Object(o.b)(b.a,{mdxType:"Stack"},Object(o.b)(l.a,{variant:"bordered",mdxType:"Option"},"Default"),Object(o.b)(l.a,{variant:"bordered",disabled:!0,mdxType:"Option"},"Disabled"),Object(o.b)(l.a,{variant:"bordered","aria-selected":"true",mdxType:"Option"},"Selected")))))}void 0!==f&&f&&f===Object(f)&&Object.isExtensible(f)&&!f.hasOwnProperty("__filemeta")&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/Option/readme.mdx"}}),f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-option-readme-mdx-fe6b235a7a3635d83bbf.js.map