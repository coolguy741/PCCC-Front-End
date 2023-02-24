#!/bin/bash

if [ -f .aws ]
then
  export $(cat .aws | sed 's/#.*//g' | xargs)
else
  echo "No .aws file found. Please provide a valid configuration."
  exit 1
fi

echo "Uploading on development environment!!"

#Check if we are logged in, otherwise start the process
echo "Check if we are logged in, otherwise start the process"
aws sts get-caller-identity --profile $AWS_PROFILE_DEV
if [ $? -ne 0 ]; then
    aws sso login --profile $AWS_PROFILE_DEV
fi

echo "Uploading generic files"
aws s3 sync "$LOCAL_FOLDER" $BUCKET_NAME_DEV --exclude "$EXCLUDED_LOCAL_FOLDERS" --exclude "*.js" --exclude "*.wasm" --exclude "*.bin" --exclude "effects/*" --delete --profile $AWS_PROFILE_DEV
echo "Uploading .js file with specific mime-type"
aws s3 sync "$LOCAL_FOLDER" $BUCKET_NAME_DEV --exclude "$EXCLUDED_LOCAL_FOLDERS" --exclude '*' --include '*.js' --no-guess-mime-type --content-type text/javascript --delete --profile $AWS_PROFILE_DEV
echo "Uploading .wasm file with specific mime-type"
aws s3 sync "$LOCAL_FOLDER" $BUCKET_NAME_DEV --exclude "$EXCLUDED_LOCAL_FOLDERS" --exclude '*' --include '*.wasm' --no-guess-mime-type --content-type application/wasm --delete --profile $AWS_PROFILE_DEV
echo "Uploading .bin file with specific mime-type"
aws s3 sync "$LOCAL_FOLDER" $BUCKET_NAME_DEV --exclude "$EXCLUDED_LOCAL_FOLDERS" --exclude '*' --include '*.bin' --include 'effects/*' --no-guess-mime-type --content-type binary/octet-stream --delete --profile $AWS_PROFILE_DEV

aws cloudfront create-invalidation --distribution-id $CLOUD_FRONT_DISTRIBUTION_DEV --paths "$INVALIDATION_PATHS" --profile $AWS_PROFILE_DEV
