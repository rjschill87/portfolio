(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{167:function(t,e,s){var a=s(173);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,s(30).default)("68252d88",a,!0,{})},168:function(t,e,s){t.exports=s.p+"img/d87a175.png"},169:function(t,e,s){t.exports=s.p+"img/a4acc22.png"},170:function(t,e,s){t.exports=s.p+"img/40e6d1f.png"},171:function(t,e,s){t.exports=s.p+"img/dc46736.png"},172:function(t,e,s){"use strict";var a=s(167);s.n(a).a},173:function(t,e,s){(t.exports=s(29)(!1)).push([t.i,"\n.tile.is-child:hover{cursor:pointer\n}\n.modal{cursor:auto\n}",""])},174:function(t,e,s){"use strict";s.r(e);var a=s(168),i=s.n(a),n=s(169),o=s.n(n),r=s(170),c=s.n(r),l=s(171),d=s.n(l),p={name:"Projects",data:function(){return{projects:[{isActive:!1,name:"/r/TheGoodPlace Subreddit Bot",link:"https://www.github.com/rjschill87/theGoodPlaceBot/",type:"repo",img:i.a,snippet:"A subreddit bot",description:'Built around an event-based stream, this bot parses each comment posted to the <a href="https://reddit.com/r/thegoodplace" target="_blank">/r/theGoodPlace</a>. It then analyzes the comment for profantiy, indecisive language, polarity, and positive/negative sentiment using the <a href="https://github.com/retextjs/retext" target="_blank">retext</a> library and plugins. It also awards additional points for using key phrases from the show. Each week, when a new episode airs, the users are ranked 1-10, the leaderboard is posted as a reply to the Episode Discussion thread, and all subreddit users are awarded with new flair denoting their placement.'},{isActive:!1,name:"Quest Oracle Community",img:o.a,link:"https://questoraclecommunity.org",type:"site",snippet:"A learning website and social network",description:"Designed as half learning center and half social media network, Quest Oracle Community was built around WordPress, NodeBB, Elasticsearch, and a Laravel API. Featuring SSO, completely custom plugins and themes, real time notifications, and integrations with various third party services, it's your one-stop-shop for all things Oracle."},{isActive:!1,name:"TaskMaster",link:"https://github.com/rjschill87/task-master/",img:c.a,type:"repo",snippet:"A simple to-do app.",description:"Created for a quick interview test over a weekend, TaskMaster is a simple app where you can create new tasks. Using a combination of local storage and MongoDB, you can create tasks and child tasks, drag and drop, and rank tasks by priority."},{isActive:!1,name:"LA Kings Player of the Month",link:"https://lakingsplayerofthemonth.com/",img:d.a,type:"site",snippet:"Vote for your Player of the Month.",description:"Built on Wordpress, the site features a completely custom theme where 4 players can be selected to be voted on for Player of the Month. When the selected time has passed, the winner is automatically selected as that month's winner. Users can also have sponsored coupons emailed to them, and share their votes with friends."}]}},methods:{toggleModal:function(t){this.projects[t].isActive=!this.projects[t].isActive}}},h=(s(172),s(20)),u=Object(h.a)(p,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section "},[s("div",{staticClass:"tile is-ancestor  swing-in-left-fwd"},[s("div",{staticClass:"tile is-parent is-vertical"},t._l(t.projects,function(e,a){return s("article",{key:a,staticClass:"tile is-child card",on:{click:function(e){t.toggleModal(a)}}},[s("header",{staticClass:"card-header"},[s("p",{staticClass:"card-header-title has-text-grey"},[t._v(t._s(e.name))])]),t._v(" "),s("div",{staticClass:"card-content"},[s("p",[t._v(t._s(e.snippet))])]),t._v(" "),s("div",{ref:a,refInFor:!0,staticClass:"modal",class:{"is-active":e.isActive},on:{click:function(t){t.stopPropagation()}}},[s("div",{staticClass:"modal-background"}),t._v(" "),s("div",{staticClass:"modal-card scale-in-ver-top"},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[t._v(t._s(e.name))]),t._v(" "),s("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){t.toggleModal(a)}}})]),t._v(" "),s("figure",{staticClass:"image is-3by1"},[s("img",{attrs:{src:e.img}})]),t._v(" "),s("section",{staticClass:"modal-card-body"},[s("div",{staticClass:"content"},[s("p",{domProps:{innerHTML:t._s(e.description)}},[t._v("\n                  "+t._s(e.description)+"\n                ")])])]),t._v(" "),s("footer",{staticClass:"modal-card-foot"},[e.link&&null!=e.link?s("div",{staticClass:"card-header-title-sub has-text-gray"},[t._v("\n                [\n                "),s("a",{attrs:{href:e.link,target:"_blank"}},[t._v(t._s("repo"==e.type?"Repo":"Site")+"\n                ")]),t._v("\n                ]\n              ")]):t._e()])])])])}))])])},[],!1,null,null,null);u.options.__file="projects.vue";e.default=u.exports}}]);