/**
 * @author Gizem Sever<gizemsever68@gmail.com>
 */

import {S3CreateEvent, S3Event, S3Handler} from "aws-lambda";
import {dimension, resizableContentTypes, s3Client} from "@libs/s3";
import * as Jimp from 'jimp';
import * as path from "path";
import {configureAWSClient} from "@libs/aws";


export const objectCreated: S3Handler = async (event: S3Event | S3CreateEvent) => {
    configureAWSClient();
    const createdRecords = event.Records;
    const s3 = s3Client;
    const width = dimension.w;

    for (const record of createdRecords) {
        const key = record.s3.object.key;
        const bucket = record.s3.bucket.name;

        if (!key.includes(`${width}/`)) {
            const object = await s3.getObject({
                Bucket: bucket,
                Key: key
            }).promise();

            if (resizableContentTypes.includes(object.ContentType)) {
                const jimp = await Jimp.read(object.Body as Buffer);
                const buffer = await jimp.resize(width, Jimp.AUTO).getBufferAsync(object.ContentType);

                const originObjectPath = path.parse(key);
                const copiedObjectKey = `${originObjectPath.dir}/${width}/${originObjectPath.base}`;

                await s3.putObject({
                    Body: buffer,
                    Bucket: bucket,
                    Key: copiedObjectKey,
                    ACL: 'public-read',
                    ContentType: object.ContentType
                }).promise();

            }
        }

    }
}
