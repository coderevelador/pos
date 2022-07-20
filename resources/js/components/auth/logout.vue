<template>


</template>

<script type="text/javascript">

export default{
    created(){
        localStorage.removeItem('user'),
        localStorage.removeItem('token')
        this.$router.push({name:'/'})
        Toast.fire({
          icon: 'info',
          title: 'Logout successfully'
           })
    }
}

</script>

<style type="text/css">

</style>