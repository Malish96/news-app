import BaseService from './BaseService';

export type NewsCategory = {
  name: string;
};

class NewCategoryService extends BaseService {
  public addNewsCategory = async (newsCategory: NewsCategory) => {
    return this.connection.post('/api/add-news-category', newsCategory);
  };

  public getAllNewsCategory = async () => {
    return this.connection.get('/api/get-all-news-category');
  };
}

export default NewCategoryService;
