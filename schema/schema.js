const { gql } = require('apollo-server-express')

const rootQUery = gql`
    type Query{
        cursos: [Curso]
        profesores: [Profesor]
        curso(id: Int): Curso
        profesor(id: Int): Profesor
    }
`
module.exports = rootQUery