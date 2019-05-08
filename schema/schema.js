const { gql } = require('apollo-server-express')

const rootQUery = gql`
    type Query{
        cursos: [Curso]
        profesores: [Profesor]
        curso(id: Int): Curso
        profesor(id: Int): Profesor
    }

    type Mutation{
        profesorAdd(profesor: NuevoProfesor): Profesor
        profesorEdit(profesorId: Int!, profesor: ProfesorEditable): Profesor
    }
`
module.exports = rootQUery