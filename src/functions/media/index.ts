/**
 * @author Gizem Sever<gizemsever68@gmail.com>
 */

import {handlerPath} from '@libs/handlerResolver';


export default {
    handler: `${handlerPath(__dirname)}/handler.objectCreated`,
    events: [
        {
            s3: {
                bucket: process.env.AWS_S3_BUCKET,
                event: 's3:ObjectCreated:*',
                existing: true
            }
        }
    ],
};
