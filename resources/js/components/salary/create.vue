<template>
   <div>
    <div class="row">
        <div class="col-md-6">
            <router-link to="/all-employee" class="btn btn-primary">All Employee</router-link>
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
                    <h1 class="h4 text-gray-900 mb-4">Pay Salay</h1>
                  </div> 
                  <form class="user" @submit.prevent="PaySalary" >
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col-md-6">
                                <label for="exampleFormControlSelect">Name</label>
                                <input type="text" class="form-control" id="exampleInputFirstName" required placeholder="Enter Full Name" v-model="form.name" readonly>
                            </div>
                                 <div class="col-md-6">
                                    <label for="exampleFormControlSelect">Email</label>
                                <input type="text" class="form-control" id="exampleInputFirstName" required placeholder="Enter Email" v-model="form.email" readonly>
                            </div>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col-md-6">
                                <label for="exampleFormControlSelect">Month</label>
                                    <select class="form-control"  id="exampleFormControlSelect" v-model="form.salary_month" >
                                        <option value="January" >January</option>
                                        <option value="February">February</option>
                                        <option value="March">March</option>
                                        <option value="April">April</option>
                                        <option value="May">May</option>
                                        <option value="June">June</option>
                                        <option value="July">July</option>
                                        <option value="August">August</option>
                                        <option value="September">September</option>
                                        <option value="October">October</option>
                                        <option value="November">November</option>
                                        <option value="December">December</option>
                                    </select>
                            </div>
                            <div class="col-md-6">
                                <label for="exampleFormControlSelect">Salary</label>
                                <input type="text" class="form-control" id="exampleInputFirstName" disabled v-model="form.salary">
                            </div>
                        </div>
                    </div>
                    
                    <div class="form-group" >
                      <button type="submit" class="btn btn-primary btn-block-left">Pay Now</button>
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
        name : '',
        email :  '',
        salary_month :  '',
        salary :  '',
      }
    }
  },
  created(){
    let id = this.$route.params.id
    axios.get('/api/allemployee/'+id)
    .then(({data}) => (this.form = data))
    .catch(console.log('error'))
  },

  methods:{
  PaySalary(){
    let id = this.$route.params.id
    axios.post('/api/salary/paid/'+id,this.form)
    .then(()=>{
      this.$router.push({name:'given-salary'})
      Notification.success()
    })
    .catch( error => this.errors = error.response.data.errors)
  },
 }
}

</script>

<style type="text/css">

</style>