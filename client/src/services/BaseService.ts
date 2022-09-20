import axios, { AxiosInstance } from 'axios';

class BaseService {
  public connection: AxiosInstance;
  private SERVER_URL = 'http://localhost:8081';

  public constructor() {
    this.connection = this.intiConnection();
  }

  private intiConnection = () => {
    return axios.create({
      baseURL: this.SERVER_URL,
    });
  };
}

export default BaseService;
