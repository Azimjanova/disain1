
import ApplSvg from '../../assets/applestore.svg'
import PlaySvg from '../../assets/playstore.svg'

// rafce
import './Header.css'

let imgMobile = "https://stores.kg/_next/image?url=%2Fstatic%2Fimg%2Fmobile-info.png&w=256&q=75"
const Header = () => {
  return (
    <div>
        <div className='header-top'></div>
        <h3>
            Новое приложение Stores
            <img src={imgMobile} alt="" />
            <span> еще больше возможностей </span>
            <a href="">
                <img src={ApplSvg} alt="" />
            </a>
            <a href="">
                <img src={PlaySvg} alt="" />
            </a>
        </h3>
        <div className='header-center'></div>
        <div className='header-bottom'></div>
    </div>
  )
}

export default Header
