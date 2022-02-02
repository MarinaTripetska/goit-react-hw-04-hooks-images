import { useState } from 'react'
import PropTypes from 'prop-types'
import { SearchFormButton } from '../Buttons'
import { Header, Form, Input } from './SearchBar.styled'

export default function Searchbar({ onSubmit }) {
  const [searchInput, setSearchInput] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    if (searchInput.trim() === '') {
      window.alert('Please, provide search name!')
      setSearchInput('')
      return
    }

    onSubmit(searchInput.toLowerCase().trim())
    setSearchInput('')
  }

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <SearchFormButton type="submit">Search</SearchFormButton>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={e => setSearchInput(e.currentTarget.value)}
          value={searchInput}
        />
      </Form>
    </Header>
  )
}

Searchbar.defaultProps = {
  onSubmit: () => null,
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
