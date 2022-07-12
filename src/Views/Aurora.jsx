import '../css/aurora.css'
import night from '../imgs/dark-night.jpeg'
import Select from '../components/Select'

const Aurora = () => {
    return (
        <div className='wrapper'>
            <Select />
            <div className='upper'>
                <div className='shader'>
                    <img src={night} alt='' className='base-image' />
                    <div className='shader-layer specular'>
                        <div className='shader-layer mask'></div>
                    </div>
                </div>
            </div>
            <div className='lower'></div>
        </div>
    )
}

export default Aurora
