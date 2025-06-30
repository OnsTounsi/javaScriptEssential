const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'JavaScript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Recruitment' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Budgeting' },
    { id: 4, name: 'Sarah Lee', age: 32, department: 'IT', salary: 55000, specialization: 'JavaScript' },
  ];
  

  function displayEmployees() {
    const totalEmployees = employees.map(employee =>
      `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.specialization} - $${employee.salary}</p>`
    ).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
  }
  
  
  function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total des salaires : $${totalSalaries}`);
  }
  
  
  function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map(employee =>
      `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.specialization} - $${employee.salary}</p>`
    ).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
  }
  
 
  function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
      document.getElementById('employeesDetails').innerHTML =
        `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - ${foundEmployee.specialization} - $${foundEmployee.salary}</p>`;
    } else {
      document.getElementById('employeesDetails').innerHTML = 'Aucun employé trouvé avec cet ID';
    }
  }
  

  function displayEmployeesBySpecialization(specialization) {
    const specializedEmployees = employees.filter(emp => emp.specialization === specialization);
    if (specializedEmployees.length > 0) {
      const html = specializedEmployees.map(emp =>
        `<p>${emp.id}: ${emp.name} - ${emp.department} - ${emp.specialization} - $${emp.salary}</p>`
      ).join('');
      document.getElementById('employeesDetails').innerHTML = html;
    } else {
      document.getElementById('employeesDetails').innerHTML = `Aucun employé trouvé avec la spécialisation "${specialization}"`;
    }
  }
  