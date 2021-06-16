node {
    checkout scm
    stage('Deps') {
        echo 'Instalando dependencias...'
        npm install
    }

    stage('Build') {
        echo 'Compilando...'
        VITE_CONVERTER_SERVER=http://localhost:9090 npm run build
    }
}
