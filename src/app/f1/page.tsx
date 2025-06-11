import Link from 'next/link'
import React from 'react'

function F1() {
  return (
    <div>
        <div>F1</div>
        <Link href={"/f3"}>Go to F3</Link>
    </div>
  )
}

export default F1