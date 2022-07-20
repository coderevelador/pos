<template>
   <div>
    <div class="row">
        <div class="col-md-6">
            <router-link to="/category" class="btn btn-primary">All Category</router-link>
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
                    <h1 class="h4 text-gray-900 mb-4">Add Category</h1>
                  </div> 
                  <form class="user" @submit.prevent="AddCategory">
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col-md-6">
                                <input type="text" class="form-control" id="exampleInputFirstName" required placeholder="Enter Category Name" v-model="form.category_name">
                            </div>
                        </div>
                    </div>
                    
                    <div class="form-group" >
                      <button type="submit" class="btn btn-primary btn-block-left">Add Category</button>
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
        category_name :null,
      }
    }
  },
  methods:{
    AddCategory(){
    axios.post('/api/category',this.form)
    .then(()=>{
      this.$router.push({name:'category'})
      Notification.success()
    })
    .catch( error => this.errors = error.response.data.errors)
  },
 }

}
</script>

<style type="text/css">

</style>