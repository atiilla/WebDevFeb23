import React from 'react'
import Button from './button'

function NewsCard({HelloComponent}) {
    return (
        <div className='row mb-3 pb-3 align-items-start justify-content-center'>
            <div className='col-md-3 pt-2'>
            {HelloComponent? <HelloComponent/>:''}
                <img src={"https://picsum.photos/200/150"} />
            </div>
            <div className='col-md-9'>
                <div className='row'>
                    <p className='lead fw-bold'>Lorem Ipsum is simply dummy text of the printing and typesettin</p>
                </div>
                <div className='row'>
                    <p className='lead'>Published: 01/01/2023 15:00 - <span className='text-primary'>Politics</span></p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.....
                    </p>

                </div>
                <Button color={"dark"} value={"Read More"} />
            </div>
        </div>
    )
}

export default NewsCard