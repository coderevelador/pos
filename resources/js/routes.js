
let login = require('./components/auth/login.vue').default;
let register = require('./components/auth/register.vue').default;
let forget = require('./components/auth/forget.vue').default;
let logout = require('./components/auth/logout.vue').default;
//end authentication
let home = require('./components/home.vue').default;
//employee
let addemployee = require('./components/employee/create.vue').default;
let allemployee = require('./components/employee/index.vue').default;
let editemployee = require('./components/employee/edit.vue').default;
//supplier
let addsupplier = require('./components/supplier/create.vue').default;
let supplier = require('./components/supplier/index.vue').default;
let editsupplier = require('./components/supplier/edit.vue').default;
//category
let addcategory = require('./components/category/create.vue').default;
let category = require('./components/category/index.vue').default;
let editcategory = require('./components/category/edit.vue').default;
//product
let addproduct = require('./components/product/create.vue').default;
let product = require('./components/product/index.vue').default;
let editproduct = require('./components/product/edit.vue').default;
//expense
let addexpense = require('./components/expense/create.vue').default;
let expense = require('./components/expense/index.vue').default;
let editexpense = require('./components/expense/edit.vue').default;
//salary
let salary = require('./components/salary/all-employee.vue').default;
let paysalary = require('./components/salary/create.vue').default;
let allsalary = require('./components/salary/index.vue').default;
let viewsalary = require('./components/salary/view.vue').default;
let editsalary = require('./components/salary/edit.vue').default;
//stock
let stock = require('./components/product/stock.vue').default
let editstock = require('./components/product/editstock.vue').default
//customer
let addcustomer = require('./components/customer/create.vue').default;
let allcustomer = require('./components/customer/index.vue').default;
let editcustomer = require('./components/customer/edit.vue').default;

export const routes = [
    { path: '/', component: login, name:'/' },
    { path: '/register', component: register, name:'register' },
    { path: '/forget', component: forget, name:'forget' },
    { path: '/logout', component: logout, name:'logout' },
    { path: '/home', component: home, name:'home' },
    //Empoyee Routes
    { path: '/add-employee', component: addemployee, name:'add-employee' },
    { path: '/all-employee', component: allemployee, name:'all-employee' },
    { path: '/edit-employee/:id', component: editemployee, name:'edit-employee' },
    //Supplier Routes
    { path: '/add-supplier', component: addsupplier, name:'add-supplier' },
    { path: '/supplier', component: supplier, name:'supplier' },
    { path: '/edit-supplier/:id', component: editsupplier, name:'edit-supplier' },
    //Category Routes
    { path: '/add-category', component: addcategory, name:'add-category' },
    { path: '/category', component: category, name:'category' },
    { path: '/edit-category/:id', component: editcategory, name:'edit-category' },
     //Product Routes
     { path: '/add-product', component: addproduct, name:'add-product' },
     { path: '/product', component: product, name:'product' },
     { path: '/edit-product/:id', component: editproduct, name:'edit-product' },
    //Expense Routes
    { path: '/add-expense', component: addexpense, name:'add-expense' },
    { path: '/expense', component: expense, name:'expense' },
    { path: '/edit-expense/:id', component: editexpense, name:'edit-expense' },
    //salary Routes
    { path: '/given-salary', component: salary, name:'given-salary' },
    { path: '/pay-salary/:id', component: paysalary, name:'pay-salary' },
    { path: '/salary', component: allsalary, name:'salary' },
    { path: '/viewsalary/:id', component: viewsalary, name:'view-salary' },
    { path: '/edit-salary/:id', component: editsalary, name:'edit-salary' },
    //Stock Routes
    { path: '/stock', component: stock, name:'stock' },
    { path: '/edit-stock/:id', component: editstock, name:'edit-stock' },
    //Customer Routes
    { path: '/add-customer', component: addcustomer, name:'add-customer' },
    { path: '/customer', component: allcustomer, name:'customer' },
    { path: '/edit-customer/:id', component: editcustomer, name:'edit-customer' },
]
  