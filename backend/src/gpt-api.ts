export async function fetchGPTResponse(prompt: string): Promise<void> {
    // API endpoint and your API key
    const endpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';
    const apiKey = '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';

    try {
        // Set up headers
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        };

        // Set up data payload
        const data = {
            prompt,
            max_tokens: 150
        };

        // Make the API call
        const response = await fetch(endpoint, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: headers,
        });

        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Extract and log the response
        const responseData: any = await response.json();
        console.log(responseData.choices[0].text.trim());
        return responseData.choices[0].text.trim();
    } catch (error) {
        console.error('Error calling ChatGPT API: ', error);
    }
}

