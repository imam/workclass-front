import { LoadingOutlined } from '@ant-design/icons';
import * as React from 'react';
import { Col, message, Row, Spin, Typography, Card } from 'antd';
import { getJob } from '../../common/api';
import JobCardFull from '../../components/job-card-full';
import { Link } from 'gatsby';

const { useEffect, useState } = React;
const { Title } = Typography;

const JobPage: React.FC<{params: {id: number}}> = (props) => {
	const [loading, setLoading] = useState(false);
	const [job, setJob] = useState<IDataJob>(null);

	useEffect(() => {
		/**
		 * On load, we fetch newest jobs
		 */

		const loadJobs = async () => {
			setLoading(true);
			try {
				const data = await getJob(props.params.id);
				setJob(data.job);
			} catch {
				message.error('Failed to load job, please try again later');
			} finally {
				setLoading(false);
			}
		};

		loadJobs();
	}, []);

	return (
		<div className="max-w-5xl mx-auto my-[70px] pb-[70px]">
			<div className="max-w-5xl mx-auto">
			{loading && (
				<Col span={24}>
					<Row justify="center">
						<Spin indicator={<LoadingOutlined style={{ fontSize: 50 }} />} />
					</Row>
				</Col>
			)}
			{job && <div>
				<Link to="/"><Card hoverable className="mb-5">Back To Home</Card></Link>
				<Col><JobCardFull job={job}/></Col>
			</div>}
			</div>
		</div>
	);
};

const s: Stylesheet = {
	title: {
		marginTop: 50,
		textAlign: 'center'
	}
};

export default JobPage;
