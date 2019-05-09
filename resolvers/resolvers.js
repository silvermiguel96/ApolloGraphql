const Curso = require('../models/Curso')
const Profesor = require('../models/Profesor')

const resolvers = {
  Query: {
    cursos: () => Curso.query().eager('[profesor, comentarios]'),
    profesores: () => Profesor.query().eager('cursos'),
    curso: (rootValue, args) => Curso.query().eager('[profesor, comentarios]').findById(args.id),
    profesor: (rootValue, args) => Curso.query().eager('cursos').findById(args.id),
    buscar: (_, args) => {
      return [
        Profesor.query().findById(1),
        Curso.query().findById(1)
      ]
    }
  },
  ResultadoBusqueda: {
    __resolveType: (obj) => {
      console.log(obj)
      if (obj.nombre) return 'Profesor'
      return 'Curso'
    }
   },
  Mutation: {
    profesorAdd: (_, args) => {
      // console.log(args)
      return Profesor.query().insert(args.profesor)
    },
    profesorEdit: (_, args) => {
      return Profesor.query().patchAndFetchById(args.profesorId, args.profesor)
    },
    profesorDelete: (_, args) => {
      return Profesor.query().findById(args.profesorId).then((profesor) => {
        return Profesor.query().deleteById(args.profesorId).then(() => {
          return profesor
        }
       )
      })
    },
    cursoAdd: (_, args) => {
      // console.log(args)
      return Curso.query().insert(args.curso)
    },
    cursoEdit: (_, args) => {
      return Curso.query().patchAndFetchById(args.cursoId, args.curso)
    },
    cursoDelete: (_, args) => {
      return Curso.query().findById(args.cursoId).then((curso) => {
        return Curso.query().deleteById(args.cursoId).then(() => {
          return curso
        })
      })
    }

  }
}

module.exports = resolvers