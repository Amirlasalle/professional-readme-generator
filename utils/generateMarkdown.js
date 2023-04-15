// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `[GitHub license Info](https://opensource.guide/legal/#which-open-source-license-is-appropriate-for-my-project)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return renderLicenseBadge(license)
  return renderLicenseLink()
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description: 
  ${data.Description}
  
  ### Table of Contents:
  * [Contribution](#contribution)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Test](#test)
  * [Contact](#contact)
  * [Github](#github)
  * [License](#license)
   
  #### Contribution
  ${data.Contributors}
  
  #### Installation
  ${data.Installation}

  #### Usage
  ${data.Usage}

  #### Test
  ${data.Test}

  #### Contact
  Please feel free to reach me at
  ${data.Email}
  for any questions regarding this projct.

  #### Github
  ${data.Github}
  [github profile](https://github.com/${data.Github})

  #### License
  ${renderLicenseSection(data.License)}

`;
}

module.exports = generateMarkdown;
