import React from "react";
import SingleApplication from "../SingleApplication";
import { getSingleApplicationFixture } from "../../__fixtures__/applications.fixture";
import styles from "./Applications.module.css";

interface Application {
  guid: string;
  loan_amount: number;
  first_name: string;
  last_name: string;
  company: string;
  email: string;
  date_created: string;
  expiry_date: string;
}

const Applications = () => {
  const applications = getSingleApplicationFixture;

  return (
    <div className={styles.Applications}>
      <SingleApplication application={applications[0]} />
    </div>
  );
};

export default Applications;
