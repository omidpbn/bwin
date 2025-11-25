import { WebService } from "../../../shared/services/webService";

export class homePageAPI {
  static async getAll() {
    return WebService.get("", ``);
  }
}
