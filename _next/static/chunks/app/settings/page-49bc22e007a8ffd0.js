(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[938],{33005:function(e,t,o){Promise.resolve().then(o.bind(o,57150))},57150:function(e,t,o){"use strict";o.r(t);var n=o(57437);o(2265);var r=o(97152);t.default=()=>{let e=r.t.getState().logout;return(0,n.jsx)("div",{className:"flex flex-col items-center justify-center h-screen",children:(0,n.jsx)("button",{className:"bg-red-500 text-white px-4 py-2 rounded-lg mb-4",onClick:()=>{window.confirm("Are you sure you want to logout?")&&e()},children:"Logout"})})}},32693:function(e,t,o){"use strict";o.d(t,{R:function(){return n}});class n{}n.ACCOUNT="account",n.AUTH_TOKENS="auth_tokens"},97152:function(e,t,o){"use strict";o.d(t,{t:function(){return i}});var n=o(32693),r=o(66508);class a{async login(e){try{let t=(await r.Z.post("/open/v1/auth/login",e)).data;if("success"!==t.status){console.error("Login failed");return}return t.data}catch(e){console.error("Login failed:",e)}}async logout(){try{localStorage.removeItem("account"),localStorage.removeItem("auth_tokens")}catch(e){console.error("Logout failed:",e)}}}var c=o(39099);let s=new a,i=(0,c.Ue)(e=>({account:JSON.parse(localStorage.getItem(n.R.ACCOUNT)),tokens:JSON.parse(localStorage.getItem(n.R.AUTH_TOKENS)),login:async(t,o)=>{let r=await s.login({email:t,password:o});if(!r)return!1;let a={id:r.accountId,email:r.email},c={accessToken:r.accessToken,refreshToken:r.refreshToken,accessTokenExpirationTime:new Date(r.accessTokenExpirationTime),refreshTokenExpirationTime:new Date(r.refreshTokenExpirationTime)};return e({account:a,tokens:c}),localStorage.setItem(n.R.ACCOUNT,JSON.stringify(a)),localStorage.setItem(n.R.AUTH_TOKENS,JSON.stringify(c)),!0},logout:async()=>{await s.logout(),e({account:void 0,tokens:void 0})},rotateLoginTokens:async e=>{}}))},66508:function(e,t,o){"use strict";o.d(t,{k:function(){return s}});var n=o(32693),r=o(42126);let a="https://api.langhance.com",c=r.Z.create({baseURL:a}),s=()=>{let e=JSON.parse(localStorage.getItem(n.R.AUTH_TOKENS));return r.Z.create({baseURL:a,headers:{Authorization:"Bearer ".concat(e.accessToken)}})};c.interceptors.request.use(function(e){return e}),c.interceptors.response.use(function(e){return e}),t.Z=c}},function(e){e.O(0,[850,971,23,744],function(){return e(e.s=33005)}),_N_E=e.O()}]);