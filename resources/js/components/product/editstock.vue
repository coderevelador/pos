<template>
   <div>
    <div class="row">
        <div class="col-md-6">
            <router-link to="/stock" class="btn btn-primary">Go Back</router-link>
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
                    <h1 class="h4 text-gray-900 mb-4">Update Stock</h1>
                  </div> 
                  <form class="user" @submit.prevent="UpdateStock"  >
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col-md-6">
                                <input type="text" class="form-control" id="exampleInputFirstName" required placeholder="Enter Product Name" v-model="form.product_name" disabled>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-row">
                           <div class="col-md-6">
                                <input type="text" class="form-control" id="exampleInputFirstName" required placeholder="Enter Product Quantity" v-model="form.product_quantity">
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
      
      },
      errors:{}
           
    }
  },
  created(){
    let id = this.$route.params.id
    axios.get('/api/product/'+id)
    .then(({data}) => (this.form = data))

  },

  methods:{
  UpdateStock(){
    let id = this.$route.params.id
    axios.post('/api/stock/update/'+id,this.form)
    .then(()=>{
      this.$router.push({name:'stock'})
      Notification.success()
    })
    .catch( error => this.errors = error.response.data.errors)
  },
 }
}

</script>

<style type="text/css">

</style>