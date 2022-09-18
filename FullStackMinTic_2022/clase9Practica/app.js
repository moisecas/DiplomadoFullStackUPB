class Employee{
    constructor(name, email, enterprise, role, year){
        this.name = name;
        this.email = email;
        this.enterprise = enterprise;
        this.role = role;
        this.year = year;
    }
}

class UI{
    addEmployee(employee){
        const employeeList = document.getElementById('employee-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Nombre</strong>: ${employee.name}
                    <strong>Correo</strong>: ${employee.email}
                    <strong>Empresa</strong>: ${employee.enterprise}
                    <strong>Rol</strong>: ${employee.role}
                    <strong>Año</strong>: ${employee.year}
                    <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
                </div>
            </div>
        `;
        employeeList.appendChild(element);
        
    }

    

    deleteEmployee(){
       
    }

    showMessage(){
       

      
   
    }

    

   
}

document.getElementById('employee-form').addEventListener('submit', function(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const enterprise = document.getElementById('enterprise').value; 
    const role = document.getElementById('role').value;
    const year = document.getElementById('year').value;
    const employee = new Employee(name, email, enterprise, role, year);
    console.log(employee);
    const ui = new UI();
    ui.addEmployee(employee);
    

    e.preventDefault(); 

 
});