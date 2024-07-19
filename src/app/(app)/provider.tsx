'use client'

import LoadingBar from 'react-top-loading-bar'
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useIsTouchDevice } from './hooks/useIsTouchDevice'
import theme from './theme/theme'
import { ScrollProvider } from './hooks/useLenis'

export function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  const [initCursor, setInitCursor] = useState(false)

  const LoadingBarRef: any = useRef(null)

  const pathname = usePathname()

  const videoRef = useRef(null)

  const isTouch = useIsTouchDevice()

  useEffect(() => {
    const timeout = setTimeout(() => {
      setInitCursor(true)
    }, 1000)

    return () => {
      clearTimeout(timeout)
      setInitCursor(false)
    }
  }, [pathname])

  useEffect(() => {
    if (LoadingBarRef.current) {
      LoadingBarRef.current.continuousStart()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    const handleRouteChange = () => {
      if (LoadingBarRef.current) {
        setTimeout(() => {
          LoadingBarRef.current?.complete()
        }, 300)
      }
    }

    handleRouteChange()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <ChakraProvider theme={theme}>
      <LoadingBar ref={LoadingBarRef} height={3} color="#ff98a2" />
      <ScrollProvider>{children}</ScrollProvider>
    </ChakraProvider>
  )
}
