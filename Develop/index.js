// TODO: Include packages needed for this application
const inquirer = require ('inquirer')
const fs = require ('fs')
const Choices = require('inquirer/lib/objects/choices')

console.log(inquirer)
// TODO: Create an array of questions for user input
const promptUser = ()=> {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Name',
            message: 'What is the Name of Your Project?',
            validate: projectNameInput =>{
                if (projectNameInput){
                    return true
                }
                else{
                    console.log('Please Enter Your Project Name!')
                    return false
                }
            }
        },

        {
            type: 'input',
            name: 'projectDes',
            message: 'Project description:',
            validate: descripInput => {
                if (descripInput){
                    return true
                }
                else{
                    console.log('Please Enter a Desription of the Project!')
                    return false
                }
            }

        },

        {
            type: 'input',
            name: 'install',
            message: 'Please Enter Installation Instructions:'
        },

        {
            type: 'input',
            name: 'usage',
            message: 'Please Enter Usage Information:'

        },
        
        {
            type: 'input',
            name: 'test',
            message:'Please Enter Testing Instructions:'

        },

        {
            type: 'input',
            name: 'contribution',
            message:'Please Enter Contribution Guidelines:'

        },

        {   
            type: 'checkbox',
            name: 'license',
            message: 'Please Choose a Liscence:',
            choices: ['mit', 'agpl-3.0','gpl-3.0', 'apache-2.0']

        },
        
        {   
            type: 'input',
            name: 'email',
            message: 'Please Enter Your Email!:',
            validate: emailInput =>{
                if (emailInput){
                    return true
                }
                else{
                    console.log('Please Enter Your Project Name!')
                    return false
                }
            }
           

        },
        
        
        {   
            type: 'input',
            name: 'gitHub',
            message: 'Please Enter Your GitHub Username:',
            validate: GitHubInput =>{
                if (GitHubInput){
                    return true
                }
                else{
                    console.log('Please Enter Your Project Name!')
                    return false
                }
            }
           

        }
        

    ])
}



promptUser()
    .then(projectData => {
           const readMe = generateMarkdown(projectData)
            fs.writeFile('./README.md', readMe, err => 
            {
        
            if(err) throw err; 
            console.log('ReadMe file complete! Check out README.md to see the output!')
            })

         console.log(projectData);
        })
const generateMarkdown = require('./utils/generateMarkdown.js')