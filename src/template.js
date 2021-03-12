function generateTeam(team) {
    // create the HTML element to put team members into 
    console.log(team);
    const html = [];
    // function that wraps each element inside of array in HTML
    function generateEmployee(employee) {
        return `
        <div class = "card">
            <h2>${employee.getName()}</h2>
            <h3>${employee.getEmail()}</h3>
            <h3>${employee.getgitHub()}</h3>
        </div>
        `
      }

    html.push(team
        .map(employee => generateEmployee(employee))
        .join("")
        );
        return html.join("");

}


// const map1 = array1.map(x => x * 2);


// export function to generate entire page
module.exports = team => {

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
};