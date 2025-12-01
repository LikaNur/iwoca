import React from "react";
import styles from "./SingleApplication.module.css";
import { IApplication } from "../Applications/ApplicationsTypes";
import { formatCurrency, formatDate } from "../../utils/format";

interface SingleApplicationProps {
  application: IApplication;
}

const SingleApplication: React.FC<SingleApplicationProps> = ({ application }) => {
  return (
    <div className={styles.SingleApplication}>
      <div className={styles.cell}>
        <sub>Company</sub>
        <span className={styles.dataValue}>{application.company}</span>
      </div>
      <div className={styles.cell}>
        <sub>Name</sub>
        <span className={styles.dataValue}>{application.first_name} {application.last_name}</span>
      </div>
      <div className={styles.cell}>
        <sub>Email</sub>
        <a href={`mailto:${application.email}`} className={styles.email}>
          {application.email}
        </a>
      </div>
      <div className={styles.cell}>
        <sub>Loan Amount</sub>
        <span className={styles.dataValue}>{formatCurrency(application.loan_amount)}</span>
      </div>
      <div className={styles.cell}>
        <sub>Application Date</sub>
        <span className={styles.dataValue}>{formatDate(application.date_created)}</span>
      </div>
      <div className={styles.cell}>
        <sub>Expiry date</sub>
        <span className={styles.dataValue}>{formatDate(application.expiry_date)}</span>
      </div>
    </div>
  );
};

export default SingleApplication;
