function employee (name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = "Full Time";
    this.printEmployeeForm = function (){
        console.log(this);
    }
}

var employees = [];

employees [0] = new employee ("David", "Administrator", "$30,000/yr");
employees [1] = new employee ("Arthur", "Manager", "$70,000/yr");
employees [2] = new employee ("Harold", "Assistant", "$21.50/hr");
employees[2].status = "Part Time"
employees[2].printEmployeeForm();

console.log(employees);