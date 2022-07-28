<template>
   <div>
    <div class="row">
        <div class="col-md-6 my-2">
            <router-link to="/add-customer" class="btn btn-primary">Add Customer</router-link>
            
        </div>
        <div class='col-md-12'>
          <input type="text" class="form-control" v-model="searchTerm" style="width:300px" placeholder="Search Customer">
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
                    <h1 class="h4 text-gray-900 mb-3">All Customer</h1>
                  </div>
      <div class="row">
            <div class="col-lg-12 mb-4">
              <!-- Simple Tables -->
              <div class="card">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">Customer List</h6>
                </div>
                <div class="table-responsive">
                  <table class="table align-items-center table-flush">
                    <thead class="thead-light">
                      <tr>
                        <th>Name</th>
                        <th>Photo</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="customer in filterSearch" :key="customer.id">
                        <td>{{customer.name}}</td>
                        <td><img :src="customer.photo" id="emp_photo"></td>
                        <td>{{customer.phone}}</td>
                        <td>{{customer.email}}</td>
                        <td>{{customer.address}}</td>
                        <td><router-link :to="{name:'edit-customer', params:{id:customer.id}}" class="btn btn-primary">Edit</router-link>
                            <a @click="deleteCustomer(customer.id)" class="btn btn-danger">Delete</a>
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
      customers : [],
      searchTerm:'',
    }
  },
  methods:{
    allCustomer(){
      axios.get('api/customer/')
      .then(({data})=> (this.customers = data))
      .catch()
    },
  deleteCustomer(id){
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
    axios.delete('/api/customer/'+id)
    .then(()=>{
      this.customers = this.customers.filter(customer=>{
        return customer.id != id
      })
    })
    .catch(()=>{
      this.$router.push({name:'customer'})
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
      return this.customers.filter(customer=>{
        return customer.name.match(this.searchTerm ) || customer.phone.match(this.searchTerm)
      })
    }

  },
  created(){
    this.allCustomer();
  }



}

</script>

<style type="text/css">

#emp_photo{
  height:40px;
  
}

</style>