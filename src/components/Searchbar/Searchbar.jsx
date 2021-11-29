import { useState } from 'react'
import PropTypes from 'prop-types'

import { Button } from '../Button'
import buttonStyles from '../Button/Button.module.css'

import s from './Searchbar.module.css'

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
    <header className={s.header}>
      <form className={s.form} onSubmit={handleSubmit}>
        <Button type="submit" className={buttonStyles.searchForm}>
          <span className="button-label">Search</span>
        </Button>

        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={e => setSearchInput(e.currentTarget.value)}
          value={searchInput}
        />
      </form>
    </header>
  )
}

Searchbar.defaultProps = {
  onSubmit: () => null,
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
