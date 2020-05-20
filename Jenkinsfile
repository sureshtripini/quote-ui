pipeline {
  environment {
    registry = "sureshtripini/quote_ui"
    registryCredential = 'DOCKER_HUB'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Checkout') {
      steps {
        cleanWs()
        checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/sureshtripini/quote-ui.git']]])
         }
    }
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    stage('Push Image') {
      steps{
        script {
            docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
    
    stage('Run Container') {
      steps{
        sh "docker run -itd -p 3001:3000 $registry:$BUILD_NUMBER"
      }
    }
    
    
    
    /* stage('Remove Image') {
      steps{
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
    */
  }
}
