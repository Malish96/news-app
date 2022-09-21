import React from 'react';
import { ProForm, ProFormSelect, ProFormText, ProFormTextArea } from '@ant-design/pro-components';
import { Modal, FormInstance } from 'antd';
import './AddNews.less';
import { News } from '@/services/NewsService';
import NewCategoryService from '@/services/NewCategoryService';
import { startCase, toLower } from 'lodash';

interface NewsProps {
  isModalVisible: boolean;
  onCancel: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  saveData: (formData: News) => Promise<boolean | void>;
  formRef: FormInstance;
}

const AddEditorForm: React.FC<NewsProps> = (props) => {
  return (
    <>
      <Modal
        title="Add News"
        className="editor-card"
        open={props.isModalVisible}
        onCancel={props.onCancel}
        footer={null}
      >
        <ProForm className="modal-body" onFinish={props.saveData} form={props.formRef}>
          <ProFormText
            name="Topic"
            width="md"
            label="Topic"
            placeholder="Topic"
            rules={[
              {
                required: true,
                message: 'Please enter Topic',
                whitespace: true,
              },
            ]}
          />
          <ProFormTextArea
            name="Description"
            width="md"
            label="Description"
            placeholder="Description"
            rules={[
              {
                required: true,
                message: 'Please enter Description',
                whitespace: true,
              },
            ]}
          />
          <ProFormSelect
            width="md"
            // options={
            //     getAllNewsCategories..map((element: any) => {
            //     return { value: element.id, label: startCase(toLower(element.name)) };
            //   })
            // }
            name="newsCategory"
            label="News Category"
            rules={[
              {
                required: true,
                message: 'Please select news category',
              },
            ]}
          />
        </ProForm>
      </Modal>
    </>
  );
};

export default AddEditorForm;
