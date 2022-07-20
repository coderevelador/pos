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
                    <h1 class="h4 text-gray-900 mb-4">Add Employee</h1>
                  </div> 
                  <form class="user" @submit.prevent="AddEmployee" enctype="multipart/form-data" >
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col-md-6">
                                <input type="text" class="form-control" id="exampleInputFirstName" required placeholder="Enter Full Name" v-model="form.name">
                            </div>
                                 <div class="col-md-6">
                                <input type="text" class="form-control" id="exampleInputFirstName" required placeholder="Enter Email" v-model="form.email">
                            </div>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col-md-12">
                                <input type="text" class="form-control" id="exampleInputFirstName" required placeholder="Enter Address" v-model="form.address">
                            </div>
  
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col-md-6">
                                <input type="text" class="form-control" id="exampleInputFirstName" required placeholder="Enter Salary" v-model="form.salary">
                            </div>
                                 <div class="col-md-6">
                                <input type="date" class="form-control" id="exampleInputFirstName" required  v-model="form.joining_date">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col-md-6">
                                <input type="text" class="form-control" id="exampleInputFirstName" required placeholder="Enter Phone Number" v-model="form.phone">
                            </div>
                                 <div class="col-md-6">
                                <input type="text" class="form-control" id="exampleInputFirstName" required placeholder="Enter Nid" v-model="form.nid">
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="form-row">
                            <div class="col-md-6">
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="customFile" @change="onFileSelected">
                                    <label class="custom-file-label" for="customFile">Choose file</label>
                                </div>
                            </div>
                                 <div class="col-md-6">
                                    <img :src="form.photo" style="height: 70px;" >
                            </div>
                        </div>
                    </div>

                    <div class="form-group" >
                      <button type="submit" class="btn btn-primary btn-block-left">Add</button>
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
        name :null,
        email : null,
        phone : null,
        address : null,
        salary : null,
        photo : null,
        nid : null,
        joining_date : null
      }
    }
  },
  methods:{
    onFileSelected(event){
      let file = event.target.files[0];
      if(file.size > 1048770){
        Notification.image_validation();
      }else{
       let reader = new FileReader();
       reader.onload = event => {
        this.form.photo = event.target.result
        console.log(event.target.result)
       }
       reader.readAsDataURL(file);
      }
    },
  AddEmployee(){

    axios.post('/api/allemployee',this.form)
    .then(()=>{
      this.$router.push({name:'all-employee'})
      Notification.success()
    })
    .catch( error => this.errors = error.response.data.errors)
  },
 }
}

</script>

<style type="text/css">

</style>