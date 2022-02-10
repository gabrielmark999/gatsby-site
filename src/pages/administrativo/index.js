import * as React from 'react'
import { Link } from "gatsby";
import { 
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  listSection,
  listSectionItem,
} from '../../components/layout.module.css';
import SubLayout from '../../components/sub-layout';

const AdmPage = () => {
  return (
    <SubLayout pageTitle="Portal Administrativo">
        <p>Esta seção é voltada para o os usuários do portal administrativo do Menu46!</p>
        <ul className={listSection}>
          <li className={listSectionItem}>
            <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.6805 24.365H17.6153C16.7724 24.365 16.0828 23.6753 16.0828 22.8324H5.3701V28.9627C5.3701 30.6485 6.74941 32.0278 8.43524 32.0278H29.8759C31.5617 32.0278 32.941 30.6485 32.941 28.9627V22.8324H22.213C22.213 23.6753 21.5234 24.365 20.6805 24.365ZM31.4084 10.5719H25.2782C25.2782 7.18489 22.5349 4.44159 19.1479 4.44159C15.7609 4.44159 13.0176 7.18489 13.0176 10.5719H6.88734C5.20152 10.5719 3.8222 11.9512 3.8222 13.637V18.2347C3.8222 19.9359 5.18619 21.2998 6.88734 21.2998H16.0828V19.7673C16.0828 18.9244 16.7724 18.2347 17.6153 18.2347H20.6805C21.5234 18.2347 22.213 18.9244 22.213 19.7673V21.2998H31.4084C33.0943 21.2998 34.4736 19.9205 34.4736 18.2347V13.637C34.4736 11.9512 33.0943 10.5719 31.4084 10.5719ZM16.0828 10.5719C16.0828 8.88604 17.4621 7.50673 19.1479 7.50673C20.8337 7.50673 22.213 8.88604 22.213 10.5719H16.0674H16.0828Z" fill="#45034E">
              </path>
            </svg>
            <p>
              Franquias
            </p>
          </li>
          <li className={listSectionItem}>Convênios</li>
          <li className={listSectionItem}>Lojas</li>
          <li className={listSectionItem}>Banners</li>
          <li className={listSectionItem}>Notificações Push</li>
          <li className={listSectionItem}>Usuários</li>
          <li className={listSectionItem}>Usuários App</li>
          <li className={listSectionItem}>Outras entradas</li>
        </ul>
    </SubLayout>
  )
}

export default AdmPage