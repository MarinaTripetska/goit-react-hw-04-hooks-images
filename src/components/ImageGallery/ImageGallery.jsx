import { Component, createRef } from 'react'
import PropTypes from 'prop-types'

import Container from '../Container'
import Loader from '../Loader'
import ImageGalleryItem from './ImageGalleryItem'
import { Button } from '../Button'
import fetchImages from '../../API/APIfetchGET'

import s from './ImageGallery.module.css'
import buttonStyles from '../Button/Button.module.css'

class ImageGallery extends Component {
  state = {
    images: null,
    error: null,
    status: 'idle',
    moreLoadStatus: 'idle',
    page: 1,
  }

  static propTypes = {
    searchValue: PropTypes.string.isRequired,
    handleModalOpen: PropTypes.func.isRequired,
  }

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.searchValue
    const prevPage = prevState.page
    const currentName = this.props.searchValue
    const currentPage = this.state.page

    if (prevName !== currentName) {
      this.setState({ status: 'pending' })
      fetchImages(currentName, currentPage)
        .then(data => {
          if (data.length === 0) {
            throw new Error(`Unfortunately, nothing found with search name "${currentName}" :( `)
          } else {
            this.setState({ images: [...data], status: 'resolved' })
          }
        })
        .catch(error => this.setState({ error, status: 'rejected' }))
    }

    if (currentPage !== prevPage) {
      this.setState({ moreLoadStatus: 'pending' })
      fetchImages(currentName, currentPage)
        .then(data => {
          if (data.length === 0) {
            throw new Error(`Images with tag ${currentName} has been finished.`)
          } else {
            this.setState(prevState => {
              return { images: [...prevState.images, ...data], moreLoadStatus: 'resolved' }
            })
            this.scrollToBottom()
          }
        })
        .catch(error => this.setState({ error, moreLoadStatus: 'rejected' }))
    }
  }

  endElRef = createRef()

  scrollToBottom = () => {
    this.endElRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  handleButtonClick = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 }
    })
  }

  handleModalOpen = e => {
    this.props.handleModalOpen(e.currentTarget.srcset)
  }

  render() {
    const { error, images, status, moreLoadStatus } = this.state

    if (status === 'idle') {
      return (
        <Container>
          <p className={s.idleText}>
            Hi! Here you may find beautiful images for inspiration. <br /> It's easy! Just enter a search name in the
            box at the top :)
          </p>
        </Container>
      )
    }

    if (status === 'pending') {
      return (
        <Container>
          <Loader />
        </Container>
      )
    }

    if (status === 'rejected') {
      return (
        <Container>
          <p className={s.errorText}>{error.message}</p>
        </Container>
      )
    }

    if (status === 'resolved') {
      return (
        <Container>
          <h1 className={s.title}>Gallery</h1>
          <ul className={s.galleryGrid}>
            {images.map(({ webformatURL, tags, largeImageURL }) => (
              <ImageGalleryItem
                key={largeImageURL}
                imgUrl={webformatURL}
                bigImgURL={largeImageURL}
                description={tags}
                onClick={this.handleModalOpen}
              />
            ))}
          </ul>
          <div ref={this.endElRef} />
          {moreLoadStatus === 'pending' && <Loader />}

          {moreLoadStatus === 'rejected' && <p className={s.errorText}>{error.message}</p>}

          <Button type="button" onClick={this.handleButtonClick} className={buttonStyles.loadMore}>
            Load more
          </Button>
        </Container>
      )
    }
  }
}
export default ImageGallery
