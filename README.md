
## Context

Automates Sales task of Sending Outreach/Cold, Qualification, lead generation emails

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
 

