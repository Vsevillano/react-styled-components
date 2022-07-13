import React from 'react'
import {Container, Row} from './styles'

export const Hero = () => {
  return (
    <Container>
      <Row>
        <a href="/#" className='volver'>Volver al listado</a>
        <a href="/#">Ordenadores</a>
        <a href="/#">Accesorios PC</a>
        <a href="/#">Monitores</a>
        <a href="/#">Accesorios Streamer</a>
      </Row>
      <Row>
          <a href="/#">Compartir</a>
          <a href="/#">Vender uno igual</a>
      </Row>
    </Container>
  )
}
