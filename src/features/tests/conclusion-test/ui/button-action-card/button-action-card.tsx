import React from "react";
import { Link } from "react-router-dom";

import { TStatusTests, ITestDTO, EPathTests } from "@entities/test/api";
import { PATH_DYNAMIC_TEST } from "@shared/constans/paths";
import { UIButton } from "@shared/ui/ui-button";

const ButtonActionCard = ({
  id,
  status,
}: {
  id: number;
  status: TStatusTests;
}) => {
  const path = PATH_DYNAMIC_TEST(id);

  const ACTION_PATH = EPathTests[status];
  const text = ACTION_PATH.charAt(0).toUpperCase() + ACTION_PATH.slice(1);
  return (
    <UIButton
      accent={
        EPathTests[status] === EPathTests.DRAFT ? "complete_accent" : undefined
      }
      to={path[ACTION_PATH]}
      as={"link"}
      style={{ width: "95px" }}
    >
      {text}
    </UIButton>
  );
};

export default ButtonActionCard;
