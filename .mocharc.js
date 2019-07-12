/**
 * Set environment variables to put pulumi in test mode.
 */
process.env.PULUMI_NODEJS_PROJECT = "test-project";
process.env.PULUMI_NODEJS_STACK = "local";
process.env.PULUMI_TEST_MODE = "true";
