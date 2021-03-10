  
//   const square = new Rectangle(10, 10);
  
//   console.log(square.area); // 100

class Employee {
    constructor(name, eMail, gitHub) {
        this.name = name;
        this.eMail = eMail;
        this.gitHub = gitHub; 
    }
    getName() {
        return this.name();
    }
    getEmail() {
        return this.eMail();
    }
    getgitHub() {
        return this.gitHub();
    }
}

module.exports = Employee;

