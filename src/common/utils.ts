import _ from 'lodash'

const jobs = {
    job_admin: 'Admin',
    job_customerservice: 'Customer Service',
	job_distributionshipping: 'Distribution Shipping',
    job_grocery: 'Grocery',
    job_hospitalityhotel: 'Hospitality Hotel',
    job_covid19: 'Covid 19',
    job_marketingsales: 'Marketing Sales',
    job_other: 'Other',
    job_production: 'Production',
    job_restaurantfoodservice: 'Restaurant Food Service',
    job_retail: 'Retail',
    job_supplychain: 'Supply Chain',
    job_transportation: 'Transportation',
    job_warehouse: 'Warehouse',
}

const employment_types = {
    employ_fulltime: 'Full time',
    employ_contract: 'Contract',
    employ_parttime: 'Part Time',
    employ_adhoc: 'Ad Hoc',
    employ_internship: 'Internship'
}

export const isBrowser = (): boolean => typeof window !== 'undefined';

export const checkJobType = (job : IDataJob) => {
    let result = null
    _.forEach(jobs, (data, key) => {
        if(job[key]) {
            result = data;
        }
    })
    return result
}

export const checkEmploymentType = (job: IDataJob) => {
    let result = null
    _.forEach(employment_types, (data, key) => {
        if(job[key]) {
            result = data;
        }
    })
    return result
}

