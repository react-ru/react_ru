import React from 'react'
import { Card, CardImg, CardBody, Button } from 'reactstrap'
import './Moderator.css'

export const Moderator = ({ noUrl, name, avatarSrc }) => {
  if (noUrl) {
    return (
      <div className='Moderator'>
        <Card>
          <CardImg top width='100%' src={avatarSrc} />
          <CardBody>
            <div className='text-center'>
              <span>{name}</span>
            </div>
          </CardBody>
        </Card>
      </div>
    )
  } else {
    return (
      <div className='Moderator'>
        <Card tag='a' href={`tg://resolve?domain=${name}`}>
          <CardImg top width='100%' src={avatarSrc} />
          <CardBody>
            <div className='text-center'>
              <Button tag='span'>@{name}</Button>
            </div>
          </CardBody>
        </Card>
      </div>
    )
  }
}
