import { Component } from 'react'

import Searchbar from './components/Searchbar'
import ImageGallery from './components/ImageGallery'
import Modal from './components/Modal'
import { Button } from './components/Button'

import buttonStyles from './components/Button/Button.module.css'

class App extends Component {
  state = {
    searchValue: '',
    largeImage: '',
  }

  onSubmit = data => {
    this.setState({ searchValue: data })
  }

  handleModalOpen = url => {
    this.setState({ largeImage: url })
  }
  handleModalClose = () => {
    this.setState({ largeImage: '' })
  }

  render() {
    const { searchValue, largeImage } = this.state
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />

        <ImageGallery searchValue={searchValue} handleModalOpen={this.handleModalOpen} />

        {largeImage !== '' && (
          <Modal onClose={this.handleModalClose}>
            <Button type="button" className={buttonStyles.close} onClick={this.handleModalClose}>
              X
            </Button>
            <img src={largeImage} alt="#" className="largeImage" />
          </Modal>
        )}
      </>
    )
  }
}

export default App
