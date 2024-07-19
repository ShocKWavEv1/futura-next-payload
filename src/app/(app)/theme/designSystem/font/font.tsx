import React from 'react'
import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
        @import url('https://fonts.cdnfonts.com/css/futura-std-4?styles=52567,52574,52570,52565');
    `}
  />
)

export default Fonts
