import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import Container from '../Container'
import Loader from '../Loader'
import ImageGalleryItem from './ImageGalleryItem'
import { Button } from '../Button'
import fetchImages from '../../API/APIfetchGET'

import s from './ImageGallery.module.css'
import buttonStyles from '../Button/Button.module.css'

const INITIAL_STATUS = {
  idle: 'idle',
  pending: 'pending',
  rejected: 'rejected',
  resolved: 'resolved',
}

export default function ImageGallery({ searchValue, handleModalOpen }) {
  const [images, setImages] = useState(null)
  const [error, setError] = useState(null)
  const [status, setStatus] = useState(INITIAL_STATUS.idle)
  const [moreLoadStatus, setMoreLoadStatus] = useState(INITIAL_STATUS.idle)
  const [page, setPage] = useState(1)
  const imageToScroll = useRef()

  useEffect(() => {
    if (searchValue === '') {
      return
    }

    setStatus(INITIAL_STATUS.pending)
    fetchImages(searchValue)
      .then(data => {
        if (data.length === 0) {
          throw new Error(`Unfortunately, nothing found with search name "${searchValue}" :( `)
        } else {
          setImages([...data])
          setStatus(INITIAL_STATUS.resolved)
        }
      })
      .catch(error => {
        setError(error)
        setStatus(INITIAL_STATUS.rejected)
      })
  }, [searchValue])

  useEffect(() => {
    if (page === 1) {
      return
    }

    setMoreLoadStatus(INITIAL_STATUS.pending)
    fetchImages(searchValue, page)
      .then(data => {
        if (data.length === 0) {
          throw new Error(`Images with tag ${searchValue} has been finished.`)
        } else {
          setImages(prevImages => [...prevImages, ...data])
          setMoreLoadStatus(INITIAL_STATUS.resolved)
          const ulElems = imageToScroll.current.children
          ulElems[ulElems.length - 9].scrollIntoView({ behavior: 'smooth' })
        }
      })
      .catch(error => {
        setError(error)
        setMoreLoadStatus(INITIAL_STATUS.rejected)
      })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  if (status === 'idle') {
    return (
      <Container>
        <p className={s.idleText}>
          Hi! Here you may find beautiful images for inspiration. <br /> It's easy! Just enter a search name in the box
          at the top :)
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
        <ul className={s.galleryGrid} ref={imageToScroll}>
          {images.map(({ largeImageURL, webformatURL, tags }) => (
            <ImageGalleryItem
              key={largeImageURL}
              imgUrl={webformatURL}
              bigImgURL={largeImageURL}
              description={tags}
              onClick={e => handleModalOpen(e.currentTarget.srcset)}
            />
          ))}
        </ul>

        {moreLoadStatus === 'pending' && <Loader />}
        {moreLoadStatus === 'rejected' && <p className={s.errorText}>{error.message}</p>}

        <Button type="button" onClick={() => setPage(prev => prev + 1)} className={buttonStyles.loadMore}>
          Load more
        </Button>
      </Container>
    )
  }
}

ImageGallery.propTypes = {
  searchValue: PropTypes.string.isRequired,
  handleModalOpen: PropTypes.func.isRequired,
}
