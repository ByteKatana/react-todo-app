import React, { ReactNode, FC } from 'react'

interface IComposeContext {
  components?: FC<{ children?: ReactNode }>[]
  children?: ReactNode | undefined
}

export const ComposeContext = (props: IComposeContext) => {
  const { components = [], children } = props

  return (
    <>
      {components.reduceRight((acc, Comp: any) => {
        return <Comp>{acc}</Comp>
      }, children)}
    </>
  )
}

export default ComposeContext
