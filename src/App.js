import { useState } from 'react'

import Searchbar from './components/Searchbar'
import ImageGallery from './components/ImageGallery'
import Modal from './components/Modal'
import { Button } from './components/Button'

import buttonStyles from './components/Button/Button.module.css'

export default function App() {
  const [searchValue, setSearchValue] = useState('')
  const [largeImage, setLargeImage] = useState('')

  const onSubmitSearchValue = data => {
    setSearchValue(data)
  }

  const handleModalOpen = url => {
    setLargeImage(url)
  }

  const handleModalClose = () => setLargeImage('')

  return (
    <>
      <Searchbar onSubmit={onSubmitSearchValue} />

      <ImageGallery searchValue={searchValue} handleModalOpen={handleModalOpen} />

      {largeImage !== '' && (
        <Modal onClose={handleModalClose}>
          <Button type="button" className={buttonStyles.close} onClick={handleModalClose}>
            X
          </Button>
          <img src={largeImage} alt="#" className="largeImage" />
        </Modal>
      )}
    </>
  )
}
