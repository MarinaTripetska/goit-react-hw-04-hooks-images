import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import ContainerStyled from '../BasicStyledComponents/Container'
import { Title, GridList } from './ImageGalleryList.styled'
import ImageGalleryItem from '../ImageGalleryItem'

const ImageGalleryList = forwardRef(({ images, handleModalOpen }, ref) => {
  const modalOpen = e => {
    handleModalOpen(e.currentTarget.srcset)
  }
  return (
    <ContainerStyled>
      <Title>Gallery</Title>
      <GridList ref={ref}>
        {images.map(imgObj => (
          <ImageGalleryItem key={imgObj.largeImageURL} imgObj={imgObj} onClick={modalOpen} />
        ))}
      </GridList>
    </ContainerStyled>
  )
})

ImageGalleryList.propTypes = {
  images: PropTypes.array.isRequired,
  handleModalOpen: PropTypes.func.isRequired,
}

export default ImageGalleryList
