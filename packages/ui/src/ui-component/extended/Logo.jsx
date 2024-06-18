import logo from '@/assets/images/writegpt.png'

import { useSelector } from 'react-redux'

// ==============================|| LOGO ||============================== //

const Logo = () => {
    const customization = useSelector((state) => state.customization)

    return (
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
            <img style={{ objectFit: 'contain', height: 'auto', width: 150 }} src={logo} alt='Flowise' />
        </div>
    )
}

export default Logo
