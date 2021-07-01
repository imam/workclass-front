import { LoadingOutlined } from '@ant-design/icons';
import {Link} from "gatsby"
import * as React from 'react';
import { Col, message, Row, Spin, Typography } from 'antd';
import { getJobs } from '../common/api';
import JobCard from '../components/job-card';
import JobSearch from '../components/job-search'
import { connectHits } from 'react-instantsearch-dom';

const { useEffect, useState } = React;
const { Title } = Typography;

const CustomHits = connectHits(({ hits }) => {
  return <div className="flex flex-wrap justify-center">
    {hits.map(hit => {
		//To convert from unix timestamp to Javascript date
		// We need to multiply the unix number by 1000
		// Refer: https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
		hit.activation_date = hit.activation_date * 1000
		return <div className="m-[10px]"><Link to={`/jobs/${hit.job_id}`}>
			<JobCard job={hit} />
		</Link></div>
      })}
  </div>
})

const IndexPage: React.FC = () => {
	return (
		<Row justify="center" gutter={[20, 20]} className="pb-[70px] mr-0" >
			<JobSearch>
				<CustomHits />
			</JobSearch>	
		</Row>
	);
};

const s: Stylesheet = {
	title: {
		marginTop: 50,
		textAlign: 'center'
	}
};

export default IndexPage;

