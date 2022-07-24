<template>
   <div>
    <div class="row">
        <div class="col-md-6 my-2">
            <router-link to="/add-employee" class="btn btn-primary">Add Employee</router-link>
            
        </div>
        <div class='col-md-12'>
          <input type="text" class="form-control" v-model="searchTerm" style="width:300px" placeholder="Search Employee">
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
                    <h1 class="h4 text-gray-900 mb-3">All Employee</h1>
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
                        <th>Name</th>
                        <th>Photo</th>
                        <th>Phone</th>
                        <th>Salary</th>
                        <th>Joining Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="employee in filterSearch" :key="employee.id">
                        <td>{{employee.name}}</td>
                        <td><img :src="employee.photo" id="emp_photo"></td>
                        <td>{{employee.phone}}</td>
                        <td>{{employee.salary}}</td>
                        <td>{{employee.joining_date}}</td>
                        <td><router-link :to="{name:'edit-employee', params:{id:employee.id}}" class="btn btn-primary">Edit</router-link>
                            <a @click="deleteEmployee(employee.id)" class="btn btn-danger">Delete</a>
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
      employees : [],
      searchTerm:'',
    }
  },
  methods:{
    allEmployee(){
      axios.get('api/allemployee/')
      .then(({data})=> (this.employees = data))
      .catch()
    },
  
  },
  computed:{

    filterSearch(){
      return this.employees.filter(employee=>{
        return employee.name.match(this.searchTerm ) || employee.phone.match(this.searchTerm)
      })
    }

  },
  created(){
    this.allEmployee();
  }



}

</script>

<style type="text/css">

#emp_photo{
  height:40px;
  
}

</style>