import React from 'react'
import Posting from './posting'

const craigPosts = require('../postings')
                
let postList = craigPosts.postings.map((data, i) => {
  return <Posting data={data} key={i} />
})

function Gallery () {
    return (
        <div className='gallery'>
            <h1>Gallery</h1>
            <div>
                {postList}
            </div>

        </div>
        
    )
}

export default Gallery 