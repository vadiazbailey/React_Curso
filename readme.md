# COMANDOS
- npx create-react-app 
- npm start (Starts the development server)
- npm run build (Bundles the app into static files for production)
- npm test
- pm run eject (Removes this tool and copies build dependencies, configuration files  and scripts into the app directory)


# TIPOS DE COMPONENTES:
1. Funcionales
2. Clase

# Caracteristicas:
- Debe retornar un elemento JSX
- Debe comenzar con una letra mayúscula
- Puede recibir valores si es necesario

**Las 'props' son argumentos que pueden recibir un compenente de React, son propiedades, es como un objeto (SOLO PUEDEN SER ENVIADOS DE PADRE A HIJOS, NO ES BIDIRECCIONAL)** 

# REACT DE CLASE (Trabaja con estados )
- Debe extender React.Component
- Debe tener un metodo render() para retornar un elemento de JSX
- Puede recibir valores si es necesario 

    class Biology extends React.Component {
        render(){
            return(
            <div> Biology, Professor: {this.state.professor} </div>
            )
        }
    }

# HOOK
- Funcion especial que te permite trabajar con estados en componentes funcionales y otros aspectos de React

# ATRIBUTOS
- Los de clases se escriben de distinta manera, pasan a escribirse como **className**
- Los for del label se escriben como **htmlFor**
- Las propiedades de los estilos se escriben en camelCase, como por ej. background-color es backgroundColor

<div style={estiloDiv}>Hola Mundo!</div>
const estiloDiv = {
    backgroundColor: 'black',
};

Cuando asignamos pocas propiedades
<div style={{color: 'black'}}>Hola Mundo!</div>

Existen dos tipos de exportaciones:
- Nombrada
- Por defecto


