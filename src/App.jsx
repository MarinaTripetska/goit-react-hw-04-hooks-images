import { useState, useEffect, useRef } from 'react'
import { fetch } from 'API/APIfetchGET'
import Searchbar from 'components/Searchbar'
import ImageGalleryList from 'components/ImageGalleryList'
import Modal from 'components/Modal'
import Loader from 'components/Loader'
import { CloseButton, LoadMoreButton } from 'components/Buttons'
import { IdleMesage, ErrorMessage } from 'components/Messages'

const INITIAL_STATUS = {
  idle: 'idle',
  pending: 'pending',
  rejected: 'rejected',
  resolved: 'resolved',
}

export default function App() {
  const { idle, pending, rejected, resolved } = INITIAL_STATUS

  const [searchValue, setSearchValue] = useState('')
  const [largeImage, setLargeImage] = useState('')
  const [images, setImages] = useState([])
  const [error, setError] = useState(null)
  const [status, setStatus] = useState(INITIAL_STATUS.idle)
  const [moreLoadStatus, setMoreLoadStatus] = useState(INITIAL_STATUS.idle)
  const [page, setPage] = useState(1)

  //create ref for DOM element list (Gallery)
  const imgListRef = useRef()

  //save to the state the search keyword that comes from the form, clear the page number and the array of images
  const onSubmitSearchValue = data => {
    setSearchValue(data)
    setImages([])
    setPage(1)
  }
  //We write to the state url of a large image comes from ImgItem
  const handleModalOpen = url => {
    setLargeImage(url)
  }
  //When closing the modal, clear the state
  const handleModalClose = () => setLargeImage('')

  //fetching images
  useEffect(() => {
    if (searchValue === '') {
      return
    }

    page === 1 && setStatus(pending)
    page > 1 && setMoreLoadStatus(pending)

    fetch(searchValue, page)
      .then(data => {
        if (data.length === 0 && page > 1) {
          throw new Error(`Images with tag "${searchValue}" has been finished.`)
        } else if (data.length === 0) {
          throw new Error(`Unfortunately, nothing found with search name "${searchValue}" :( `)
        } else {
          setImages(prevImages => [...prevImages, ...data])
          setStatus(resolved)
          setMoreLoadStatus(resolved)
          //find 1 child elem of Gallery list from LoadMore fetch and scroll to it
          if (page > 1) {
            const ulElems = imgListRef.current.children
            ulElems[ulElems.length - 9].scrollIntoView({ behavior: 'smooth' })
          }
        }
      })
      .catch(error => {
        setError(error)
        page === 1 && setStatus(rejected)
        page > 1 && setMoreLoadStatus(rejected)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, page])

  return (
    <>
      <Searchbar onSubmit={onSubmitSearchValue} />

      {status === idle && <IdleMesage />}
      {status === pending && <Loader />}
      {status === resolved ? (
        <>
          <ImageGalleryList images={images} handleModalOpen={handleModalOpen} ref={imgListRef} />

          {moreLoadStatus === idle || moreLoadStatus === resolved ? (
            <LoadMoreButton type="button" onClick={() => setPage(prev => prev + 1)}>
              Load more
            </LoadMoreButton>
          ) : null}

          {moreLoadStatus === pending && <Loader />}
          {moreLoadStatus === rejected && <ErrorMessage error={error} />}
        </>
      ) : null}

      {largeImage !== '' && (
        <Modal onClose={handleModalClose}>
          <CloseButton type="button" onClick={handleModalClose} children="X" />
          <img src={largeImage} alt="#" />
        </Modal>
      )}

      {status === rejected && <ErrorMessage error={error} />}
    </>
  )
}
