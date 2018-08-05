import Vue from 'vue'
import Router from 'vue-router'

/* 管理员登陆 */
import adminLogin from '../components/admin/login/login'
/* 管理员 管理商家 */
import manageshop from '../components/admin/manageshop/manageshop'

/* 审核   */
import manageadmission from '../components/admin/admission/admission'
import manageadmissioncheck from '../components/admin/admission/admissioncheck'
import manageadmissioncheckfail from '../components/admin/admission/admissioncheckfail'
import manageadmissionchecksuccess from '../components/admin/admission/admissionchecksuccess'
import manageadmissionquery from '../components/admin/admission/admissionquery'
/* admin */


/* 商家登陆*/

import shoplogin from '../components/shop/login/login'
/* 入驻首页 */
import adminssion from '../components/shop/admission/adminssion'
import adminssionPross from '../components/shop/admission/adminssionPross'
import adminssionPross1 from '../components/shop/admission/adminssionPross1'
import adminssionPross2 from '../components/shop/admission/adminssionPross2'
import adminssionPross3 from '../components/shop/admission/adminssionPross3'
import adminssionPross4 from '../components/shop/admission/adminssionPross4'
/* 商家首页 */
import  shopindex from '../components/shop/index/index'
/* 商家商品管理 */
import shopmanagegoods from '../components/shop/managegoods/shopmanagegoods'
import goodslist from '../components/shop/managegoods/goodslist'
import managecategory from '../components/shop/managegoods/managecategory'
import usercommit from '../components/shop/managegoods/usercommit'
import categoryadd from '../components/shop/managegoods/categoryadd'

import goodsadd from '../components/shop/managegoods/goodsadd'
import goodsaddstep1 from '../components/shop/managegoods/step1'
import goodsaddstep2 from '../components/shop/managegoods/step2'
import goodsaddstep3 from '../components/shop/managegoods/step3'



/* 前台 */

import index from '../components/user/index/index'
import list from '../components/user/list/list'


/* demo */
import demo from '../components/demo'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/demo',
            name: 'demo',
            component: demo
        },
        {
            path: '/adminlogin',
            name: 'adminlogin',
            component: adminLogin
        },
        {
            path: '/manageshop',
            name: 'manageshop',
            component: manageshop
        },
        {
            path: '/manageadmission',
            name: 'manageadmission',
            component: manageadmission,
            children: [
                {
                    path: 'manageadmissioncheck',
                    name: 'manageadmissioncheck',
                    component: manageadmissioncheck
                },
                {
                    path: 'manageadmissioncheckfail',
                    name: 'manageadmissioncheckfail',
                    component: manageadmissioncheckfail
                },
                {
                    path: 'manageadmissionchecksuccess',
                    name: 'manageadmissionchecksuccess',
                    component: manageadmissionchecksuccess
                },
                {
                    path: 'manageadmissionquery',
                    name: 'manageadmissionquery',
                    component: manageadmissionquery
                }
            ]
        },

        /* 管理员  */
        {
            path: '/shoplogin',
            name: 'shoplogin',
            component: shoplogin
        },
        {
           path:'/shopindex',
           name:'shopindex',
           component:shopindex
        },
        {
            path: '/adminssion',
            name: 'adminssion',
            component: adminssion
        },
        {
            path: '/shopmanagegoods',
            name: 'shopmanagegoods',
            component: shopmanagegoods,
            children:[
                {
                    path:'goodsadd',
                    name:'goodsadd',
                    component:goodsadd,
                    children:[
                        {
                            path:'step1',
                            name:'step1',
                            component:goodsaddstep1
                        },
                        {
                            path:'step2',
                            name:'step2',
                            component:goodsaddstep2
                        },
                        {
                            path:'step3',
                            name:'step3',
                            component:goodsaddstep3
                        },
                    ]
                },
                {
                    path: 'categoryadd',
                    name: 'categoryadd',
                    component: categoryadd,
                },
                {
                    path: 'goodslist',
                    name: 'goodslist',
                    component: goodslist,
                },
                {
                    path: 'managecategory',
                    name: 'managecategory',
                    component: managecategory,
                },
                {
                    path: 'usercommit',
                    name: 'usercommit',
                    component: usercommit,
                }
            ]
        },
        {
            path: '/adminssionPross',
            name: 'adminssionPross',
            component: adminssionPross,
            children: [
                {
                    path: 'adminssionPross1',
                    name: 'adminssionPross1',
                    component: adminssionPross1,


                },
                {
                    path: 'adminssionPross2',
                    name: 'adminssionPross2',
                    component: adminssionPross2,
                },
                {
                    path: 'adminssionPross3',
                    name: 'adminssionPross3',
                    component: adminssionPross3
                },
                {
                    path: 'adminssionPross4',
                    name: 'adminssionPross4',
                    component: adminssionPross4
                }
            ]
        },
        /*  商家 */
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
           path:'/list',
           name:'list',
           component:list
        }

    ]
})
