<template>
   <div>
    <div class="row">
        <div class="col-md-6">
            <router-link to="/product" class="btn btn-primary">All Product</router-link>
        </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-xl-12 col-lg-12 col-md-12">
        <div class="card shadow-sm my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="login-form">
                  <div class="text-left">
                    <h1 class="h4 text-gray-900 mb-4">Update Product</h1>
                  </div> 
                  <form class="user" @submit.prevent="UpdateProduct" enctype="multipart/form-data" >
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col-md-6">
                                <input type="text" class="form-control" id="exampleInputFirstName" required placeholder="Enter Product Name" v-model="form.product_name">
                            </div>
                                 <div class="col-md-6">
                                <input type="text" class="form-control" id="exampleInputFirstName" required placeholder="Enter Product Code" v-model="form.product_code">
                                <small class="text-danger" v-if="errors.product_code">{{errors.product_code}}</small>
                            </div>
                        </div>
                    </div>
                    
                    <div class="form-group">
                         <div class="form-row">
                            <div class="col-md-6">
                                <label for="exampleFormControlSelect">Product Cateogry</label>
                                    <select class="form-control"  id="exampleFormControlSelect" v-model="form.category_id" >
                                        <option :value="category.id" v-for="category in categories" >{{category.category_name}}</option>
                                    </select>
                            </div>
                                 <div class="col-md-6">
                                <label for="exampleFormControlSelect1">Product Supplier</label>
                                    <select class="form-control"  id="exampleFormControlSelect1" v-model="form.supplier_id">
                                        <option  :value="supplier.id" v-for="supplier in suppliers" >{{supplier.name}}</option>
                                    </select>
                            </div>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col-md-4">
                                <input type="text" class="form-control" id="exampleInputFirstName" required placeholder="Enter Product Root" v-model="form.root">
                            </div>
                            <div class="col-md-4">
                                <input type="text" class="form-control" id="exampleInputFirstName" required placeholder="Enter Buying Price" v-model="form.buying_price">
                            </div>
                            <div class="col-md-4">
                                <input type="text" class="form-control" id="exampleInputFirstName" required placeholder="Enter Selling Price" v-model="form.selling_price">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col-md-6">
                                 <label for="exampleFormControlSelect">Buying Date</label>
                                <input type="date" class="form-control" id="exampleInputFirstName"  v-model="form.buying_date">
                            </div>
                                 <div class="col-md-6">
                                <label for="exampleFormControlSelect">Product Quantity</label>
                                <input type="text" class="form-control" id="exampleInputFirstName" required placeholder="Enter Prouduct Quantity" v-model="form.product_quantity">
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="form-row">
                            <div class="col-md-6">
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="customFile" @change="onFileSelected">
                                    <label class="custom-file-label" for="customFile">Choose file</label>
                                </div>
                            </div>
                                 <div class="col-md-6">
                                    <img :src="form.image" style="height: 70px;" >
                            </div>
                        </div>
                    </div>

                    <div class="form-group" >
                      <button type="submit" class="btn btn-primary btn-block-left">Update</button>
                    </div>
                  </form>
                  <div class="text-center">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 

   </div>
</template>

<script type="text/javascript">



export default{
  created(){
    if(!User.loggedIn()){
      this.$router.push({name:'home'})
    }
  },
  data(){
    return{
      form:{
        product_name :'',
        product_quantity : '',
        category_id : '',
        supplier_id : '',
        root : '',
        buying_price : '',
        selling_price : '',
        buying_date : '',
        product_quantity : '',
        image: '',
        newimage:''
      },
      categories:{},
      suppliers: {},
      errors:{}
           
    }
  },
  created(){
    let id = this.$route.params.id
    axios.get('/api/product/'+id)
    .then(({data}) => (this.form = data))

     axios.get('/api/category/')
    .then(({data}) => (this.categories = data))
    
    axios.get('/api/supplier/')
    .then(({data}) => (this.suppliers = data))
  },

  methods:{
    onFileSelected(event){
      let file = event.target.files[0];
      if(file.size > 1048770){
        Notification.image_validation();
      }else{
       let reader = new FileReader();
       reader.onload = event => {
       this.form.newimage = event.target.result
        console.log(event.target.result)
       }
       reader.readAsDataURL(file);
      }
    },
  UpdateProduct(){
    let id = this.$route.params.id
    axios.patch('/api/product/'+id,this.form)
    .then(()=>{
      this.$router.push({name:'product'})
      Notification.success()
    })
    .catch( error => this.errors = error.response.data.errors)
  },
 }
}

</script>

<style type="text/css">

</style>