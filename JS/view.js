let API_URL = 'https://663af663fee6744a6e9fd033.mockapi.io/users';
let params = new URLSearchParams(document.location.search);
let id = params.get('id');


document.getElementById('editForm').addEventListener('submit', async(e) => {
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

        let value = await fetch(`${API_URL}/${id}`, {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'PUT',
            body:JSON.stringify(data)
        });

        if(value.status ===200){
            window.location.href = "/"
        }
    }

    catch(e){
        console.log(e)
    }
   

})

async function getDisplayData(){
    let values = await fetch(`${API_URL}/${id}`, {
        method: 'GET'
    })

    let data = await values.json();

    console.log(data)

    document.getElementById('name').value = data.name;
    document.getElementById('email').value = data.email;
    document.getElementById('mobile').value = data.mobile;
    document.getElementById('state').value = data.address.state;
    document.getElementById('city').value = data.address.city;
    document.getElementById('zipcode').value = data.address.zipcode;

}


getDisplayData()