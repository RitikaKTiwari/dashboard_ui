import "./logs.css";
import playimg from "../images/play.png"
import transcript from "../images/transcript.png"
import logo from "../images/logo.png"

export default function Logs() {
  return (
    <div className="page">
      <div className="logo-container">
        <div className="logo">
          <img src={logo} alt="desible.ai logo" width={25} />
          desible.ai
        </div>
      </div>

      {/* header*/}
      <div className="header-section">
        <div className="header-title">
          <h2>Logs</h2>
        </div>
        <div className="actions">
          <input type="text" placeholder="Search" />
          <button className="export-btn">Export CSV</button>
        </div>
      </div>

      {/* table */}
      <div className="table-container">
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Client Phone No.</th>
                <th>Agent Name</th>
                <th>Date & Time</th>
                <th>Call Status</th>
                <th>Script</th>
                <th>Recording/Transcripts</th>
                <th>Lead Stage</th>
                <th>Action Item</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>+91 4557 256 493</td>
                <td>Devin</td>
                <td>19 Aug, 12:13pm</td>
                <td><span className="badge success">Completed</span></td>
                <td><a href="#">View Script</a></td>
                <td className="icons">
                  <img src={playimg} alt="Play recording" width={20} height={20}/>
                  <img src={transcript} alt="View transcript" width={20} height={20}/>
                </td>
                <td><span className="badge status-qualified">Qualified</span></td>
                <td>-</td>
              </tr>

              <tr>
                <td>+91 4557 256 493</td>
                <td>Devin</td>
                <td>19 Aug, 12:13pm</td>
                <td><span className="badge success">Completed</span></td>
                <td><a href="#">View Script</a></td>
                <td className="icons">
                  <img src={playimg} alt="Play recording" width={20} height={20}/>
                  <img src={transcript} alt="View transcript" width={20} height={20}/>
                </td>
                <td><span className="badge status-junk">Junk</span></td>
                <td>-</td>
              </tr>

              <tr>
                <td>+91 4557 256 493</td>
                <td>Hasan</td>
                <td>19 Aug, 12:13pm</td>
                <td><span className="badge success">Completed</span></td>
                <td><a href="#">View Script</a></td>
                <td className="icons">
                  <img src={playimg} alt="Play recording" width={20} height={20}/>
                  <img src={transcript} alt="View transcript" width={20} height={20}/>
                </td>
                <td><span className="badge status-warm">Warm</span></td>
                <td>Callback on 20 Aug, 12:30</td>
              </tr>

              <tr>
                <td>+91 4557 256 493</td>
                <td>Devin</td>
                <td>19 Aug, 12:13pm</td>
                <td><span className="badge warning">Not Reachable</span></td>
                <td><a href="#">View Script</a></td>
                <td className="icons">
                  <img src={playimg} alt="Play recording" width={20} height={20}/>
                  <img src={transcript} alt="View transcript" width={20} height={20}/>
                </td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>+91 4557 256 493</td>
                <td>Hasan</td>
                <td>19 Aug, 12:13pm</td>
                <td><span className="badge warning">Not Reachable</span></td>
                <td><a href="#">View Script</a></td>
                <td className="icons">
                  <img src={playimg} alt="Play recording" width={20} height={20}/>
                  <img src={transcript} alt="View transcript" width={20} height={20}/>
                </td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>+91 4557 256 493</td>
                <td>Hasan</td>
                <td>19 Aug, 12:13pm</td>
                <td><span className="badge success">Completed</span></td>
                <td><a href="#">View Script</a></td>
                <td className="icons">
                  <img src={playimg} alt="Play recording" width={20} height={20}/>
                  <img src={transcript} alt="View transcript" width={20} height={20}/>
                </td>
                <td><span className="badge status-qualified">Qualified</span></td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}