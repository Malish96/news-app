import { PageContainer, ProColumns, ProTable } from '@ant-design/pro-components';
import { Button, Card, Form, Popconfirm, Space, Tooltip } from 'antd';
import _ from 'lodash';
import React, { useState, useRef } from 'react';
import EditorModal from './AddNews';
import type { ActionType } from '@ant-design/pro-table';
import NewsSerivce, { News } from '@/services/NewsService';
import { Link } from 'umi';
import { ReactComponent as EditIcon } from '../../assets/icons/icon-feather-edit.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/icon-feather-delete.svg';

const NewsLists: React.FC = () => {
  const [addModalVisblity, setAddModalVisblity] = useState(false);
  const [addFormRef] = Form.useForm();
  const actionRef = useRef<ActionType>();

  const handleSave = async (values: News) => {
    const news = new NewsSerivce();
    const response = await news.createNews(values);
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

  const getAllNews = async (params = {}, sorter: any, filter: any) => {
    const news = new NewsSerivce();
    const newsRecords = await news.getAllNews();
    if (_.has(newsRecords, 'data.data.data')) {
      return {
        data: newsRecords.data.data.data,
        success: true,
        total: newsRecords.data.total,
      };
    }
    return;
  };

  const columns: ProColumns<News>[] = [
    {
      title: 'Topic',
      dataIndex: 'topic'
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      fixed: 'right',
      render: (_, record) => (
        <Space>
          
            <Tooltip title="Edit">
              <Link to={`/reminder/sms-campaign-plan/${record.key}`}>
                  <span
                    style={
                      {
                        paddingRight: "16px",
                        position: "relative",
                        top: "4px",
                      }}>
                    <EditIcon width={20} height={20} />
                  </span>
              </Link>
            </Tooltip>
          
            <Popconfirm
              placement="topLeft"
              title="Are you sure? you want to delete this SMS campaign plan?"
              // onConfirm={() => onDeleteConfirm(record.id)}
              okText="Yes"
              cancelText="No">
              <Tooltip title="Delete">
                <span
                    style={
                      {
                        paddingRight: "16px",
                        position: "relative",
                        top: "4px",
                      }}>
                    <DeleteIcon width={20} height={20} />
                  </span>
              </Tooltip>
            </Popconfirm>
          
        </Space>
      ),
    },
  ];
  return (
    <>
      <PageContainer
        extra={
          <Button type={'primary'} onClick={() => setAddModalVisblity(true)}>
            + Add News
          </Button>
        }
      >
        <Card title="News List" bordered={false}>
          <ProTable<News>
            columns={columns}
            rowKey="key"
            dateFormatter="string"
            search={false}
            actionRef={actionRef}
            request={getAllNews}
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

export default NewsLists;
