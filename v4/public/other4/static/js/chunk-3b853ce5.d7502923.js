(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b853ce5"],{"90ca":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),r=Object(a["createElementVNode"])("p",{class:"tip"},[Object(a["createTextVNode"])(" 与 "),Object(a["createElementVNode"])("a",{class:"link",href:"https://github.com/vueComponent/ant-design-vue"},"ant-design-vue"),Object(a["createTextVNode"])(" 组合渲染 + 使用分页"),Object(a["createElementVNode"])("br"),Object(a["createElementVNode"])("span",{class:"red"},"（注：该示例仅供参考，具体逻辑请自行实现）")],-1),o={class:"demo-code"};function i(e,t,n,i,l,c){var d=Object(a["resolveComponent"])("vxe-form-item"),s=Object(a["resolveComponent"])("vxe-form"),u=Object(a["resolveComponent"])("a-button"),m=Object(a["resolveComponent"])("a-menu-item"),f=Object(a["resolveComponent"])("a-menu-divider"),p=Object(a["resolveComponent"])("a-menu"),h=Object(a["resolveComponent"])("a-dropdown"),v=Object(a["resolveComponent"])("vxe-toolbar"),g=Object(a["resolveComponent"])("vxe-column"),b=Object(a["resolveComponent"])("vxe-table"),x=Object(a["resolveComponent"])("a-pagination"),w=Object(a["resolveComponent"])("pre-code");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",null,[r,Object(a["createVNode"])(s,{data:e.demo1.formData,"title-width":"120","title-align":"right",onSubmit:e.searchEvent,onReset:e.searchEvent},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(d,{field:"name",title:"AInput",span:"8","title-prefix":{message:"帮助信息！！！",icon:"fa fa-exclamation-circle"},"item-render":{name:"AInput"}}),Object(a["createVNode"])(d,{field:"role",title:"AAutoComplete",span:"8","item-render":{name:"AAutoComplete",props:{options:e.roleList},events:{search:e.roleSearchEvent}}},null,8,["item-render"]),Object(a["createVNode"])(d,{field:"age",title:"AInputNumber",span:"8","item-render":{name:"AInputNumber"}}),Object(a["createVNode"])(d,{field:"sex",title:"ASelect",span:"8","item-render":{name:"ASelect",options:e.demo1.sexList}},null,8,["item-render"]),Object(a["createVNode"])(d,{field:"region",title:"ACascader",span:"8","item-render":{name:"ACascader",props:{options:e.demo1.regionList}}},null,8,["item-render"]),Object(a["createVNode"])(d,{field:"date",title:"ADatePicker",span:"8","item-render":{name:"ADatePicker",props:{type:"date",format:"YYYY/MM/DD"}}}),Object(a["createVNode"])(d,{field:"flag",title:"ASwitch",span:"8",folding:"","item-render":{name:"ASwitch"}}),Object(a["createVNode"])(d,{field:"rate",title:"ARate",span:"8",folding:"","item-render":{name:"ARate"}}),Object(a["createVNode"])(d,{field:"flag1",title:"ARadio",span:"8",folding:"","item-render":{name:"ARadio",options:[{label:"是",value:"Y"},{label:"否",value:"N"}]}}),Object(a["createVNode"])(d,{field:"checkedList",title:"ACheckbox",span:"8",folding:"","item-render":{name:"ACheckbox",options:[{label:"北京",value:"beijing"},{label:"深圳",value:"shenzhen"},{label:"上海",value:"shanghai"}]},"visible-method":e.visibleMethod},null,8,["visible-method"]),Object(a["createVNode"])(d,{span:"24",align:"center","collapse-node":"","item-render":{name:"AButtons",children:[{content:"查询",props:{type:"primary",htmlType:"submit"}},{content:"重置",props:{htmlType:"reset"}}]}})]})),_:1},8,["data","onSubmit","onReset"]),Object(a["createVNode"])(v,{ref:"xToolbar",export:"",print:"",custom:""},{buttons:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(u,{onClick:e.insertEvent},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])("新增")]})),_:1},8,["onClick"]),Object(a["createVNode"])(u,{onClick:e.saveEvent},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])("保存")]})),_:1},8,["onClick"]),Object(a["createVNode"])(u,{onClick:e.validEvent},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])("校验")]})),_:1},8,["onClick"]),Object(a["createVNode"])(h,{trigger:["click"]},{overlay:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(p,null,{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(m,{key:"0"},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("a",{onClick:t[0]||(t[0]=function(t){return e.dropdownMenuEvent("remove")})},"删除选中")]})),_:1}),Object(a["createVNode"])(m,{key:"1"},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("a",{onClick:t[1]||(t[1]=function(t){return e.dropdownMenuEvent("export")})},"导出数据")]})),_:1}),Object(a["createVNode"])(f)]})),_:1})]})),default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(u,null,{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])("操作")]})),_:1})]})),_:1})]})),_:1},512),Object(a["createVNode"])(b,{border:"","show-overflow":"","keep-source":"",ref:"xTable",height:"460","row-config":{isHover:!0},"column-config":{resizable:!0},"export-config":{},"print-config":{},loading:e.demo1.loading,data:e.demo1.tableData,"edit-rules":e.demo1.validRules,"edit-config":{trigger:"click",mode:"row",showStatus:!0}},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(g,{type:"checkbox",width:"60",fixed:"left"}),Object(a["createVNode"])(g,{type:"seq",title:"Number",width:"80",fixed:"left"}),Object(a["createVNode"])(g,{field:"name",title:"AInput","min-width":"140",fixed:"left","edit-render":{name:"AInput"}}),Object(a["createVNode"])(g,{field:"role",title:"AAutoComplete",width:"160","edit-render":{name:"AAutoComplete",props:{options:e.roleList},events:{search:e.roleSearchEvent}}},null,8,["edit-render"]),Object(a["createVNode"])(g,{field:"age",title:"AInputNumber",width:"160","edit-render":{name:"AInputNumber",props:{max:35,min:18}}}),Object(a["createVNode"])(g,{field:"sex",title:"ASelect",width:"140","edit-render":{name:"ASelect",options:e.demo1.sexList}},null,8,["edit-render"]),Object(a["createVNode"])(g,{field:"sex1",title:"ASelect multiple",width:"180","edit-render":{name:"ASelect",options:e.demo1.sexList,props:{mode:"multiple"}}},null,8,["edit-render"]),Object(a["createVNode"])(g,{field:"region",title:"ACascader",width:"200","edit-render":{name:"ACascader",props:{options:e.demo1.regionList}}},null,8,["edit-render"]),Object(a["createVNode"])(g,{field:"date1",title:"ADatePicker",width:"200","edit-render":{name:"ADatePicker",props:{type:"date",format:"YYYY/MM/DD"}}}),Object(a["createVNode"])(g,{field:"flag",title:"ASwitch",width:"100","cell-render":{name:"ASwitch"}}),Object(a["createVNode"])(g,{field:"rate",title:"ARate",width:"200",fixed:"right","cell-render":{name:"ARate"}})]})),_:1},8,["loading","data","edit-rules"]),Object(a["createVNode"])(x,{onShowSizeChange:e.handleSizeChange,onChange:e.handleCurrentChange,modelValue:e.demo1.tablePage.currentPage,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.demo1.tablePage.currentPage=t}),"page-size-options":["5","10","15","20","50","100","150","200"],"page-size":e.demo1.tablePage.pageSize,total:e.demo1.tablePage.totalResult,showSizeChanger:"",showQuickJumper:""},null,8,["onShowSizeChange","onChange","modelValue","page-size","total"]),Object(a["createElementVNode"])("p",o,Object(a["toDisplayString"])(e.$t("app.body.button.showCode")),1),Object(a["createElementVNode"])("pre",null,[Object(a["createTextVNode"])("      "),Object(a["createVNode"])(w,{class:"xml"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.demoCodes[0]),1)]})),_:1}),Object(a["createTextVNode"])("\n      "),Object(a["createVNode"])(w,{class:"typescript"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.demoCodes[1]),1)]})),_:1}),Object(a["createTextVNode"])("\n    ")])])}var l=n("c7eb"),c=n("1da1"),d=(n("4de4"),n("d3b7"),n("ed3b")),s=n("f64c"),u=Object(a["defineComponent"])({setup:function(){var e=Object(a["ref"])({}),t=Object(a["ref"])({}),n=[{value:"Designer"},{value:"Develop"},{value:"Test"},{value:"PM"}],r=Object(a["ref"])([]),o=Object(a["reactive"])({loading:!1,tableData:[],validRules:{name:[{required:!0,message:"app.body.valid.rName"},{min:3,max:50,message:"名称长度在 3 到 50 个字符"}],sex:[{required:!0,message:"性别必须填写"}]},sexList:[],regionList:[],sexGroupList:[{label:"分组1",options:[{label:"男",value:"1"}]},{label:"分组2",options:[{label:"女",value:"0"}]}],tablePage:{currentPage:1,pageSize:10,totalResult:0},formData:{name:"",role:"",sex:null,age:null,region:[],date:null,flag:!1,rate:0,flag1:"",checkedList:[]}}),i=function(){o.loading=!0,setTimeout((function(){var e=[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"0",sex1:[],region:[],age:28,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:5,rate1:59,flag:!1,address:"Shenzhen"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"1",sex1:[],region:[],age:22,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:2,rate1:22,flag:!1,address:"Guangzhou"},{id:10003,name:"Test3",nickname:"T3",role:"PM",sex:"0",sex1:[],region:[],age:32,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:3,rate1:12,flag:!1,address:"Shanghai"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"0",sex1:["1","0"],region:[],age:23,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",color1:"",tree1:"",tree2:[],date7:"",rate:33,rate1:4,flag:!0,address:"Shenzhen"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"0",sex1:["1","0"],region:[],age:30,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",color1:"",tree1:"",tree2:[],date7:"",rate:0,rate1:15,flag:!0,address:"Shanghai"},{id:10006,name:"Test6",nickname:"T6",role:"Designer",sex:"0",sex1:[],region:[],age:21,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:3,rate1:73,flag:!1,address:"Shenzhen"},{id:10007,name:"Test7",nickname:"T7",role:"Test",sex:"1",sex1:["1"],region:[],age:29,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:0,rate1:0,flag:!0,address:"Guangzhou"},{id:10008,name:"Test8",nickname:"T8",role:"Develop",sex:"1",sex1:[],region:[],age:35,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:2,rate1:14,flag:!1,address:"Shenzhen"},{id:10009,name:"Test9",nickname:"T9",role:"Test",sex:"1",sex1:["0"],region:[],age:24,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:3,rate1:52,flag:!1,address:"Shenzhen"},{id:100010,name:"Test10",nickname:"T10",role:"Develop",sex:"1",sex1:[],region:[],age:20,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:4,rate1:83,flag:!1,address:"Guangzhou"}];o.tableData=e,o.tablePage.totalResult=146,o.loading=!1}),500)},u=function(){var e=[{label:"男",value:"1"},{label:"女",value:"0"}];o.sexList=e},m=function(){var e=[{label:"北京",value:1,children:[{value:3,label:"东城区"},{value:4,label:"西城区"}]},{label:"上海",value:21,children:[{value:23,label:"黄浦区"},{value:24,label:"卢湾区"}]},{label:"广东",value:42,children:[{value:43,label:"广州市"},{value:67,label:"深圳市"}]}];o.regionList=e},f=function(){o.tablePage.currentPage=1,i()},p=function(){var e=Object(c["a"])(Object(l["a"])().mark((function e(){var n,a,r,o;return Object(l["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.value,a={role:"",age:18,sex1:[],region:[],flag:!1,rate:2},e.next=4,n.insert(a);case 4:r=e.sent,o=r.row,n.setEditRow(o);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=t.value,n=e.getRecordset(),a=n.insertRecords,r=n.removeRecords,o=n.updateRecords;a.length||r.length||o.length?(d["a"].success({content:"保存成功！"}),f()):d["a"].warn({content:"数据未改动！"})},v=function(){var e=Object(c["a"])(Object(l["a"])().mark((function e(){var n,a;return Object(l["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.value,e.next=3,n.validate();case 3:a=e.sent,a?s["a"].error({content:"校验不通过！"}):s["a"].success({content:"校验成功！"});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(e){var n=t.value;switch(e){case"remove":var a=n.getCheckboxRecords();a.length?n.removeCheckboxRow():s["a"].warning({content:"请至少选择一条数据！"});break;case"export":n.exportData();break}},b=function(e,t){o.tablePage.pageSize=t,f()},x=function(e){o.tablePage.currentPage=e,i()},w=function(e){var t=e.data;return"Y"===t.flag1},y=function(e,t){r.value=n.filter((function(e){return-1!==e.value.toUpperCase().indexOf((t||"").toUpperCase())}))};return Object(a["nextTick"])((function(){var n=t.value,a=e.value;n.connect(a)})),i(),u(),m(),{xToolbar:e,xTable:t,demo1:o,roleList:r,insertEvent:p,saveEvent:h,validEvent:v,dropdownMenuEvent:g,searchEvent:f,handleSizeChange:b,handleCurrentChange:x,visibleMethod:w,roleSearchEvent:y,demoCodes:['\n        <vxe-form :data="demo1.formData" title-width="120" title-align="right" @submit="searchEvent" @reset="searchEvent">\n          <vxe-form-item field="name" title="AInput" span="8" :title-prefix="{ message: \'帮助信息！！！\', icon: \'fa fa-exclamation-circle\' }" :item-render="{name: \'AInput\'}"></vxe-form-item>\n          <vxe-form-item field="role" title="AAutoComplete" span="8" :item-render="{name: \'AAutoComplete\', props: {options: roleList}, events: {search: roleSearchEvent}}"></vxe-form-item>\n          <vxe-form-item field="age" title="AInputNumber" span="8" :item-render="{name: \'AInputNumber\'}"></vxe-form-item>\n          <vxe-form-item field="sex" title="ASelect" span="8" :item-render="{name: \'ASelect\', options: demo1.sexList}"></vxe-form-item>\n          <vxe-form-item field="region" title="ACascader" span="8" :item-render="{name: \'ACascader\', props: {options: demo1.regionList}}"></vxe-form-item>\n          <vxe-form-item field="date" title="ADatePicker" span="8" :item-render="{name: \'ADatePicker\', props: {type: \'date\', format: \'YYYY/MM/DD\'}}"></vxe-form-item>\n          <vxe-form-item field="flag" title="ASwitch" span="8" folding :item-render="{name: \'ASwitch\'}"></vxe-form-item>\n          <vxe-form-item field="rate" title="ARate" span="8" folding :item-render="{name: \'ARate\'}"></vxe-form-item>\n          <vxe-form-item field="flag1" title="ARadio" span="8" folding :item-render="{name: \'ARadio\', options: [{label: \'是\', value: \'Y\'}, {label: \'否\', value: \'N\'}]}"></vxe-form-item>\n          <vxe-form-item field="checkedList" title="ACheckbox" span="8" folding :item-render="{name: \'ACheckbox\', options: [{label: \'北京\', value: \'beijing\'}, {label: \'深圳\', value: \'shenzhen\'}, {label: \'上海\', value: \'shanghai\'}]}" :visible-method="visibleMethod"></vxe-form-item>\n          <vxe-form-item span="24" align="center" collapse-node :item-render="{name: \'AButtons\', children: [{ content: \'查询\', props: {type: \'primary\', htmlType: \'submit\'} }, { content: \'重置\', props: {htmlType: \'reset\'} }]}"></vxe-form-item>\n        </vxe-form>\n\n        <vxe-toolbar ref="xToolbar" export print custom>\n          <template #buttons>\n            <a-button @click="insertEvent">新增</a-button>\n            <a-button @click="saveEvent">保存</a-button>\n            <a-button @click="validEvent">校验</a-button>\n            <a-dropdown :trigger="[\'click\']">\n              <a-button>操作</a-button>\n              <template #overlay>\n                <a-menu>\n                  <a-menu-item key="0">\n                    <a @click="dropdownMenuEvent(\'remove\')">删除选中</a>\n                  </a-menu-item>\n                  <a-menu-item key="1">\n                    <a @click="dropdownMenuEvent(\'export\')">导出数据</a>\n                  </a-menu-item>\n                  <a-menu-divider />\n                </a-menu>\n              </template>\n            </a-dropdown>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          border\n          show-overflow\n          keep-source\n          ref="xTable"\n          height="460"\n          :row-config="{isHover: true}"\n          :column-config="{resizable: true}"\n          :export-config="{}"\n          :print-config="{}"\n          :loading="demo1.loading"\n          :data="demo1.tableData"\n          :edit-rules="demo1.validRules"\n          :edit-config="{trigger: \'click\', mode: \'row\', showStatus: true}">\n          <vxe-column type="checkbox" width="60" fixed="left"></vxe-column>\n          <vxe-column type="seq" title="Number" width="80" fixed="left"></vxe-column>\n          <vxe-column field="name" title="AInput" min-width="140" fixed="left" :edit-render="{name: \'AInput\'}"></vxe-column>\n          <vxe-column field="role" title="AAutoComplete" width="160" :edit-render="{name: \'AAutoComplete\', props: {options: roleList}, events: {search: roleSearchEvent}}"></vxe-column>\n          <vxe-column field="age" title="AInputNumber" width="160" :edit-render="{name: \'AInputNumber\', props: {max: 35, min: 18}}"></vxe-column>\n          <vxe-column field="sex" title="ASelect" width="140" :edit-render="{name: \'ASelect\', options: demo1.sexList}"></vxe-column>\n          <vxe-column field="sex1" title="ASelect multiple" width="180" :edit-render="{name: \'ASelect\', options: demo1.sexList, props: {mode: \'multiple\'}}"></vxe-column>\n          <vxe-column field="region" title="ACascader" width="200" :edit-render="{name: \'ACascader\', props: {options: demo1.regionList}}"></vxe-column>\n          <vxe-column field="date1" title="ADatePicker" width="200" :edit-render="{name: \'ADatePicker\', props: {type: \'date\', format: \'YYYY/MM/DD\'}}"></vxe-column>\n          <vxe-column field="flag" title="ASwitch" width="100" :cell-render="{name: \'ASwitch\'}"></vxe-column>\n          <vxe-column field="rate" title="ARate" width="200" fixed="right" :cell-render="{name: \'ARate\'}"></vxe-column>\n        </vxe-table>\n\n        <a-pagination\n          @showSizeChange="handleSizeChange"\n          @change="handleCurrentChange"\n          v-model="demo1.tablePage.currentPage"\n          :page-size-options="[\'5\', \'10\', \'15\', \'20\', \'50\', \'100\', \'150\', \'200\']"\n          :page-size="demo1.tablePage.pageSize"\n          :total="demo1.tablePage.totalResult"\n          showSizeChanger\n          showQuickJumper>\n        </a-pagination>\n        ',"\n        import { defineComponent, reactive, ref, nextTick } from 'vue'\n        import { Modal, message } from 'ant-design-vue'\n        import { VxeTableInstance, VxeToolbarInstance } from 'vxe-table'\n\n        export default defineComponent({\n          setup () {\n            const xToolbar = ref({} as VxeToolbarInstance)\n            const xTable = ref({} as VxeTableInstance)\n\n            const restaurants = [\n              { value: 'Designer' },\n              { value: 'Develop' },\n              { value: 'Test' },\n              { value: 'PM' }\n            ]\n\n            const roleList = ref([] as any[])\n\n            const demo1 = reactive({\n              loading: false,\n              tableData: [] as any[],\n              validRules: {\n                name: [\n                  { required: true, message: 'app.body.valid.rName' },\n                  { min: 3, max: 50, message: '名称长度在 3 到 50 个字符' }\n                ],\n                sex: [\n                  { required: true, message: '性别必须填写' }\n                ]\n              },\n              sexList: [] as any[],\n              regionList: [] as any[],\n              sexGroupList: [\n                {\n                  label: '分组1',\n                  options: [\n                    { label: '男', value: '1' }\n                  ]\n                },\n                {\n                  label: '分组2',\n                  options: [\n                    { label: '女', value: '0' }\n                  ]\n                }\n              ],\n              tablePage: {\n                currentPage: 1,\n                pageSize: 10,\n                totalResult: 0\n              },\n              formData: {\n                name: '',\n                role: '',\n                sex: null,\n                age: null,\n                region: [],\n                date: null,\n                flag: false,\n                rate: 0,\n                flag1: '',\n                checkedList: []\n              }\n            })\n\n            const findList = () => {\n              demo1.loading = true\n              setTimeout(() => {\n                const list = [\n                  { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex1: [], region: [], age: 28, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 5, rate1: 59, flag: false, address: 'Shenzhen' },\n                  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: '1', sex1: [], region: [], age: 22, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 2, rate1: 22, flag: false, address: 'Guangzhou' },\n                  { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: '0', sex1: [], region: [], age: 32, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 3, rate1: 12, flag: false, address: 'Shanghai' },\n                  { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '0', sex1: ['1', '0'], region: [], age: 23, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', color1: '', tree1: '', tree2: [], date7: '', rate: 33, rate1: 4, flag: true, address: 'Shenzhen' },\n                  { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: '0', sex1: ['1', '0'], region: [], age: 30, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', color1: '', tree1: '', tree2: [], date7: '', rate: 0, rate1: 15, flag: true, address: 'Shanghai' },\n                  { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: '0', sex1: [], region: [], age: 21, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 3, rate1: 73, flag: false, address: 'Shenzhen' },\n                  { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: '1', sex1: ['1'], region: [], age: 29, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 0, rate1: 0, flag: true, address: 'Guangzhou' },\n                  { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: '1', sex1: [], region: [], age: 35, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 2, rate1: 14, flag: false, address: 'Shenzhen' },\n                  { id: 10009, name: 'Test9', nickname: 'T9', role: 'Test', sex: '1', sex1: ['0'], region: [], age: 24, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 3, rate1: 52, flag: false, address: 'Shenzhen' },\n                  { id: 100010, name: 'Test10', nickname: 'T10', role: 'Develop', sex: '1', sex1: [], region: [], age: 20, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 4, rate1: 83, flag: false, address: 'Guangzhou' }\n                ]\n                demo1.tableData = list\n                demo1.tablePage.totalResult = 146\n                demo1.loading = false\n              }, 500)\n            }\n\n            const findSexList = () => {\n              const sexList = [\n                { label: '', value: '' },\n                { label: '男', value: '1' },\n                { label: '女', value: '0' }\n              ]\n              demo1.sexList = sexList\n            }\n\n            const findRegionList = () => {\n              const regionList = [\n                {\n                  label: '北京',\n                  value: 1,\n                  children: [\n                    { value: 3, label: '东城区' },\n                    { value: 4, label: '西城区' }\n                  ]\n                },\n                {\n                  label: '上海',\n                  value: 21,\n                  children: [\n                    { value: 23, label: '黄浦区' },\n                    { value: 24, label: '卢湾区' }\n                  ]\n                },\n                {\n                  label: '广东',\n                  value: 42,\n                  children: [\n                    { value: 43, label: '广州市' },\n                    { value: 67, label: '深圳市' }\n                  ]\n                }\n              ]\n              demo1.regionList = regionList\n            }\n\n            const searchEvent = () => {\n              demo1.tablePage.currentPage = 1\n              findList()\n            }\n\n            const insertEvent = async () => {\n              const $table = xTable.value\n              const record = {\n                role: '',\n                age: 18,\n                sex1: [],\n                region: [],\n                flag: false,\n                rate: 2\n              }\n              const { row: newRow } = await $table.insert(record)\n              $table.setEditRow(newRow)\n            }\n\n            const saveEvent = () => {\n              const $table = xTable.value\n              const { insertRecords, removeRecords, updateRecords } = $table.getRecordset()\n              if (insertRecords.length || removeRecords.length || updateRecords.length) {\n                Modal.success({\n                  content: '保存成功！'\n                })\n                searchEvent()\n              } else {\n                Modal.warn({\n                  content: '数据未改动！'\n                })\n              }\n            }\n\n            const validEvent = async () => {\n              const $table = xTable.value\n              const errMap = await $table.validate()\n              if (errMap) {\n                message.error({\n                  content: '校验不通过！'\n                })\n              } else {\n                message.success({\n                  content: '校验成功！'\n                })\n              }\n            }\n\n            const dropdownMenuEvent = (name: string) => {\n              const $table = xTable.value\n              switch (name) {\n                case 'remove': {\n                  const selectRecords = $table.getCheckboxRecords()\n                  if (selectRecords.length) {\n                    $table.removeCheckboxRow()\n                  } else {\n                    message.warning({\n                      content: '请至少选择一条数据！'\n                    })\n                  }\n                  break\n                }\n                case 'export': {\n                  $table.exportData()\n                  break\n                }\n              }\n            }\n\n            const handleSizeChange = (current: number, size: number) => {\n              demo1.tablePage.pageSize = size\n              searchEvent()\n            }\n\n            const handleCurrentChange = (currentPage: number) => {\n              demo1.tablePage.currentPage = currentPage\n              findList()\n            }\n\n            const visibleMethod = ({ data }: any) => {\n              return data.flag1 === 'Y'\n            }\n\n            const roleSearchEvent = (params: any, value: any) => {\n              roleList.value = restaurants.filter(option => option.value.toUpperCase().indexOf((value || '').toUpperCase()) !== -1)\n            }\n\n            nextTick(() => {\n              // 将表格和工具栏进行关联\n              const $table = xTable.value\n              const $toolbar = xToolbar.value\n              $table.connect($toolbar)\n            })\n\n            findList()\n            findSexList()\n            findRegionList()\n\n            return {\n              xToolbar,\n              xTable,\n              demo1,\n              roleList,\n              insertEvent,\n              saveEvent,\n              validEvent,\n              dropdownMenuEvent,\n              searchEvent,\n              handleSizeChange,\n              handleCurrentChange,\n              visibleMethod,\n              roleSearchEvent\n            }\n          }\n        })\n        "]}}}),m=n("6b0d"),f=n.n(m);const p=f()(u,[["render",i]]);t["default"]=p},c7eb:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("14d9"),n("159b"),n("b0c0"),n("fb6a");var a=n("53ca");function r(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
r=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},l=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",d=i.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(L){s=function(e,t,n){return e[t]=n}}function u(e,t,n,a){var r=t&&t.prototype instanceof p?t:p,i=Object.create(r.prototype),l=new A(a||[]);return o(i,"_invoke",{value:j(e,n,l)}),i}function m(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=u;var f={};function p(){}function h(){}function v(){}var g={};s(g,l,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(N([])));x&&x!==t&&n.call(x,l)&&(g=x);var w=v.prototype=p.prototype=Object.create(g);function y(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function r(o,i,l,c){var d=m(e[o],e,i);if("throw"!==d.type){var s=d.arg,u=s.value;return u&&"object"==Object(a["a"])(u)&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,l,c)}),(function(e){r("throw",e,l,c)})):t.resolve(u).then((function(e){s.value=e,l(s)}),(function(e){return r("throw",e,l,c)}))}c(d.arg)}var i;o(this,"_invoke",{value:function(e,n){function a(){return new t((function(t,a){r(e,n,t,a)}))}return i=i?i.then(a,a):a()}})}function j(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return S()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var l=T(i,n);if(l){if(l===f)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var c=m(e,t,n);if("normal"===c.type){if(a=n.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a="completed",n.method="throw",n.arg=c.arg)}}}function T(e,t){var n=t.method,a=e.iterator[n];if(void 0===a)return t.delegate=null,"throw"===n&&e.iterator["return"]&&(t.method="return",t.arg=void 0,T(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var r=m(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,f;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function N(e){if(e){var t=e[l];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,r=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:S}}function S(){return{value:void 0,done:!0}}return h.prototype=v,o(w,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:h,configurable:!0}),h.displayName=s(v,d,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,s(e,d,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},y(O.prototype),s(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var i=new O(u(t,n,a,r),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(w),s(w,d,"Generator"),s(w,l,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=N,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),k(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;k(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:N(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}}}]);