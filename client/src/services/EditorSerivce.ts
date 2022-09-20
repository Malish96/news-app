import BaseService from './BaseService';

export type Editor = {
  name: string;
  password: string;
  email: string;
};

class EditorSerivce extends BaseService {
  public createEditors = async (editor: Editor) => {
    return this.connection.post('/api/add-editor', editor);
  };

  public validateEditors = async (editor: Editor) => {
    return this.connection.post('/api/validate-editor', {
      email: editor.email,
      password: editor.password,
    });
  };

  public getAllEditors = async () => {
    return this.connection.get('/api/get-all-editors/');
  };
}

export default EditorSerivce;
