import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-col">
            <ul className="social-col">
              <li>
                <span class="fa-sr-only">Instagram</span>
                <FontAwesomeIcon icon={faInstagram} />
              </li>
              <li>
                <span class="fa-sr-only">Twitter</span>
                <FontAwesomeIcon icon={faTwitter} />
              </li>
              <li>
                <span class="fa-sr-only">Discord</span>
                <FontAwesomeIcon icon={faDiscord} />
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <ul>
              <li>Marketplace</li>
              <li>Buy a Fridge</li>
              <li>Bacon</li>
              <li>Connect Wallet</li>
              <li>Team</li>
            </ul>
          </div>
          <div className="footer-col">
            <p>In the Metaverse</p>
            <p>Best Bacon in the world</p>
            <p>
              Illustration by{" "}
              <a
                href="https://icons8.com/illustrations/author/zD2oqC8lLBBA"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Icons 8
              </a>{" "}
              from
              <a
                href="https://icons8.com/illustrations"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Ouch!
              </a>
            </p>
            <p>
              Page built by{" "}
              <a
                href="https://twitter.com/sashattran"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Sasha
              </a>{" "}
              with React & GSAP
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
