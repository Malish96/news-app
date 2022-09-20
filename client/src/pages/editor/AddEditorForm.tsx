import React from 'react';
import { PageContainer, ProForm, ProFormText } from '@ant-design/pro-components';
import { Modal, FormInstance } from 'antd';
import './AddEditor.less';
import { Editor } from '@/services/EditorSerivce';

interface EditorModalProps {
  isModalVisible: boolean;
  onCancel: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  saveData: (formData: Editor) => Promise<boolean | void>;
  formRef: FormInstance;
}

const AddEditorForm: React.FC<EditorModalProps> = (props) => {
  return (
    <>
      <Modal
        title="Add Editor"
        className="editor-card"
        open={props.isModalVisible}
        onCancel={props.onCancel}
        footer={null}
      >
        <ProForm className="modal-body" onFinish={props.saveData} form={props.formRef}>
          <ProFormText
            name="name"
            width="sm"
            label="Name"
            placeholder="Name"
            rules={[
              {
                required: true,
                message: 'Please enter Name',
                whitespace: true,
              },
            ]}
          />
          <ProFormText
            name="email"
            width="sm"
            label="Email"
            placeholder="Email"
            rules={[
              {
                required: true,
                message: 'Please enter Email',
                whitespace: true,
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            width="sm"
            label="Password"
            placeholder="••••••••••"
            rules={[
              {
                required: true,
                message: 'Please enter Password',
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
