if [ ! -e .env ]; then
    echo -e '\033[91mPlease setup .env file'
    exit 1
fi
source .env
yarn
if [ ! "$(docker ps -q -f name=$DYNAMO_CONTAINER_NAME)" ]; then
    echo -e "\033[93mSetting up environment\033[0m"
    # run container
    docker-compose up -d dynamo
fi
