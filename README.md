# Project Description

**Take-Home Software Engineer Interview Exercise**

## Context

Automates Sales task of Sending Outreach/Cold, Qualification, lead generation emails

## Instructions for Running the Project

### Initial Setup

1. **Unzip the Package**: Extract the contents of the ZIP file into a folder of your choice.
2. **Setting Up and Running the Main Project**:
   - Navigate to the Main Project Directory.
   - Within the extracted folder navigate to the `SendEmailProject` directory.

### Install Dependencies

1. Open a terminal or command prompt.
2. Ensure you are in the `SendEmailProject` directory within the project folder.
3. Run `npm install` to install the required Node.js dependencies.

### Environment Setup

1. Create a `.env` file in the `SendEmailProject` directory.
2. Add your OpenAI API key to the `.env` file in the following format:
   `OPENAI_API_KEY=your-openAI-API-key`

### Running the Main Project

1. In the terminal run `npm start` to launch the project.

### About Main Project: 

The architecture of the primary project remains largely intact with the following slight modifications:

1. In types.ts, the data type for companySize has been adjusted from number to string to align with the "small", "medium", and "large" designations found in companies.json.
2. A new interface ‘GptParams’ is added in types.ts to define GPT parameters.
3. A new file ‘gptParams.json’ is added to define various combinations for the GPT model and other parameters to do various tests and obtain the best possible result.
4. A new file, utility.ts, has been introduced to house all the internal functions. These functions are invoked across various endpoints (APIs) detailed in index.ts. 
5. A new file, gptPromptBuilder.ts, has been introduced to host the string for the GPT prompts.

### Varying the GPT Model Parameters:

1. In this project, experimenting with different GPT models and parameters is encouraged to achieve optimal outcomes. 
2. To explore new configurations, you can append a fresh set of parameters to gptParams.json. Remember to adjust the corresponding index in utility.ts when invoking openai.chat.completions.create with these new parameters. 
3. Alternatively, you may directly modify the current parameter settings within gptParams.json. 
4. For adjustments to GPT prompts and related content, these can be made in gptPromptBuilder.ts, where they're maintained within a string variable named gptPromptBuilder.
 


### Testing the Project

1. **Navigate to the Test Project Directory**:
   - From the root folder of the extracted contents navigate to the `testProject` directory.
2. **Install Test Dependencies**:
   - Open a new terminal or command prompt window.
   - Ensure you are in the `testProject` directory.
   - Run `npm install` to install the required Node.js dependencies for testing.
3. **Run the Test Script**: Execute `node testscript.js` to run sample tests.
4. Sample automated emails and their relevant contents will be generated and stored in `emails.txt` within the `SendEmailProject` folder.

## About the Test Script (testscript.js)

The test script `testscript.js` located in the `testProject` folder is designed to demonstrate the capabilities of the main project by making API calls to the running server. This script utilizes axios for making HTTP requests and includes several functions to test different aspects of the API:

1. Fetching companies by size and tag.
2. Finding people by various criteria such as first name, company ID, and role, certificates, years of experience, and social media posts.
3. Sending emails based on certain criteria like role, company size, and company tag type.
4. To send emails, `sendEmailsBasedOnCriteria` in the script accepts the below parameters:

```json
{
  "role": "Director of Education",
  "size": "medium",
  "tag": "tech"
}
```
5. The main project then finds all companies matching given size and tag and sends customized emails to all matching people with the given role in the selected companies. 
6. Alternatively, a simple CURL command can be used to test the project. Example:

```shell
curl -X POST http://localhost:3000/api/emails/generate -H "Content-Type: application/json" -d "{\"personRole\": \"Director of Education\", \"companySize\": \"medium\", \"companyTagType\": \"tech\"}"
```

## Observations:

Monitor the command prompt output/logs for additional details regarding the execution and results of your project and tests.

## Updating and Adding More Test Cases:

1. To modify existing tests or add new ones, open the testscript.js file within the testProject directory.
2. Follow the code samples and structure provided in testscript.js to customize or expand the test cases.
