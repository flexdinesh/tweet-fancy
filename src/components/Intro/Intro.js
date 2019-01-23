import React from 'react'
import styles from './Intro.module.scss'

/* eslint-disable jsx-a11y/accessible-emoji */
const Intro = () => {
  return (
    <center>
      <div className={styles.firstLine}>
        Ever fancied tweeting with <b>bold</b>, <i>italics</i> or{' '}
        <s>strikethrough</s> text? Now you can! 🚀
      </div>
      <div className={styles.firstLine}>
        Write your text in markdown 📝 and grab your tweet 🎁
      </div>
      {/* <div>Write your text in markdown and grab your tweet.</div> */}
      <div className={styles.syntaxWrapper}>
        <div className={styles.helpSyntax}>
          Use two asterisks for <b>bold</b>. **I am bold.**
        </div>
        <div className={styles.helpSyntax}>
          Use one underscore for <i>italics</i>. _I am italics._
        </div>
        <div className={styles.helpSyntax}>
          Use two tildes to <s>strikethrough</s>. ~~Scratch this.~~
        </div>
      </div>
    </center>
  )
}
/* eslint-enable jsx-a11y/accessible-emoji */

export default Intro
