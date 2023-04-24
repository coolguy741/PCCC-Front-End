import { FC, Fragment, memo, useCallback } from "react";
import { InventoryObjectType } from "../../../../globalState/modules/InventoryModule/InventoryModuleTypes";

type InventoryTablePropTypes = {
  inventory: InventoryObjectType;
};

const InventoryTable: FC<InventoryTablePropTypes> = memo(({ inventory }) => {
  const renderRows = useCallback((obj: InventoryObjectType | boolean) => {
    return Object.entries(obj).map(([key, value]) => {
      const nestedValue = value;
      if (typeof nestedValue === "boolean") {
        return (
          <span key={key}>
            {key}: {nestedValue ? "Yes" : "No"}
            <br />
          </span>
        );
      } else {
        return (
          <Fragment key={key}>
            <br />
            <span>
              <u>{key}</u>
              <ul>{renderRows(nestedValue)}</ul>
            </span>
          </Fragment>
        );
      }
    });
  }, []);

  return <Fragment>{renderRows(inventory)}</Fragment>;
});

export { InventoryTable };
