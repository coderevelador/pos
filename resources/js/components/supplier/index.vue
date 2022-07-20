<template>
   <div>
    <div class="row">
        <div class="col-md-6 my-2">
            <router-link to="/add-supplier" class="btn btn-primary">Add Supplier</router-link>
            
        </div>
        <div class='col-md-12'>
          <input type="text" class="form-control" v-model="searchTerm" style="width:300px" placeholder="Search Supplier">
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
                    <h1 class="h4 text-gray-900 mb-3">All Supplier</h1>
                  </div>
      <div class="row">
            <div class="col-lg-12 mb-4">
              <!-- Simple Tables -->
              <div class="card">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">Supplier List</h6>
                </div>
                <div class="table-responsive">
                  <table class="table align-items-center table-flush">
                    <thead class="thead-light">
                      <tr>
                        <th>Name</th>
                        <th>Photo</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Shop Name</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="supplier in filterSearch" :key="supplier.id">
                        <td>{{supplier.name}}</td>
                        <td><img :src="supplier.photo" id="supli_photo"></td>
                        <td>{{supplier.phone}}</td>
                        <td>{{supplier.email}}</td>
                        <td>{{supplier.shopname}}</td>
                        <td><router-link :to="{name:'edit-supplier', params:{id:supplier.id}}" class="btn btn-primary">Edit</router-link>
                            <a @click="deleteSupplier(supplier.id)" class="btn btn-danger">Delete</a>
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
      suppliers : [],
      searchTerm:'',
    }
  },
  methods:{
    allSupplier(){
      axios.get('api/supplier/')
      .then(({data})=> (this.suppliers = data))
      .catch()
    },
  deleteSupplier(id){
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
    axios.delete('api/supplier/'+id)
    .then(()=>{
      this.suppliers = this.suppliers.filter(supplier=>{
        return supplier.id != id
      })
    })
    .catch(()=>{
      this.$router.push({name:'supplier'})
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
      return this.suppliers.filter(supplier=>{
        return supplier.name.match(this.searchTerm ) || supplier.phone.match(this.searchTerm)
      })
    }

  },
  created(){
    this.allSupplier();
  }



}

</script>

<style type="text/css">

#supli_photo{
  height:40px;
  
}

</style>