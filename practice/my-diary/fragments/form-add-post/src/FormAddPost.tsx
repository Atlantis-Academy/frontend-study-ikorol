import React, { useEffect, useState } from 'react'
import { useIntl }                    from 'react-intl'

import { GiantButton }                from '@ui/button'
import { Condition }                  from '@ui/condition'
import { Input }                      from '@ui/input'
import { Column, Layout, Row }        from '@ui/layout'
import { Space }                      from '@ui/text'
import { useNotes }                   from '@store/notes'

import messages                       from './messages'
import { addItem, fetchInitialData }  from './actions'

export const FormAddPost = () => {
  const [newNote, setNewNote] = useState('')
  const [notes, setNotes] = useNotes()
  const [isVisible, setIsVisible] = useState(false)
  const intl = useIntl()

  useEffect(() => {
    setNotes(fetchInitialData())
  }, [])

  return (
    <Column>
      <Column backgroundColor='white' height='90px'>
        <Condition visible={isVisible}>
          <Row justifyContent='center'>
            <Input
              fontSize='normal'
              placeholder={intl.formatMessage(messages.post)}
              onChange={event => setNewNote(event.target.value)}
              value={newNote}
            />
          </Row>
        </Condition>
        <Layout flexBasis={60} />
      </Column>
      <Row justifyContent='center'>
        <GiantButton
          marginTop='-30px'
          onClick={() => {
            setIsVisible(!isVisible)
            if (newNote) {
              setNotes(addItem(notes, newNote))
              setNewNote('')
              setIsVisible(false)
            }
          }}
        >
          <Space count={5} />
          {intl.formatMessage(messages.newTask)}
          <Space count={5} />
        </GiantButton>
      </Row>
    </Column>
  )
}
