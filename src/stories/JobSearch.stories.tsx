import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Hits, connectHits } from 'react-instantsearch-dom';

import JobSearch from '../components/job-search';
import JobCard from '../components/job-card';

export default {
  title: 'Job/Search',
  component: JobSearch,
  argTypes: {
  },
} as ComponentMeta<typeof JobSearch>;

const CustomHits = connectHits(({ hits }) => {
  return <div className="flex flex-wrap justify-center">
    {hits.map(hit => {
      //To convert from unix timestamp to Javascript date
      // We need to multiply the unix number by 1000
      // Refer: https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
      hit.activation_date = hit.activation_date * 1000
      return <div className="m-[10px]"><JobCard job={hit}/></div>
      })}
  </div>
})

const Template: ComponentStory<typeof JobSearch> = (args) => <div>
  <JobSearch {...args} >
    <CustomHits />
  </JobSearch>
</div>;

export const Primary = Template.bind({});
Primary.args = {
  
};
