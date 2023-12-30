pipeline {
    agent {
        docker { image 'cypress/included' }
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