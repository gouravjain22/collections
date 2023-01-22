import { React } from 'react'
import Cards from './Cards'
import { datasourse } from './Datasourse'

export default function Blog() {
    console.log("hello")
    return (
        <>
            <div className="row">
                {
                    datasourse.flatMap((card) => {
                        return <Cards key={card.id} {...card} />
                    })
                }

            </div>
        </>
    )
}
