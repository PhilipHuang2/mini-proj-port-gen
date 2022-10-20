const fs = require('fs');
const inquirer = require('inquirer');


inquirer
.prompt([
    {
        type: "input",
        message: "Enter your name",
        name: 'name'
    },
    {
        type: "input",
        message: "Enter your location",
        name: 'location'
    },
    {
        type: "input",
        message: "Enter your bio",
        name: 'bio'
    },
    {
        type: "input",
        message: "Enter your GitHub URL",
        name: 'gitHub'
    },
    {
        type: "input",
        message: "Enter your linkedIn URL",
        name: 'linkedIn'
    }]
)
.then((response) => {
    console.log(response);
    const htmlSkeleton = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    <header>
        <div class="jumbotron text-center">
            <h1 class="display-4 mx-auto">Hi, my name is ${response.name}.</h1>
            <p class="lead">I live in ${response.location}</p>
            <p>Here is a bit about me</p>
            <br>
            <p>${response.bio}</p>
            <hr class="my-4">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
            
              
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto align-item-end">
                    <li class="nav-item">
                      <a class="nav-link" href="#${response.gitHub}">Github</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#${response.linkedIn}">LinkedIn</a>
                      </li>
                </div>
              </nav>
          </div>
    </header>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
  </body>
</body>
</html>`;
    fs.writeFile('dummy.html', htmlSkeleton, (err) => {
        console.log(err);
    });
})