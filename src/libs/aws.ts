/**
 * @author Gizem Sever<gizemsever68@gmail.com>
 */

import * as AWS from "aws-sdk";

export const configureAWSClient = () => {
    AWS.config.update({
        accessKeyId: process.env.S3_ACCESS,
        secretAccessKey: process.env.S3_SECRET
    });
}
