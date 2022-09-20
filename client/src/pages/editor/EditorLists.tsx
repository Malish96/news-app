import EditorSerivce, { Editor } from '@/services/EditorSerivce';
import { PageContainer, ProColumns, ProTable } from '@ant-design/pro-components';
import { Button, Card, Form } from 'antd';
import _ from 'lodash';
import React, { useState, useRef } from 'react';
import EditorModal from './AddEditorForm';
import type { ActionType } from '@ant-design/pro-table';

const EditorLists: React.FC = () => {
  const [addModalVisblity, setAddModalVisblity] = useState(false);
  const [addFormRef] = Form.useForm();
  const actionRef = useRef<ActionType>();

  const handleSave = async (values: Editor) => {
    const editor = new EditorSerivce();
    const response = await editor.createEditors(values);
    if (!_.isEmpty(response)) {
      setAddModalVisblity(false);
      addFormRef.resetFields();
      actionRef.current?.reload();
    }
  };

  const handleCancel = () => {
    setAddModalVisblity(false);
    addFormRef.resetFields();
  };

  const getAllEditors = async (params = {}, sorter: any, filter: any) => {
    const editor = new EditorSerivce();
    const editorRecords = await editor.getAllEditors();
    if (_.has(editorRecords, 'data.data.data')) {
      return {
        data: editorRecords.data.data.data,
        success: true,
        total: editorRecords.data.total,
      };
    }
    return;
  };

  const columns: ProColumns<Editor>[] = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
  ];
  return (
    <>
      <PageContainer
        extra={
          <Button type={'primary'} onClick={() => setAddModalVisblity(true)}>
            + Add Editor
          </Button>
        }
      >
        <Card title="Editors List" bordered={false}>
          <ProTable<Editor>
            columns={columns}
            rowKey="key"
            dateFormatter="string"
            search={false}
            actionRef={actionRef}
            request={getAllEditors}
            pagination={false}
          />
        </Card>
        <EditorModal
          formRef={addFormRef}
          isModalVisible={addModalVisblity}
          onCancel={handleCancel}
          saveData={handleSave}
        />
      </PageContainer>
    </>
  );
};

export default EditorLists;
