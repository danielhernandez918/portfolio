import './workStyles.scss';

const Work = () => {

    return (
        <div>
            <h1 id="experience">Work Experience</h1>
            <div class="workBg">
            <div class="work">
                    <div class="location-years">
                        <h1>American X Air </h1>
                        <h2>May 2022- June 2022</h2>
                    </div>
                    <h2 class="locationUnderline">Software Developer - Contract</h2>
                    <ul class="responsiblities">
                        <li>Constructed invoice system allowing the business to easily fill needed information and allow user's to search for past invoices through the use of Java and Java Server Pages (JSP)</li>
                        <li>Created frontend invoice design using CSS</li>
                        <li>Utilized MySQL as a database to store user information and invoice information</li>
                    </ul>
                </div>
                <div class="work">
                    <div class="location-years">
                        <h1>Mikuni American Corporation</h1>
                        <h2>Northrige, CA (Feb 2019-Jan 2022)</h2>
                    </div>
                    <h2 class="locationUnderline">Accountant</h2>
                    <ul class="responsiblities">
                        <li>Responsible for tracking and managing financial data and reporting data to management to make informed business decisions</li>
                        <li>Responsible for creating financial statements to present monthly and quarterly to present to management and auditors</li>
                        <li>Created new excel spreadsheets to hasten certain procedures to increase efficiency and accuracy</li>
                    </ul>
                </div>
                <div class="work">
                    <div class="location-years">
                        <h1>Fundworks</h1>
                        <h2>Sherman Oaks, CA ( Nov 2017 -Jan 2019)</h2>
                    </div>
                    <h2 class="locationUnderline">Underwriter / Credit Analyst</h2>
                    <ul class="responsiblities">
                        <li>Analyze business financials and perform legal research on various businesses to report any potential dangers</li>
                        <li>Work closely with ISO/Brokers and businesses to build long-lasting relationships</li>
                        <li>Provided recommendations to improve credit analysis and underwriting process that were implemented</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Work;