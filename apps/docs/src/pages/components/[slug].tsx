import { GetStaticProps } from 'next'
import { useMDXComponent, useLiveReload } from 'next-contentlayer/hooks'

import { components } from '../../components/MDX'

import { allComponents } from 'contentlayer/generated'
import type { Component } from 'contentlayer/generated'
import { Stack } from '@acme/core'
import PageTitle from 'src/components/PageTitle'

export default function Page({ component }: { component: Component }) {
  useLiveReload()
  const Component = useMDXComponent(component.body.code, {
    types: component.types,
  })

  return (
    <article>
      <Stack direction="column" space="16px">
        <PageTitle title={component.title} description={component.description} link={component.sourceLink} />
        <Component components={components} />
        {/*TODO: fixme */}
        {/*<a href={component.docsLink}>Edit this page</a>*/}
        <a href="#">Edit this page</a>
      </Stack>
    </article>
  )
}

export async function getStaticPaths() {
  return {
    paths: allComponents.map(p => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug?.toString() as string
  const component = allComponents.find(c => c.slug === slug)
  return { props: { component } }
}
