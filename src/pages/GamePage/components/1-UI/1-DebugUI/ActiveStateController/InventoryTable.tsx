import { FC, Fragment, memo } from "react";
import {
  InventoryObjectType,
  InventoryValue,
} from "../../../../globalState/modules/InventoryModule/InventoryModuleTypes";

type InventoryTablePropTypes = {
  inventory: InventoryObjectType;
};

const InventoryTable: FC<InventoryTablePropTypes> = memo(({ inventory }) => {
  const renderRows = (obj: InventoryObjectType) => {
    return Object.entries(obj).map(([key, value]) => {
      const nestedValue = value as InventoryValue;
      if (typeof nestedValue === "boolean") {
        return (
          <Fragment key={key}>
            {key}: {nestedValue ? "Yes" : "No"}
            <br />
          </Fragment>
        );
      } else {
        return (
          <Fragment key={key}>
            <u>{key}</u>
            <ul>{renderRows(nestedValue)}</ul>
          </Fragment>
        );
      }
    });
  };

  return <Fragment>{renderRows(inventory)}</Fragment>;
});

export { InventoryTable };
