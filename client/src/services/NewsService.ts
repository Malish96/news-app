import BaseService from './BaseService';

export type News = {
  name: string;
  newsCategory: string;
  topic: string;
  description: string;
};

class NewsSerivce extends BaseService {
  public createNews = async (news: News) => {
    return this.connection.post('/api/add-news', news);
  };

  public getByCategory = async (category: string) => {
    return this.connection.get(`/api/get-by-category/${category}`);
  };

  public getByHeadline = async () => {
    return this.connection.get('/api/get-headlines');
  };

  public getAllNews = async () => {
    return this.connection.get('/api/get-all-news/');
  };

  public deleteNews = async (id) => {
    return this.connection.delete('/api/delete-news/', id);
  };
}

export default NewsSerivce;
