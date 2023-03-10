import { PropsWithChildren, useState } from 'react'

type Props = {
  title: string;
  folded?: boolean;
} & PropsWithChildren;

function Summary(props: Props) {
  const { title, folded = false, children } = props;
  return (
    <details className='story' open={!folded}>
      <summary>{title}</summary>
      {children}
    </details>
  )
}

export default Summary;
