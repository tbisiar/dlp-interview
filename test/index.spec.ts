import * as assert from "assert";
import * as helpers from "./helpers";
import * as infra from "../index";

describe("bucket", () => {
    it("has a prefix of 'univ-colorado-dlp-interview'", async () => {
        const bucket = await helpers.getOutput(infra.bucket.bucket);
        assert.strictEqual(bucket, "univ-colorado-dlp-interview");
    });

    it("has a private acl", async () => {
        const acl = await helpers.getOutput(infra.bucket.acl);
        assert.strictEqual(acl, "private");
    });

    // TODO: FILL ME IN
    // Write a test for Pat's s3 access.
});

describe("secretDocument", () => {
    it("is named financial-report.csv", async () => {
        const key = await helpers.getOutput(infra.secretDocument.key);
        assert.strictEqual(key, "notpublic/financial-report.csv");
    });

    it("has content", async () => {
        const content = await helpers.getOutput(infra.secretDocument.content);
        assert.ok(content);
    });
});

describe("publicDocument", () => {
    it("is named website.html", async () => {
        const key = await helpers.getOutput(infra.publicDocument.key);
        assert.strictEqual(key, "public/website.html");
    });

    it("has content", async () => {
        const content = await helpers.getOutput(infra.publicDocument.content);
        assert.ok(content);
    });
});
