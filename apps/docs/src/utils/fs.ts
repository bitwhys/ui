import glo from 'glob'
const { glob } = glo
import path from 'path'

export const getComponentPaths = () => {
  console.log(`[DEBUG --- APPS/DOCS] | cwd: ${process.cwd()}`)
  const paths = glob.sync('../../packages/acme-core/src/components/**/*.mdx', {
    cwd: process.cwd(),
    absolute: true,
  })
  console.log(`[DEBUG --- APPS/DOCS] | generated paths: `, paths)
  return paths
}

export const getComponentName = (pathname: string) => {
  const componentName = path.basename(pathname, '.mdx')
  return componentName.replace(path.extname(componentName), '')
}

export const getDocPaths = () => {
  return glob.sync('.src/content/docs/**/*.mdx', {
    cwd: process.cwd(),
    absolute: true,
  })
}

export const getDocName = (pathname: string) => {
  const docName = path.basename(pathname, '.mdx')
  return docName.replace(path.extname(docName), '')
}
