if [ ! -e .env ]; then
    echo -e '\e[91mPlease setup .env file'
    exit 1
fi
source .env
yarn
if [ ! "$(docker ps -q -f name=$DYNAMO_CONTAINER_NAME)" ]; then
    echo -e "\e[93mSetting up environment\e[0m"
    # run container
    docker-compose up -d dynamo
fi