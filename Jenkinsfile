pipeline {
    agent {
        any { image 'cypress/included' args '-u root:root' } 
    }
    stages {
        stage('Download the dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run the test') {
            steps {
                bat "npx cypress run"
            }
        }
    }
}