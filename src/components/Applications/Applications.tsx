import React from "react";
import SingleApplication from "../SingleApplication";
import { getSingleApplicationFixture } from "../../__fixtures__/applications.fixture";
import styles from "./Applications.module.css";
import { IApplication } from "./ApplicationsTypes";

const Applications = () => {
  const applications: IApplication[] = getSingleApplicationFixture;

  return (
    <div className={styles.Applications}>
      <SingleApplication application={applications[0]} />
    </div>
  );
};

export default Applications;
