import "./logs.css";
import logo from "../images/logo.png";
import searchIcon from "../images/search.png";
import LogsTable from "./LogsTable";   // 👈 import new component

export default function Logs() {
    return (
        <div className="page">
            <div className="logo-container">
                <div className="logo">
                    <img className="logo-img" src={logo} alt="desible.ai logo" width={12.12} height={16.17} />
                    desible.ai
                </div>
            </div>

            {/* header */}
            <div className="header-section">
                <div className="header-title">
                    <h2>Logs</h2>
                </div>
                <div className="actions">
                    <div className="search-wrapper">
                        <img src={searchIcon} alt="search" className="search-icon" />
                        <input type="text" placeholder="Search" />
                    </div>

                    <span className="divider" />
                    <button className="export-btn">Export CSV</button>
                </div>
            </div>

            {/* table component */}
            <LogsTable />
        </div>
    );
}
