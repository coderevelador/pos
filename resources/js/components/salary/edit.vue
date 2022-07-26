<template>
   <div>
    <div class="row">
        <div class="col-md-6">
            <router-link to="/salary" class="btn btn-primary">Go Back</router-link>
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
                    <h1 class="h4 text-gray-900 mb-4">Update Salary</h1>
                  </div> 
                  <form class="user" @submit.prevent="UpdateSalary" >
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col-md-6">
                                <label for="exampleFormControlSelect">Name</label>
                                <input type="text" class="form-control" id="exampleInputFirstName" required placeholder="Enter Full Name" v-model="form.name" disabled >
                            </div>
                                 <div class="col-md-6">
                                    <label for="exampleFormControlSelect">Email</label>
                                <input type="text" class="form-control" id="exampleInputFirstName" required placeholder="Enter Email" v-model="form.email" disabled >
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
                            <input type="hidden" v-model="form.empoyee_id">
                            <div class="col-md-6">
                                <label for="exampleFormControlSelect">Salary</label>
                                <input type="text" class="form-control" id="exampleInputFirstName" v-model="form.amount">
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
        name : '',
        email :  '',
        salary_month :  '',
        amount :  '',
        empoyee_id:'',
      }
    }
  },
  created(){
    let id = this.$route.params.id
    axios.get('/api/salary/edit/'+id)
    .then(({data}) => (this.form = data))
    .catch(console.log('error'))
  },

  methods:{
  UpdateSalary(){
    let id = this.$route.params.id
    axios.post('/api/salary/update/'+id,this.form)
    .then(()=>{
      this.$router.push({name:'salary'})
      Notification.success()
    })
    .catch( error => this.errors = error.response.data.errors)     
  },
 }
}

</script>

<style type="text/css">

</style>