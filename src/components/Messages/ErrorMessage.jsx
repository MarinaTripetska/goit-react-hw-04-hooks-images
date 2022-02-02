import { ErrorContent } from './Messages.styled'

export const ErrorMessage = ({ error }) => {
  return <ErrorContent>{error.message}</ErrorContent>
}
