const { gql } = require('apollo-server-express')

const rootQUery = gql`
    union ResultadoBusqueda = Profesor | Curso
    type Query{
        cursos: [Curso]
        profesores: [Profesor]
        curso(id: Int): Curso
        profesor(id: Int): Profesor
        buscar(query: String!): [ResultadoBusqueda]
    }

    type Mutation{
        profesorAdd(profesor: NuevoProfesor): Profesor
        profesorEdit(profesorId: Int!, profesor: ProfesorEditable): Profesor
        profesorDelete(profesorId: Int!): Profesor
        cursoAdd(curso: NuevoCurso): Curso
        cursoEdit(cursoId: Int!, curso: CursoEditable): Curso
        cursoDelete(cursoId: Int!): Curso
    }
`
module.exports = rootQUery