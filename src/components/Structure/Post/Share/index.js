import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLinkedinIn,
  faTwitter,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Share({ title }) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        <li>
          <a href="#this" rel="noreferrer" target="_blank" title="Facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a href="#this" rel="noreferrer" target="_blank" title="Twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href="#this" rel="noreferrer" target="_blank" title="LinkedinIn">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li>
          <a href="#this" rel="noreferrer" target="_blank" title="WhatsApp">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </li>
        <li>
          <a href="#this" rel="noreferrer" target="_blank" title="E-mail">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
      </ul>
    </>
  );
}
