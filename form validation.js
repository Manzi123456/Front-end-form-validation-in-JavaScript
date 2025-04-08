function validateForm() {
    
    //declaration line
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password= document.getElementById('password').value
    const text = document.getElementById('message').value;
   
   // assign or checking input  using condition.
        if (name.trim() === '' || email.trim() === '' || text.trim() === '' || password.trim() ==='') {
            
            alert('Please fill out all required fields.');//message displayed
            
            return false;
        }
    
   
    return true;
}
