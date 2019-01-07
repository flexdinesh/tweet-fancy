import React from 'react'
import PropTypes from 'prop-types'
import Header from '@components/Header'
import Footer from '@components/Footer'
import '@styles/base.scss'
import styles from './Layout.module.scss'

const Layout = ({ children }) => (
  <div className={styles.pageWrapper}>
    <Header />
    <div className={styles.contentContainer}>{children}</div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
