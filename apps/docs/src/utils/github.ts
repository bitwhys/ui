export const createGitHubLink = (path = '') => {
  const repo = `bitwhys/ui`
  const branch = 'main'
  return `https://github.com/${repo}/tree/${branch}${path?.replace('/vercel/path0', '')}`
}
