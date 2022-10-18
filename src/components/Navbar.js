import { Toolbar,  AppBar } from '@mui/material'
import logo from '../assets/icons/main_logo_with_darktext_dphi 1.svg'
export default function Navbar() {
    return (

        <div style={{marginTop: 80}}>
            <AppBar elevation={0} style={{ background: 'white' }} position="fixed">
                <Toolbar>
                    <img src={logo} />
                </Toolbar>
            </AppBar>
        </div>

    )
}
