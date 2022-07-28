<template>
   <div>
    <div class="row">
        <div class="col-md-6 my-2">
            <router-link to="/add-product" class="btn btn-primary">Add Product</router-link>
            
        </div>
        <div class='col-md-12'>
          <input type="text" class="form-control" v-model="searchTerm" style="width:300px" placeholder="Search Product">
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
                    <h1 class="h4 text-gray-900 mb-3">All Stocks</h1>
                  </div>
      <div class="row">
            <div class="col-lg-12 mb-4">
              <!-- Simple Tables -->
              <div class="card">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">Stocks List</h6>
                </div>
                <div class="table-responsive">
                  <table class="table align-items-center table-flush">
                    <thead class="thead-light">
                      <tr>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Photo</th>
                        <th>Category</th>
                        <th>Buying Price</th>
                        <th>Status</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="product in filterSearch" :key="product.id">
                        <td>{{product.product_name}}</td>
                        <td>{{product.product_code}}</td>
                        <td><img :src="product.image" id="emp_photo"></td>
                        <td>{{product.category_name}}</td>
                        <td>{{product.buying_price}}</td>
                        <td v-if="product.product_quantity > 1" > <span class="badge badge-success">Available</span></td>
                        <td v-else=" " > <span class="badge badge-danger">Out of Stock</span></td>
                        <td>{{product.product_quantity}}</td>
                        <td><router-link :to="{name:'edit-stock', params:{id:product.id}}" class="btn btn-primary">Edit</router-link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="card-footer"></div>
              </div>
            </div>
          </div>
          <!--Row-->
                 
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
      products : [],
      searchTerm:'',
    }
  },
  methods:{
    allProduct(){
      axios.get('api/product/')
      .then(({data})=> (this.products = data))
      .catch()
    },

  },
  computed:{

    filterSearch(){
      return this.products.filter(product=>{
        return product.product_name.match(this.searchTerm ) || product.category_name.match(this.searchTerm)
      })
    }

  },
  created(){
    this.allProduct();
  }



}

</script>

<style type="text/css">

#emp_photo{
  height:40px;
  
}

</style>