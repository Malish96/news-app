import NewsSerivce from '@/services/NewsService';
import { PageContainer } from '@ant-design/pro-components';
import { Card, Carousel, Col, Row, Typography } from 'antd';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { Image } from 'antd';
import './Welcome.less';
import { ReactComponent as EditIcon } from '../assets/iceland-poppy-g2e178604c_640.jpg';

type Headline = {
  topic: string;
};

type News = {
  id: number;
  newsCategory: 'tech' | 'sports';
  topic: string;
  description: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
};

const Welcome: React.FC = () => {
  const [headlines, setHeadlines] = useState<Headline[]>([]);
  const [techNews, setTechNews] = useState<News[]>([]);
  const [sportNews, setSportNews] = useState<News[]>([]);

  useEffect(() => {
    getAllheadlines();
    getTechNews();
    getSportNews();
  }, []);

  const getAllheadlines = async () => {
    const news = new NewsSerivce();
    const newsRecords = await news.getByHeadline();
    setHeadlines(newsRecords.data);
  };

  const getTechNews = async () => {
    const news = new NewsSerivce();
    const newsRecords = await news.getByCategory('tech');
    setTechNews(newsRecords.data);
  };

  const getSportNews = async () => {
    const news = new NewsSerivce();
    const newsRecords = await news.getByCategory('sports');
    setSportNews(newsRecords.data);
  };

  const renderHeadlingCarousel = (headlines: Headline[]) => {
    return (
      <Carousel autoplay>
        {_.isEmpty(headlines) ? (
          <></>
        ) : (
          headlines.map((headline: Headline) => {
            return <Typography.Title level={5}>{headline.topic}</Typography.Title>;
          })
        )}
      </Carousel>
    );
  };

  const renderNewsCarousel = (news: News[]) => {
    return (
      <Carousel autoplay>
        {_.isEmpty(news) ? (
          <></>
        ) : (
          news.map((news: News) => {
            return (
              <>
                <Typography.Title level={5}>{news.topic}</Typography.Title>
                <>{news.description}</>
              </>
            );
          })
        )}
      </Carousel>
    );
  };

  const renderGallery = () => {
    return (
      <Carousel autoplay style={{textAlign: 'center'}}>
        <Image  src="https://picsum.photos/800/200?random=1.webp" />
        <Image  src="https://picsum.photos/800/200?random=2.webp" />
        <Image  src="https://picsum.photos/800/200?random=3.webp" />
      </Carousel>
    );
  };

  return (
    <PageContainer>
      <Row className="top-row">
        <Col span={24}>
          <Card title="Headline & Top Stories" className="card-styles-main">
            {renderHeadlingCarousel(headlines)}
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={11}>
          <Card title="Sports News" className="card-styles-main">
            {renderNewsCarousel(sportNews)}
          </Card>
        </Col>
        <Col span={11} offset={2}>
          <Card title="Tech News" className="card-styles-main">
            {renderNewsCarousel(techNews)}
          </Card>
        </Col>
      </Row>
      <Row className="last-row">
        <Col span={24}>
          <Card title="Gallery" className="card-styles-main">
            {renderGallery()}
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Welcome;
