  
class Employee {
    constructor(name, eMail, gitHub) {
        this.name = name;
        this.eMail = eMail;
        this.gitHub = gitHub; 
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.eMail;
    }
    getgitHub() {
        return this.gitHub;
    }
}

module.exports = Employee;

