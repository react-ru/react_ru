import React from 'react'
import { Button, ListGroup, ListGroupItem, Row, Col } from 'reactstrap'
import { Moderator } from './Moderator'

export const Moderation = () => {
  return (
    <>
      <h1>
        <span role='img' aria-label='модерация'>
          👮🏻
        </span>
        Модерация
      </h1>
      <ListGroup>
        <ListGroupItem>
          <Row>
            <Col xs={6} md={3}>
              <Moderator name='Ychebotaev' avatarSrc='/img/ychebotaev.jpg' />
            </Col>
            <Col xs={6} md={3}>
              <Moderator name='KorolDmitry' avatarSrc='/img/dmitry-korol.jpg' />
            </Col>
            <Col xs={6} md={3}>
              <Moderator name='inkognito1' avatarSrc='/img/pavel.jpg' />
            </Col>
            <Col xs={6} md={3}>
              <Moderator
                noUrl
                name='Aleksandr Krivenkov'
                avatarSrc='/img/alexander.jpg'
              />
            </Col>
          </Row>
        </ListGroupItem>
        <ListGroupItem>
          <h3>
            <span role='img' aria-label='компьютер'>
              👨‍💻
            </span>{' '}
            Сообщество нуждается в волонтерах-модераторах
          </h3>
          <p>
            Пожалуйста, свяжитесь с{' '}
            <a href='tg://resolve?domain=ychebotaev'>@ychebotaev</a> в telegram,
            если вы:
          </p>
          <ul>
            <li>
              Имеете время, возможность и желание, чтобы заниматься
              модераторской работой.
            </li>
            <li>
              Интересуетесь и хотели бы в дальнейшем использовать node в
              карьере.
            </li>
            <li>Понимаете и готовы соблюдать правила на этой странице.</li>
          </ul>
          <div
            className='text-center'
            style={{ marginTop: '1rem', marginBottom: '1rem' }}
          >
            <Button tag='a' href='tg://resolve?domain=ychebotaev'>
              Попроситься в модераторы
            </Button>
          </div>
        </ListGroupItem>
      </ListGroup>
    </>
  )
}
