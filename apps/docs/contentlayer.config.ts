import { resolve } from 'node:path'
import { defineDocumentType, makeSource, ComputedFields } from 'contentlayer/source-files'
import { rehypeMetaAttribute } from './src/lib/rehype-meta-attribute'
import { getTypes } from './src/utils/getTypes'
import { getComponentName, getComponentPaths, getDocName, getDocPaths } from './src/utils/fs'
import { createGitHubLink } from './src/utils/github'

import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename)

const projectRoot = resolve(__dirname, '..', '..')
const componentPackageSourceRoot = resolve(projectRoot, 'packages', 'acme-core', 'src')
const docsPackageSourceRoot = resolve(projectRoot, 'apps', 'docs', 'src')
const docMarkdownContentPath = resolve(docsPackageSourceRoot, 'content')

console.log(`$[DEBUG - CONTENT LAYER] | dir: {${__dirname}`)
const getSlug = (sourceFileName: string) => {
  console.log(sourceFileName)
  return sourceFileName.replace(/\.mdx$/, '').replace(/\.docs$/, '')
}
const getPathName = (slug: string) => getComponentPaths().find(x => getComponentName(x) === slug) as string

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: doc => getSlug(doc._raw.sourceFileName).toLowerCase(),
  },
  types: {
    type: 'json',
    resolve: doc => {
      const slug = getSlug(doc._raw.sourceFileName)
      const pathname = getPathName(slug)
      const componentPathname = pathname?.replace('docs.mdx', 'tsx')
      return getTypes(componentPathname)[slug]
    },
  },
  docsLink: {
    type: 'string',
    resolve: doc => {
      const slug = getSlug(doc._raw.sourceFileName)
      const pathname = getPathName(slug)
      return createGitHubLink(pathname.replace(/^\/.*design-system/i, ''))
    },
  },
  sourceLink: {
    type: 'string',
    resolve: doc => {
      const slug = getSlug(doc._raw.sourceFileName)
      const pathname = getPathName(slug)
      const componentPathname = pathname?.replace('docs.mdx', 'tsx')
      return createGitHubLink(componentPathname.replace(/^\/.*design-system/i, ''))
    },
  },
}

export const Component = defineDocumentType(() => ({
  name: 'Component',
  filePathPattern: `packages/acme-core/src/components/**/*.docs.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
  },
  computedFields,
}))

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `apps/docs/src/content/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    category: { type: 'string', required: true },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: doc => getSlug(doc._raw.sourceFileName).toLowerCase(),
    },
    // docsLink: {
    //   type: 'string',
    //   resolve: doc => {
    //     const slug = getSlug(doc._raw.sourceFileName)
    //     const pathname = getDocPaths().find(x => getDocName(x) === slug) as string
    //     return createGitHubLink(pathname.replace(/^\/.*design-system/i, ''))
    //   },
    // },
  },
}))

export default makeSource({
  contentDirPath: '../../',
  contentDirInclude: ['apps/docs/src/content', 'packages/acme-core/src/components'],
  documentTypes: [Component, Doc],
  mdx: {
    rehypePlugins: [rehypeMetaAttribute],
  },
  onSuccess: async importData => {
    const { allDocuments } = await importData()
    console.log('allDocuments', allDocuments.length)
  },
})
