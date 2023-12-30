pipeline {
    agent {
        any { image 'cypress/included' args '-u root:root' } 
    }
    stages {
        stage('Download the dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run the test') {
            steps {
                sh "npx cypress run"
            }
        }
    }
}