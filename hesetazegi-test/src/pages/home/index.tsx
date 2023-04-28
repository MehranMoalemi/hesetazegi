import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import AccordionComponent from '../../../components/Accordion'

const Home = () => {

    const { isLoading, data } = useQuery('FAQ', () => {
        return axios.get('https://api-dev.hesetazegi.com/FAQ/List')
    },
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false
        }
    )
    console.log(data?.data.content)

    return (
        <div className='homePage'>
            <AccordionComponent summary={data?.data.content.items.title} details={data?.data.content.items.description} id={data?.data.content.items.id} />
        </div>
    )
}

export default Home