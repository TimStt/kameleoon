import React from "react";
import styles from "./test-card.module.scss";
import { ISiteDTO, ITestDTO } from "../../api/types";

import cls from "classnames";
import { INormilizeDataTests } from "@entities/test/api/normilize-data-tests";

interface ITestCardProps extends INormilizeDataTests {
  renderButtonAction: React.ReactNode;
}

const TestCard: React.FC<ITestCardProps> = ({
  name,
  type,
  status,
  site,
  renderButtonAction,
}) => {
  return (
    <article className={styles.root}>
      <div className={styles.test_name_container}>
        <div
          className={cls(
            styles.test_indicator,
            {
              STOPPED: styles.red_indicator,
              PAUSED: styles.purple_indicator,
              ONLINE: styles.blue_purple_indicator,
              DRAFT: styles.blue_purple_indicator,
            }[status]
          )}
        />
        <h3 className={styles.test_name}>{name}</h3>
      </div>
      <div className={styles.test_details_container}>
        <span className={styles.test_type}>{type}</span>
        <span
          className={cls(
            styles.test_status,
            {
              STOPPED: styles.status_stopped,
              PAUSED: styles.status_paused,
              ONLINE: styles.status_online,
              DRAFT: styles.status_draft,
            }[status]
          )}
        >
          {status}
        </span>
        <span className={styles.test_site}>{site}</span>
        {renderButtonAction}
        {/* <Link className={styles.action_button} to={pathAction.link}>
						{pathAction.text}
					</Link> */}
      </div>
    </article>
  );
};

export default TestCard;
