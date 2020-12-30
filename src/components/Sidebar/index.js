
import { ContainerSidebar, ContentSidebar, MenuItem } from './styles'

import { GiExitDoor } from 'react-icons/gi'

function Sidebar() {
    return (
        <>
            <ContainerSidebar>
                <header>
                    <h3>Dashboard</h3>
                </header>
                <ContentSidebar>
                    <MenuItem>Dashboard</MenuItem>
                    <MenuItem>User Profile</MenuItem>
                    <MenuItem>Table List</MenuItem>
                    <MenuItem>Typegraphy</MenuItem>
                    <MenuItem>Icons</MenuItem>
                    <MenuItem>Maps</MenuItem>
                    <MenuItem>Notification</MenuItem>
                    <MenuItem>TRL Support</MenuItem>
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