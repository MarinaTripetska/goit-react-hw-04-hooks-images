import { useState, useEffect } from 'react'
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

  //записываем в стейт ключевое слово для поиска, которое приходит из формы
  const onSubmitSearchValue = data => {
    setSearchValue(data)
  }
  //Записываем в стейт урл большого изображения. приходит из ImgItem
  const handleModalOpen = url => {
    setLargeImage(url)
  }
  //При закрытии модалки, очищаем стейт
  const handleModalClose = () => setLargeImage('')

  useEffect(() => {
    if (searchValue === '') {
      return
    }

    setStatus(pending)

    fetch(searchValue)
      .then(data => {
        if (data.length === 0) {
          throw new Error(`Unfortunately, nothing found with search name "${searchValue}" :( `)
        } else {
          setImages([...data])
          setStatus(resolved)
        }
      })
      .catch(error => {
        setError(error)
        setStatus(rejected)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue])

  useEffect(() => {
    if (page === 1) {
      return
    }

    setMoreLoadStatus(pending)

    fetch(searchValue, page)
      .then(data => {
        if (data.length === 0) {
          throw new Error(`Images with tag ${searchValue} has been finished.`)
        } else {
          setImages(prevImages => [...prevImages, ...data])
          setMoreLoadStatus(resolved)
          // const ulElems = imageToScroll.current.children
          // ulElems[ulElems.length - 9].scrollIntoView({ behavior: 'smooth' })
        }
      })
      .catch(error => {
        setError(error)
        setMoreLoadStatus(rejected)
      })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <>
      <Searchbar onSubmit={onSubmitSearchValue} />

      {status === idle && <IdleMesage />}
      {status === pending && <Loader />}
      {status === resolved ? (
        <>
          <ImageGalleryList images={images} handleModalOpen={handleModalOpen} />
          {/* <div ref={this.endElRef} /> */}
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
