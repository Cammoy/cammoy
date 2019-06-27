import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      <Navbar />
      <div>{children}</div>

      <div class="col-sm-5">
        <div class="headerPoints">
          <div class="headerPoints__layers">
            Solution Design <span class="bounce-it"> <i class="fa fa-angle-double-down" aria-hidden="true"></i></span>
            <div class="headerPoints__layers__overlay">
              Nascetur a suspendisse aenean commodo tortor congue himenaeos augue hac dis morbi per volutpat.
            </div>
          </div>

          <div class="headerPoints__layers">
            <i class="fa fa-angle-double-down" aria-hidden="true"></i>
            Implementation <span class="bounce-it"> </span>
            <div class="headerPoints__layers__overlay">
              Nascetur a suspendisse aenean commodo tortor congue himenaeos augue hac dis morbi per volutpat.
            </div>
          </div>

          <div class="headerPoints__layers">
            Optimisation <span class="bounce-it"> <i class="fa fa-angle-double-down" aria-hidden="true"></i></span>
            <div class="headerPoints__layers__overlay">
              Nascetur a suspendisse aenean commodo tortor congue himenaeos augue hac dis morbi per volutpat.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
