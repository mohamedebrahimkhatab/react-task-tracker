import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ title = 'Task Tracker', onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && (showAdd? <Button color='red' text='Close' onClick = {onAdd} /> : 
        <Button color='green' text='Add' onClick = {onAdd} />)}
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

// const headingStyle = {
//   color : "red"
// }

export default Header