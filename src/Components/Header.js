import PropTypes from 'prop-types'
import Button from './Button' 
const Header = ({title , onAdd ,showadd}) => {
  const onClick = () => {
    
  }
  return (
    <header className='header'>
    <h1>{title}</h1>
    <Button color ='green' text = {showadd?'Close' :'Add'} onClick={onAdd} />
    </header>
  )
}
Header.defaultProps = { 
    title : ' Task tracker',
}

Header.propTypes= {
    title:PropTypes.string.isRequired,
}
export default Header