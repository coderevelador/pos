<template>
   <div>
    <div class="row">
        <div class="col-md-6">
            <router-link to="/expense" class="btn btn-primary">All Update</router-link>
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
                    <h1 class="h4 text-gray-900 mb-4">Add Update</h1>
                  </div> 
                  <form class="user" @submit.prevent="UpdateExpense">
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col-md-8 my-3">
                                <input type="text" class="form-control" id="exampleInputFirstName"  v-model="form.amount">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-md-8">
                                <textarea class="form-control" id="exampleFormControlTextarea1"  rows="3" v-model="form.details"></textarea>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-md-8 my-3">
                                 <input type="date" class="form-control" id="exampleInputFirstName"  v-model="form.expense_date">
                            </div>
                        </div>
                    </div>
                    
                    <div class="form-group" >
                      <button type="submit" class="btn btn-primary btn-block-left">Update Expense</button>
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
        amount :'',
        details:'',
        expense_date:'',
      },
     
    }
  },
  created(){
  let id = this.$route.params.id
    axios.get('/api/expense/'+id)
    .then(({data}) =>(this.form = data) )
  
 },
  methods:{
    UpdateExpense(){
    let id = this.$route.params.id
    axios.patch('/api/expense/'+id,this.form)
    .then(()=>{
      this.$router.push({name:'expense'})
      Notification.success()
    })
    .catch( error => this.errors = error.response.data.errors)
  },
 }

}
</script>

<style type="text/css">

</style>