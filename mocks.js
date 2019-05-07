const casual = require('casual')
const mocks = {
  Curso: () => {
    return {
      id: casual.uuid,
      titulo: casual.name,
      descripcion: casual.sentences(2),
    }
  },
  Profesor: () => {
    return {
      nombre: casual.username,
      nacionalidad: casual.country
    }
  }
}

module.exports = mocks