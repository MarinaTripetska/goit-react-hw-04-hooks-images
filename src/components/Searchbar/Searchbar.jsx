import { Component } from 'react'
import PropTypes from 'prop-types'

import { Button } from '../Button'
import buttonStyles from '../Button/Button.module.css'

import s from './Searchbar.module.css'

export default class Searchbar extends Component {
  state = {
    searchInput: '',
  }

  static defaultProps = {
    onSubmit: () => null,
  }

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  handleChange = e => {
    this.setState({ searchInput: e.currentTarget.value })
  }

  handleSubmit = e => {
    e.preventDefault()

    if (this.state.searchInput.trim() === '') {
      window.alert('Please, provide search name!')
      this.clear()
      return
    }

    this.props.onSubmit(this.state.searchInput.toLowerCase().trim())
    this.clear()
  }

  clear = () => {
    this.setState({
      searchInput: '',
    })
  }

  render() {
    return (
      <header className={s.header}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <Button type="submit" className={buttonStyles.searchForm}>
            <span className="button-label">Search</span>
          </Button>

          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.searchInput}
          />
        </form>
      </header>
    )
  }
}
