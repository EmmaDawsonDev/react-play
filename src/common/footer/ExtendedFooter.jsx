import { useContext } from "react";
import { Link } from "react-router-dom";
import { IoAddSharp, IoLogoRss } from "react-icons/io5";
import { MdManageSearch } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { BsTwitter, BsGithub } from "react-icons/bs";
import LogoLight from "images/img-logo-light.svg";
import { SearchContext } from "common/search/search-context";

const ExtendedFooter = () => {
  const { showShareModal, setShowShareModal } = useContext(SearchContext);

  return (
    <div className="app-footer--home app-footer">
      <div className="app-footer-body">
        <div className="body-primary">
          <h3>
            <span className="sr-only">ReactPlay</span>
            <img src={LogoLight} alt="ReactPlay Logo" />
          </h3>
          <p className="p-lg">
            An open-source project made with ❤️ by{' '}
            <a
              href="https://tapasadhikary.com"
              className="text-link-default"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tapas Adhikary website (opens in new tab)"
            >
              Tapas Adhikary
            </a>{' '}
            and friends.
          </p>
          <p>
            <small>Connect with us</small>
            <ul className="social-links">
              <li>
                <a
                  href="https://twitter.com/reactplayio"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter (opens in new tab)"
                >
                  <BsTwitter className="icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/reactplay"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Github (opens in new tab)"
                >
                  <BsGithub className="icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/vrTxWUP8Am"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord (opens in new tab)"
                >
                  <FaDiscord className="icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://blog.reactplay.io/"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="React Play blog (opens in new tab)"
                >
                  <IoLogoRss className="icon" />
                </a>
              </li>
            </ul>
          </p>
          <p>
            <small>Email us</small>{' '}
            <div>
              <a href="mailto:contact@reactplay.io" target="_blank" rel="noopener noreferrer" className="text-link-default">
                contact@reactplay.io
              </a>
            </div>
          </p>
          <p className="mt-8 mb-4">
            <a href="https://www.netlify.com" className="inline-block">
              {' '}
              <img src="https://www.netlify.com/v3/img/components/netlify-light.svg" alt="Deploys by Netlify" />{' '}
            </a>
          </p>
        </div>
        <div className="body-secondary">
          <h3 className="section-title mt-3">About</h3>
          <p className="mb-4">
            ReactPlay is an opensource platform that helps you learn, create and share ReactJS projects with the developer community.
          </p>
          <div className="flex flex-wrap gap-1">
            <a
              href="https://github.com/reactplay/react-play/blob/main/CREATE-PLAY.md"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mr-2"
              aria-label="Create new play (opens in new window)"
            >
              <IoAddSharp className="icon" />
              <span className="btn-label">Create</span>
            </a>
            <Link to="/plays" className="btn-default-light" aria-label="Browse React Play">
              <MdManageSearch className="icon" />
              <span className="btn-label">Browse</span>
            </Link>
          </div>
          <p className="mt-10">
            Not sure how to get started? <br />
            We have a lot of ideas for you to get started.
            <div className="mt-2">
              <Link to="/ideas" className="home-anchor home-anchor-sm">
                <span className="text">Get started</span>
              </Link>
            </div>
            <div className="mt-2">
              <a
                href="https://blog.reactplay.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="home-anchor home-anchor-sm"
                aria-label="Read our blog posts (opens in new tab)"
              >
                <span className="text">Read our blog posts</span>
              </a>
            </div>
          </p>
        </div>
        <div className="body-tertiary">
          <h3 className="section-title">Show love</h3>
          <p className="mb-2">
            Enjoying ReactPlay? Please help us spreading the word You can share about ReactPlay on any of your favorite social media
            platforms.
          </p>
          <button onClick={() => setShowShareModal(!showShareModal)} className="home-anchor home-anchor-sm" href="#">
            <span className="text">Share about ReactPlay</span>
          </button>
          <p className="mt-10 mb-2">Your support means a lot to us. Want to be our Sponsor and support us?</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="home-anchor home-anchor-sm"
            href="https://github.com/sponsors/reactplay"
            aria-label="Sponsor React Play on Github (opens in new tab) "
          >
            <span className="text">Sponsor ReactPlay</span>
          </a>
        </div>
      </div>
    </div>
  )
};

export default ExtendedFooter;
