import React, { Component } from 'react'
import TwitterShare from '@components/TwitterShare'
import styles from './Editor.module.scss'
import { convertMDToUTF } from './mdUtil'

const defaultMDContent = `It's super easy to tweet in **bold** or _italics_. You can even write with ~~strikethrough~~.`
// const defaultHtmlContent = `<p>It's super easy to tweet in <strong>𝗯𝗼𝗹𝗱</strong> or <em>𝘪𝘵𝘢𝘭𝘪𝘤𝘴</em>. You can even write with <del>s̶t̶r̶i̶k̶e̶t̶h̶r̶o̶u̶g̶h̶</del>. </p>`
// const defaultTextContent = `It's super easy to tweet in 𝗯𝗼𝗹𝗱 or 𝘪𝘵𝘢𝘭𝘪𝘤𝘴. You can even write with s̶t̶r̶i̶k̶e̶t̶h̶r̶o̶u̶g̶h̶.`

class Editor extends Component {
  constructor(props) {
    super(props)

    const mdContent = defaultMDContent
    const { htmlOutput, textOutput } = convertMDToUTF(mdContent)

    this.state = {
      mdContent,
      htmlContent: htmlOutput,
      textContent: textOutput,
    }

    this.handleOnTextEdit = this.handleOnTextEdit.bind(this)
  }

  componentDidMount() {
    const { mdContent } = this.state
    const { htmlOutput, textOutput } = convertMDToUTF(mdContent)

    this.setState({
      mdContent,
      htmlContent: htmlOutput,
      textContent: textOutput,
    })
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
    console.log({ htmlContent, textContent })
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
            dangerouslySetInnerHTML={{
              __html: { toString: () => htmlContent },
            }}
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
