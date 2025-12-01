import React, { useState, useEffect } from "react";
import SingleApplication from "../SingleApplication";
import styles from "./Applications.module.css";
import { IApplication } from "./ApplicationsTypes";

const Applications = () => {
  const [applications, setApplications] = useState<IApplication[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const limit = 5;

  const parseLinkHeader = (linkHeader: string | null): { hasNext: boolean } => {
    if (!linkHeader) return { hasNext: false };
    
    const hasNext = /rel=["']next["']/.test(linkHeader);
    return { hasNext };
  };

  const fetchApplications = async (page: number) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `http://localhost:3001/api/applications?_page=${page}&_limit=${limit}`
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch applications: ${response.statusText}`);
      }
      const data: IApplication[] = await response.json();
      const linkHeader = response.headers.get("Link");
      const { hasNext } = parseLinkHeader(linkHeader);
      
      if (page === 1) {
        setApplications(data);
      } else {
        setApplications((prev) => [...prev, ...data]);
      }
      
      setHasMore(hasNext);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications(1);
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
