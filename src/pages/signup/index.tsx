import Header from '@/components/header-before-login/header-before-login'
import Signup from '@/components/signup/signup'
import Footer from '@/components/footer/footer'

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Signup />
        <Footer />
      </main>
    </>
  )
}