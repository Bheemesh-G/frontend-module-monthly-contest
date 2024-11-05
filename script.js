
const Name = document.getElementById('enter-name');
const Profession = document.getElementById('profession');
const Age = document.getElementById('age');
const submitButton = document.getElementById('add-user');
const errorMessage = document.getElementById('error-message');


var employees = [];



function successMessage()
{

    addEmployee();
    if(Name.value.trim!=='' && Profession.value.trim!=='' && Age.value!=='')
        {
          errorMessage.textContent="Success: Employee Added!";
          errorMessage.style.color="green";
          document.getElementById('message').textContent='';
        }
}

function getErrorMessage()
{
    if(Name.value.trim()==='' && Profession.value.trim()==='' && Age.value==='')
        {
          errorMessage.textContent="Error : Please Make sure All the fields are filled before adding an Employee!";
          errorMessage.style.color="red";
        }
        else if(Name.value.trim()==='' && Profession.value.trim()!=='' && Age.value!==''){
            errorMessage.textContent="Error : Please Make sure All the fields are filled before adding an Employee!";
            errorMessage.style.color="red";
        }
        else if(Name.value.trim()!=='' && Profession.value.trim()==='' && Age.value!=='')
        {
            errorMessage.textContent="Error : Please Make sure All the fields are filled before adding an Employee!";
            errorMessage.style.color="red";
        }
        else if(Name.value.trim()!=='' && Profession.value.trim()!=='' && Age.value==='')
        {
            errorMessage.textContent="Error : Please Make sure All the fields are filled before adding an Employee!";
            errorMessage.style.color="red"; 
        }
        else{
            successMessage();
        }
}


function displayEmployees(arr) {
    const listElement = document.getElementById('employee-list');
    listElement.innerHTML = ''; 

    arr.forEach((employee, index) => {
        const employeeContainer = document.createElement('div');
        employeeContainer.style.display = 'flex';
        employeeContainer.style.alignItems = 'center';
        employeeContainer.style.marginBottom = '10px';
        employeeContainer.style.paddingLeft='20px';
    
        const listItem = document.createElement('li');
        listItem.style.display = 'flex';
        listItem.style.color = 'white';
        listItem.style.border = '1px solid white';
        listItem.style.borderRadius = '5px';
        listItem.style.padding = '8px'; 
        listItem.style.listStyle = 'none';
        listItem.style.width = '50%';
        listItem.style.marginRight = '10px'; 

    
        
        const idSpan = document.createElement('span');
        idSpan.textContent = `ID: ${employee.id}`;
        idSpan.style.marginRight = '50px'; 
    
        const nameSpan = document.createElement('span');
        nameSpan.textContent = `Name: ${employee.name}`;
        nameSpan.style.marginRight = '50px';
    
        const professionSpan = document.createElement('span');
        professionSpan.textContent = `Profession: ${employee.profession}`;
        professionSpan.style.marginRight = '50px';
    
        const ageSpan = document.createElement('span');
        ageSpan.textContent = `Age: ${employee.age}`;
        ageSpan.style.marginRight='50px';
    
    
        listItem.appendChild(idSpan);
        listItem.appendChild(nameSpan);
        listItem.appendChild(professionSpan);
        listItem.appendChild(ageSpan);
    
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete User';
        deleteButton.style.padding = '8px'; 
        deleteButton.style.borderRadius = '6px';
        deleteButton.style.cursor = 'pointer';
        
        deleteButton.addEventListener('click', () => {
            arr.splice(index, 1);
            listElement.removeChild(employeeContainer);
        });
    
        employeeContainer.appendChild(listItem); 
        employeeContainer.appendChild(deleteButton);
    
        listElement.appendChild(employeeContainer);
    });
    
    
    

    
    
}


function addEmployee()
{

    console.log("employee");
    var emp = {
        id:employees.length+1,
        name:Name.value,
        profession:Profession.value,
        age:Age.value
    };
    employees.push(emp);
    displayEmployees(employees);
}





submitButton.addEventListener('click',(event)=>{
    event.preventDefault();
    getErrorMessage();
});