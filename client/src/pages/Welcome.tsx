import { PageContainer } from '@ant-design/pro-components';
import { Alert, Card, Col, Row, Typography } from 'antd';
import React from 'react';
import { FormattedMessage, useIntl } from 'umi';
import './Welcome.less';

// const CodePreview: React.FC = ({ children }) => (
//   <pre className={styles.pre}>
//     <code>
//       <Typography.Text copyable>{children}</Typography.Text>
//     </code>
//   </pre>
// );

const Welcome: React.FC = () => {
  const intl = useIntl();

  return (
    <PageContainer>
      <Row className='top-row'>
        <Col span={10} >
          <Card title='Headline & Top Stories' className='card-styles-main'></Card>
        </Col>
        <Col span={10} offset={2}>
          <Card title='Sports News' className='card-styles-main'></Card>
        </Col>
      </Row>
      <Row>
        <Col span={10}>
          <Card title='Tech News' className='card-styles-main'></Card>
        </Col>
        <Col span={10} offset={2}>
          <Card title='Headline & Top Stories' className='card-styles-main'></Card>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Welcome;
