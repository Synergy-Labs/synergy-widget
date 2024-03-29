import { largeIconCss } from 'icons'
import { PropsWithChildren, ReactElement } from 'react'
import styled from 'styled-components/macro'
import { ThemedText } from 'theme'

import Row from './Row'

const HeaderRow = styled(Row)`
  height: 1.5rem;
  width: 100%;
  ${largeIconCss}
`

export interface HeaderProps {
  title?: ReactElement
}

export default function Header({ title, children }: PropsWithChildren<HeaderProps>) {
  return (
    <HeaderRow iconSize={1.2} flex align="center" justify="space-between" data-testid="header-container">
      {title && (
        <Row gap={0.5} data-testid="header-title">
          <ThemedText.Subhead1>{title}</ThemedText.Subhead1>
        </Row>
      )}
      {children && (
        <Row gap={1} data-testid="header-children">
          {children}
        </Row>
      )}
    </HeaderRow>
  )
}
