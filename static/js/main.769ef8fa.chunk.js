(this.webpackJsonptinder=this.webpackJsonptinder||[]).push([[0],{17:function(e,a,t){e.exports={container:"card_container___Mo5B",card:"card_card__39aCa",name:"card_name__3P4ju",actions:"card_actions__2OBHH",left:"card_left__3UMDG",right:"card_right__2NC-l"}},44:function(e,a,t){e.exports={container:"home_container__3VGbT"}},48:function(e,a,t){e.exports={container:"favs_container__cpIy8"}},49:function(e,a,t){e.exports={container:"login_container__2RTTx"}},57:function(e,a,t){e.exports=t(93)},62:function(e,a,t){},63:function(e,a,t){},93:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(24),o=t.n(c),i=(t(62),t(63),t(14)),l=t(55),s=t(12),u=t(17),m=t.n(u),d=t(28),f=t.n(d);function h(e){return function(){return console.log(e)}}function p(e){var a=e.name,t=e.image,n=e.rightClick,c=e.leftClick,o=e.hide;return r.a.createElement("div",{className:m.a.container},r.a.createElement("div",{className:m.a.card},r.a.createElement("img",{alt:"rick",src:t}),r.a.createElement("p",{className:m.a.name},a),!o&&r.a.createElement("div",{className:m.a.actions},r.a.createElement("div",{onClick:c||h("left"),className:m.a.left},r.a.createElement(f.a,{name:"thumbs-down",size:"2x"})),r.a.createElement("div",{onClick:n||h("right"),className:m.a.right},r.a.createElement(f.a,{name:"heart",size:"2x"})))))}p.defaultProps={name:"Rick Sanches",image:"https://rickandmortyapi.com/api/character/avatar/1.jpeg"};var g=t(44),E=t.n(g),v=t(11),_=t(22),y=t(6),O=t(47),S=t.n(O),C=t(18),b=t.n(C);t(85),t(87);b.a.initializeApp({apiKey:"AIzaSyB5d_8md7OWQQIgFvP4NWPDrOEQI2pV20k",authDomain:"rick-y-morty-react.firebaseapp.com",databaseURL:"https://rick-y-morty-react.firebaseio.com",projectId:"rick-y-morty-react",storageBucket:"rick-y-morty-react.appspot.com",messagingSenderId:"424567064139",appId:"1:424567064139:web:615d804c94f355ae02afce"});var R=b.a.firestore().collection("favs");var A={fetching:!1,array:[],current:{},favorites:[]};var N=function(){return function(e,a){return e({type:"GET_FAVS"}),function(e){return R.doc(e).get().then((function(e){return e.data().array}))}(a().user.uid).then((function(t){var n;e({type:"GET_FAVS_SUCCESS",payload:Object(_.a)(t)}),n=a(),localStorage.storage=JSON.stringify(n)})).catch((function(a){console.log(a),e({type:"GET_FAVS_ERROR",payload:a.message})}))}};var T=Object(v.b)((function(e){return{chars:e.characters.array}}),{addToFavoritesAction:function(){return function(e,a){var t=a().characters,n=t.array,r=t.favorites,c=a().user.uid,o=n.shift();r.push(o),function(e,a){R.doc(a).set({array:e})}(r,c),e({type:"ADD_TO_FAVORITES",payload:{array:Object(_.a)(n),favorites:Object(_.a)(r)}})}},removeCharacterAction:function(){return function(e,a){var t=a().characters.array;t.shift(),e({type:"REMOVE_CHARACTER",payload:Object(_.a)(t)})}}})((function(e){var a=e.addToFavoritesAction,t=e.chars,n=e.removeCharacterAction;function c(){n()}function o(){a()}return r.a.createElement("div",{className:E.a.container},r.a.createElement("h2",null,"Personajes de Rick y Morty"),r.a.createElement("div",null,function(){var e=t[0];return r.a.createElement(p,Object.assign({rightClick:o,leftClick:c},e))}()))})),j=t(48),I=t.n(j);var k=Object(v.b)((function(e){return{characters:e.characters.favorites}}))((function(e){var a=e.characters,t=void 0===a?[0]:a;return r.a.createElement("div",{className:I.a.container},r.a.createElement("h2",null,"Favoritos"),t.map((function(e,a){return r.a.createElement(p,Object.assign({hide:!0},e,{key:a}))})),!t.length&&r.a.createElement("h3",null,"No hay personajes agregados"))})),G=t(49),w=t.n(G),L={loggedIn:!1,fetching:!1};var F=Object(v.b)((function(e){var a=e.user;return{fetching:a.fetching,loggedIn:a.loggedIn}}),{retreiveFavs:N,doGoogleLoginAction:function(){return function(e,a){return e({type:"LOGIN"}),function(){var e=new b.a.auth.GoogleAuthProvider;return b.a.auth().signInWithPopup(e).then((function(e){return e.user}))}().then((function(t){var n;e({type:"LOGIN_SUCCESS",payload:{uid:t.uid,displayName:t.displayName,email:t.email,photoURL:t.photoURL}}),n=a(),localStorage.storage=JSON.stringify(n),N()(e,a)})).catch((function(a){console.log(a),e({type:"LOGIN_ERROR",payload:a.message})}))}},logOutAction:function(){return function(e,a){b.a.auth().signOut(),e({type:"LOG_OUT"}),localStorage.removeItem("storage")}}})((function(e){e.retreiveFavs;var a=e.logOutAction,t=e.loggedIn,n=e.fetching,c=e.doGoogleLoginAction;return n?r.a.createElement("h2",null,"Cargando..."):r.a.createElement("div",{className:w.a.container},t?r.a.createElement("h1",null,"Cierra tu sesi\xf3n"):r.a.createElement("h1",null,"Inicia tu sesi\xf3n"),t?r.a.createElement("button",{onClick:function(){a()}},"Cerrar sesi\xf3n"):r.a.createElement("button",{onClick:function(){c()}},"Inicia  Sesi\xf3n"))}));function U(e){var a=e.path,t=e.component,n=Object(l.a)(e,["path","component"]),c=localStorage.getItem("storage");return(c=JSON.parse(c))&&c.user?r.a.createElement(s.b,Object.assign({path:a,component:t},n)):r.a.createElement(s.a,Object.assign({to:"/login"},n))}function V(){return r.a.createElement(s.d,null,r.a.createElement(U,{exact:!0,path:"/",component:T}),r.a.createElement(U,{path:"/favs",component:k}),r.a.createElement(s.b,{path:"/login",component:F}))}var x=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"nav-bar"},r.a.createElement(i.b,{className:"link",activeClassName:"active",exact:!0,to:"/"},"Inicio"),r.a.createElement(i.b,{className:"link",activeClassName:"active",to:"/favs"},"Favoritos"),r.a.createElement(i.b,{className:"link",activeClassName:"active",to:"/login"},"Login")),r.a.createElement(V,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(91);var H=t(15),D=t(51),P=Object(H.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOG_OUT":return Object(y.a)({},L);case"LOGIN_SUCCESS":return Object(y.a)({},e,{fetching:!1},a.payload,{loggedIn:!0});case"LOGIN_ERROR":return Object(y.a)({},e,{fetching:!1,error:a.payload});case"LOGIN":return Object(y.a)({},e,{fetching:!0});default:return e}},characters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_FAVS_SUCCESS":return Object(y.a)({},e,{fetching:!1,favorites:a.payload});case"GET_FAVS_ERROR":return Object(y.a)({},e,{fetching:!1,error:a.payload});case"GET_FAVS":return Object(y.a)({},e,{fetching:!0});case"ADD_TO_FAVORITES":return Object(y.a)({},e,{},a.payload);case"REMOVE_CHARACTER":return Object(y.a)({},e,{array:a.payload});case"GET_CHARACTERS":return Object(y.a)({},e,{fetching:!0});case"GET_CHARACTERS_ERROR":return Object(y.a)({},e,{fetching:!1,error:a.payload});case"GET_CHARACTERS_SUCCESS":return Object(y.a)({},e,{array:a.payload,fetching:!1});default:return e}}}),B=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||H.d;var J=t(54),M=t(95),W=function(){var e,a=Object(H.e)(P,B(Object(H.a)(D.a)));return e=a.dispatch,a.getState,e({type:"GET_CHARACTERS"}),S.a.get("https://rickandmortyapi.com/api/character").then((function(a){e({type:"GET_CHARACTERS_SUCCESS",payload:a.data.results})})).catch((function(a){e({type:"GET_CHARACTERS_ERROR",payload:a.response.message})})),function(e){var a=localStorage.getItem("storage");(a=JSON.parse(a))&&a.user&&e({type:"LOGIN_SUCCESS",payload:a.user})}(a.dispatch),a}(),z=new J.a({uri:"https://rickandmortyapi.com/graphql"}),Q=function(){return r.a.createElement(i.a,null,r.a.createElement(x,null))},X=function(){return r.a.createElement(v.a,{store:W},r.a.createElement(Q,null))},q=function(){return r.a.createElement(M.a,{client:z},r.a.createElement(X,null))};o.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[57,1,2]]]);
//# sourceMappingURL=main.769ef8fa.chunk.js.map