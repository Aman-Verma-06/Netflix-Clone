import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className="footer-icons">
          <FaYoutube className='social-icons' />
          <FaFacebook className='social-icons' />
          <FaInstagram className='social-icons' />
          <FaTwitter className='social-icons' />
        </div>
        <ul>
          <li>Audio Description</li>
          <li>Help Center</li>
          <li>Gift Cards</li>
          <li>Media Center</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Legal Notice</li>
          <li>Cookie Preference</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
        </ul>
        <p className='copyright-text'>&#169; 2024 Netfly, Inc.</p>
      </div>
    </>
  )
}

export default Footer
