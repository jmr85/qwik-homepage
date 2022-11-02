import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      {"©"} {new Date().getFullYear()} Juan Martin Ruiz. All Rights Reserved.
    </Box>
  )
}

export default Footer
