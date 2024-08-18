"use client"
import Script from 'next/script'
import React from 'react'

export default function ClientScripts() {
  return (
    <>
      <Script strategy='beforeInteractive' src="https://unpkg.com/aos@next/dist/aos.js" />
      {/* <Script strategy='beforeInteractive' src="/aos/aos.js" /> */}
      <Script strategy='afterInteractive' src="/script/aos_init.js"></Script>
    </>
  )
}
