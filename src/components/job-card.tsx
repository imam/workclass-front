import * as React from 'react';
import { Card } from 'antd';
import { formatDistance } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { checkEmploymentType, checkJobType } from '../common/utils';

const { memo } = React;

interface IProps {
	job: IDataJob;
}

const JobCard: React.FC<IProps> = memo(props => {
	const { job } = props;

	return (
		<Card hoverable className="w-[327px]" bodyStyle={{padding: '16px', borderRadius: "20px"}}>
			<div className="flex">
				<div className="mr-[16px]">
					<div style={{backgroundImage: `url('${job.logo_url}')`}} className="w-[40px] h-[40px] bg-contain bg-no-repeat bg-center"/>
				</div>
				<div className="text-[14px] w-full">
					<p className="text-[#636363] leading-[18px] text-[19px] font-bold mb-[8px]">{job.title}</p>

					<div className="mb-[24px]">
						<div className="flex">
							<p className="mr-auto flex-1">Employment Type:</p>
							<p className="flex-1 text-right">{checkEmploymentType(job)}</p>
						</div>
						<div className="flex">
							<p className="mr-auto flex-1">Company:</p>
							<p className="flex-1 text-right">{job.company_name}</p>
						</div>
						<div className="flex">
							<p className="mr-auto flex-1">Job Type:</p>
							<p className="flex-1 text-right">{checkJobType(job)}</p>
						</div>
					</div>
					<div className="flex text-[12px]">
						<div className="flex items-center mr-auto flex-1"> 
							<div className="mr-[8px]">
								<FontAwesomeIcon icon={faClock} />
							</div>

							<div>
								Posted {formatDistance(new Date(job.activation_date), new Date())} Ago
							</div>
						</div>
						<div className="flex items-center flex-1"> 
							<div className="mr-[8px]">
								<FontAwesomeIcon icon={faDollarSign} />
							</div>

							<div>
								<div>{job.salary_from} - {job.salary_to}</div> <div>{job.salary_period} (SGD)</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Card>
	);
});

const s: Stylesheet = {
	title: {
		fontWeight: 'bold'
	}
};

export default JobCard;
