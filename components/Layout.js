import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div>
      <header>
        <Header/>
       
      </header>
      <main>{children}</main>
      <footer><Footer/></footer>
    </div>
  )
}

export default Layout
export function generateMetadata({param}){
    return {
        title:"About"
    }
    
    };