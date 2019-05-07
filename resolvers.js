
const resolvers = {
  Query: {
    cursos: () => {
      return [{
        id: 1,
        titulo: 'Primer curso',
        descripcion: 'Esta es la descripcion del curso primero'
      },
      {
        id: 2,
        titulo: 'Segundo curso',
        descripcion: 'Esta es la descripcion del curso Segundo'
      },
      ]
    }
  },
  Curso: {
    profesor: () => {
      return {
        nombre: 'Miguel'
      }
    }
  }
}

module.exports = resolvers