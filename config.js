module.exports = {
    aws_table_name: $TABLE_NAME,
    aws_local_config: {
      //Provide details for local configuration
    },
    aws_remote_config: {
      accessKeyId: $ACCESS_KEY,
      secretAccessKey: $SECRET_ACCESS_KEY,
      region: $REGION,
    }
};