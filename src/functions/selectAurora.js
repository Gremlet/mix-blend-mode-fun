const onSelectChange = (e) => {
    const selected = e.target.value
    switch (selected) {
        case 'full-effect':
            document.querySelector('.specular').style.visibility = 'visible'
            document.querySelector('.mask').style.visibility = 'visible'
            document.querySelector('.base-image').style.visibility = 'visible'
            break

        case 'specular-only':
            document.querySelector('.specular').style.visibility = 'visible'
            document.querySelector('.mask').style.visibility = 'hidden'
            document.querySelector('.base-image').style.visibility = 'hidden'
            break

        case 'specular-base':
            document.querySelector('.specular').style.visibility = 'visible'
            document.querySelector('.mask').style.visibility = 'hidden'
            document.querySelector('.base-image').style.visibility = 'visible'
            break

        case 'specular-mask':
            document.querySelector('.specular').style.visibility = 'visible'
            document.querySelector('.mask').style.visibility = 'visible'
            document.querySelector('.base-image').style.visibility = 'hidden'
            break

        case 'no-effect':
            document.querySelector('.specular').style.visibility = 'hidden'
            document.querySelector('.mask').style.visibility = 'hidden'
            document.querySelector('.base-image').style.visibility = 'visible'
            break

        case 'mask-only':
            document.querySelector('.specular').style.visibility = 'hidden'
            document.querySelector('.mask').style.visibility = 'visible'
            document.querySelector('.base-image').style.visibility = 'hidden'
            break

        default:
            document.querySelector('.specular').style.visibility = 'visible'
            document.querySelector('.mask').style.visibility = 'visible'
            document.querySelector('.base-image').style.visibility = 'visible'
            break
    }
}

export default onSelectChange
