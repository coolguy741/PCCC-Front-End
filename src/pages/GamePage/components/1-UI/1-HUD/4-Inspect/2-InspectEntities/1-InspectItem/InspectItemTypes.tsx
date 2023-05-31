import { RefGroupType } from "../../../../../../shared/Types/RefTypes";

export interface UseInspectItemLogicReturnTypes {
  inspectItemMeshRef: RefGroupType;
}

export type UseInspectItemLogicHookType = () => UseInspectItemLogicReturnTypes;
