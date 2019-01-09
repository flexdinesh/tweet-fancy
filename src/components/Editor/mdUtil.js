import marked from 'marked'
import { isBrowser, isNode } from 'browser-or-node'
import { boldMap, italicsMap, strikethroughMap } from './text-maps'

// let JSDOMref
// if (NODE_ENV === 'test') {
//   import { JSDOM } from 'jsdom'
//   JSDOMref = JSDOM
// }

export const getDocument = htmlStr => {
  if (isBrowser) {
    let parser = new DOMParser()
    let doc = parser.parseFromString(htmlStr, 'text/html')
    return doc
  } else {
    // TODO: figure out an alternative parser for node env
    // const dom = new JSDOMref(htmlStr)
    // return dom.window.document
  }
}

export const getBoldTextForStr = str =>
  str
    .split('')
    .map(s => boldMap[s] || s)
    .join('')

export const getEmphasizedTextForStr = str =>
  str
    .split('')
    .map(s => italicsMap[s] || s)
    .join('')

export const getStrikethroughTextForStr = str =>
  str
    .split('')
    .map(s => strikethroughMap[s] || s)
    .join('')

export const convertMDToUTF = mdInput => {
  if (isNode) {
    return mdInput
  }

  let htmlStr = marked(mdInput)
  let doc = getDocument(htmlStr)
  const allPTags = doc.querySelectorAll('p')

  let textContent = ''
  allPTags.forEach(pTag => {
    const allStrongTags = pTag.querySelectorAll('strong')
    allStrongTags.forEach(element => {
      const textInTag = element.textContent
      element.innerHTML = getBoldTextForStr(textInTag)
    })

    const allEmTags = pTag.querySelectorAll('em')
    allEmTags.forEach(element => {
      const textInTag = element.textContent
      element.innerHTML = getEmphasizedTextForStr(textInTag)
    })

    const allDelTags = pTag.querySelectorAll('del')
    allDelTags.forEach(element => {
      const textInTag = element.textContent
      element.innerHTML = getStrikethroughTextForStr(textInTag)
    })

    // temp fix for not including multiple lines
    // should figure out a way to share multiline tweets
    textContent = textContent + ' ' + pTag.textContent
  })

  return textContent
}
