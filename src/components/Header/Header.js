import React from 'react'
import { GitHubIcon } from '@components/Icons'
import styles from './Header.module.scss'

const Header = () => (
  <header className={styles.container}>
    <a
      href="https://github.com/flexdinesh/tweet-fancy"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GitHubIcon />
    </a>
    <h1 className={styles.h1}>tweetfancy.io</h1>
    <div className={styles.sub}>
      <span>Tweet with bold, italics and strikethrough text</span>
    </div>
  </header>
)

export default Header
