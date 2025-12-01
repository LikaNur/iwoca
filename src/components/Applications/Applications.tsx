import React, { useState, useEffect } from "react";
import SingleApplication from "../SingleApplication";
import styles from "./Applications.module.css";
import { IApplication } from "./ApplicationsTypes";

const Applications = () => {
  const [applications, setApplications] = useState<IApplication[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchApplications = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:3001/api/applications");
      if (!response.ok) {
        throw new Error(`Failed to fetch applications: ${response.statusText}`);
      }
      const data: IApplication[] = await response.json();
      setApplications(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  if (error && applications.length === 0) {
    return (
      <div className={styles.Applications}>
        <div className={styles.error}>Error: {error}</div>
      </div>
    );
  }

  return (
    <div className={styles.Applications}>
      {isLoading && (
        <div className={styles.loading}>Loading applications...</div>
      )}
      {applications.map((application) => (
        <SingleApplication key={application.guid} application={application} />
      ))}
      {error && applications.length > 0 && (
        <div className={styles.error}>Error loading applications: {error}</div>
      )}
    </div>
  );
};

export default Applications;
