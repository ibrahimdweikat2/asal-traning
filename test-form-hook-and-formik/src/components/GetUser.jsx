import React from 'react'
import {LOAD_USER} from '../Graphql/Queries';
import {useQuery,gql} from '@apollo/client'
const GetUser = () => {
    const {error,loading,data} =useQuery(LOAD_USER);
    console.log(error,loading,data);
  return (
    <>
    {
        loading && (
            <div>Loading...</div>)
        // ):(
        //     <div>
        //         {
        //             data?.cart?.items?.map(item=>(
        //                 <div>
        //                     {item.name}
        //                 </div>
        //             ))
        //         }
        //     </div>
        // )
    }
    </>
  )
}

export default GetUser