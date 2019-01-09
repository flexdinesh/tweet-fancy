import React, { Component } from 'react'
import TwitterShare from '@components/TwitterShare'
import styles from './Editor.module.scss'
import { convertMDToUTF } from './mdUtil'

const defaultMDText = `It's super easy to tweet in **bold** or _italics_. You can even write with ~~strikethrough~~.`

class Editor extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mdText: defaultMDText,
      outputText: convertMDToUTF(defaultMDText),
    }

    this.handleOnTextEdit = this.handleOnTextEdit.bind(this)
  }

  handleOnTextEdit(event) {
    const i = event.target.value
    this.setState({ mdText: i, outputText: convertMDToUTF(i) })
  }

  render() {
    const { mdText, outputText } = this.state

    return (
      <div className={styles.container}>
        <div className={styles.editorWrapper}>
          <div className={styles.title}>Write here</div>
          <textarea
            className={styles.textArea}
            onChange={this.handleOnTextEdit}
            value={mdText}
          />
        </div>
        <div className={styles.editorWrapper}>
          <div className={styles.title}>Grab here</div>
          <div
            className={styles.textArea}
            contentEditable
            suppressContentEditableWarning
          >
            {outputText}
          </div>
        </div>
        <div className={styles.twitterWrapper}>
          <TwitterShare tweetText={outputText} />
        </div>
      </div>
    )
  }
}

export default Editor
