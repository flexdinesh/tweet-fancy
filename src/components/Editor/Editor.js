import React, { Component } from 'react'
import TwitterShare from '@components/TwitterShare'
import styles from './Editor.module.scss'
import { convertMDToUTF } from './mdUtil'

const defaultMDContent = `It's super easy to tweet in **bold** or _italics_. You can even write with ~~strikethrough~~.`
const defaultTextContent = `It's super easy to tweet in 𝗯𝗼𝗹𝗱 or 𝘪𝘵𝘢𝘭𝘪𝘤𝘴. You can even write with s̶t̶r̶i̶k̶e̶t̶h̶r̶o̶u̶g̶h̶.`

class Editor extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mdContent: defaultMDContent,
      htmlContent: defaultTextContent,
      textContent: defaultTextContent,
    }

    this.handleOnTextEdit = this.handleOnTextEdit.bind(this)
  }

  handleOnTextEdit(event) {
    const i = event.target.value
    const { htmlOutput, textOutput } = convertMDToUTF(i)

    if (i) {
      this.setState({
        mdContent: i,
        htmlContent: htmlOutput,
        textContent: textOutput,
      })
    } else {
      this.setState({ mdContent: i, htmlContent: i, textContent: i })
    }
  }

  render() {
    const { mdContent, htmlContent, textContent } = this.state

    return (
      <div className={styles.container}>
        <div className={styles.editorWrapper}>
          <div className={styles.title}>Write here</div>
          <textarea
            className={styles.textArea}
            onChange={this.handleOnTextEdit}
            value={mdContent}
          />
        </div>
        <div className={styles.editorWrapper}>
          <div className={styles.title}>Grab here</div>
          <div
            className={styles.textArea}
            contentEditable
            suppressContentEditableWarning
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
        <div className={styles.twitterWrapper}>
          <TwitterShare tweetText={textContent} />
        </div>
      </div>
    )
  }
}

export default Editor
