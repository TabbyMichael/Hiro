interface AzureConfig {
    organization: string;
    project: string;
    pat: string;
    apiVersion: string;
    baseUrl: string;
}

export const azureConfig: AzureConfig = {
    organization: import.meta.env.VITE_AZURE_ORGANIZATION || '',
    project: import.meta.env.VITE_AZURE_PROJECT || '',
    pat: import.meta.env.VITE_AZURE_PAT || '', // Personal Access Token
    apiVersion: '7.0',
    baseUrl: 'https://dev.azure.com'
};

export const getAzureHeaders = () => ({
    'Content-Type': 'application/json',
    'Authorization': `Basic ${btoa(`:${azureConfig.pat}`)}`
});
