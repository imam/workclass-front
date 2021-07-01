import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import JobCard from '../components/job-card';

export default {
  title: 'Job/Card',
  component: JobCard,
  argTypes: {
  },
} as ComponentMeta<typeof JobCard>;

const Template: ComponentStory<typeof JobCard> = (args) => <JobCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  job: {
    "job_id": 1,
    "title": "Class 3 or 4 Delivery Driver / Cargo Hand !",
    "description": "<p>Reliable Delivery of Products. Upkeep cleanliness and maintenance of vehicle. Outstanding Career Growth &amp; Development Opportunities. Nice Working Environment. Passionate, Energetic &amp; Innovative Work Culture.</p>",
    "activation_date": "2021-04-27T08:30:18.865446+00:00",
    "active": true,
    "featured": false,
    "salary_from": 1203,
    "salary_period": "monthly",
    "salary_to": 2001,
    "company_name": "WorkClass",
    "logo_url": "https://workclass-static.s3-ap-southeast-1.amazonaws.com/eV3tV-sTLUB1hmhSpd5EXw/cYCmQ0Is-M1BsxfRSdvMSwb8MMHGH26iyuk4ObGBH1A.png",
    "job_admin": false,
    "job_customerservice": false,
    "job_distributionshipping": false,
    "job_grocery": false,
    "job_hospitalityhotel": false,
    "job_covid19": false,
    "job_marketingsales": false,
    "job_other": false,
    "job_production": false,
    "job_restaurantfoodservice": false,
    "job_retail": false,
    "job_supplychain": false,
    "job_transportation": true,
    "job_warehouse": false,
    "employ_fulltime": true,
    "employ_contract": false,
    "employ_parttime": false,
    "employ_adhoc": false,
    "employ_internship": false
  }
};
