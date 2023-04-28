import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import AccordionComponent from '../../components/AccordionComponent';
import { ItemType } from '../../types/itemType';
import './home.scss'

const Home = (): JSX.Element => {

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
            {data?.data.content.items.map((item: ItemType) => (
                <AccordionComponent key={item.id} summary={item.title} details={item.description} id={item.id} />
            ))
            }
        </div>
    )
}

export default Home