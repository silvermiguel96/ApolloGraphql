module.exports = `

  """Esto es un curso en el sistema"""
  type Curso {
      id: ID!
      titulo: String!
      """Esta es la descripción del curso"""
      descripcion: String!
      profesor: Profesor
      rating: Float @deprecated( reason: "No queremos mas rankins")
      comentarios: [Comentario]
  }

  type Comentario{
    id: ID!
    nombre: String!
    cuerpo: String!
  }
`