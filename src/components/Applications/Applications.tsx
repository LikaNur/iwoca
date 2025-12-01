import React, { useState, useEffect } from "react";
import SingleApplication from "../SingleApplication";
import styles from "./Applications.module.css";
import { IApplication } from "./ApplicationsTypes";

const Applications = () => {
  const [applications, setApplications] = useState<IApplication[]>([]);

  const fetchApplications = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/applications");
      if (!response.ok) {
        throw new Error(`Failed to fetch applications: ${response.statusText}`);
      }
      const data: IApplication[] = await response.json();
      setApplications(data);
    } catch (err) {
      console.error("Error fetching applications:", err);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <div className={styles.Applications}>
      {applications.map((application) => (
        <SingleApplication key={application.guid} application={application} />
      ))}
    </div>
  );
};

export default Applications;
