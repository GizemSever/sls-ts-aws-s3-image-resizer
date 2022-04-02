/**
 * @author Gizem Sever<gizemsever68@gmail.com>
 */

import * as S3 from "aws-sdk/clients/s3";

export type Dimension = {
    w: number,
    h: number
};

export const resizableContentTypes = ['image/jpeg', 'image/png', 'image/tiff', 'image/gif', 'image/webp'];
export const dimension: Dimension = {
    w: 100,
    h: 100
};

export const s3Client = new S3({
    region: process.env.AWS_S3_REGION,
});
