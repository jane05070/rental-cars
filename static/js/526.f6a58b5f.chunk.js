"use strict";(self.webpackChunkrental_cars=self.webpackChunkrental_cars||[]).push([[526],{6526:function(n,e,r){r.d(e,{Z:function(){return Nn}});var t,i,o,a=r(3433),c=r(5861),s=r(9439),l=r(4687),d=r.n(l),p=r(2791),x=r(168),f=r(7686),u=f.Z.ul(t||(t=(0,x.Z)(["\n  margin: 30px 128px;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  row-gap: 50px;\n  column-gap: 29px;\n"]))),h=f.Z.div(i||(i=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),g=f.Z.button(o||(o=(0,x.Z)(["\n  margin-top: 100px;\n   width: 274px;\n  padding: 12px 0;\n  color: #fff;\n  font-family: Manrope;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n  border-radius: 12px;\n  background: #3470ff;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);\n \n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background: #0b44cd;\n  }\n"]))),m=r(1243);m.Z.defaults.baseURL="https://65033317a0f2c1f3faeba03a.mockapi.io";var Z,j,b,v,w,k,y,z,C,L,S,F,E,P,I,R,T,U,M,_,q,A,Y,B,H,J,N,O,X,D,G,K,Q=function(){var n=(0,c.Z)(d().mark((function n(e){var r;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,m.Z.get("/cars",{params:{page:e,limit:8}});case 3:return r=n.sent,n.abrupt("return",r.data);case 7:throw n.prev=7,n.t0=n.catch(0),n.t0;case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),V=r(8820),W=f.Z.div(Z||(Z=(0,x.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 274px;\n  height: 268px;\n  background-color: white;\n  border-radius: 12px;\n  overflow: hidden;\n"]))),$=f.Z.img(j||(j=(0,x.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),nn=f.Z.button(b||(b=(0,x.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  padding: 0;\n  background: none;\n  border: none;\n"]))),en=((0,f.Z)(V.Xlf)(v||(v=(0,x.Z)(["\n  width: 18px;\n  height: 18px;\n"]))),r(9434)),rn=r(2938),tn=r(1959),on=r(184),an=function(n){var e=n.imageURL,r=n.alt,t=n.id,i=(0,en.I0)(),o=(0,en.v9)((function(n){return(0,tn.F)(n,t)}));return(0,on.jsxs)(W,{children:[(0,on.jsx)($,{src:e,alt:r}),(0,on.jsx)(nn,{onClick:function(){i(o?(0,rn.YL)({carId:t}):(0,rn.dB)({carId:t}))},children:o?(0,on.jsx)(V.M_L,{color:"#3470ff",size:18}):(0,on.jsx)(V.lo,{color:"#ffffff",size:18})})]})},cn=f.Z.div(w||(w=(0,x.Z)(["\n  margin-top: 14px;\n  margin-right: 10px;\n  display: flex;\n  justify-content: space-between;\n"]))),sn=f.Z.h3(k||(k=(0,x.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n  color: #121417;\n"]))),ln=f.Z.span(y||(y=(0,x.Z)(["\n  color: #3470ff;\n"]))),dn=f.Z.p(z||(z=(0,x.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n  color: #121417;\n"]))),pn=f.Z.div(C||(C=(0,x.Z)(["\n  margin-top: 4px;\n  display: flex;\n  flex-direction: column;\n  margin-right: 4px;\n"]))),xn=f.Z.ul(L||(L=(0,x.Z)(["\n  margin-top: 4px;\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: rgba(18, 20, 23, 0.5);\n"]))),fn=f.Z.span(S||(S=(0,x.Z)(['\n  &::after {\n    content: "|";\n    color: rgba(18, 20, 23, 0.1);\n    margin-right: 6px;\n    margin-left: 6px;\n  }\n']))),un=function(n){var e=n.data,r=e.id,t=e.address,i=e.engineSize,o=e.make,a=e.model,c=e.rentalCompany,l=e.rentalPrice,d=e.type,p=e.year,x=t.split(",").map((function(n){return n.trim()})),f=(0,s.Z)(x,2),u=[f[0],f[1],c],h=[d,o,r,i];return(0,on.jsxs)(on.Fragment,{children:[(0,on.jsxs)(cn,{children:[(0,on.jsxs)(sn,{children:[o," ",(0,on.jsx)(ln,{children:a}),", ",p]}),(0,on.jsx)(dn,{children:l})]}),(0,on.jsxs)(pn,{children:[(0,on.jsx)(xn,{children:u.map((function(n,e){return(0,on.jsxs)("li",{children:[n,e!==u.length-1&&(0,on.jsx)(fn,{})]},e)}))}),(0,on.jsx)(xn,{children:h.map((function(n,e){return(0,on.jsxs)("li",{children:[n,e!==h.length-1&&(0,on.jsx)(fn,{})]},e)}))})]})]})},hn=f.Z.div(F||(F=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 274px;\n  height: 426px;\n"]))),gn=f.Z.button(E||(E=(0,x.Z)(["\n  margin-top: auto;\n  width: 100%;\n  border-radius: 12px;\n  padding: 12px 0px;\n  border: none;\n  background-color: #3470ff;\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.5;\n\n  transition: background-color 250ms ease-in;\n\n  &:hover,\n  &:focus {\n    background-color: #0b44cd;\n  }\n"]))),mn=r(4164),Zn=f.Z.div(P||(P=(0,x.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(18, 20, 23, 0.5);\n  backdrop-filter: blur(2px);\n  z-index: 1200;\n"]))),jn=f.Z.div(I||(I=(0,x.Z)(["\n  position: relative;\n  display: block;\n  background-color: white;\n  padding: 40px 40px;\n\n  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.12), 1px 2px 2px rgba(0, 0, 0, 0.14),\n    1px 4px 2px rgba(0, 0, 0, 0.2);\n  border-radius: 24px;\n\n  width: 541px;\n  max-height: 100vh;\n\n  overflow-x: hidden;\n  overflow-y: auto;\n  scrollbar-width: none;\n\n  &::-webkit-scrollbar {\n    width: 0.1em;\n  }\n"]))),bn=(0,f.Z)(V.oHP)(R||(R=(0,x.Z)(["\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  position: absolute;\n  color: rgba(18, 20, 23, 1);\n  top: 16px;\n  right: 16px;\n\n  transition: color 250ms ease-in;\n\n  &:hover,\n  &:focus {\n    color: #3470ff;\n  }\n"]))),vn=f.Z.div(T||(T=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),wn=f.Z.div(U||(U=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 461px;\n  height: 248px;\n  background-color: white;\n  border-radius: 12px;\n  overflow: hidden;\n"]))),kn=f.Z.img(M||(M=(0,x.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),yn=f.Z.h3(_||(_=(0,x.Z)(["\n  margin-top: 14px;\n  margin-bottom: 4px;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.33;\n  color: #121417;\n"]))),zn=f.Z.span(q||(q=(0,x.Z)(["\n  color: #3470ff;\n"]))),Cn=f.Z.p(A||(A=(0,x.Z)(["\n  margin-top: 4px;\n\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: rgba(18, 20, 23, 0.5);\n"]))),Ln=f.Z.span(Y||(Y=(0,x.Z)(['\n  &::after {\n    content: "|";\n    color: rgba(18, 20, 23, 0.1);\n    margin-right: 6px;\n    margin-left: 6px;\n  }\n']))),Sn=f.Z.p(B||(B=(0,x.Z)(["\n  margin-top: 14px;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.5;\n"]))),Fn=f.Z.h4(H||(H=(0,x.Z)(["\n  margin-top: 24px;\n  margin-bottom: 4px;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n"]))),En=f.Z.ul(J||(J=(0,x.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 4px;\n\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: rgba(18, 20, 23, 0.5);\n"]))),Pn=f.Z.ul(N||(N=(0,x.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 8px;\n  gap: 8px;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: rgba(54, 53, 53, 1);\n"]))),In=f.Z.li(O||(O=(0,x.Z)(["\n  padding: 7px 14px;\n  border-radius: 35px;\n  background-color: rgba(249, 249, 249, 1);\n"]))),Rn=f.Z.span(X||(X=(0,x.Z)(["\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  color: rgba(52, 112, 255, 1);\n"]))),Tn=f.Z.a(D||(D=(0,x.Z)(["\n  display: block;\n  width: 168px;\n  margin-top: 24px;\n  border-radius: 12px;\n  padding: 12px 50px;\n  border: none;\n  background-color: #3470ff;\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.5;\n\n  transition: background-color 250ms ease-in;\n\n  &:hover,\n  &:focus {\n    background-color: #0b44cd;\n  }\n"]))),Un=function(n){var e=n.data,r=e.id,t=e.img,i=e.make,o=e.model,c=e.type,l=e.year,d=e.address,p=e.fuelConsumption,x=e.engineSize,f=e.description,u=e.accessories,h=e.functionalities,g=e.rentalConditions,m=e.mileage,Z=e.rentalPrice,j=d.split(",").map((function(n){return n.trim()})),b=(0,s.Z)(j,2),v=b[0],w=b[1],k=[].concat((0,a.Z)(u),(0,a.Z)(h)),y=g.split("\n"),z=y[0].split(":"),C=(0,s.Z)(z,2),L=C[0],S=C[1],F=Intl.NumberFormat("en-US").format(m);return(0,on.jsxs)(vn,{children:[(0,on.jsx)(wn,{children:(0,on.jsx)(kn,{src:t,alt:"".concat(i," ").concat(o," ")})}),(0,on.jsxs)(yn,{children:[i," ",(0,on.jsx)(zn,{children:o}),", ",l]}),(0,on.jsxs)(Cn,{children:[v,(0,on.jsx)(Ln,{}),w,(0,on.jsx)(Ln,{}),"Id: ",r,(0,on.jsx)(Ln,{}),"Year: ",l,(0,on.jsx)(Ln,{}),"Type: ",c,(0,on.jsx)(Ln,{})]}),(0,on.jsxs)(Cn,{children:["Fuel Consumption: ",p,(0,on.jsx)(Ln,{}),"Engine Size: ",x]}),(0,on.jsx)(Sn,{children:f}),(0,on.jsx)(Fn,{children:"Accessories and functionalities:"}),(0,on.jsx)(En,{children:k.map((function(n,e){return(0,on.jsxs)("li",{children:[n,e!==k.length-1&&(0,on.jsx)(Ln,{})]},e)}))}),(0,on.jsx)(Fn,{children:"Rental Conditions:"}),(0,on.jsxs)(Pn,{children:[(0,on.jsxs)(In,{children:[L,": ",(0,on.jsx)(Rn,{children:S})]}),(0,on.jsx)(In,{children:y[1]}),(0,on.jsx)(In,{children:y[2]}),(0,on.jsxs)(In,{children:["Mileage: ",(0,on.jsx)(Rn,{children:F})]}),(0,on.jsxs)(In,{children:["Price: ",(0,on.jsx)(Rn,{children:Z})]})]}),(0,on.jsx)(Tn,{href:"tel:+380730000000",children:"Rent a car"})]})},Mn=document.querySelector("#modal-root"),_n=function(n){var e=n.onClose,r=n.car;(0,p.useEffect)((function(){return document.addEventListener("keydown",t),function(){document.removeEventListener("keydown",t)}}));var t=function(n){"Escape"===n.code&&e()};return(0,mn.createPortal)((0,on.jsx)(Zn,{onClick:function(n){n.currentTarget===n.target&&e()},children:(0,on.jsxs)(jn,{children:[(0,on.jsx)(bn,{onClick:function(){return e()}}),(0,on.jsx)(Un,{data:r})]})}),Mn)},qn=function(n){var e=n.car,r=e.id,t=e.img,i=e.make,o=e.model,a=(0,p.useState)(!1),c=(0,s.Z)(a,2),l=c[0],d=c[1],x=function(){d(!l),document.body.classList.remove("modal-open")};return(0,on.jsxs)(hn,{children:[(0,on.jsx)(an,{imageURL:t,alt:"".concat(i," ").concat(o),id:r}),(0,on.jsx)(un,{data:e}),(0,on.jsx)(gn,{onClick:function(){x(),document.body.classList.add("modal-open")},children:"Learn more"}),l&&(0,on.jsx)(_n,{onClose:x,car:e})]})},An=r(1454),Yn=r(7692),Bn=f.Z.div(G||(G=(0,x.Z)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 20px;\n"]))),Hn=f.Z.p(K||(K=(0,x.Z)(["\n  font-size: 25px;\n  font-weight: 600;\n"]))),Jn=function(n){var e=n.error;return(0,on.jsxs)(Bn,{children:[(0,on.jsx)(Yn.tJu,{size:100,color:"#c40505"}),(0,on.jsxs)(Hn,{children:["Oops! An error occured while requesting data: ",e]})]})},Nn=function(n){var e=n.renderFavorites,r=(0,p.useState)([]),t=(0,s.Z)(r,2),i=t[0],o=t[1],l=(0,en.v9)(tn.T),x=(0,p.useState)(1),f=(0,s.Z)(x,2),m=f[0],Z=f[1],j=(0,p.useState)(!1),b=(0,s.Z)(j,2),v=b[0],w=b[1],k=(0,p.useState)(null),y=(0,s.Z)(k,2),z=y[0],C=y[1];(0,p.useEffect)((function(){var n=function(){var n=(0,c.Z)(d().mark((function n(e){var r,t;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return w(!0),n.prev=1,n.next=4,Q(e);case 4:r=n.sent,t=r,o((function(n){return[].concat((0,a.Z)(n),(0,a.Z)(t))})),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),C(n.t0);case 12:return n.prev=12,w(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[1,9,12,15]])})));return function(e){return n.apply(this,arguments)}}();n(m)}),[m]);var L=i.filter((function(n){return l.includes(n.id)})),S=i.length%8===0;return(0,on.jsx)(h,{children:v?(0,on.jsx)(An.Z,{}):z?(0,on.jsx)(Jn,{error:z}):(0,on.jsxs)(on.Fragment,{children:[(0,on.jsx)(u,{children:i&&(e?L.map((function(n){return(0,on.jsx)(qn,{car:n},n.id)})):i.map((function(n){return(0,on.jsx)(qn,{car:n},n.id)})))}),!e&&S&&(0,on.jsx)(g,{onClick:function(){Z((function(n){return n+1}))},children:"Load more"})]})})}},1959:function(n,e,r){r.d(e,{F:function(){return o},T:function(){return i}});var t=r(6916),i=function(n){return n.favorites},o=(0,t.P1)([i,function(n,e){return e}],(function(n,e){return n.includes(e)}))}}]);
//# sourceMappingURL=526.f6a58b5f.chunk.js.map