// create the team
const generateTeam = team => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${employee.getName()}</h2>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}}">
                <li class="list-group-item">GitHub Username: ${employee.getgitHub()}}</li>
            </ul>
        </div>
    </div>
        `;
    };

    const html = [];

    // html.push(team
    //     .filter(employee => employee.getRole() === "Manager")
    //     .map(manager => generateManager(manager))
    // );
    // html.push(team
    //     .filter(employee => employee.getRole() === "Engineer")
    //     .map(engineer => generateEngineer(engineer))
    //     .join("")
    // );
    // html.push(team
    //     .filter(employee => employee.getRole() === "Intern")
    //     .map(intern => generateIntern(intern))
    //     .join("")
    // );

    return html.join("");



// export function to generate entire page
// module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
