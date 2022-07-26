<template>
   <div>
    <div class="row">
        <div class="col-md-6 my-2">
            <router-link to="/given-salary" class="btn btn-primary">Pay Salary</router-link>
            
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
                    <h1 class="h4 text-gray-900 mb-3">All Salary Details</h1>
                  </div>
      <div class="row">
            <div class="col-lg-12 mb-4">
              <!-- Simple Tables -->
              <div class="card">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">Month Wise</h6>
                </div>
                <div class="table-responsive">
                  <table class="table align-items-center table-flush">
                    <thead class="thead-light">
                      <tr>
                        <th>Month Name</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="salary in filterSearch" :key="salary.id">
                        <td>{{salary.salary_month}}</td>
                        <td><router-link :to="{name:'view-salary', params:{id:salary.salary_month}}" class="btn btn-primary">Pay Salary</router-link>
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
      salaries : [],
      searchTerm:'',
    }
  },
  methods:{
    allSalary(){
      axios.get('api/salary/')
      .then(({data})=> (this.salaries = data))
      .catch()
    },
  
  },
  computed:{

    filterSearch(){
      return this.salaries.filter(salary=>{
        return salary.salary_month.match(this.searchTerm ) 
      })
    }

  },
  created(){
    this.allSalary();
  }



}

</script>

<style type="text/css">

#emp_photo{
  height:40px;
  
}

</style>