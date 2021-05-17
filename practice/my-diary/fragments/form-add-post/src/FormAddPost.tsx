import React, { useEffect, useState } from 'react'
import { useIntl }                    from 'react-intl'

import { Button }                     from '@ui/button'
import { Input }                      from '@ui/input'
import { Column, Layout, Row }        from '@ui/layout'
import { Space }                      from '@ui/text'
import { useNotes }                   from '@store/notes'

import messages                       from './messages'
import { fetchInitialData }           from './actions'

export const FormAddPost = () => {
  const [newNote, setNewNote] = useState('')
  const [notes, setNotes] = useNotes()
  const [inputStatus, setInputStatus] = useState('invisible')
  const intl = useIntl()
  const initialNotes = ['Flight to Moscow', 'Friends meeting', 'Buy a new frying pan in Ikea']

  useEffect(() => {
    setNotes(fetchInitialData(notes, initialNotes))
  }, [])
  return (
    <Column>
      <Column backgroundColor='white'>
        <Row opacity={inputStatus === 'visible' ? '1' : '0'}>
          <Layout flexBasis={135} />
          <Input
            fontSize='normal'
            placeholder={intl.formatMessage(messages.post)}
            onChange={event => setNewNote(event.target.value)}
            value={newNote}
          />
          <Layout flexBasis={200} />
        </Row>
        <Layout flexBasis={60} />
      </Column>
      <Button
        width='fit-content'
        height='80px'
        position='relative'
        top='-45px'
        left='165px'
        fontSize='large'
        fontWeight='bold'
        color='white'
        backgroundColor='deepPurple'
        borderRadius='giant'
        boxShadow='violet'
        border='none'
        onClick={() => {
          setInputStatus('visible')
          if (inputStatus === 'visible' && newNote !== '') {
            setNotes(fetchInitialData(notes, [newNote]))
            setNewNote('')
            setInputStatus('invisible')
          } else if (inputStatus === 'visible') {
            setInputStatus('invisible')
          }
        }}
      >
        <Space count={5} />
        {intl.formatMessage(messages.newTask)}
        <Space count={5} />
      </Button>
    </Column>
  )
}
