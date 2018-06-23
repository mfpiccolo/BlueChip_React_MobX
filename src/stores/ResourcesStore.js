import { observable, action } from "mobx";
import { updateResources, updateResource } from "blue-chip";

export default class ResourcesStore {
  @observable
  resources = {
    checklists: [],
    tasks: []
  };
  @observable loading: false;
  @observable error: null;

  @action.bound
  async fetchChecklists() {
    this.loading = true;
    try {
      const response = await fetch("/checklists.json", {
        headers: {
          "content-type": "application/json"
        }
      });
      const payload = await response.json();
      console.log("1", this.resources);
      updateResources(payload, this.resources);

      this.loading = false;
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }
}
