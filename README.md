
# Serverless - AWS Node.js Typescript S3 Media Trigger and Resizer Lambda  
  
This project triggers your lambda function when any image is uploaded to your AWS S3 bucket. Lambda function resizes the image loaded with Jimp and saves it in a separate directory.  
  
For Deploy, you must install and [configure serverless with lambda](https://www.serverless.com/framework/docs/providers/aws/cli-reference/config-credentials).  
  
For detailed instructions, please refer to the [documentation](https://www.serverless.com/framework/docs/providers/aws/).  
  
## ⚠️ Warning ⚠️
I recommend that the access key and secret key information defined in the .env file are not the same as the credential information you created for serverless integration. Deployment authorization provides access to many AWS features. This lambda function only needs authorization for GetObject, PutObject to bucket set in S3.
  
## Installation/deployment instructions  
  
Depending on your preferred package manager, follow the instructions below to deploy your project.  
  
> **Requirements**: NodeJS `lts/fermium (v.14.15.0)`. If you're using [nvm](https://github.com/nvm-sh/nvm), run `nvm use` to ensure you're using the same Node version in local and in your lambda's runtime.  

### Using NPM  
  
- Run `npm i` to install the project dependencies
- Set your environment variables
- Run `npx sls deploy` to deploy this stack to AWS

