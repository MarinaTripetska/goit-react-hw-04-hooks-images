import PropTypes from 'prop-types'
import s from './ImageGalleryItem.module.css'

export default function ImageGalleryItem({ imgUrl, description, onClick, bigImgURL }) {
  return (
    <li className={s.item}>
      <img src={imgUrl} alt={description} srcSet={bigImgURL} className={s.image} onClick={onClick}></img>
    </li>
  )
}

ImageGalleryItem.defaultProps = {
  description: 'image',
  bigImgURL: '../src/images/DefaultImage.png',
}

ImageGalleryItem.prototypes = {
  imgUrl: PropTypes.string.isRequired,
  bigImgURL: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}
