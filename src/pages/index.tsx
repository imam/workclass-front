import { LoadingOutlined } from '@ant-design/icons';
import {Link} from "gatsby"
import * as React from 'react';
import { Col, message, Row, Spin, Typography } from 'antd';
import { getJobs } from '../common/api';
import JobCard from '../components/job-card';

const { useEffect, useState } = React;
const { Title } = Typography;

const IndexPage: React.FC = () => {
	const [loading, setLoading] = useState(false);
	const [jobs, setJobs] = useState<IDataJob[]>([]);

	useEffect(() => {
		/**
		 * On load, we fetch newest jobs
		 */

		const loadJobs = async () => {
			setLoading(true);
			try {
				const data = await getJobs();
				setJobs(data.jobs);
			} catch {
				// We set the jobs to empty array in the case of failures
				setJobs([]);
				message.error('Failed to load jobs, please try again later');
			} finally {
				setLoading(false);
			}
		};

		loadJobs();
	}, []);

	return (
		<Row justify="center" gutter={[20, 20]} className="pb-[70px] mr-0" >
			<Col span={24}>
				<Title style={s.title} className="text-white">Jobs</Title>
			</Col>

			{loading && (
				<Col span={24}>
					<Row justify="center">
						<Spin indicator={<LoadingOutlined style={{ fontSize: 50 }} />} />
					</Row>
				</Col>
			)}

			{jobs.map(job => (
				<Col key={job.job_id}>
					<Link to={`/jobs/${job.job_id}`}>
						<JobCard job={job} />
					</Link>
				</Col>
			))}
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
