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
            name: 'projectName',
            message: 'What is the name of your project?',
            validate: projectNameInput =>{
                if (projectNameInput){
                    return true
                }
                else{
                    console.log('Please enter your project name!')
                    return false
                }
            }
        },

        {
            type: 'input',
            name: 'proDescrip',
            message: 'Project description:',
            validate: descripInput => {
                if (descripInput){
                    return true
                }
                else{
                    console.log('Please enter a desription for the project!')
                    return false
                }
            }

        },

        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions:'
        },

        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information:'

        },
        
        {
            type: 'input',
            name: 'test',
            message:'Enter testing instructions:'

        },

        {
            type: 'input',
            name: 'contribution',
            message:'Enter contribution guidelines:'

        },

        {   
            type: 'checkbox',
            name: 'license',
            message: 'Please choose a liscence:',
            choices: ['mit', 'agpl-3.0','gpl-3.0', 'apache-2.0']

        },
        
        {   
            type: 'input',
            name: 'email',
            message: 'Please enter your Email:',
            validate: emailInput =>{
                if (emailInput){
                    return true
                }
                else{
                    console.log('Please enter your project name!')
                    return false
                }
            }
           

        },
        
        
        {   
            type: 'input',
            name: 'gitHub',
            message: 'Enter your GitHub username:',
            validate: GitHubInput =>{
                if (GitHubInput){
                    return true
                }
                else{
                    console.log('Please enter your project name!')
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

   