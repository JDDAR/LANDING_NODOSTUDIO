import './header.scss';

const Header = () => {
  return (
    <> 
      <header className='container-header'>
        <div className='container-header-logo' >
          <h4>NODOSTUDIO</h4>
        </div>
        <div className='container-header-nav' >
          <ul>
            <li>
              <a href="">Whatsaap</a>
            </li>
            <li><a href="">Facebook</a></li>
            <li><a href="https://www.instagram.com/nodostudio.d">Instagram</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100069583504426">Linkeding</a></li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header
