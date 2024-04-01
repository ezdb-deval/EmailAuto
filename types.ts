export interface GptParams {
	model: string;
	temperature: number;
	max_tokens: number;
	top_p: number;
	frequency_penalty: number;
	presence_penalty: number;
}

export interface Company {
    id: number;
    name: string;
    description: string;
    tags: string[];
    companySize: string;
    CEO: {
        name: string;
        personId: number | null;
    };
}

export interface Person {
    id: number;
    name: string;
    firstName: string;
    lastName: string;
    jobHistory: {
        companyName: string;
        companyId: number;
        jobTitle: string;
        jobDescription: string;
        startDate: string;
        endDate: string | null;
    }[];
    yearsOfExperience: number;
    certificates: string[];
    socialMediaPosts: {
        title: string;
        content: string;
        date: string;
    }[];
}
