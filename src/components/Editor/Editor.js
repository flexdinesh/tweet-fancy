import React, { Component } from 'react'
import TwitterShare from '@components/TwitterShare'
import styles from './Editor.module.scss'
import { convertMDToUTF } from './mdUtil'

const defaultMDText = `It's super easy to tweet in **bold** or _italics_. You can even write with ~~strikethrough~~.`
const defaultOutputText = `It's super easy to tweet in 𝗯𝗼𝗹𝗱 or 𝘪𝘵𝘢𝘭𝘪𝘤𝘴. You can even write with s̶t̶r̶i̶k̶e̶t̶h̶r̶o̶u̶g̶h̶.`

class Editor extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mdText: defaultMDText,
      outputText: defaultOutputText,
    }

    this.handleOnTextEdit = this.handleOnTextEdit.bind(this)
  }

  handleOnTextEdit(event) {
    const i = event.target.value
    if (i) {
      this.setState({ mdText: i, outputText: convertMDToUTF(i) })
    } else {
      this.setState({ mdText: i, outputText: i })
    }
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
