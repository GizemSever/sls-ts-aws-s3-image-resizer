import type {AWS} from '@serverless/typescript';

import media from '@functions/media';

type AwsRegion = AWS['provider']['region'];

const serverlessConfiguration: AWS = {
    service: 'sls-ts-aws-s3-image-resizer',
    frameworkVersion: '2',
    custom: {
        webpack: {
            webpackConfig: './webpack.config.js',
            includeModules: true,
        },
    },
    useDotenv: true,
    plugins: [
        'serverless-webpack',
        'dotenv-webpack'
    ],
    provider: {
        name: 'aws',
        runtime: 'nodejs14.x',
        environment: {
            AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
        },
        lambdaHashingVersion: '20201221',
        region: process.env.AWS_S3_REGION as AwsRegion,
        iamRoleStatements: [
            {
                Effect: 'Allow',
                Action: ['s3:ListBucket', 's3:PutObject', 's3:GetObject', 's3:PutObjectAcl'],
                Resource: `arn:aws:s3:::${process.env.AWS_S3_BUCKET}`
            }
        ]
    },
    // import the function via paths
    functions: {
        media
    },
};

module.exports = serverlessConfiguration;
