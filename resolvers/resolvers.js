const Curso = require('../models/Curso')
const Profesor = require('../models/Profesor')

const resolvers = {
  Query: {
    cursos: () => Curso.query().eager('[profesor, comentarios]'),
    profesores: () => Profesor.query().eager('cursos'),
    curso: (rootValue, args) => Curso.query().eager('[profesor, comentarios]').findById(args.id),
    profesor: (rootValue, args) => Curso.query().eager('cursos').findById(args.id)
  },
  Mutation: {
    profesorAdd: (_, args) => {
      // console.log(args)
      return Profesor.query().insert(args.profesor)
    }
  }
}

module.exports = resolvers