"use client"
import Script from 'next/script'
import React from 'react'

export default function ClientScripts() {
  return (
    <>
      <Script src="https://unpkg.com/aos@next/dist/aos.js" />
      <Script src="/script/aos_init.js"></Script>
    </>
  )
}
