let API_URL = 'https://663af663fee6744a6e9fd033.mockapi.io/users';


let tbody = document.getElementById('tbody');

function constructTable(data) {
    tbody.innerHTML = "";

    let tableData = "";

    data.forEach((item) => {
        tableData += `<tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.mobile}</td>
        <td>
        <label class="switch">
        <input type="checkbox" ${item.status ? 'checked' : ''} onchange="onToggleChange(${item.id}, ${item.status})">
            <span class="slider round"></span>
        </label>
        </td>
        <td> 
            <button type="button" class="btn btn-primary" id="edit" onclick=onNavigate(${item.id})>Edit</button>
            <button type="button" class="btn btn-warning" id="delete" onclick=onDelete(${item.id})>Delete</button>
        </td>`
    })
    tbody.innerHTML = tableData
}


function onNavigate(id){
    window.location.href= `./../HTML/view.html?id=${id}`
}

async function displayData() {
    try {
        let value = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        let data = await value.json();

        if (value.status === 200) {
            constructTable(data)
        }
    }

    catch (err) {
        console.log(err)
    }

}


async function onToggleChange(id, status){
   let value = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      status: status ? false : true
    })
   })
}


async function onDelete(id) {
    try {
        let value = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });

        displayData()
    }
    catch (err) {
        console.log(err)
    }
}



displayData()

