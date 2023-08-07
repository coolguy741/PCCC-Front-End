import { UIPhaseType } from "./UIModuleTypes";

// Init Values
const UIPhaseIndex = 3;

const UIPhases: UIPhaseType[] = ["Loader", "Landing", "SkinTonePicker", "Game"];

const UIPhase: UIPhaseType = UIPhases[UIPhaseIndex];

export { UIPhase, UIPhaseIndex, UIPhases };
