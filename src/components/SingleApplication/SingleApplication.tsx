import React from "react";
import styles from "./SingleApplication.module.css";

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

interface SingleApplicationProps {
  application: Application;
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
        {application.loan_amount}
      </div>
      <div className={styles.cell}>
        <sub>Application Date</sub>
        {application.date_created}
      </div>
      <div className={styles.cell}>
        <sub>Expiry date</sub>
        {application.expiry_date}
      </div>
    </div>
  );
};

export default SingleApplication;
