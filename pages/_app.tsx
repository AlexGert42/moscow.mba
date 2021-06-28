import App from 'next/app'
import { useEffect, useState } from 'react'
import TagManager from 'react-gtm-module'
import { DefaultSeo, LogoJsonLd } from 'next-seo'
import SEO from '../seo.config'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Wrapper from '@/components/layout/Wrapper'
import '@/styles/hugeStyles.sass'
import '@/styles/hugeStyles.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { dev, gtmId } from '@/config/index'

import NProgress from 'nprogress'
import Router from 'next/router'
import 'nprogress/nprogress.css'

import Script from 'next/script'

function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    TagManager.initialize({ gtmId, dataLayerName: 'dataLayer' })

    NProgress.configure({
      // minimum: 0.3,
      // easing: 'ease',
      // speed: 800,
      showSpinner: false
    })

    const start = () => {
      NProgress.start()
      setLoading(true)
    }
    const end = () => {
      NProgress.done()
      setLoading(false)
    }
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])

  if (!dev) {
    console.log = function () {}
  }
  let programs = []
  if (pageProps) {
    programs = pageProps.programs
  }

  return (
    <>
      <DefaultSeo {...SEO} />
      <LogoJsonLd
        logo='https://moscow.mba/logo.jpg'
        url='https://moscow.mba/'
      />
      <Script src='/assets/js/vendors/jquery-3.6.0.min.js' />
      <Script src='/assets/js/myjs.js' strategy='lazyOnload' />
      <Wrapper>
        <Header programs={programs} />
        <AnimatePresence>
          <motion.div
            key={router.route}
            initial='initial'
            animate='animate'
            transition={{ ease: 'easeInOut', duration: 0.4 }}
            exit='exit'
            variants={{
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              exit: {
                opacity: 0
              }
            }}>
            <div className='main-content'>
              <Component {...pageProps} />
            </div>
          </motion.div>
        </AnimatePresence>
        <Footer />
      </Wrapper>
    </>
  )
}

export default MyApp
