#!/bin/bash

if [ -f .aws ]
then
  export $(cat .aws | sed 's/#.*//g' | xargs)
else
  echo "No .aws file found. Please provide a valid configuration."
  exit 1
fi

echo 
echo 

# bash formatting: https://misc.flogisoft.com/bash/tip_colors_and_formatting
echo -e "\e[31m\e[43m"
echo 
echo WARNING WARNING WARNING WARNING WARNING WARNING
echo Uploading on PRODUCTION ENVIRONMENT!!
echo WARNING WARNING WARNING WARNING WARNING WARNING
echo -e "\e[0m"

echo 
echo 

echo 'You have 5 seconds to cancel this process if you need to!! (CRTL+C)'

sleep 5


#Check if we are logged in, otherwise start the process
echo "Check if we are logged in, otherwise start the process"
aws sts get-caller-identity --profile $AWS_PROFILE_PROD
if [ $? -ne 0 ]; then
    aws sso login --profile $AWS_PROFILE_PROD
fi

echo "Uploading generic files"
aws s3 sync "$LOCAL_FOLDER" $BUCKET_NAME_PROD --exclude "$EXCLUDED_LOCAL_FOLDERS" --exclude "*.js" --exclude "*.wasm" --exclude "*.bin" --exclude "effects/*" --delete --profile $AWS_PROFILE_PROD
echo "Uploading .js file with specific mime-type"
aws s3 sync "$LOCAL_FOLDER" $BUCKET_NAME_PROD --exclude "$EXCLUDED_LOCAL_FOLDERS" --exclude '*' --include '*.js' --no-guess-mime-type --content-type text/javascript --delete --profile $AWS_PROFILE_PROD
echo "Uploading .wasm file with specific mime-type"
aws s3 sync "$LOCAL_FOLDER" $BUCKET_NAME_PROD --exclude "$EXCLUDED_LOCAL_FOLDERS" --exclude '*' --include '*.wasm' --no-guess-mime-type --content-type application/wasm --delete --profile $AWS_PROFILE_PROD
echo "Uploading .bin file with specific mime-type"
aws s3 sync "$LOCAL_FOLDER" $BUCKET_NAME_PROD --exclude "$EXCLUDED_LOCAL_FOLDERS" --exclude '*' --include '*.bin' --include 'effects/*' --no-guess-mime-type --content-type binary/octet-stream --delete --profile $AWS_PROFILE_PROD


aws cloudfront create-invalidation --distribution-id $CLOUD_FRONT_DISTRIBUTION_PROD --paths "$INVALIDATION_PATHS" --profile $AWS_PROFILE_PROD
aws cloudfront create-invalidation --distribution-id $CLOUD_FRONT_DISTRIBUTION_PROD_FRENCH --paths "$INVALIDATION_PATHS" --profile $AWS_PROFILE_PROD
