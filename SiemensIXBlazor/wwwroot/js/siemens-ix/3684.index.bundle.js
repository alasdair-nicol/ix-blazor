// -----------------------------------------------------------------------
// SPDX-FileCopyrightText: 2024 Siemens AG
//
// SPDX-License-Identifier: MIT
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.
//  -----------------------------------------------------------------------

"use strict";(self.webpackChunknpmjs=self.webpackChunknpmjs||[]).push([[3684],{3684:(o,e,t)=>{t.r(e),t.d(e,{ix_application_switch_modal:()=>n});var r=t(6969),i=(t(5272),t(8934));function a(o){return(0,r.h)("button",{class:{AppEntry:!0,Selected:o.selected},onClick:()=>{(0,i.d)(o.host),window.open(o.url,o.target)}},(0,r.h)("div",null,(0,r.h)("img",{class:"AppIcon",src:o.iconSrc})),(0,r.h)("div",{class:"AppName"},(0,r.h)("ix-typography",{format:"h4"},o.name,("_blank"!==(e=o.target)&&"_parent"!==e&&"_self"!==e&&"_top"!==e||"_blank"===e)&&(0,r.h)("ix-icon",{size:"12",name:"open-external",color:"color-soft-text"})),(0,r.h)("ix-typography",{format:"label-sm",color:"soft"},o.description)));var e}const n=class{constructor(o){(0,r.r)(this,o),this.config=void 0}componentWillLoad(){if(!this.config)throw Error("ApplicationConfig not provided")}render(){var o,e,t,i;return(0,r.h)(r.H,{key:"df1550915fff21de5c0a40acdf24a096a5105d2b"},(0,r.h)("ix-modal-header",{key:"217d8f2bb79e07c411db00b633648beeb72149f0",icon:"apps"},(null===(o=this.config)||void 0===o?void 0:o.i18nAppSwitch)||"Switch to application"),(0,r.h)("ix-modal-content",{key:"0f1001891265ff7d9cd5826ba91479cf8a487ef6",class:"content"},(0,r.h)("div",{key:"47d718ff45970bd5bba3641f8785899df9e26e50",class:"content-apps"},(!this.config||0===(null===(e=this.config)||void 0===e?void 0:e.apps.length))&&(0,r.h)("div",{class:"loading"},(0,r.h)("ix-spinner",{size:"medium",variant:"primary"}),(0,r.h)("span",null,(null===(t=this.config)||void 0===t?void 0:t.i18nLoadingApps)||"Loading available applications...")),null===(i=this.config)||void 0===i?void 0:i.apps.map((o=>{var e;return(0,r.h)(a,{host:this.hostElement,name:o.name,description:o.description,iconSrc:o.iconSrc,target:o.target,url:o.url,selected:o.id===(null===(e=this.config)||void 0===e?void 0:e.currentAppId)})})))))}get hostElement(){return(0,r.g)(this)}};n.style=":host{display:block}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .content{padding:2rem;padding-right:0}:host .content-apps{display:flex;position:relative;flex-wrap:wrap;justify-content:space-evenly;max-height:50vh;margin-right:0.25rem;gap:1.5rem}:host .loading{display:flex;flex-direction:row;align-items:center}:host .loading ix-spinner{margin-right:1rem}:host .AppEntry{all:unset;display:flex;flex-direction:row;align-items:center;gap:1rem;padding:0.5rem;flex:1 1 45%;cursor:pointer;border:0.0625rem solid transparent}:host .AppEntry.Selected{background-color:var(--theme-color-ghost--selected);border:var(--theme-dynamic-bdr-1)}:host .AppEntry:not(.disabled):not(:disabled).hover,:host .AppEntry:not(.disabled):not(:disabled):hover{background-color:var(--theme-ghost--background--hover)}:host .AppEntry:not(.disabled):not(:disabled).active,:host .AppEntry:not(.disabled):not(:disabled):active{background-color:var(--theme-ghost--background--active)}:host .AppEntry:focus-visible{border:1px solid var(--theme-color-focus-bdr)}:host .AppName{display:flex;flex-direction:column}:host .AppName ix-icon{margin-left:1rem}:host .AppIcon{width:3rem;height:3rem}"}}]);