import onSelectChange from '../functions/selectAurora'
import '../css/aurora.css'

const Select = () => {
    return (
        <div className='select-container'>
            <select className='select-effect' name='select-effect' onChange={onSelectChange}>
                <option value='full-effect'>Full effect</option>
                <option value='specular-only'>Specular only</option>
                <option value='specular-base'>Specular and base image</option>
                <option value='specular-mask'>Specular and mask</option>
                <option value='mask-only'>Mask only</option>
                <option value='no-effect'>No Effect</option>
            </select>
        </div>
    )
}

export default Select
