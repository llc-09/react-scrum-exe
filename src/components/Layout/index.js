import { Outlet, useLocation } from "react-router-dom"
import Header from "../Header"
import Menu from "../Menu"

function Index() {
    const location = useLocation()
    const showMenu = location.pathname === "/project"
    return (
        <div className="layout">
            <div className="layout-wrap">
                <Header />
            </div>
            <div className="layout-wrap-project">
                {
                    showMenu && <div className="project-menu">
                        <Menu />
                    </div>
                }
                <div className="project-wrap">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
export default Index