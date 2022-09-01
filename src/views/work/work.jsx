import React from 'react';
import { motion } from 'framer-motion';
import './workStyles.scss';

const Work = () => {

    return (
        <div>
            <h1 id="experience">Work Experience</h1>
            <motion.div
                whileInView={{ opacity: [0, 1]}}
                transition={{ duraction: 0.5 }} >
                <div className="work">
                    <div className="location-years">
                        <h1>American X Air | Software Developer - Contract</h1>
                        <h2>May 2022- June 2022</h2>
                    </div>
                    <ul className="responsiblities">
                        <li>Constructed invoice system allowing the business to easily fill needed information and allow user's to search for past invoices through the use of Java and Java Server Pages (JSP)</li>
                        <li>Created frontend invoice design using CSS and automated invoice data to calculate totals through use of JSP</li>
                        <li>Utilized MySQL as a database to store user information and invoice information</li>
                    </ul>
                </div>
                <div className="work">
                    <div className="location-years">
                        <h1>Mikuni American Corporation | Accountant</h1>
                        <h2>Northrige, CA (Feb 2019-Jan 2022)</h2>
                    </div>
                    <ul className="responsiblities">
                        <li>Provided advisement to management to make informed business decisions by tracking and managing financial data including millions of dollars' worth of monthly transactions</li>
                        <li>Developed new excel spreadsheets to hasten procedures through efficiency and accuracy for internal and yearly audit purposes</li>
                        <li>Created training manual for creating monthly financial reports and quarter financial reports to parent company</li>
                    </ul>
                </div>
                <div className="work">
                    <div className="location-years">
                        <h1>Fundworks | Underwriter/Credit Analyst</h1>
                        <h2>Sherman Oaks, CA ( Nov 2017 -Jan 2019)</h2>
                    </div>
                    <ul className="responsiblities">
                        <li>Analyze business financials and perform legal research on various businesses to report any potential dangers</li>
                        <li>Worked closely with ISO/Brokers and businesses to build long-lasting relationships</li>
                        <li>Provided recommendations to improve credit analysis and underwriting process that were implemented</li>
                    </ul>
                </div>
            </motion.div>
        </div>
    )
}

export default Work;