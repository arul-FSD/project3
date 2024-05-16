let API_URL = 'https://663af663fee6744a6e9fd033.mockapi.io/users';

const myForm = document.getElementById('createForm')
myForm.addEventListener('submit', async (e)=>{
    try{
        e.preventDefault();
        let data = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            mobile: document.getElementById('mobile').value,
            address:{
                state: document.getElementById('state').value,
                city:document.getElementById('city').value,
                zipcode: document.getElementById('zipcode').value,
            },
    
            status:true
        }

        let value = await fetch(API_URL, {
            headers: {
                'Content-type': 'application/json'
            },
            method:'POST',
            body: JSON.stringify(data)
        })

        if(value.status === 201){
            window.location.href = "/"
        }
        else{
            console.log(value.status)
        }
    }

    catch(e){
        console.log(e)
    }
    
})