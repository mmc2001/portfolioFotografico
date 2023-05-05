import Layout from '../components/layout'

import Head from "next/head"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>{`Portolio - ${'title'}`}</title>
        <meta name="description" content={'description'} />
      </Head>
      <Header />
      <Layout/>
      <Footer/>
    </>
  )
}