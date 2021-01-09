
import { ContainerSidebar, ContentSidebar, MenuItem } from './styles'

import { GiExitDoor } from 'react-icons/gi'

import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <>
            <ContainerSidebar>
                <header>
                    <h3>Dashboard</h3>
                </header>
                <ContentSidebar>
                    <Link to="/dashboard/home">
                        <MenuItem>Dashboard</MenuItem>
                    </Link>
                    {/* <MenuItem>User Profile</MenuItem>
                    <MenuItem>Table List</MenuItem>
                    <MenuItem>Typegraphy</MenuItem>
                    <MenuItem>Icons</MenuItem>
                    <MenuItem>Maps</MenuItem>
                    <MenuItem>Notification</MenuItem>
                    <MenuItem>TRL Support</MenuItem> */}
                </ContentSidebar>
                <footer>
                    <button>
                        <GiExitDoor size="16" color="#FFFFFF" />
                        Deslogar-se
                    </button>
                </footer>
            </ContainerSidebar>
        </>
    )
}

export default Sidebar