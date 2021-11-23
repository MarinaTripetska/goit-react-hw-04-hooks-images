import { Component } from 'react'

import Searchbar from './components/Searchbar'
import ImageGallery from './components/ImageGallery'
import Modal from './components/Modal'
import { Button } from './components/Button'

import buttonStyles from './components/Button/Button.module.css'

class App extends Component {
  state = {
    searchValue: '',
    showModal: false,
    largeImage: '',
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.largeImage !== this.state.largeImage) {
      this.toggleModal()
    }
  }

  onSubmit = data => {
    this.setState({ searchValue: data })
  }

  handleModalOpen = url => {
    this.setState({ largeImage: url })
  }

  toggleModal = () => {
    this.setState(prevState => {
      return { showModal: !prevState.showModal }
    })
  }

  render() {
    const { searchValue, showModal, largeImage } = this.state
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />

        <ImageGallery searchValue={searchValue} handleModalOpen={this.handleModalOpen} />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <Button type="button" className={buttonStyles.close} onClick={this.toggleModal}>
              X
            </Button>
            <img src={largeImage} alt="#" />
          </Modal>
        )}
      </>
    )
  }
}

export default App
