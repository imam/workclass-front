import algoliasearch from 'algoliasearch/lite';
import { Pagination, Select } from 'antd';
import * as React from 'react';
import {
    connectPagination,
    connectRefinementList,
    connectSearchBox,
    connectStateResults,
    InstantSearch,
} from 'react-instantsearch-dom';

const { memo } = React;

interface IProps {
	job: IDataJob;
}

const searchClient = algoliasearch(
	process.env.ALGOLIA_APP_ID,
	process.env.ALGOLIA_SEARCH_KEY
);

const CustomSearchBox = connectSearchBox(({ currentRefinement, refine }) => (
	<input
		className="
			border-[12px] 
			border-[#ef5777] 
			py-[12px] 
			px-[20px] 
			w-full 
			rounded-[11px] 
			outline-none 
			text-[20px] 
			text-center
			"
		type="search"
		value={currentRefinement}
		onChange={event => refine(event.currentTarget.value)}
		placeholder="Find Your Dream Job..."
	/>
));

// For pagination, we need to connect to state result
// This P component only a temporary component to use on
// CustomPagination component
const P = connectPagination(({
		currentRefinement,
		nbPages,
		refine,
		createURL,
		nbHits
	}) => {
		return <Pagination 
			current={currentRefinement}  
			pageSize={20} 
			total={nbHits} 
			showSizeChanger={false}
			onChange={page => {
				refine(page);
				//Go to the top of the document every time
				//we click to go to another page
				(window as any).scroll(0,0)
			}}
			 />
	})

const CustomPagination = connectStateResults(({searchResults}) => {
	const nbHits = searchResults ? searchResults.nbHits : 0
	return <P nbHits={nbHits} />
})

const CustomRefinementList = connectRefinementList(({
	items,
	currentRefinement,
	refine,
	isFromSearch,
	searchForItems,
	createURL,
	placeholder,
  }) => {
	const { Option } = Select
	return <Select onChange={value => refine(value)} value={currentRefinement.length > 0 ? currentRefinement[0] : ""} className="md:mx-[5px]">
		<Option value="">{placeholder}</Option>
		{items.map(item => <Option value={item.label}>{item.label} ({item.count})</Option>)}
	</Select>
  })

const JobSearch: React.FC = memo(props => {
	const { Option } = Select
	return (
		<div className="px-[40px]">
			<InstantSearch indexName="Job" searchClient={searchClient}>
				<div className="py-[30px]">
					<CustomSearchBox />
				</div>
				<div>
					<div className="md:flex block justify-center mb-[5px]">
						<CustomRefinementList placeholder="Choose Job Type" attribute="job_type" />
						<CustomRefinementList placeholder="Choose Employment Type" attribute="employment_type" />
					</div>
					{props.children}	
					<div className="flex justify-center mt-5 pb-5">
						<CustomPagination />
					</div>
				</div>
			</InstantSearch>
		</div>
	);
});

const s: Stylesheet = {
	title: {
		fontWeight: 'bold'
	}
};

export default JobSearch;