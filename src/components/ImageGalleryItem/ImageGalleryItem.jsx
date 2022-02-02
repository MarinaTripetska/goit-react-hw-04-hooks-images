import PropTypes from 'prop-types'
import styled from 'styled-components'

const ListItem = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`
export default function ImageGalleryItem({ imgObj: { webformatURL, tags, largeImageURL }, onClick }) {
  return (
    <ListItem>
      <Image src={webformatURL} alt={tags} srcSet={largeImageURL} onClick={onClick} />
    </ListItem>
  )
}

ImageGalleryItem.defaultProps = {
  tags: 'image',
  largeImageURL: '../src/images/DefaultImage.png',
}

ImageGalleryItem.prototypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}
