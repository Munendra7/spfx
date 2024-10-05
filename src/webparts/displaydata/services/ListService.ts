import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';

export class ListService {
  private spHttpClient: SPHttpClient;
  private webUrl: string;

  constructor(spHttpClient: SPHttpClient, webUrl: string) {
    this.spHttpClient = spHttpClient;
    this.webUrl = webUrl;
  }

  public async getListItems(listName: string): Promise<any[]> {
    const url = `${this.webUrl}/_api/web/lists/getbytitle('${listName}')/items`;
    const response: SPHttpClientResponse = await this.spHttpClient.get(url, SPHttpClient.configurations.v1);
    const data = await response.json();
    return data.value;
  }
}
