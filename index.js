// Write your solution in this file!
const employee = { 
  name: 'Teejay',
  streetAddress: '319 Pennsylvania Avenue'
};



function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
  const newEmployee = { ...employee };
  
  newEmployee.name = 'Sam';
  newEmployee.streetAddress = '11 Broadway';

  return newEmployee;
 
  
};
  

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress) {
   
  employee["name"] = "Sam";
  employee["streetAddress"] = "12 Broadway";
    
  return employee;


};

function deleteFromEmployeeByKey(employee, name, streetAddress) {
  const deletedEmployee = { ...employee };


  delete deletedEmployee.name;
  delete deletedEmployee.streetAddress;

  return deletedEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, name) {
  delete employee.name;

  return employee;
};
