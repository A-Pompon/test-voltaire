"use strict";(self.webpackChunk_wcAdmin_webpackJsonp=self.webpackChunk_wcAdmin_webpackJsonp||[]).push([[185],{83379:function(e,t,r){r.d(t,{Z:function(){return i}});var o=r(69307),s=r(92819),a=r(55609),c=r(86020),n=r(10431);class i extends o.Component{getCategoryAncestorIds(e,t){const r=[];let o=e.parent;for(;o;)r.unshift(o),o=t.get(o).parent;return r}getCategoryAncestors(e,t){const r=this.getCategoryAncestorIds(e,t);if(r.length)return 1===r.length?t.get((0,s.first)(r)).name+" › ":2===r.length?t.get((0,s.first)(r)).name+" › "+t.get((0,s.last)(r)).name+" › ":t.get((0,s.first)(r)).name+" … "+t.get((0,s.last)(r)).name+" › "}render(){const{categories:e,category:t,query:r}=this.props,s=(0,n.getPersistedQuery)(r);return t?(0,o.createElement)("div",{className:"woocommerce-table__breadcrumbs"},this.getCategoryAncestors(t,e),(0,o.createElement)(c.Link,{href:(0,n.getNewPath)(s,"/analytics/categories",{filter:"single_category",categories:t.id}),type:"wc-admin"},t.name)):(0,o.createElement)(a.Spinner,null)}}},92953:function(e,t,r){r.r(t),r.d(t,{default:function(){return P}});var o=r(69307),s=r(7862),a=r.n(s),c=r(65736),n=r(92694),i=r(9818),l=r(84422),m=r(7577);const{addCesSurveyForAnalytics:u}=(0,i.dispatch)(m.Ls),d=(0,n.applyFilters)("woocommerce_admin_categories_report_charts",[{key:"items_sold",label:(0,c.__)("Items sold","woocommerce"),order:"desc",orderby:"items_sold",type:"number"},{key:"net_revenue",label:(0,c.__)("Net sales","woocommerce"),order:"desc",orderby:"net_revenue",type:"currency"},{key:"orders_count",label:(0,c.__)("Orders","woocommerce"),order:"desc",orderby:"orders_count",type:"number"}]),g=(0,n.applyFilters)("woocommerce_admin_category_report_advanced_filters",{filters:{},title:(0,c._x)("Categories match {{select /}} filters","A sentence describing filters for Categories. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ","woocommerce")}),_=[{label:(0,c.__)("All categories","woocommerce"),value:"all"},{label:(0,c.__)("Single category","woocommerce"),value:"select_category",chartMode:"item-comparison",subFilters:[{component:"Search",value:"single_category",chartMode:"item-comparison",path:["select_category"],settings:{type:"categories",param:"categories",getLabels:l.YC,labels:{placeholder:(0,c.__)("Type to search for a category","woocommerce"),button:(0,c.__)("Single Category","woocommerce")}}}]},{label:(0,c.__)("Comparison","woocommerce"),value:"compare-categories",chartMode:"item-comparison",settings:{type:"categories",param:"categories",getLabels:l.YC,labels:{helpText:(0,c.__)("Check at least two categories below to compare","woocommerce"),placeholder:(0,c.__)("Search for categories to compare","woocommerce"),title:(0,c.__)("Compare Categories","woocommerce"),update:(0,c.__)("Compare","woocommerce")},onClick:u}}];Object.keys(g.filters).length&&_.push({label:(0,c.__)("Advanced filters","woocommerce"),value:"advanced"});const p=(0,n.applyFilters)("woocommerce_admin_categories_report_filters",[{label:(0,c.__)("Show","woocommerce"),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:()=>!0,filters:_}]);var y=r(94333),h=r(92819),b=r(10431),w=r(86020),f=r(81595),v=r(67221),C=r(83379),S=r(35063),k=r(20964);class q extends o.Component{constructor(e){super(e),this.getRowsContent=this.getRowsContent.bind(this),this.getSummary=this.getSummary.bind(this)}getHeadersContent(){return[{label:(0,c.__)("Category","woocommerce"),key:"category",required:!0,isSortable:!0,isLeftAligned:!0},{label:(0,c.__)("Items sold","woocommerce"),key:"items_sold",required:!0,defaultSort:!0,isSortable:!0,isNumeric:!0},{label:(0,c.__)("Net sales","woocommerce"),key:"net_revenue",isSortable:!0,isNumeric:!0},{label:(0,c.__)("Products","woocommerce"),key:"products_count",isSortable:!0,isNumeric:!0},{label:(0,c.__)("Orders","woocommerce"),key:"orders_count",isSortable:!0,isNumeric:!0}]}getRowsContent(e){const{render:t,formatDecimal:r,getCurrencyConfig:s}=this.context,{categories:a,query:c}=this.props;if(!a)return[];const n=s();return(0,h.map)(e,(e=>{const{category_id:s,items_sold:i,net_revenue:l,products_count:m,orders_count:u}=e,d=a.get(s),g=(0,b.getPersistedQuery)(c);return[{display:(0,o.createElement)(C.Z,{query:c,category:d,categories:a}),value:d&&d.name},{display:(0,f.formatValue)(n,"number",i),value:i},{display:t(l),value:r(l)},{display:d&&(0,o.createElement)(w.Link,{href:(0,b.getNewPath)(g,"/analytics/categories",{filter:"single_category",categories:d.id}),type:"wc-admin"},(0,f.formatValue)(n,"number",m)),value:m},{display:(0,f.formatValue)(n,"number",u),value:u}]}))}getSummary(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const{items_sold:r=0,net_revenue:o=0,orders_count:s=0}=e,{formatAmount:a,getCurrencyConfig:n}=this.context,i=n();return[{label:(0,c._n)("Category","Categories",t,"woocommerce"),value:(0,f.formatValue)(i,"number",t)},{label:(0,c._n)("Item sold","Items sold",r,"woocommerce"),value:(0,f.formatValue)(i,"number",r)},{label:(0,c.__)("Net sales","woocommerce"),value:a(o)},{label:(0,c._n)("Order","Orders",s,"woocommerce"),value:(0,f.formatValue)(i,"number",s)}]}render(){const{advancedFilters:e,filters:t,isRequesting:r,query:s}=this.props,a={helpText:(0,c.__)("Check at least two categories below to compare","woocommerce"),placeholder:(0,c.__)("Search by category name","woocommerce")};return(0,o.createElement)(S.Z,{compareBy:"categories",endpoint:"categories",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,getSummary:this.getSummary,summaryFields:["items_sold","net_revenue","orders_count"],isRequesting:r,itemIdField:"category_id",query:s,searchBy:"categories",labels:a,tableQuery:{orderby:s.orderby||"items_sold",order:s.order||"desc",extended_info:!0},title:(0,c.__)("Categories","woocommerce"),columnPrefsKey:"categories_report_columns",filters:t,advancedFilters:e})}}q.contextType=k.$;var E=(0,y.compose)((0,i.withSelect)(((e,t)=>{const{isRequesting:r,query:o}=t;if(r||o.search&&(!o.categories||!o.categories.length))return{};const{getItems:s,getItemsError:a,isResolving:c}=e(v.ITEMS_STORE_NAME),n={per_page:-1};return{categories:s("categories",n),isError:Boolean(a("categories",n)),isRequesting:c("getItems",["categories",n])}})))(q),R=r(60996),N=r(1427),x=r(10140),F=r(25273),I=r(79934);class A extends o.Component{getChartMeta(){const{query:e}=this.props,t="compare-categories"===e.filter&&e.categories&&e.categories.split(",").length>1,r="single_category"===e.filter&&!!e.categories,o=t||r?"item-comparison":"time-comparison";return{isSingleCategoryView:r,itemsLabel:r?(0,c.__)("%d products","woocommerce"):(0,c.__)("%d categories","woocommerce"),mode:o}}render(){const{isRequesting:e,query:t,path:r}=this.props,{mode:s,itemsLabel:a,isSingleCategoryView:c}=this.getChartMeta(),n={...t};return"item-comparison"===s&&(n.segmentby=c?"product":"category"),(0,o.createElement)(o.Fragment,null,(0,o.createElement)(I.Z,{query:t,path:r,filters:p,advancedFilters:g,report:"categories"}),(0,o.createElement)(x.Z,{charts:d,endpoint:"products",isRequesting:e,limitProperties:c?["products","categories"]:["categories"],query:n,selectedChart:(0,R.Z)(t.chart,d),filters:p,advancedFilters:g,report:"categories"}),(0,o.createElement)(N.Z,{charts:d,filters:p,advancedFilters:g,mode:s,endpoint:"products",limitProperties:c?["products","categories"]:["categories"],path:r,query:n,isRequesting:e,itemsLabel:a,selectedChart:(0,R.Z)(t.chart,d)}),c?(0,o.createElement)(F.Z,{isRequesting:e,query:n,baseSearchQuery:{filter:"single_category"},hideCompare:c,filters:p,advancedFilters:g}):(0,o.createElement)(E,{isRequesting:e,query:t,filters:p,advancedFilters:g}))}}A.propTypes={query:a().object.isRequired,path:a().string.isRequired};var P=A},25273:function(e,t,r){var o=r(69307),s=r(65736),a=r(94333),c=r(22629),n=r(9818),i=r(92819),l=r(10431),m=r(86020),u=r(81595),d=r(74617),g=r(67221),_=r(83379),p=r(24873),y=r(35063),h=r(20964),b=r(27182);const w=(0,b.O3)("manageStock","no"),f=(0,b.O3)("stockStatuses",{});class v extends o.Component{constructor(){super(),this.getHeadersContent=this.getHeadersContent.bind(this),this.getRowsContent=this.getRowsContent.bind(this),this.getSummary=this.getSummary.bind(this)}getHeadersContent(){return[{label:(0,s.__)("Product title","woocommerce"),key:"product_name",required:!0,isLeftAligned:!0,isSortable:!0},{label:(0,s.__)("SKU","woocommerce"),key:"sku",hiddenByDefault:!0,isSortable:!0},{label:(0,s.__)("Items sold","woocommerce"),key:"items_sold",required:!0,defaultSort:!0,isSortable:!0,isNumeric:!0},{label:(0,s.__)("Net sales","woocommerce"),screenReaderLabel:(0,s.__)("Net sales","woocommerce"),key:"net_revenue",required:!0,isSortable:!0,isNumeric:!0},{label:(0,s.__)("Orders","woocommerce"),key:"orders_count",isSortable:!0,isNumeric:!0},{label:(0,s.__)("Category","woocommerce"),key:"product_cat"},{label:(0,s.__)("Variations","woocommerce"),key:"variations",isSortable:!0},"yes"===w?{label:(0,s.__)("Status","woocommerce"),key:"stock_status"}:null,"yes"===w?{label:(0,s.__)("Stock","woocommerce"),key:"stock",isNumeric:!0}:null].filter(Boolean)}getRowsContent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const{query:t}=this.props,r=(0,l.getPersistedQuery)(t),{render:a,formatDecimal:n,getCurrencyConfig:g}=this.context,y=g();return(0,i.map)(e,(e=>{const{product_id:i,items_sold:g,net_revenue:h,orders_count:b}=e,v=e.extended_info||{},{category_ids:C,low_stock_amount:S,manage_stock:k,sku:q,stock_status:E,stock_quantity:R,variations:N=[]}=v,x=(0,c.decodeEntities)(v.name),F=(0,l.getNewPath)(r,"/analytics/orders",{filter:"advanced",product_includes:i}),I=(0,l.getNewPath)(r,"/analytics/products",{filter:"single_product",products:i}),{categories:A}=this.props,P=C&&A&&C.map((e=>A.get(e))).filter(Boolean)||[],V=(0,p.d)(E,R,S)?(0,o.createElement)(m.Link,{href:(0,d.getAdminLink)("post.php?action=edit&post="+i),type:"wp-admin"},(0,s._x)("Low","Indication of a low quantity","woocommerce")):f[E];return[{display:(0,o.createElement)(m.Link,{href:I,type:"wc-admin"},x),value:x},{display:q,value:q},{display:(0,u.formatValue)(y,"number",g),value:g},{display:a(h),value:n(h)},{display:(0,o.createElement)(m.Link,{href:F,type:"wc-admin"},b),value:b},{display:(0,o.createElement)("div",{className:"woocommerce-table__product-categories"},P[0]&&(0,o.createElement)(_.Z,{category:P[0],categories:A}),P.length>1&&(0,o.createElement)(m.Tag,{label:(0,s.sprintf)((0,s._x)("+%d more","categories","woocommerce"),P.length-1),popoverContents:P.map((e=>(0,o.createElement)(_.Z,{category:e,categories:A,key:e.id,query:t})))})),value:P.map((e=>e.name)).join(", ")},{display:(0,u.formatValue)(y,"number",N.length),value:N.length},"yes"===w?{display:k?V:(0,s.__)("N/A","woocommerce"),value:k?f[E]:null}:null,"yes"===w?{display:k?(0,u.formatValue)(y,"number",R):(0,s.__)("N/A","woocommerce"),value:R}:null].filter(Boolean)}))}getSummary(e){const{products_count:t=0,items_sold:r=0,net_revenue:o=0,orders_count:a=0}=e,{formatAmount:c,getCurrencyConfig:n}=this.context,i=n();return[{label:(0,s._n)("Product","Products",t,"woocommerce"),value:(0,u.formatValue)(i,"number",t)},{label:(0,s._n)("Item sold","Items sold",r,"woocommerce"),value:(0,u.formatValue)(i,"number",r)},{label:(0,s.__)("Net sales","woocommerce"),value:c(o)},{label:(0,s._n)("Orders","Orders",a,"woocommerce"),value:(0,u.formatValue)(i,"number",a)}]}render(){const{advancedFilters:e,baseSearchQuery:t,filters:r,hideCompare:a,isRequesting:c,query:n}=this.props,i={helpText:(0,s.__)("Check at least two products below to compare","woocommerce"),placeholder:(0,s.__)("Search by product name or SKU","woocommerce")};return(0,o.createElement)(y.Z,{compareBy:a?void 0:"products",endpoint:"products",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,getSummary:this.getSummary,summaryFields:["products_count","items_sold","net_revenue","orders_count"],itemIdField:"product_id",isRequesting:c,labels:i,query:n,searchBy:"products",baseSearchQuery:t,tableQuery:{orderby:n.orderby||"items_sold",order:n.order||"desc",extended_info:!0,segmentby:n.segmentby},title:(0,s.__)("Products","woocommerce"),columnPrefsKey:"products_report_columns",filters:r,advancedFilters:e})}}v.contextType=h.$,t.Z=(0,a.compose)((0,n.withSelect)(((e,t)=>{const{query:r,isRequesting:o}=t,{getItems:s,getItemsError:a,isResolving:c}=e(g.ITEMS_STORE_NAME);if(o||r.search&&(!r.products||!r.products.length))return{};const n={per_page:-1};return{categories:s("categories",n),isError:Boolean(a("categories",n)),isRequesting:c("getItems",["categories",n])}})))(v)}}]);