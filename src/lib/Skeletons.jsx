import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Skeletons = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <>
            {arr.map((item, index) => (
                <div className="" key={index}>
                    <Skeleton baseColor='#4e4c4c' height={130} />
                    <Skeleton baseColor='#4e4c4c' className='mt-2' />
                </div>
            ))}
        </>
    )
}

export default Skeletons;