import playimg from "../../assets/images/play.png";
import transcript from "../../assets/images/transcript.png";
import { LogsData } from "./LogsData";
import "./logsTable.css";

const getStatusClass = (status) =>
  status === "Completed" ? "badge success" : "badge warning";

const getLeadClass = (stage) => {
  if (stage === "Qualified") return "badge status-qualified";
  if (stage === "Warm") return "badge status-warm";
  if (stage === "Junk") return "badge status-junk";
  return "";
};

export default function LogsTable() {
  return (
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
            {LogsData.map((log, index) => (
              <tr key={index}>
                <td data-label="Client Phone No.">{log.phone}</td>

                <td data-label="Agent Name">{log.agent}</td>

                <td className="datetime">{log.datetime}</td>

                <td data-label="Call Status">
                  <span className={getStatusClass(log.callStatus)}>
                    {log.callStatus}
                  </span>
                </td>

                <td data-label="Script">
                  <a href="#">View Script</a>
                </td>

                <td data-label="Recording/Transcripts" className="icons">
                  <img
                    src={playimg}
                    alt="Play recording"
                    width={20}
                    height={20}
                  />
                  <img
                    src={transcript}
                    alt="View transcript"
                    width={20}
                    height={20}
                  />
                </td>

                <td data-label="Lead Stage">
                  {log.leadStage !== "-" ? (
                    <span className={getLeadClass(log.leadStage)}>
                      {log.leadStage}
                    </span>
                  ) : (
                    "-"
                  )}
                </td>

                <td data-label="Action Item" className="datetime">
                  {log.action}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
