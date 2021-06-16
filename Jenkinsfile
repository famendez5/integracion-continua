node {
    checkout scm
    stage('Build') {
        echo 'Compilando...'
        steps {
            sh 'npm install'
            sh 'VITE_CONVERTER_SERVER=http://localhost:9090 npm run build'
        }
    }
}
