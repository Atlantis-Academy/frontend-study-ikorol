import React, { useState }     from 'react'
import { ThemeProvider }       from '@emotion/react'

import * as theme              from '@ui/theme'
import { FormAddPost }         from '@fragments/form-add-post'
import { MainPageHeader }      from '@fragments/main-page-header'
import { PostControls }        from '@fragments/post-controls'
import { PostList }            from '@fragments/post-list'
import { FilterProvider }      from '@store/filter'
import { NotesProvider }       from '@store/notes'
import { SearchValueProvider } from '@store/search-value'
import { ShowDrawerProvider }  from '@store/show-drawer'
import { Box, Column, Layout } from '@ui/layout'

export const App = () => {
  const [notes, setNotes] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [filter, setFilter] = useState('all')
  const [showDrawer, setShowDrawer] = useState<boolean>(null)

  return (
    <ThemeProvider theme={theme}>
      <NotesProvider value={[notes, setNotes]}>
        <SearchValueProvider value={[searchValue, setSearchValue]}>
          <FilterProvider value={[filter, setFilter]}>
            <ShowDrawerProvider value={[showDrawer, setShowDrawer]}>
              <Box
                width='100%'
                height='100%'
                justifyContent='center'
                backgroundColor='purple'
                top='0'
                left='0'
                position='fixed'
              >
                <Column width='600px'>
                  <Layout flexBasis={100} />
                  <MainPageHeader />
                  <PostControls />
                  <Layout flexBasis={30} />
                  <Column>
                    <PostList />
                    <FormAddPost />
                  </Column>
                  <Layout flexBasis={50} />
                </Column>
              </Box>
            </ShowDrawerProvider>
          </FilterProvider>
        </SearchValueProvider>
      </NotesProvider>
    </ThemeProvider>
  )
}
