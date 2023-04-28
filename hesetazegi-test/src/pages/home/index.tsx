import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import AccordionComponent from '../../components/AccordionComponent';
import { ItemType } from '../../types/itemType';
import './home.scss'
import {BsShare} from 'react-icons/bs'

const Home = (): JSX.Element => {

    //we can using isloading to show a loader i didnt do this because of lack of time sorry :(
    const { isLoading, data } = useQuery('FAQ', () => {
        return axios.get('https://api-dev.hesetazegi.com/FAQ/List')
    },
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false
        }
    )


    return (

        <div className='home'>
            <div className='header'>
                <h1>سوالات متداول</h1>
                <span>
                    <p><a>صفحه اصلی</a>/<a>سوالات متداول</a></p>
                    <a className='share'><BsShare/></a>
                </span>
            </div>
            <div className='items-grid'>
                {data?.data.content.items.map((item: ItemType, index: number) => (
                    <AccordionComponent key={item.id} summary={item.title} details={item.description} id={item.id} index={index} />
                ))
                }
            </div>
        </div>
    )
}

export default Home