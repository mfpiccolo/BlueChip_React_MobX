import { BaseModel } from "blue-chip";
import Checklist from "./Checklist";

export default class Task extends BaseModel {
  static get belongsTo() {
    return [Checklist];
  }
}
