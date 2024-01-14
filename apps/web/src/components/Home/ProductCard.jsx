import { Card, CardActions, CardContent, CardHeader } from '@mui/material'
import React from 'react'

function ProductCard() {
  return (
    <Card sx={{ maxWidth: 345}}>
        <CardHeader>
            {/* image caraousel */}
        </CardHeader>
        <CardContent>
            {/* description */}
            {/* ratings in stars, count of ratings */}
            {/* current price, MRP: mrp (current discount) */}
        </CardContent>
        <CardActions>

        </CardActions>
    </Card>
  )
}

export default ProductCard