import logo from '@/assets/images/writeGPTLogo.svg'

import { useSelector } from 'react-redux'

// ==============================|| LOGO ||============================== //

const Logo = () => {
    const customization = useSelector((state) => state.customization)

    return (
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
            <img style={{ objectFit: 'contain', height: 50, width: 50 }} src={logo} alt='Flowise' />
        </div>
    )
}

export default Logo
