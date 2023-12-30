pipeline{
    agent {
        docker{
            image 'cypress/included'
            arg '-u root:root'
        }
    }

    stages{
        stage('dowloand the dependecies'){
            steps {
                sh "npm install"
            }
        }
        stage('run the test'){
            steps {
                sh "npx cypress run"
            }
        }
    }
}