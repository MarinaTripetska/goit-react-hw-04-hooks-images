import Loader from 'react-loader-spinner'
import styled from 'styled-components'

const LoaderBox = styled.div`
  height: 150px;
  width: 150px;
  margin: 50px auto;
`

export default function LoaderElem() {
  return (
    <LoaderBox>
      <Loader type="BallTriangle" color="#00BFFF" height={150} width={150} />
    </LoaderBox>
  )
}
