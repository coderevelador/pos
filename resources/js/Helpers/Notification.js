class Notification{

 success(){
    new Noty({
        type: 'success',
        layout:'topRight',
        text: 'Successfully Done',
        timeout:'3000',
    }).show();
 }

 alert(){
    new Noty({
        type: 'alert',
        layout:'topRight',
        text: 'Are you sure?',
        timeout:'3000',
    }).show();
 }

 error(){
    new Noty({
        type: 'alert',
        layout:'topRight',
        text: 'Something went wrong!',
        timeout:'3000',
    }).show();
 }

 
 warning(){
    new Noty({
        type: 'warning',
        layout:'topRight',
        text: 'Opps Wrong',
        timeout:'3000',
    }).show();
 }

 image_validation(){
    new Noty({
        type: 'error',
        layout:'topRight',
        text: 'Upload image size less than 1mb',
        timeout:'3000',
    }).show();
 }

 salary_validation(){
    new Noty({
        type: 'warning',
        layout:'topRight',
        text: 'Current month salary already generated!',
        timeout:'3000',
    }).show();
 }

}

export default Notification = new Notification();