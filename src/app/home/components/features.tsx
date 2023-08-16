const Features = () => {

    type HashMap = {
        [key: string]: any;
    }

    const listOfFeatures: HashMap[] = [];

    const feature1: HashMap = {id: 1, 
        main: "Application Tracking and Organization", 
        sub_features: 
            [
                "Detailed Application Records: Easily input and manage key details such as company name, position, submission date, and application status.", 
                "Effortless Sorting and Filtering: Quickly locate applications based on status, industry, location, and more with intuitive sorting and filtering options.",
                "Robust Search Functionality: Seamlessly search through your application database to find specific opportunities.",
            ],
        image: "Insert image here"}
    const feature2: HashMap = {id: 2, 
        main: "AI-Powered Job Recommendations", 
        sub_features: 
            [
                "Niche Job Discovery: Discover roles you might have overlooked based on your personalized AI analysis.",
                "Time is Money: Save hours on searching for jobs.",
            ], 
        image: "Insert image here"}
    const feature3: HashMap = {id: 3, 
        main: "Deadline Reminders", 
        sub_features: 
        [
            "Notification Integration: Receive email or text notifications to remind you of upcoming deadlines.",
            "Smart Prioritization: Prioritize your applications based on deadlines and other factors.",
        ], 
        image: "Insert image here"}
    const feature4: HashMap = {id: 4, 
        main: "Resource Hub", 
        sub_features: 
        [
            "Learn: Access a curated list of resources to help you learn new skills and grow your career.",
            "Store Documents: Store resumes, cover letters, and references for quick access.", 
        ], 
        image: "Insert image here"}

    listOfFeatures.push(feature1);
    listOfFeatures.push(feature2);
    listOfFeatures.push(feature3);

    const Features = listOfFeatures.map((feature: HashMap) => {
        return (
            <Feature id={feature.id} main={feature.main} sub_features={feature.sub_features} image={feature.image} />
        )
    })

    return (
        <div className="flex flex-col justify-center items-center">
            {Features}
        </div>
    )
}

const Feature = (props: any) => {

    let Subfeatures = props.sub_features.map((sub_feature: any) => {
        return (
            <Subfeature description={sub_feature} />
        )
    })

    if (props.id % 2 == 1) {
        return (
            <div className="w-10/12 grid grid-cols-5 gap-4">
                <div className="flex flex-col my-64 col-span-2">
                    <h1 className="font-bold text-6xl">
                        {props.main}
                    </h1>
                    <div>
                        {Subfeatures}
                    </div>
                </div>
                <div className="flex my-64 justify-center col-span-3">
                    <h1 className="font-bold text-6xl">
                        {props.image}
                    </h1>
                </div>
            </div>
        )
    }
    return (
        <div className="w-10/12 grid grid-cols-5 gap-4">
            <div className="flex my-64 justify-center col-span-3">
                <h1 className="font-bold text-6xl">
                    {props.image}
                </h1>
            </div>
            <div className="flex flex-col my-64 col-span-2">
                <h1 className="font-bold text-6xl">
                    {props.main}
                </h1>
                <div>
                    {Subfeatures}
                </div>
            </div>
        </div>
    );
}

const Subfeature = (props: any) => {
    
    let idx = props.description.indexOf(":");
    let bolded_text = props.description.substring(0, idx + 1);
    let normal_text = props.description.substring(idx + 1);

    return (
        <div className="flex flex-row items-center space-x-5">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m2.707 14.293 5.586-5.586a1 1 0 0 0 0-1.414L2.707 1.707A1 1 0 0 0 1 2.414v11.172a1 1 0 0 0 1.707.707Z"/>
            </svg>
            <p className="text-xl"><strong>{bolded_text}</strong>{normal_text}</p>
        </div>
    )
}

export default Features
