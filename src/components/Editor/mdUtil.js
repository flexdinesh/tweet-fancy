import marked from 'marked'
import { isBrowser } from 'browser-or-node'
import { boldMap } from './text-maps'

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

export const getEmphasizedTextForStr = str => {
  return 'emphasized'
}

export const getStrikethroughTextForStr = str => {
  return 'strikethrough'
}

export const convertMDToUTF = mdInput => {
  let htmlStr = marked(mdInput)
  let doc = getDocument(htmlStr)
  const pTag = doc.querySelector('p')

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

  return pTag.textContent
}
