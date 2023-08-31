import React, { useState } from 'react'
import Layout from './components/layout'
import {Helmet} from 'react-helmet'
import NewsCard from './components/NewsCard'
import Counter from './components/Counter'
import A from './components/A'

function HelloWorld(){
    return <h1>Hello World Component</h1>
}

function App() {
    const [count,setCount] = useState(1)
    const increaseClick=()=>setCount(count+1)
  return (
    <Layout>
 
        <Counter count={count} setCount={setCount} increaseClick={increaseClick}/>
        <h5 className='h1 text-primary'>Posts:</h5>
        <A welcome={"I turn coffee into code"} changeText={(props)=>props.welcome="lol"}/>
        <NewsCard HelloComponent={HelloWorld}/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>

    </Layout>
  )
}

export default App