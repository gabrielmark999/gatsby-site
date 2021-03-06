import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle
 } from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={siteTitle}>
        <Link to="/">
          <StaticImage width={128} alt='Logo do Menu46' src='../images/menu_logo.png'/>
        </Link>
        <Link to="/contato">Entrar em contato</Link>
      </header>
      <nav>
        <ul className={navLinks}> 
            <li className={navLinkItem}>
              <Link to="/administrativo" className={navLinkText}>Administrativo</Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/franqueado" className={navLinkText}>Franqueado</Link>    
            </li>
            <li className={navLinkItem}>
              <Link to="/lojista" className={navLinkText}>Lojista</Link>
            </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout