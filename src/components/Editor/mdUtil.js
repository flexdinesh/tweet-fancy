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
    let htmlStr = marked(mdInput)
    return { htmlOutput: htmlStr, textOutput: mdInput }
  }

  let htmlStr = marked(mdInput)
  let doc = getDocument(htmlStr)

  const allStrongTags = doc.querySelectorAll('strong')
  allStrongTags.forEach(element => {
    const textInTag = element.textContent
    element.innerHTML = getBoldTextForStr(textInTag)
  })

  const allEmTags = doc.querySelectorAll('em')
  allEmTags.forEach(element => {
    const textInTag = element.textContent
    element.innerHTML = getEmphasizedTextForStr(textInTag)
  })

  const allDelTags = doc.querySelectorAll('del')
  allDelTags.forEach(element => {
    const textInTag = element.textContent
    element.innerHTML = getStrikethroughTextForStr(textInTag)
  })

  return {
    htmlOutput: doc.querySelector('body').innerHTML,
    textOutput: doc.querySelector('body').textContent,
  }
}
