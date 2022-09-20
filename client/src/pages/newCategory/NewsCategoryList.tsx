import NewCategoryService, { NewsCategory } from '@/services/NewCategoryService';
import { PageContainer, ProColumns, ProTable } from '@ant-design/pro-components';
import { Button, Card, Form } from 'antd';
import _ from 'lodash';
import React, { useState, useRef } from 'react';
import NewCategoryModal from './AddNewsCategories';
import type { ActionType } from '@ant-design/pro-table';

const NewsCategoryLists: React.FC = () => {
  const [addModalVisblity, setAddModalVisblity] = useState(false);
  const [addFormRef] = Form.useForm();
  const actionRef = useRef<ActionType>();

  const handleSave = async (values: NewsCategory) => {
    const editor = new NewCategoryService();
    const response = await editor.addNewsCategory(values);
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

  const getAllNewsCategories = async (params = {}, sorter: any, filter: any) => {
    const newsCategory = new NewCategoryService();
    const newsCategories = await newsCategory.getAllNewsCategory();

    return newsCategories;
  };

  const columns: ProColumns<NewsCategory>[] = [
    {
      title: 'Name',
      dataIndex: 'name',
    }
  ];
  return (
    <>
      <PageContainer
        extra={
          <Button type={'primary'} onClick={() => setAddModalVisblity(true)}>
            + Add Category
          </Button>
        }
      >
        <Card title="News Category List" bordered={false}>
          <ProTable<NewsCategory>
            columns={columns}
            rowKey="key"
            dateFormatter="string"
            search={false}
            actionRef={actionRef}
            request={getAllNewsCategories}
            pagination={false}
          />
        </Card>
        <NewCategoryModal
          formRef={addFormRef}
          isModalVisible={addModalVisblity}
          onCancel={handleCancel}
          saveData={handleSave}
        />
      </PageContainer>
    </>
  );
};

export default NewsCategoryLists;
