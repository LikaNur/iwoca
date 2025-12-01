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
        {application.company}
      </div>
      <div className={styles.cell}>
        <sub>Name</sub>
        {application.first_name} {application.last_name}
      </div>
      <div className={styles.cell}>
        <sub>Email</sub>
        {application.email}
      </div>
      <div className={styles.cell}>
        <sub>Loan Amount</sub>
        {formatCurrency(application.loan_amount)}
      </div>
      <div className={styles.cell}>
        <sub>Application Date</sub>
        {formatDate(application.date_created)}
      </div>
      <div className={styles.cell}>
        <sub>Expiry date</sub>
        {formatDate(application.expiry_date)}
      </div>
    </div>
  );
};

export default SingleApplication;
