import React from 'react'
import './Row.css'
import Card from './Card'
import request from '../../../../utils/request'

function Row() {
  return (
    <div className='row'>
     <Card title={'Trending now'} fetch={request.trending}/>
     <Card title={'Top Rated'} fetch={request.rated}/>
     <Card title={'Action'} fetch={request.action}/>
     <Card title={'Comedy'} fetch={request.comedy}/>
     <Card title={'Horror'} fetch={request.horror}/>
     <Card title={'Documentaries'} fetch={request.documentaries}/>
    </div>
  )
}

export default Row
