import React from 'react';
import { ProForm, ProFormText, ProFormTextArea } from '@ant-design/pro-components';
import { Modal, FormInstance } from 'antd';
import './AddNewsCategory.less';
import { NewsCategory } from '@/services/NewCategoryService';

interface NewsCategoryModalProps {
  isModalVisible: boolean;
  onCancel: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  saveData: (formData: NewsCategory) => Promise<boolean | void>;
  formRef: FormInstance;
}

const AddEditorForm: React.FC<NewsCategoryModalProps> = (props) => {
  return (
    <>
      <Modal
        title="Add News Category"
        className="category-card"
        open={props.isModalVisible}
        onCancel={props.onCancel}
        footer={null}
      >
        <ProForm className="modal-body" onFinish={props.saveData} form={props.formRef}>
          <ProFormText
            name="name"
            width="sm"
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
            name="description"
            width="sm"
            label="Description"
            placeholder="Description"
            rules={[
              {
                required: true,
                message: 'Please enter description',
                whitespace: true,
              },
            ]}
          />
        </ProForm>
      </Modal>
    </>
  );
};

export default AddEditorForm;
