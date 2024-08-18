import { Header } from '../header/header'
import './dashboard.css'


export const Dashboard = () => {
    return (<>
        <Header />
        <div className="dashboardWrapper">
            <div className="cardList">
                <div className="card">
                    <div className="content">
                        <div className="title">Books taken</div>
                        <div className="count">10</div>
                    </div>
                </div>
            </div>
        </div></>)
}