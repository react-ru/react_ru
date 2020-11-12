import React from 'react'
import { Rehabilitation } from './Rehabilitation'
import { Moderator } from './Moderator'
import { WannabeModerator } from './WannabeModerator'
import { useStyle } from '../hooks/useStyle'

export const Moderation = () => {
  const sectionStyle = useStyle({
    backgroundColor: '#f0f0f0',
    width: 'calc(100vw)',
    marginLeft: 'calc(-1 * (100vw - 960px) / 2)',
    paddingRight: 'calc((100vw - 960px) / 2)',
    paddingLeft: 'calc((100vw - 960px) / 2)',
    boxSizing: 'border-box',
    paddingTop: '1rem',
    paddingBottom: '5rem',
    borderTop: '1px solid #e8e8e8',
    borderBottom: '1px solid #e8e8e8'
  })

  return (
    <section style={sectionStyle}>
      <h1>Модераторы</h1>
      <div>
        <Moderator
          name='Юрий Чеботаев'
          nickname='ychebotaev'
          avatar='http://реакт-чат.рф/img/ychebotaev.jpg'
        />
        <Moderator
          name='Дмитрий Король'
          nickname='koroldmitry'
          avatar='http://реакт-чат.рф/img/dmitry-korol.jpg'
        />
        <Moderator
          name='Александр Кривенков'
          avatar='http://реакт-чат.рф/img/alexander.jpg'
        />
        <WannabeModerator />
      </div>
      <Rehabilitation />
    </section>
  )
}
