(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-647b51c2"],{"24b7":function(e,t,s){},2833:function(e,t,s){"use strict";var n=s("24b7"),i=s.n(n);i.a},4518:function(e,t,s){},"45ef":function(e,t,s){},"4c05":function(e,t,s){"use strict";var n=s("c6f0"),i=s.n(n);i.a},"659f":function(e,t,s){"use strict";var n=s("4518"),i=s.n(n);i.a},"6f6a":function(e,t,s){"use strict";var n=s("7740"),i=s.n(n);i.a},7740:function(e,t,s){},b2bd:function(e,t,s){"use strict";var n=s("45ef"),i=s.n(n);i.a},c6f0:function(e,t,s){},fd5f:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"breakdown page"},[s("div",{staticClass:"breakdown-columns mt1"},[s("div",{staticClass:"breakdown-column casting-column"},[s("div",{staticClass:"flexrow mb1"},[s("combobox-styled",{attrs:{label:e.$t("shots.fields.sequence"),options:e.castingSequenceOptions},model:{value:e.sequenceId,callback:function(t){e.sequenceId=t},expression:"sequenceId"}}),s("span",{staticClass:"filler"}),s("button-simple",{staticClass:"flexrow-item",attrs:{title:e.$t("main.csv.import_file"),icon:"upload","is-responsive":!0},on:{click:e.showImportModal}}),s("button-href-link",{staticClass:"flexrow-item",attrs:{title:e.$t("main.csv.export_file"),icon:"download","is-responsive":!0,path:e.exportUrlPath}})],1),e.isShotsLoading?s("spinner",{staticClass:"mt1"}):s("div",{staticClass:"mt1"},e._l(e.castingSequenceShots,(function(t){return s("shot-line",{key:t.id,attrs:{"shot-id":t.id,selected:e.selection[t.id],name:t.name,assets:e.castingByType[t.id]||[]},on:{"remove-one":e.removeOneAsset,"remove-ten":e.removeTenAssets,click:e.selectShot}})})),1)],1),e.isCurrentUserManager?s("div",{directives:[{name:"scroll",rawName:"v-scroll",value:e.onAssetListScroll,expression:"onAssetListScroll"}],ref:"asset-list",staticClass:"breakdown-column assets-column"},[s("h2",{staticClass:"subtitle"},[e._v("\n        "+e._s(e.$t("breakdown.all_assets"))+"\n      ")]),s("div",{staticClass:"filters-area flexrow"},[s("search-field",{staticClass:"flexrow-item",on:{change:e.onSearchChange}})],1),e.isAssetsLoading?s("spinner"):e._l(e.availableAssetsByType,(function(t){return s("div",{key:t.length>0?t[0].asset_type_name:"",staticClass:"type-assets"},[s("div",{staticClass:"asset-type"},[e._v("\n          "+e._s(t.length>0?t[0].asset_type_name:"")+"\n        ")]),s("div",{staticClass:"asset-list"},e._l(t,(function(t){return s("available-asset-block",{key:t.id,attrs:{asset:t,casted:void 0!==e.casting[t.id],active:Object.keys(e.selection).length>0},on:{"add-one":e.addOneAsset,"add-ten":e.addTenAssets}})})),1)])}))],2):e._e()]),s("import-modal",{attrs:{active:e.modals.importing,"is-loading":e.loading.importing,"is-error":e.errors.importing,"form-data":e.importCsvFormData,columns:e.csvColumns},on:{fileselected:e.selectFile,confirm:e.uploadImportFile,cancel:e.hideImportModal}})],1)},i=[],o=(s("8e6e"),s("7f7f"),s("20d6"),s("456d"),s("ac6a"),s("bd86")),a=s("2f62"),c=s("3657"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:{asset:!0,casted:e.casted,active:e.active},attrs:{id:"casting-"+e.asset.id,title:e.asset.name}},[s("div",{staticClass:"asset-add",on:{click:e.addOneAsset}},[e._v("\n  + 1\n  ")]),s("div",{staticClass:"asset-add-10",on:{click:e.addTenAssets}},[e._v("\n  + 10\n  ")]),e.asset.preview_file_id.length>0?s("div",{staticClass:"asset-picture"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/api/pictures/thumbnails-square/preview-files/"+e.asset.preview_file_id+".png",expression:"'/api/pictures/thumbnails-square/preview-files/' + asset.preview_file_id + '.png'"}]})]):s("div",{staticClass:"asset-picture"},[s("span",{staticClass:"empty-picture"},[e._v("\n      "+e._s(e.asset.name)+"\n    ")])])])},l=[],u={name:"available-asset-block",props:{asset:{default:function(){return{id:"",name:""}},type:Object},casted:{default:!1,type:Boolean},active:{default:!1,type:Boolean}},computed:{},methods:{addOneAsset:function(e){this.active&&(console.log(this.asset),this.$emit("add-one",this.asset.id))},addTenAssets:function(e){this.active&&this.$emit("add-ten",this.asset.id)}}},d=u,p=(s("659f"),s("2877")),h=Object(p["a"])(d,r,l,!1,null,"4d5dc9f2",null),f=h.exports,m=s("9355"),v=s("de40"),g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"field"},[e.label.length>0?s("label",{staticClass:"label"},[e._v("\n    "+e._s(e.label)+"\n  ")]):e._e(),s("div",{class:{combo:!0,open:e.showList}},[s("div",{staticClass:"flexrow",on:{click:e.toggleList}},[s("div",{staticClass:"selected-line flexrow-item"},[e._v("\n        "+e._s(e.selectedOption.label)+"\n      ")]),s("chevron-down-icon",{staticClass:"down-icon flexrow-item"})],1),e.showList?s("div",{ref:"select",staticClass:"select-input"},e._l(e.options,(function(t){return s("div",{key:t.id,staticClass:"option-line",on:{click:function(s){return e.selectOption(t)},mouseup:function(s){return"button"in s&&1!==s.button?null:e.openRoute(t)}}},[e._v("\n        "+e._s(t.label)+"\n      ")])})),0):e._e()]),s("div",{class:{"c-mask":!0,"is-active":e.showList},on:{click:e.toggleList}})])},b=[],y=(s("7514"),s("0a35"));function O(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function _(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?O(s,!0).forEach((function(t){Object(o["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):O(s).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var C={name:"combobox-styled",components:{ChevronDownIcon:y["d"]},data:function(){return{selectedOption:{label:"",value:""},showList:!1}},props:{label:{default:"",type:String},options:{default:function(){return[]},type:Array},value:{default:"",type:String}},mounted:function(){this.options.length>0&&(this.selectedOption=this.options[0])},computed:_({},Object(a["c"])(["isDarkTheme"])),methods:{selectOption:function(e){this.$emit("input",e.value),this.selectedOption=e,this.showList=!1},openRoute:function(e){var t=this.$router.resolve(e.route).href,s="".concat(window.location.protocol,"//").concat(window.location.host).concat(t);window.open(s,"_blank")},toggleList:function(){this.showList=!this.showList}},watch:{options:function(){var e=this;if(this.options.length>0){var t=this.options.find((function(t){return t.value===e.value}));this.selectedOption=t||this.options[0]}}}},w=C,S=(s("4c05"),Object(p["a"])(w,g,b,!1,null,"531436ca",null)),k=S.exports,A=s("440f"),I=s("4d04"),j=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:{shot:!0,selected:e.selected,unselectable:!0},attrs:{id:e.shotId},on:{click:function(t){return e.onClicked(t)}}},[s("div",{staticClass:"flexrow"},[s("div",{staticClass:"shot-name flexrow-item"},[e._v("\n      "+e._s(e.name)+"\n    ")]),s("div",{staticClass:"asset-list flexrow-item"},[e._l(e.assets,(function(t){return s("div",{key:t.length>0?t[0].asset_type_name:"",staticClass:"asset-type-line flexrow"},[s("span",{staticClass:"asset-type-name flexrow-item"},[e._v("\n          "+e._s(t.length>0?t[0].asset_type_name:"")+"\n        ")]),e._l(t,(function(t){return s("asset-block",{key:t.id,staticClass:"flexrow-item",attrs:{asset:t,"nb-occurences":t.nb_occurences},on:{"remove-one":e.removeOneAsset,"remove-ten":e.removeTenAssets}})}))],2)})),0===e.assets.length?s("div",{staticClass:"asset-type-line flexrow empty"},[e._v("\n        "+e._s(e.$t("breakdown.empty"))+"\n      ")]):e._e()],2)])])},q=[],x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:{asset:!0,big:!0,casted:!0,active:e.active},attrs:{title:e.asset.name+" ("+e.nbOccurences+")"}},[s("div",{staticClass:"asset-add",on:{click:e.removeOneAsset}},[e._v("\n  - 1\n  ")]),s("div",{staticClass:"asset-add-10",on:{click:e.removeTenAssets}},[e._v("\n  - 10\n  ")]),e.asset.preview_file_id?s("div",{staticClass:"asset-picture"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/api/pictures/thumbnails-square/preview-files/"+e.asset.preview_file_id+".png",expression:"'/api/pictures/thumbnails-square/preview-files/' + asset.preview_file_id + '.png'"}]}),e.nbOccurences>1?s("span",{staticClass:"nb-occurences"},[e._v("\n      "+e._s(e.nbOccurences)+"\n    ")]):e._e()]):s("div",{staticClass:"asset-picture"},[s("span",{staticClass:"empty-picture"},[e._v("\n      "+e._s(e.asset.name)+" ("+e._s(e.nbOccurences)+")\n    ")])])])},E=[],L=(s("c5f6"),{name:"asset-block",props:{asset:{default:function(){return{id:"",name:""}},type:Object},nbOccurences:{default:1,type:Number},active:{default:!0,type:Boolean}},computed:{},methods:{removeOneAsset:function(e){this.$emit("remove-one",this.asset.asset_id)},removeTenAssets:function(e){this.$emit("remove-ten",this.asset.asset_id)}}}),T=L,P=(s("b2bd"),Object(p["a"])(T,x,E,!1,null,"33f7e96c",null)),$=P.exports,D={name:"shot-line",props:{shotId:{default:"",type:String},selected:{default:!1,type:Boolean},name:{default:"",type:String},assets:{default:function(){return[]},type:Array}},components:{AssetBlock:$},methods:{onClicked:function(e){this.$emit("click",this.shotId,e)},removeOneAsset:function(e){this.$emit("remove-one",e,this.shotId)},removeTenAssets:function(e){this.$emit("remove-ten",e,this.shotId)}}},M=D,B=(s("6f6a"),Object(p["a"])(M,j,q,!1,null,"1cad56d8",null)),F=B.exports,N=s("be83");function U(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function z(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?U(s,!0).forEach((function(t){Object(o["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):U(s).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var K={name:"breakdown",components:{AvailableAssetBlock:f,ButtonHrefLink:m["a"],ButtonSimple:v["a"],ComboboxStyled:k,ImportModal:A["a"],SearchField:I["a"],ShotLine:F,Spinner:N["a"]},data:function(){return{csvColumns:["Episode","Parent","Name","Asset Type","Asset","Occurences","Label"],importCsvFormData:{},isLoading:!1,sequenceId:"",episodeId:"",selection:{},modals:{importing:!1},loading:{importing:!1},errors:{importing:!1}}},mounted:function(){this.isLoading||this.reset(),this.setLastProductionScreen("breakdown")},computed:z({},Object(a["c"])(["assetMap","assetsByType","currentEpisode","currentProduction","displayedShots","isTVShow","getEpisodeOptions","castingSequenceOptions","isAssetsLoading","isShotsLoading","sequenceMap","shots","sequences","shotMap","castingSequenceId","castingCurrentShot","castingSequenceShots","isCastingSaveActive","casting","castingByType","isCastingDirty","isCastingSaveActive","isCurrentUserManager"]),{availableAssetsByType:function(){var e=[];return this.assetsByType.forEach((function(t){var s=t.filter((function(e){return!e.canceled}));s.length>0&&e.push(s)})),e},exportUrlPath:function(){return"/api/export/csv/projects/".concat(this.currentProduction.id,"/casting.csv")}}),methods:z({},Object(a["b"])(["addAssetToCasting","displayMoreAssets","loadShots","loadAssets","removeAssetFromCasting","saveCasting","setAssetSearch","setCastingEpisode","setCastingSequence","setCastingShot","setLastProductionScreen","uploadCastingFile"]),{reset:function(){var e=this;this.isLoading=!0,setTimeout((function(){e.reloadShots()}),100)},reloadShots:function(){var e=this;this.isLoading=!0,this.loadShots((function(){e.isTVShow?(e.currentEpisode&&(e.episodeId=e.currentEpisode.id),e.setCastingEpisode(e.episodeId)):e.setCastingEpisode(null),e.loadAssets((function(){e.isLoading=!1,e.displayMoreAssets();var t={};e.castingSequenceShots.forEach((function(e){t[e.id]=!1})),e.selection=t}))}))},onSearchChange:function(e){this.setAssetSearch(e)},selectShot:function(e,t){t.ctrlKey||t.shitKey||this.clearSelection(),this.previousShotId&&t.shiftKey&&this.selectRange(this.previousShotId,e),this.previousShotId=e,this.selection[e]=!0},clearSelection:function(){var e=this;Object.keys(this.selection).filter((function(t){return e.selection[t]})).forEach((function(t){e.selection[t]=!1}))},selectRange:function(e,t){var s=this,n=Object.keys(this.selection),i=n.findIndex((function(t){return t===e})),o=n.findIndex((function(e){return e===t})),a=[];a=i<o?Object(c["f"])(i,o):Object(c["f"])(o,i),a.forEach((function(e){e>0&&(s.selection[n[e]]=!0)}))},addOneAsset:function(e){var t=this;Object.keys(this.selection).filter((function(e){return t.selection[e]})).forEach((function(s){t.addAssetToCasting({shotId:s,assetId:e,nbOccurences:1}),t.saveCasting(s).catch(console.error)}))},addTenAssets:function(e){var t=this;Object.keys(this.selection).filter((function(e){return t.selection[e]})).forEach((function(s){t.addAssetToCasting({shotId:s,assetId:e,nbOccurences:10}),t.saveCasting(s).catch(console.error)}))},removeOneAsset:function(e,t){this.removeAssetFromCasting({shotId:t,assetId:e,nbOccurences:1}),this.saveCasting(t).catch(console.error)},removeTenAssets:function(e,t){this.removeAssetFromCasting({shotId:t,assetId:e,nbOccurences:10}),this.saveCasting(t).catch(console.error)},onAssetListScroll:function(e,t){var s=this.$refs["asset-list"],n=s.scrollHeight-s.offsetHeight;n<t.scrollTop+100&&this.displayMoreAssets()},showImportModal:function(){this.modals.importing=!0},hideImportModal:function(){this.modals.importing=!1},selectFile:function(e){this.importCsvFormData=e},uploadImportFile:function(){var e=this;this.loading.importing=!0,this.errors.importing=!1,this.uploadCastingFile(this.importCsvFormData).then((function(){e.loading.importing=!1,e.hideImportModal(),e.reloadShots()})).catch((function(){e.loading.importing=!1,e.errors.importing=!0}))},updateUrl:function(){var e=this.$route.params.sequence_id;if(e!==this.sequenceId){var t={name:"breakdown-sequence",params:{production_id:this.currentProduction.id,sequence_id:this.sequenceId}};this.currentEpisode&&(t.name="episode-".concat(t.name),t.params.episode_id=this.currentEpisode.id),this.$router.push(t)}}}),watch:{$route:function(){},sequenceId:function(){this.sequences&&this.sequences.length>0&&(this.setCastingSequence(this.sequenceId),this.updateUrl())},episodeId:function(){},castingSequenceOptions:function(){var e=this.$route.params.sequence_id;e&&this.sequenceMap[e]?this.sequenceId=e:this.castingSequenceOptions.length>0?this.sequenceId=this.castingSequenceOptions[0].value:this.sequenceId=""},currentProduction:function(){this.reset()},currentEpisode:function(){this.currentEpisode&&this.episodeId!==this.currentEpisode.id&&!this.isLoading&&this.reset()},sequences:function(){this.$store.commit("CASTING_SET_SEQUENCES",this.sequences)}},metaInfo:function(){return{title:"".concat(this.currentProduction.name," ").concat(this.$t("breakdown.title")," - Kitsu")}}},R=K,H=(s("2833"),Object(p["a"])(R,n,i,!1,null,"6787c658",null));t["default"]=H.exports}}]);
//# sourceMappingURL=chunk-647b51c2.46853e70.js.map