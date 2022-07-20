<template>
   <div>
    <div class="row">
        <div class="col-md-6 my-2">
            <router-link to="/add-category" class="btn btn-primary">Add Category</router-link>
            
        </div>
        <div class='col-md-12'>
          <input type="text" class="form-control" v-model="searchTerm" style="width:300px" placeholder="Search Category">
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
                    <h1 class="h4 text-gray-900 mb-3">All Category</h1>
                  </div>
      <div class="row">
            <div class="col-lg-12 mb-4">
              <!-- Simple Tables -->
              <div class="card">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">Employee List</h6>
                </div>
                <div class="table-responsive">
                  <table class="table align-items-center table-flush">
                    <thead class="thead-light">
                      <tr>
                        <th>Category</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="category in filterSearch" :key="category.id">
                        <td>{{category.category_name}}</td>
                        <td><router-link :to="{name:'edit-category', params:{id:category.id}}" class="btn btn-primary">Edit</router-link>
                            <a @click="deleteCategory(category.id)" class="btn btn-danger">Delete</a>
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
      categories : [],
      searchTerm:'',
    }
  },
  methods:{
    allCategory(){
      axios.get('api/category/')
      .then(({data})=> (this.categories = data))
      .catch()
    },
  deleteCategory(id){
    const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

swalWithBootstrapButtons.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes, delete it!',
  cancelButtonText: 'No, cancel!',
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    axios.delete('/api/category/'+id)
    .then(()=>{
      this.categories = this.categories.filter(category=>{
        return category.id != id
      })
    })
    .catch(()=>{
      this.$router.push({name:'category'})
    })

    swalWithBootstrapButtons.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire(
      'Cancelled',
      'Your imaginary file is safe :)',
      'error'
    )
  }
})
  }
  },
  computed:{

    filterSearch(){
      return this.categories.filter(categoy=>{
        return categoy.category_name.match(this.searchTerm )
      })
    }

  },
  created(){
    this.allCategory();
  }



}

</script>

<style type="text/css">


</style>