(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[423],{82651:function(e,t,a){Promise.resolve().then(a.bind(a,96646))},96646:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return T}});var r=a(57437),s=a(2265),n=a(71538),o=a(87592),l=(a(63550),a(49354));let d=s.forwardRef((e,t)=>{let{...a}=e;return(0,r.jsx)("nav",{ref:t,"aria-label":"breadcrumb",...a})});d.displayName="Breadcrumb";let c=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("ol",{ref:t,className:(0,l.cn)("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",a),...s})});c.displayName="BreadcrumbList";let i=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("li",{ref:t,className:(0,l.cn)("inline-flex items-center gap-1.5",a),...s})});i.displayName="BreadcrumbItem";let u=s.forwardRef((e,t)=>{let{asChild:a,className:s,...o}=e,d=a?n.g7:"a";return(0,r.jsx)(d,{ref:t,className:(0,l.cn)("transition-colors hover:text-foreground",s),...o})});u.displayName="BreadcrumbLink",s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("span",{ref:t,role:"link","aria-disabled":"true","aria-current":"page",className:(0,l.cn)("font-normal text-foreground",a),...s})}).displayName="BreadcrumbPage";let f=e=>{let{children:t,className:a,...s}=e;return(0,r.jsx)("li",{role:"presentation","aria-hidden":"true",className:(0,l.cn)("[&>svg]:size-3.5",a),...s,children:null!=t?t:(0,r.jsx)(o.Z,{})})};f.displayName="BreadcrumbSeparator";var m=e=>{let{path:t}=e;return(0,r.jsx)(d,{children:(0,r.jsxs)(c,{children:[(0,r.jsx)(i,{children:(0,r.jsx)(u,{href:"/",className:"text-l",children:"Home"})}),(0,r.jsx)(f,{}),(0,r.jsx)(i,{children:(0,r.jsx)(u,{href:"".concat(t),className:"text-l font-semibold",children:t})})]})})},x=a(89733),p=a(54662),h=a(31590),b=a(47304),j=a(66508);class N{async getSummaryAccount(){let e=(await (0,j.k)()("/admin/v1/accounts/summaries")).data;return"success"!==e.status?(console.error("Get summary account failed"),[]):e.data}async getAlLRoles(){let e=(await (0,j.k)()("/admin/v1/accounts/roles")).data;return"success"!==e.status?(console.error("Get all roles failed"),[]):e.data}async addRoleToAccount(e,t){let a=await (0,j.k)().post("/admin/v1/accounts/role",{accountId:e,roleId:t});return"success"!==a.data.status?(console.error("Add role to account failed"),!1):"success"===a.data.status}async removeRoleFromAccount(e,t){let a=await (0,j.k)().delete("/admin/v1/accounts/role",{data:{accountId:e,roleId:t}});return"success"!==a.data.status?(console.error("Remove role from account failed"),!1):"success"===a.data.status}}var g=a(39099);let y=new N,v=(0,g.Ue)(e=>({summaryAccounts:void 0,fetchSummaryAccounts:async()=>{e({summaryAccounts:await y.getSummaryAccount()})},addRoleToAccount:async(e,t)=>await y.addRoleToAccount(e,t),removeRoleFromAccount:async(e,t)=>await y.removeRoleFromAccount(e,t)})),w=new N,R=(0,g.Ue)(e=>({roles:[],getAllRoles:async()=>{e({roles:await w.getAlLRoles()})},addRole:t=>e(e=>({roles:[...e.roles,t]})),removeRole:t=>e(e=>({roles:e.roles.filter(e=>e.id!==t)}))}));var A=a(62737),k=a.n(A),C=a(27776),T=function(){let e=v(e=>e.summaryAccounts),t=v(e=>e.fetchSummaryAccounts),[a,n]=(0,s.useState)(void 0);return(0,s.useEffect)(()=>{e||t()},[]),(0,r.jsxs)("div",{className:"flex-1 space-y-4 p-8 pt-6",children:[(0,r.jsx)("div",{children:(0,r.jsx)(m,{path:"accounts"})}),(0,r.jsx)("div",{className:"h-[50px]"}),(0,r.jsxs)(b.iA,{children:[(0,r.jsx)(b.xD,{children:(0,r.jsxs)(b.SC,{children:[(0,r.jsx)(b.ss,{children:"ID"}),(0,r.jsx)(b.ss,{children:"email"}),(0,r.jsx)(b.ss,{children:"roles"}),(0,r.jsx)(b.ss,{children:"created time"})]})}),(0,r.jsx)(b.RM,{children:null==e?void 0:e.map(e=>(0,r.jsxs)(b.SC,{children:[(0,r.jsx)(b.pj,{children:e.id}),(0,r.jsx)(b.pj,{children:e.email}),(0,r.jsx)("div",{className:"bg-blue-100 rounded-md my-[5px]",onClick:()=>{n(e)},children:(0,r.jsx)(b.pj,{children:e.roles.map(e=>e.name).join(", ")})}),(0,r.jsx)(b.pj,{children:k()(e.createdTime).format("YYYY-MM-DD")})]},e.id))})]}),(0,r.jsx)(z,{account:a,visible:void 0!==a,close:()=>{n(void 0)}})]})};function z(e){let{account:t,visible:a=!1,close:n=()=>{}}=e,o=R(e=>e.roles.filter(e=>{if(!t)return!1;t.roles.some(t=>t.id===e.id)})),l=R(e=>e.getAllRoles),d=v(e=>e.fetchSummaryAccounts),c=v(e=>e.addRoleToAccount),i=v(e=>e.removeRoleFromAccount);if((0,s.useEffect)(()=>{l()},[]),!t)return null;let u=e=>{if("admin"===e.name){C.A.error("Cannot remove admin role from account");return}t&&i(t.id,e.id).then(e=>{e&&(d(),l())})};return(0,r.jsx)(p.Vq,{open:a,onOpenChange:e=>!e&&n(),children:(0,r.jsxs)(p.cZ,{children:[(0,r.jsxs)(p.fK,{children:[(0,r.jsxs)(p.$N,{children:['Add more roles to "',t.email,'"?']}),(0,r.jsx)("div",{className:"h-[20px]"}),(0,r.jsx)("div",{className:"flex flex-col",children:(0,r.jsxs)("div",{className:"flex flex-row items-center justify-start",children:[(0,r.jsx)("b",{children:"Current roles"}),":"," ",t.roles.map(e=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(x.z,{className:"rounded-md mx-[5px]",onClick:()=>u(e),children:e.name})}))]})})]}),(0,r.jsx)("div",{className:"h-[20px]"}),(0,r.jsxs)(h.h_,{children:[(0,r.jsx)(h.$F,{children:(0,r.jsx)(x.z,{children:o.length>0?"Add role":"No more roles to add"})}),(0,r.jsxs)(h.AW,{children:[(0,r.jsx)(h.Ju,{children:o.length>0?"Add role":"No more roles to add"}),(0,r.jsx)(h.VD,{}),o.map(e=>(0,r.jsx)(h.Xi,{onClick:()=>(function(e){if("admin"===e.name){C.A.error("Cannot add admin role to account");return}t&&c(t.id,e.id).then(e=>{e&&(d(),l())})})(e),children:e.name},e.id))]})]})]})})}},89733:function(e,t,a){"use strict";a.d(t,{d:function(){return d},z:function(){return c}});var r=a(57437),s=a(2265),n=a(71538),o=a(12218),l=a(49354);let d=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=s.forwardRef((e,t)=>{let{className:a,variant:s,size:o,asChild:c=!1,...i}=e,u=c?n.g7:"button";return(0,r.jsx)(u,{className:(0,l.cn)(d({variant:s,size:o,className:a})),ref:t,...i})});c.displayName="Button"},54662:function(e,t,a){"use strict";a.d(t,{$N:function(){return f},Vq:function(){return l},cZ:function(){return i},fK:function(){return u}});var r=a(57437),s=a(2265),n=a(13304),o=a(49354);let l=n.fC;n.xz;let d=n.h_;n.x8;let c=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(n.aV,{ref:t,className:(0,o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...s})});c.displayName=n.aV.displayName;let i=s.forwardRef((e,t)=>{let{className:a,children:s,...l}=e;return(0,r.jsxs)(d,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(n.VY,{ref:t,className:(0,o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...l,children:s})]})});i.displayName=n.VY.displayName;let u=e=>{let{className:t,...a}=e;return(0,r.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...a})};u.displayName="DialogHeader";let f=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(n.Dx,{ref:t,className:(0,o.cn)("text-lg font-semibold leading-none tracking-tight",a),...s})});f.displayName=n.Dx.displayName,s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(n.dk,{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",a),...s})}).displayName=n.dk.displayName},31590:function(e,t,a){"use strict";a.d(t,{$F:function(){return u},AW:function(){return f},Ju:function(){return p},VD:function(){return h},Xi:function(){return m},bO:function(){return x},h_:function(){return i}});var r=a(57437),s=a(2265),n=a(21220),o=a(87592),l=a(22468),d=a(28165),c=a(49354);let i=n.fC,u=n.xz;n.ZA,n.Uv,n.Tr,n.Ee,s.forwardRef((e,t)=>{let{className:a,inset:s,children:l,...d}=e;return(0,r.jsxs)(n.fF,{ref:t,className:(0,c.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",s&&"pl-8",a),...d,children:[l,(0,r.jsx)(o.Z,{className:"ml-auto h-4 w-4"})]})}).displayName=n.fF.displayName,s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(n.tu,{ref:t,className:(0,c.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...s})}).displayName=n.tu.displayName;let f=s.forwardRef((e,t)=>{let{className:a,sideOffset:s=4,...o}=e;return(0,r.jsx)(n.Uv,{children:(0,r.jsx)(n.VY,{ref:t,sideOffset:s,className:(0,c.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...o})})});f.displayName=n.VY.displayName;let m=s.forwardRef((e,t)=>{let{className:a,inset:s,...o}=e;return(0,r.jsx)(n.ck,{ref:t,className:(0,c.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",s&&"pl-8",a),...o})});m.displayName=n.ck.displayName;let x=s.forwardRef((e,t)=>{let{className:a,children:s,checked:o,...d}=e;return(0,r.jsxs)(n.oC,{ref:t,className:(0,c.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),checked:o,...d,children:[(0,r.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(n.wU,{children:(0,r.jsx)(l.Z,{className:"h-4 w-4"})})}),s]})});x.displayName=n.oC.displayName,s.forwardRef((e,t)=>{let{className:a,children:s,...o}=e;return(0,r.jsxs)(n.Rk,{ref:t,className:(0,c.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),...o,children:[(0,r.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(n.wU,{children:(0,r.jsx)(d.Z,{className:"h-2 w-2 fill-current"})})}),s]})}).displayName=n.Rk.displayName;let p=s.forwardRef((e,t)=>{let{className:a,inset:s,...o}=e;return(0,r.jsx)(n.__,{ref:t,className:(0,c.cn)("px-2 py-1.5 text-sm font-semibold",s&&"pl-8",a),...o})});p.displayName=n.__.displayName;let h=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(n.Z0,{ref:t,className:(0,c.cn)("-mx-1 my-1 h-px bg-muted",a),...s})});h.displayName=n.Z0.displayName},47304:function(e,t,a){"use strict";a.d(t,{RM:function(){return d},SC:function(){return c},iA:function(){return o},pj:function(){return u},ss:function(){return i},xD:function(){return l}});var r=a(57437),s=a(2265),n=a(49354);let o=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("table",{ref:t,className:(0,n.cn)("w-full caption-bottom text-sm",a),...s})});o.displayName="Table";let l=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("thead",{ref:t,className:(0,n.cn)("[&_tr]:border-b",a),...s})});l.displayName="TableHeader";let d=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("tbody",{ref:t,className:(0,n.cn)("[&_tr:last-child]:border-0",a),...s})});d.displayName="TableBody",s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("tfoot",{ref:t,className:(0,n.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",a),...s})}).displayName="TableFooter";let c=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("tr",{ref:t,className:(0,n.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",a),...s})});c.displayName="TableRow";let i=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("th",{ref:t,className:(0,n.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",a),...s})});i.displayName="TableHead";let u=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("td",{ref:t,className:(0,n.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",a),...s})});u.displayName="TableCell",s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("caption",{ref:t,className:(0,n.cn)("mt-4 text-sm text-muted-foreground",a),...s})}).displayName="TableCaption"},32693:function(e,t,a){"use strict";a.d(t,{R:function(){return r}});class r{}r.ACCOUNT="account",r.AUTH_TOKENS="auth_tokens"},49354:function(e,t,a){"use strict";a.d(t,{cn:function(){return n}});var r=a(44839),s=a(96164);function n(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,s.m6)((0,r.W)(t))}},66508:function(e,t,a){"use strict";a.d(t,{k:function(){return l}});var r=a(32693),s=a(42126);let n="https://api.langhance.com",o=s.Z.create({baseURL:n}),l=()=>{let e=JSON.parse(localStorage.getItem(r.R.AUTH_TOKENS));return s.Z.create({baseURL:n,headers:{Authorization:"Bearer ".concat(e.accessToken)}})};o.interceptors.request.use(function(e){return e}),o.interceptors.response.use(function(e){return e}),t.Z=o}},function(e){e.O(0,[850,373,984,848,776,971,23,744],function(){return e(e.s=82651)}),_N_E=e.O()}]);