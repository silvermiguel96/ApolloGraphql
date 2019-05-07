
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
      }]
    }
  },
  Curso: {
    profesor: () => {
      return {
        nombre: 'Miguel',
        nacionalidad: 'Colombiana'
      }
    },
    comentarios: () => {
      return [{
        id: 1,
        nombre: 'Comentario uno',
        cuerpo: 'Cuerpo uno'
      },
      {
        id: 2,
        nombre: 'Comentario dos',
        cuerpo: 'Cuerpo dos'
      }]
    }
  }
}

module.exports = resolvers