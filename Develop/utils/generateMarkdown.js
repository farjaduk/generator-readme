// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license =>{
  if (!license){
    return '';
  }
  return `
  ![${license}](https://img.shields.io/badge/license-${license}-green)
  `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license =>{
  if(!license){
    return '';
  }
  return `
  [https://choosealicense.com/licenses/${license}/](https://choosealicense.com/licenses/${license}/)
  `
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license=> {
  if(!license){
    return '';
  }
  return `
  ${renderLicenseBadge(license)}
  
  ***${license}***

  ${renderLicenseLink(license)}

  `
}

// TODO: Create a function to generate markdown for README
module.exports = templateMarkdown => {
  console.log(templateMarkdown)
  return `
  # **${templateMarkdown.projectName}**

  ## **Description:**
 **${templateMarkdown.proDescrip}**

  ## Table of Contents:
   - [Installation](#installion)
   - [Usage](#usage)
   - [License](#license)
   - [Contribution](#contribution)

  ### *Installations:*

  _${templateMarkdown.installation}_

  ### *Usage:*
  _${templateMarkdown.usage}_

  ### *License*
  ${renderLicenseSection(templateMarkdown.license)}
  
  ### *Contribution:*
  _${templateMarkdown.contribution}_

  ### *Tests:*
  _${templateMarkdown.test}_

  #### Questions:
 - Email: ${templateMarkdown.email}
 - https://github.com/${templateMarkdown.gitHub}/

`;
}
