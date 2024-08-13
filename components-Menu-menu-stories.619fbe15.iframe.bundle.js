"use strict";(self.webpackChunkclkingship=self.webpackChunkclkingship||[]).push([[491],{"./src/components/Menu/menu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ClickMenu:()=>ClickMenu,DefaultMenu:()=>DefaultMenu,__namedExportsOrder:()=>__namedExportsOrder,default:()=>menu_stories});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MenuContext=(0,react.createContext)({index:"0"}),Menu=props=>{const{className,mode,style,children,defaultIndex,onSelect,defaultOpenSubMenu}=props,classes=classnames_default()("clking-menu",className,{"menu-vertical":"vertical"===mode,"menu-horizontal":"horizontal"===mode}),[currentActive,setActive]=(0,react.useState)(defaultIndex),passedContext={index:currentActive||"0",onSelect:index=>{setActive(index),onSelect&&onSelect(index)},mode,defaultOpenSubMenu};return(0,jsx_runtime.jsx)("ul",{className:classes,style,"data-testid":"test-menu",children:(0,jsx_runtime.jsx)(MenuContext.Provider,{value:passedContext,children:react.Children.map(children,((child,index)=>{const childElement=child,{displayName}=childElement.type;if("MenuItem"===displayName||"SubItem"===displayName)return react.cloneElement(childElement,{index:index.toString()});console.error("Warning: Menu have a child which is not MenuItme or SubItem component")}))})})};Menu.defaultProps={defaultIndex:"0",mode:"horizontal"};const menu=Menu;Menu.__docgenInfo={description:"为网站提供导航功能的菜单。支持横向纵向两种模式，支持下拉菜单。\r\n\r\n```javascript\r\nimport { Menu } from 'clkingship'\r\n\r\n//然后可以使用 Menu.Item 和 Menu.Submenu 访问选项和子下拉菜单组件\r\n```",methods:[],displayName:"Menu",props:{defaultIndex:{required:!1,tsType:{name:"string"},description:"默认 active 的菜单项的索引值",defaultValue:{value:'"0"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},mode:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"菜单类型 横向或者纵向",defaultValue:{value:'"horizontal"',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedIndex: string) => void",signature:{arguments:[{type:{name:"string"},name:"selectedIndex"}],return:{name:"void"}}},description:"点击菜单项触发的回掉函数"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},defaultOpenSubMenu:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"设置子菜单的默认打开 只在纵向模式下生效"}}};const MenuItme=props=>{const context=(0,react.useContext)(MenuContext),{index,className,disabled,style,children}=props,classes=classnames_default()("menu-item",className,{"is-disabled":disabled,"is-active":context.index===index});return(0,jsx_runtime.jsx)("li",{className:classes,style,onClick:()=>{context.onSelect&&!disabled&&"string"==typeof index&&context.onSelect(index)},children})};MenuItme.displayName="MenuItem";const menuItem=MenuItme;MenuItme.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{index:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};var transition=__webpack_require__("./src/components/Transition/transition.tsx"),icon=__webpack_require__("./src/components/Icon/icon.tsx");const SubItem=props=>{var _context$defaultOpenS;const context=(0,react.useContext)(MenuContext),{title,children,index,className}=props,isdefaultOpen=!("vertical"!==context.mode||!index)&&(null===(_context$defaultOpenS=context.defaultOpenSubMenu)||void 0===_context$defaultOpenS?void 0:_context$defaultOpenS.includes(index)),[isopen,setopen]=(0,react.useState)(isdefaultOpen),classes=classnames_default()("menu-item submenu-item",className,{"is-active":"horizontal"===context.mode&&context.index[0]===index,"is-opened":isopen,"is-vertical":"vertical"===context.mode});let timer;const handleMouseEnter=(e,toggle)=>{clearTimeout(timer),e.preventDefault(),timer=setTimeout((()=>{setopen(toggle)}),300)},clickEvent="vertical"===context.mode?{onClick:e=>{e.preventDefault(),setopen(!isopen)}}:{},mouseEvent="horizontal"===context.mode?{onMouseEnter:e=>handleMouseEnter(e,!0),onMouseLeave:e=>handleMouseEnter(e,!1)}:{};return(0,jsx_runtime.jsxs)("li",{className:classes,...mouseEvent,children:[(0,jsx_runtime.jsxs)("div",{className:"subitem-title",...clickEvent,children:[title,(0,jsx_runtime.jsx)(icon.A,{icon:"angle-down",className:"arrow-icon"})]}),(()=>{const subMenuClasses=classnames_default()("clking-submenu",{"menu-opened":isopen}),childrenComponent=react.Children.map(children,((child,i)=>{const childElement=child,{displayName}=childElement.type;if("MenuItem"===displayName)return react.cloneElement(childElement,{index:"".concat(index,"-").concat(i)});console.error("Warning: SubMenu have a child which is not MenuItme component")}));return(0,jsx_runtime.jsx)(transition.A,{in:isopen,timeout:300,animation:"zoom-in-top",children:(0,jsx_runtime.jsx)("ul",{className:subMenuClasses,children:childrenComponent})})})()]},index)};SubItem.displayName="SubItem";const subItem=SubItem;SubItem.__docgenInfo={description:"",methods:[],displayName:"SubItem",props:{index:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const menu_stories={title:"Menu 菜单",component:menu,tags:["autodocs"],render:args=>(0,jsx_runtime.jsxs)(menu,{onSelect:index=>{console.log(index)},...args,children:[(0,jsx_runtime.jsx)(menuItem,{children:"cool link 1"}),(0,jsx_runtime.jsx)(menuItem,{children:"cool link 2"}),(0,jsx_runtime.jsx)(menuItem,{disabled:!0,children:"disabled"}),(0,jsx_runtime.jsxs)(subItem,{title:"下拉选项",children:[(0,jsx_runtime.jsx)(menuItem,{children:"下拉选项 1"}),(0,jsx_runtime.jsx)(menuItem,{children:"下拉选项 2"})]})]})},DefaultMenu={},ClickMenu={args:{defaultIndex:"1",mode:"vertical"}};DefaultMenu.parameters={...DefaultMenu.parameters,docs:{...DefaultMenu.parameters?.docs,source:{originalSource:"{}",...DefaultMenu.parameters?.docs?.source}}},ClickMenu.parameters={...ClickMenu.parameters,docs:{...ClickMenu.parameters?.docs,source:{originalSource:'{\n  args: {\n    defaultIndex: "1",\n    mode: "vertical"\n  }\n}',...ClickMenu.parameters?.docs?.source}}};const __namedExportsOrder=["DefaultMenu","ClickMenu"]},"./src/components/Icon/icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@fortawesome/fontawesome-svg-core/index.mjs"),_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__.Yv.add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.X7I);const Icon=props=>{const{className,theme,...restProps}=props,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()("clking-icon",className,{["icon-".concat(theme)]:theme});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.g,{className:classes,...restProps})},__WEBPACK_DEFAULT_EXPORT__=Icon;Icon.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{theme:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "success" | "info" | "warning" | "danger" | "light" | "dark"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'}]},description:""}},composes:["FontAwesomeIconProps"]}},"./src/components/Transition/transition.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_transition_group__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Transition=props=>{const{animation,classNames,children,...restprops}=props;let nodeRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_transition_group__WEBPACK_IMPORTED_MODULE_2__.A,{nodeRef,classNames:classNames||animation,...restprops,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"csstransition",ref:nodeRef,children})})};Transition.defaultProps={unmountOnExit:!0,appear:!0};const __WEBPACK_DEFAULT_EXPORT__=Transition;Transition.__docgenInfo={description:"",methods:[],displayName:"Transition",props:{animation:{required:!1,tsType:{name:"union",raw:'"zoom-in-top" | "zoom-in-left" | "zoom-in-right" | "zoom-in-bottom"',elements:[{name:"literal",value:'"zoom-in-top"'},{name:"literal",value:'"zoom-in-left"'},{name:"literal",value:'"zoom-in-right"'},{name:"literal",value:'"zoom-in-bottom"'}]},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},unmountOnExit:{defaultValue:{value:"true",computed:!1},required:!1},appear:{defaultValue:{value:"true",computed:!1},required:!1}}}}}]);