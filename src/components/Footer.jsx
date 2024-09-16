function Footer()
{
return(
    <>
    <footer>
    <div class="container">
      <div class="wrapper">
        <a href="#" class="footer-logo">
          <img src="./src/assets/images/akatsuki.png" alt="SimpleBlog Logo" width="150" class="logo-light" />
        </a>

        <p class="footer-text">
          Empowering future developers through coding education and community support.
        </p>
      </div>

      <div class="wrapper">
        <p class="footer-title">Quick Links</p>

        <ul>
          <li>
            <a href="#" class="footer-link">Events</a>
          </li>

          <li>
            <a href="#" class="footer-link">About Us</a>
          </li>

          <li>
            <a href="#" class="footer-link">Contact Us</a>
          </li>
        </ul>
      </div>

      <div class="wrapper">
        <p class="footer-title">Legal Stuff</p>

        <ul>
          <li>
            <a href="#" class="footer-link">Privacy Notice</a>
          </li>

          <li>
            <a href="#" class="footer-link">Cookie Policy</a>
          </li>

          <li>
            <a href="#" class="footer-link">Terms Of Use</a>
          </li>
        </ul>
      </div>
    </div>

    <p class="copyright">
      &copy; 2024 <a href="#">Akatsuki Coding Club</a>. All rights reserved.
    </p>
  </footer>

    </>
)
}
export default Footer