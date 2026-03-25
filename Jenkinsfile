pipeline {
    agent any

    stages {

        stage('Checkout from GitHub') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Balarajup987/node-docker-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t node-docker-app:%BUILD_NUMBER% .'
            }
        }

        stage('Create container') {
            steps {
                bat 'docker run -d -p 3000:8000 node-docker-app:%BUILD_NUMBER%'
            }
        }

    }
}
