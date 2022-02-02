import PropTypes from 'prop-types'
import ContainerStyled from '../BasicStyledComponents/Container'
import { Title, GridList } from './ImageGalleryList.styled'
import ImageGalleryItem from '../ImageGalleryItem'

export default function ImageGalleryList({ images, handleModalOpen }) {
  const modalOpen = e => {
    handleModalOpen(e.currentTarget.srcset)
  }
  // useEffect(() => {
  //   if (searchValue === '') {
  //     return
  //   }

  //   setStatus(INITIAL_STATUS.pending)
  //   fetchImages(searchValue)
  //     .then(data => {
  //       if (data.length === 0) {
  //         throw new Error(`Unfortunately, nothing found with search name "${searchValue}" :( `)
  //       } else {
  //         setImages([...data])
  //         setStatus(INITIAL_STATUS.resolved)
  //       }
  //     })
  //     .catch(error => {
  //       setError(error)
  //       setStatus(INITIAL_STATUS.rejected)
  //     })
  // }, [searchValue])

  // useEffect(() => {
  //   if (page === 1) {
  //     return
  //   }

  //   setMoreLoadStatus(INITIAL_STATUS.pending)
  //   fetchImages(searchValue, page)
  //     .then(data => {
  //       if (data.length === 0) {
  //         throw new Error(`Images with tag ${searchValue} has been finished.`)
  //       } else {
  //         setImages(prevImages => [...prevImages, ...data])
  //         setMoreLoadStatus(INITIAL_STATUS.resolved)
  //         const ulElems = imageToScroll.current.children
  //         ulElems[ulElems.length - 9].scrollIntoView({ behavior: 'smooth' })
  //       }
  //     })
  //     .catch(error => {
  //       setError(error)
  //       setMoreLoadStatus(INITIAL_STATUS.rejected)
  //     })

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [page])

  return (
    <ContainerStyled>
      <Title>Gallery</Title>
      <GridList>
        {images.map(imgObj => (
          <ImageGalleryItem key={imgObj.largeImageURL} imgObj={imgObj} onClick={modalOpen} />
        ))}
      </GridList>
    </ContainerStyled>
  )
}

ImageGalleryList.propTypes = {
  images: PropTypes.array.isRequired,
  handleModalOpen: PropTypes.func.isRequired,
}
